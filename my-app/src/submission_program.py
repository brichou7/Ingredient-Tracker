import json

start = input("Enter 'Start' to start the process: ")
if start == "Start":
    while True:
        ing = input("Would you like to add a new ingredient? Type yes or no: ")
        if ing == "yes":
            data_set = {"ingredient-name": input("Please input the ingredient name: "), "ingredient-quantity": input("Please input the ingredient quantity: ")}
            with open(".//microservice/data_read.json", "r+") as file:
                file.truncate(0)
                file.seek(0)
                json.dump(data_set, file, indent=2)
        else:
            break
