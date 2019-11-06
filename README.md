<p align="center">
    <img src="https://user-images.githubusercontent.com/16030020/68243759-7f662280-0013-11ea-8c92-1a279d8ce070.png" alt="logo" width=100 height=100>
  <h3 align="center">Quantum Hero</h3>
  <p align="center">
    Play the new QUANTUM Rhythm Game developed for the Quantum Hackathon project.
    <br>
    <br>
  </p>
</p>
<br>

## What is Quantum Hero?
 _It is Rhythm Game developed for the Quantum Hackathon project._<br>

Using a __quantum channel__ generted by _simulaqron_ the two players __Alice__ and __Bob__ can play together. A entangle note (state) is generate by the server and send to the two player, then Alice measure one note collapsing the state, at this point Bob know the measure done by Alice and do the same. 
Both must stay in the rhythm of the music and make measurements in order to violate the Bell's inequality. If at the end of time they managed to break it they win.

## How to play?
Install the dipendecies
```
pip3 install flask matplotlib simulaqron
```

Run the server simulaqron
```
simulaqron start
```

Run the server http
```
python3 Main.py
```

For close the server run
```
simulaqron stop
```

Open the browser to this url: http://127.0.0.1:5000 and enjoy the game!

![Annotazione 2019-11-05 200701](https://user-images.githubusercontent.com/16030020/68237705-f3023280-0007-11ea-8144-0a595dfcc58a.jpg)
