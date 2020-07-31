list1 = [2,24,35,70,88,120,155]  
  
unwanted = [0, 4, 5] 
  
for ele in sorted(unwanted, reverse = True):  
    del list1[ele] 
  
print (*list1) 