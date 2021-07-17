import yfinance as yf
import pandas as pd
from pandas_datareader import data
from datetime import datetime

def capture_data(target_stock):
    yf.pdr_override() #以pandasreader常用的格式覆寫

    target_stock = target_stock + '.TW'  #股票代號變數

    start_date = datetime(2021, 1, 1)
    end_date = datetime(2021, 6, 30) #設定資料起訖日期

    df = data.get_data_yahoo([target_stock], start_date, end_date) #將資料放到Dataframe裡面
    # filename = f'./data/{target_stock}.json' #以股票名稱命名檔案，放在data資料夾下面
    # df.to_json(filename) #將df轉成CSV保存
    return df.to_json()

    