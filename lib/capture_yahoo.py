import yfinance as yf
import pandas as pd
import datetime

import yfinance as yf
import pandas as pd
from pandas_datareader import data as PDReader

def capture_data(target_stock, isTW=True):
    yf.pdr_override() #以pandasreader常用的格式覆寫

    # 股票代號變數
    if isTW:
        target_stock = target_stock + '.TW' 

    now = datetime.datetime.now() 
    start_date = datetime.datetime(now.year - 1, now.month, 1)
    end_date = datetime.datetime(now.year, now.month, now.day) #設定資料起訖日期

    df = PDReader.get_data_yahoo([target_stock], start_date, end_date) #將資料放到Dataframe裡面
    csv_data = df.to_csv()
    csv_data_list = csv_data.split('\n')

    result = {
    "Title":
        ["日期","股票代號","開盤價", "最高價", "最低價", "收盤價","成交量"],
    "Data":[] }

    for x in range(1, len(csv_data_list)):
        items = csv_data_list[x].split(',')
        
        if len(items) == 7:
            temp_list = []
            for i in range(7):
                temp = ""
                if i == 0:
                    temp = items[i].replace("-","")
                else:
                    temp = str(round(float(items[i]), 2))

                temp_list.append(temp)
            result["Data"].append(temp_list)
    
    return result
    