print("Enter Text: ")
inputchars = input()

if inputchars:
	string = ""
	for i in inputchars:
		if inputchars.index(i)%2 == 0:
			string += str(i)
	
	print('-------------------')
	print("You Entered:", inputchars)
	print("Result:")
	print(string)
