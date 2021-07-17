#!/usr/bin/python3
# export FLASK_ENV=development
# flask run

from flask import Flask
from flask import send_file
import lib.four_point as StockUtil

app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index():
    return send_file('./static/index.html')


@app.route('/stock/four_point/<string:target_stock>', methods=['GET'])
def check_four_point(target_stock):
    return StockUtil.check_four_point(target_stock)


if __name__ == '__main__':
    app.run(debug=True)
