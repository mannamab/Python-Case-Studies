import math


a = range(10)
b = [10, 20, 30, 40, 50]
c = [10, 20, 30.30, 40, 50.0]
d = [10.20, 30.40]
e = (10, 20, 30, 40.50)

print("fsum(a): ", math.fsum(a))
print("fsum(b): ", math.fsum(b))
print("fsum(c): ", math.fsum(c))
print("fsum(d): ", math.fsum(d))
print("fsum(e): ", math.fsum(e))