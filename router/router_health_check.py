#!/usr/bin/python3
# export FLASK_ENV=development
# flask run

import time
import datetime
import glob
import os
import shutil
import requests


# @app.route('/health_check/run', methods=['GET'])
def health_check():
    # python3 -m pytest -s tests/test_pid.py --html=./build/report.html --env qa
    try:
        pass
    except Exception as e:
        return str(e), requests.codes.internal_server_error
    return {"result_path": "../static/"}

