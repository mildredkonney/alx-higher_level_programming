#!/usr/bin/python3
def safe_print_division(a, b):
    reslt = 0
    try:
        reslt = a / b
        print("Inside result: {}".format(reslt))
    except ZeroDivisionError:
        reslt = None
        print("Inside result: {}".format(reslt))
    finally:
        return reslt

