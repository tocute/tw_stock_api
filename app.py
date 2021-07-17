#!/usr/bin/python3
# export FLASK_ENV=development
# flask run

from flask import Flask
from flask import send_file


app = Flask(__name__)

@app.route('/')
@app.route('/index.html')
def index():
    return send_file('./static/index.html')

if __name__ == '__main__':
    app.run(debug=True)
