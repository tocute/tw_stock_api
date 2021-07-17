from flask import *
from datetime import datetime


app = Flask(__name__)


@app.route('/')
@app.route('/index')
def index():
    data = "Deploying a Flask App To Heroku"
    return render_template('index.html')


if __name__ == '__main__':
    app.run(debug=True)
