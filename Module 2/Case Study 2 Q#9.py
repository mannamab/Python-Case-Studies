list1 = [12,24,35,24,88,120,155]  
   
unwanted_num = {24} 
  
list1 = [ele for ele in list1 if ele not in unwanted_num] 
  
print("New list after removing unwanted numbers: ", list1) 