#!/usr/bin/python3
# export FLASK_ENV=development
# pipenv run flask run

from flask import Flask
from flask import send_file

import router.router_query_stock as RouterStock

app = Flask(__name__)
app.add_url_rule('/stock/capture/<string:target_stock>', view_func=RouterStock.capture_data, methods=['GET'])
app.add_url_rule('/stock/four_point/<string:target_stock>', view_func=RouterStock.check_four_point, methods=['GET'])


@app.route("/")
@app.route("/index.html")
def index():
    return send_file("./static/index.html")


if __name__ == "__main__":
    app.run(debug=True)
