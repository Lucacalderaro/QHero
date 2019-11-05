from flask import Flask, request #import main Flask class and request object
import numpy as np
import matplotlib.pyplot as plt
import simulaqron
from cqc.pythonLib import CQCConnection, qubit

def test():
    with CQCConnection("Alice") as Alice:
        # Create an EPR pair
        print('testing')
        q = Alice.createEPR("Bob")
        if base == 'DA':
            q.H()

        # Measure qubit
        m = q.measure()
        return m
        #
        # sequence_nr = q.get_entInfo().id_AB
        #
        # sendClassical([sequence_nr, n],"Bob")

app = Flask(__name__) #create the Flask app

@app.route('/requestMeasure', methods=["GET"])
def requestMeasure():
    base = request.args.get('base')
    print(base)
    return '{}'.format(base)


if __name__ == '__main__':
    app.run(debug=True, port=5000) #run app in debug mode on port 5000
