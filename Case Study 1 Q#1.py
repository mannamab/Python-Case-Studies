x = int(input("Enter any number: "))

for i in range(1, x + 1):
    if x % i == 0:
        if  i % 2 == 0:
            print(str(i) + " Even")
        else:
            print(str(i) + " Odd")