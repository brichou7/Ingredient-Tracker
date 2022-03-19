import json

#This function writes the data_set to the file contained at the file_path
def write(file_path, data_set):
    with open(file_path, "r+") as file:
        file.truncate(0)
        file.seek(0)
        json.dump(data_set, file, indent=2)

#This program repeatedly asks the user to input ingredients or recipes, and writes this 
#data to the respective write file inside the microservice folder.
start = input("Enter 'Start' to start the process: ")
if start == "Start":
    while True:
        ing = input("Would you like to add a new ingredient? Type yes or no: ")
        if ing == "yes":
            data_set = {"ingredient-name": input("Please input the ingredient name: "), 
            "ingredient-quantity": int(input("Please input the ingredient quantity: "))}
            write(".//microservice/ingredient_read.json", data_set)
        else:
            rec = input("Would you like to add a new recipe? Type yes or no: ")
            if rec == "yes":
                data_set = {"recipe-name": input("Please input the recipe name: "), 
                "recipe-list": input("Please input a comma-separated list of ingredients: ")}
                write(".//microservice/recipe_read.json", data_set)
            else:
                break