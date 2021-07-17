import twstock
import pandas as pd
# 導入twstock及pandas模組，pandas模組縮寫為pd

target_stock = '0050'  #股票代號變數
stock = twstock.Stock(target_stock)  #告訴twstock我們要查詢的股票
# target_price = stock.fetch_from(2020, 5)  #取用2020/05至今每天的交易資料

# name_attribute = [
#     'Date', 'Capacity', 'Turnover', 'Open', 'High', 'Low', 'Close', 'Change',
#     'Trascation'
# ]  #幫收集到的資料設定表頭

# df = pd.DataFrame(columns=name_attribute, data=target_price)
# #將twstock抓到的清單轉成Data Frame格式的資料表

# filename = f'./data/{target_stock}.csv'
# #指定Data Frame轉存csv檔案的檔名與路徑

# df.to_csv(filename)
# #將Data Frame轉存為csv檔案

fourPoint = twstock.BestFourPoint(stock)

buy = fourPoint.best_four_point_to_buy() # 判斷是否為四大買點
sell = fourPoint.best_four_point_to_sell() # 判斷是否為四大賣點
total = fourPoint.best_four_point() # 指標綜合判斷

print(buy)
print(sell)
print(total)

print(stock.price[-5:])
print(stock.high[-5:])

stock_real = twstock.realtime.get('6462')
print(stock_real)