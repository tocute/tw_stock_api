import lib.capture_yahoo as capture_yahoo
import lib.four_point as four_point

from yistock.stock import Stock

# a = capture_yahoo.capture_data("2330" + '.TW')
# print(a["Data"])

f = four_point.check_four_point("2330" + '.TW')
print(f)

s = Stock("2330" + '.TW')
print(s)

ma3 = s.moving_average(s.price, 3)
ma6 = s.moving_average(s.price, 6)
bias = s.ma_bias_ratio(3, 6)
print(ma3)
print(ma6)
print(bias)
