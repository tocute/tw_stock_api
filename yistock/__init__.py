"""Taiwan Stock Opendata with realtime - yistock"""

from yistock import stock
from yistock import analytics
from yistock import cli
from yistock import mock
from yistock import realtime

from yistock.analytics import BestFourPoint
from yistock.codes import __update_codes, twse, tpex, codes
from yistock.stock import Stock


__version__ = '2.0.0'
