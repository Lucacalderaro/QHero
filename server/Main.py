from flask import Flask, request #import main Flask class and request object
import numpy as np
import matplotlib.pyplot as plt
import simulaqron
from cqc.pythonLib import CQCConnection, qubit

def Alice(data):
    with CQCConnection("Alice") as Alice:
        q = Alice.createEPR("Bob")
        good = True
        n = 0
        if data == 'AD':
            q.H()
            n = 1
        elif data != 'HV':
            n = 2
            good = False

        m = q.measure()

        Alice.sendClassical("Bob", n)

        return m if good else null

def Bob():
    with CQCConnection("Bob") as Bob:
        base = Bob.recvClassical()
        q = Bob.recvEPR()
        if base == 1:
            q.H()
        out = q.measure()

        return out

app = Flask(__name__)

# REQUEST MEASUREMENT
@app.route('/insert', methods = ['GET'])
def worker1():
    data = request.args.get('base')
    m = Alice(data)
    return '\n'

# RECEIVE BASIS
@app.route('/request', methods = ['GET'])
def worker2():
    m = Bob()
    return '{}'.format(m)

if __name__ == '__main__':
    # run!
    app.run(port=5000)
