from yistock.analytics import BestFourPoint
from yistock.stock import Stock
import pandas as pd
import time
# 導入yistock及pandas模組，pandas模組縮寫為pd

# target_stock = '0050'  #股票代號變數
def check_four_point(target_stock):
    time.sleep(5)
    stock = Stock(target_stock)  #告訴yistock我們要查詢的股票
    fourPoint = BestFourPoint(stock)

    buy = fourPoint.best_four_point_to_buy() # 判斷是否為四大買點
    sell = fourPoint.best_four_point_to_sell() # 判斷是否為四大賣點
    return {"buy": buy, "sell": sell}
