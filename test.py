import lib.capture_yahoo as capture_yahoo
import lib.four_point as four_point

from twstock.stock import Stock

# a = capture_yahoo.capture_data("2330")
f = four_point.check_four_point("2330")
print(f)
s = Stock("2330")

a1 = s.moving_average(s.price, 3)
a2 = s.moving_average(s.price, 6)
b = s.ma_bias_ratio(3, 6)
print(a1)
print(a2)
print(b)
