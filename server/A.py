from flask import Flask, request #import main Flask class and request object
import numpy as np
import matplotlib.pyplot as plt
import simulaqron
from cqc.pythonLib import CQCConnection, qubit

with CQCConnection("Alice") as Alice:
    # Create an EPR pair
    q = Alice.createEPR("Bob")
    q.H()
    print(q.get_entInfo().id_AB)
    # Measure qubit
    m = q.measure()

    Alice.sendClassical("Bob", 1)

    print(m)
