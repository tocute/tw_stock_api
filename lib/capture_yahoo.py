from yistock.stock import Stock
import datetime


def capture_data(target_stock, isTW=True):
    stock = Stock(target_stock)
    today = datetime.datetime.today()
    before = today - datetime.timedelta(days=180)
    raw_data = stock.fetch_from(before.year, before.month)
    
    result = {
        "Title":
            ["日期", "開盤價", "最高價", "最低價", "收盤價", "調整收盤價", "成交量"],
        "Data":[] }

    for items in raw_data:
        temp = [0,0,0,0,0,0,0]
        date_temp = datetime.datetime.strptime(items.date, '%Y/%m/%d')
        temp[0] = date_temp.strftime('%Y%m%d')
        temp[1] = str(items.open)
        temp[2] = str(items.high)
        temp[3] = str(items.low)
        temp[4] = str(items.close)
        temp[5] = str(0)
        temp[6] = str(items.capacity)

        result["Data"].append(temp)
    return result
