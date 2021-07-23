#!/usr/bin/python3
# export FLASK_ENV=development
# flask run

from flask import request
import lib.four_point as StockUtil
import lib.capture_yahoo as Capture

STOCK_TYPE_KEY = "STOCK-TYPE"

# @app.route("/stock/capture/<string:target_stock>", methods=["GET"])
def capture_data(target_stock):
    if STOCK_TYPE_KEY in request.headers:
        target_stock = target_stock + request.headers[STOCK_TYPE_KEY]

    return Capture.capture_data(target_stock)


# @app.route("/stock/four_point/<string:target_stock>", methods=["GET"])
def check_four_point(target_stock):
    if STOCK_TYPE_KEY in request.headers:
        target_stock = target_stock + request.headers[STOCK_TYPE_KEY]

    return StockUtil.check_four_point(target_stock)
