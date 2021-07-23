# -*- coding: utf-8 -*-

import datetime
import urllib.parse
from collections import namedtuple
import yfinance as yf
from calendar import monthrange

try:
    from json.decoder import JSONDecodeError
except ImportError:
    JSONDecodeError = ValueError

import requests

try:
    from . import analytics
    from .codes import codes
except ImportError as e:
    if e.name == 'lxml':
        # Fix #69
        raise e
    import analytics
    from codes import codes


DATATUPLE = namedtuple('Data', ['date', 'capacity', 'turnover', 'open',
                                'high', 'low', 'close', 'change', 'transaction'])


class BaseFetcher(object):
    def fetch(self, year, month, sid, retry):
        pass

    def _convert_date(self, date):
        """Convert '106/05/01' to '2017/05/01'"""
        return '/'.join([str(int(date.split('/')[0]) + 1911)] + date.split('/')[1:])

    def _make_datatuple(self, data):
        pass

    def purify(self, original_data):
        pass


# Using the Public API (without authentication), 
# you are limited to 2,000 requests per hour per IP 
# (or up to a total of 48,000 requests a day)
# https://aroussi.com/post/python-yahoo-finance
class YahooFetcher(BaseFetcher):
    # 取得各種資料
    # stock.info # 取得公司資料
    # stock.financials # 取得損益表
    # stock.balance_sheet # 取得資產負債表
    # stock.cashflow # 取得現金流量表
    # stock.history # 取得價量資料＋股利發放資料＋股票分割資料
    def __init__(self):
        pass

    def fetch(self, year: int, month: int, sid: str, retry: int=5):
        month_range = monthrange(year, month)

        # 股票代號變數
        stock = yf.Ticker(sid)  
        start_date = "%d-%02d-01" % (year, month)
        end_date = "%d-%02d-%02d" % (year, month, month_range[1])

        df = stock.history(start=start_date, end=end_date)

        # Date,Open,High,Low,Close,Volume,Dividends,Stock Splits
        csv_data = df.to_csv()
        csv_data_list = csv_data.split('\n')
        data = {'stat': 'ok', 'aaData': csv_data_list[1:]}

        data['data'] = self.purify(data)
        return data

    def _make_datatuple(self, data):
        temp = [0,0,0,0,0,0,0,0,0]
        items = data.split(',')

        temp[0] = items[0].replace("-", "/") # 'date'
        temp[1] = int(items[5]) # 'capacity'
        temp[2] = int(0) # 'turnover'
        temp[3] = round(float(items[1]), 2) # 'open',
        temp[4] = round(float(items[2]), 2) # 'high'
        temp[5] = round(float(items[3]), 2) # 'low'
        temp[6] = round(float(items[4]), 2) # 'close'
        # +/-/X表示漲/跌/不比價
        temp[7] = float(0.0)   #'change'
        temp[8] = int(0)  # 'transaction'
        return DATATUPLE(*temp)

    def purify(self, original_data):
        return [self._make_datatuple(d) for d in original_data['aaData'] if len(d) > 0 ]


class Stock(analytics.Analytics):

    def __init__(self, sid: str, initial_fetch: bool=True):
        self.sid = sid
        # self.fetcher = TWSEFetcher(
        # ) if codes[sid].market == '上市' else TPEXFetcher()
        self.fetcher = YahooFetcher()
        self.raw_data = []
        self.data = []

        # Init data
        if initial_fetch:
            self.fetch_31()

    def _month_year_iter(self, start_month, start_year, end_month, end_year):
        ym_start = 12 * start_year + start_month - 1
        ym_end = 12 * end_year + end_month
        for ym in range(ym_start, ym_end):
            y, m = divmod(ym, 12)
            yield y, m + 1

    def fetch(self, year: int, month: int):
        """Fetch year month data"""
        self.raw_data = [self.fetcher.fetch(year, month, self.sid)]
        self.data = self.raw_data[0]['data']
        return self.data

    def fetch_from(self, year: int, month: int):
        """Fetch data from year, month to current year month data"""
        self.raw_data = []
        self.data = []
        today = datetime.datetime.today()
        for year, month in self._month_year_iter(month, year, today.month, today.year):
            self.raw_data.append(self.fetcher.fetch(year, month, self.sid))
            self.data.extend(self.raw_data[-1]['data'])

        return self.data

    def fetch_31(self):
        """Fetch 31 days data"""
        today = datetime.datetime.today()
        before = today - datetime.timedelta(days=60)
        self.fetch_from(before.year, before.month)
        self.data = self.data[-31:]
        return self.data

    @property
    def date(self):
        return [d.date for d in self.data]

    @property
    def capacity(self):
        return [d.capacity for d in self.data]

    @property
    def turnover(self):
        return [d.turnover for d in self.data]

    @property
    def price(self):
        return [d.close for d in self.data]

    @property
    def high(self):
        return [d.high for d in self.data]

    @property
    def low(self):
        return [d.low for d in self.data]

    @property
    def open(self):
        return [d.open for d in self.data]

    @property
    def close(self):
        return [d.close for d in self.data]

    @property
    def change(self):
        return [d.change for d in self.data]

    @property
    def transaction(self):
        return [d.transaction for d in self.data]
