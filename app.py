#!/usr/bin/python3
# export FLASK_ENV=development
# flask run

from flask import Flask
from flask import send_file
import router.router_health_check as RouterHC


app = Flask(__name__)

app.add_url_rule('/health_check/run', view_func=RouterHC.health_check, methods=['GET'])

@app.route('/')
@app.route('/index.html')
def index():
    return send_file('./static/index.html')


# if __name__ == '__main__':
    # app.run(host='127.0.0.1', debug=True)
    # app.run(host='0.0.0.0', debug=True)
