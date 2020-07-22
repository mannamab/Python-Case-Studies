num = input("Enter any Number: ")
try:
    val = int(num)
    if num == str(num)[::-1]:
        print("Number is a Palindrome")
    else:
        print("Number is NOT a Palindrome")
except ValueError:
    print("Not a Valid Number, Try Again.")