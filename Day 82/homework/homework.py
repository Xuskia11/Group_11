# def sorts(dict):
#     return sorted([key for key,value in dict.items()])

# print(sorts({1: "Data", 5: "Andria", 3: "Giorgi", 4: "Atuka", 2: "Erekle"}))




# def min_max(dict):
#     lists = sorted([key for key,value in dict.items()])
#     return f"min: {lists[0]} max: {lists[-1]}"


# print(min_max({1: "Data", 5: "Andria", 3: "Giorgi", 4: "Atuka", 2: "Erekle"}))





# def combine(dict1,dict2):
#     dict1.update(dict2)
#     return dict1

# print(combine({"name": "Data", "last name": "Diasamidze"}, {"age": 16}))



# def check(dict,arg):
#     if dict.get(arg) == None:
#         return "There is no key"
#     else:
#         return "There is this key"
    
# print(check({"name": "Data"}, "name"))




# def remove_and_return(my_dict, key):
#     res = my_dict.pop(key)
#     return res

# print(remove_and_return({"name": "Data", "last name": "Diasamidze"}, "name"))


# def manual_keys(dict):
#     res = [key for key, value in dict.items()]
#     return res

# print(manual_keys({"name": "data", "age": 16}))


# def manual_values(dict):
#     res = [value for key, value in dict.items()]
#     return res

# print(manual_values({"name": "data", "age": 16}))



# def manual_items(dict):
#     res = [ {key, value} for key, value in dict.items()]
#     return res

# print(manual_items({"name": "data", "age": 16}))



# def manual_get(dict, check):
#     for keys, value in dict.items():
#         if check == keys:
#             return dict[check]
        
# print(manual_get({"name": "data", "age": 16}, "name"))


def manual_pop(dict, check):
    for keys, value in dict.items():
        if check == keys:
            dict.pop(check)
            return dict
        
print(manual_pop({"name": "data", "age": 16}, "name"))