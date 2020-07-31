import math

pos=[0,0]
moves={"UP":[0,1],
       "DOWN":[0,-1],
       "LEFT":[-1,0],
       "RIGHT":[1,0]}


data=["UP 5",
    "DOWN 3",
    "LEFT 3",
    "RIGHT 2"]

for inp in data:
    parts=inp.split()    
    mv=parts[0]
    val=parts[1]
    if mv in moves and val.isnumeric():
        pos[0] += moves[mv][0]*int(val)
        pos[1] += moves[mv][1]*int(val)
     
distance=math.sqrt(pos[0]**2 + pos[1]**2)
print(distance, "from [0,0] to",pos)