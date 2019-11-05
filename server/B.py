from flask import Flask, request #import main Flask class and request object
import numpy as np
import matplotlib.pyplot as plt
import simulaqron
from cqc.pythonLib import CQCConnection, qubit

with CQCConnection("Bob") as Bob:
    print(Bob.recvClassical())
