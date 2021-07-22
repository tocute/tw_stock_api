# -*- coding: utf-8 -*-

import yistock


def run(argv):
    for sid in argv:
        s = yistock.Stock(sid)
        print('-------------- %s ---------------- ' % sid)
        print('high : {:>5} {:>5} {:>5} {:>5} {:>5}'.format(*s.high[-5:]))
        print('low  : {:>5} {:>5} {:>5} {:>5} {:>5}'.format(*s.low[-5:]))
        print('price: {:>5} {:>5} {:>5} {:>5} {:>5}'.format(*s.price[-5:]))
