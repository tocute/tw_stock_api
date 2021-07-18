#!/usr/bin/python3
# export FLASK_ENV=development
# flask run

import lib.four_point as StockUtil
import lib.capture_yahoo as Capture


# @app.route("/stock/capture/<string:target_stock>", methods=["GET"])
def capture_data(target_stock):
    return Capture.capture_data(target_stock)


# @app.route("/stock/four_point/<string:target_stock>", methods=["GET"])
def check_four_point(target_stock):
    return StockUtil.check_four_point(target_stock)
