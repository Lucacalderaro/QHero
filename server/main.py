from flask import Flask, request, send_from_directory, render_template #import main Flask class and request object
import numpy as np
import matplotlib.pyplot as plt
import simulaqron
from cqc.pythonLib import CQCConnection, qubit

def Alice(data):
    with CQCConnection("Alice") as Alice:
        q = Alice.createEPR("Bob")
        good = True
        n = 0
        if data == 'AD' or data == 'DA':
            q.H()
            n = 1
        elif data != 'HV' and data != 'VH':
            n = 2
            good = False

        m = q.measure()

        Alice.sendClassical("Bob", [n])

        return m if good else null

def Bob():
    with CQCConnection("Bob") as Bob:
        good = True
        base = Bob.recvClassical()
        q = Bob.recvEPR()
        base = int.from_bytes(base, 'big')
        if base == 1:
            q.H()
        elif base == 2:
            good = False
        out = q.measure()
        print("base: {}".format(base))
        print("out: {}".format(out))
        if base == 2:
            return "N"
        if out == 1 and base == 0:
            return "V" 
        if out == 1 and base != 0:
            return "D" 
        if out == 0 and base == 0:
            return "H" 
        if out == 0 and base != 0:
            return "A" 
        return "S"

app = Flask(__name__)
# app.debug = True

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
    return m

# GAME
@app.route('/', methods = ['GET'])
def worker3():
    return render_template('index.html')

@app.route('/js/<path:path>')
def send_js(path):
    return send_from_directory('js', path)

@app.route('/css/<path:path>')
def send_css(path):
    return send_from_directory('css', path)

@app.route('/img/<path:path>')
def send_img(path):
    return send_from_directory('img', path)

@app.route('/sng/<path:path>')
def send_sng(path):
    return send_from_directory('sng', path)

# RUN
if __name__ == '__main__':
    app.run(port=5000)
