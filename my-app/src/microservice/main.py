# Name: Rafael Carmona
# Description: Microservice - JSON App - Read and Write
# OSU Email: carmonar@oregonstate.edu
# Description: Writes data into JSON file and then microservice actively reads
#              the JSON file and updates another JSON file with new data.
# Instructions: My program runs for 10 mins. Write JSON files to "data_write.json".
#               Everything will be copied into "data-read.json". MUST SAVE "data_write.json" everytime it's written too.
#               Run program from terminal. Open new terminal at this location. Type "python3 main.py".
#               To end program before 10 mins. "ctrl-c"

import json
from nis import cat
import time
from json.decoder import JSONDecodeError

t_end = time.time() + 60 * 10
while time.time() < t_end:
    data = None 
    with open("data_write.json", "r+") as f:
        data = json.load(f)

    ingredient = None
    has_ingredient = True
    with open("ingredient_read.json", "r+") as file:
        try:
            ingredient = json.load(file)
            if ingredient == {}:
                has_ingredient = False
        except JSONDecodeError:
            has_ingredient = False

    if has_ingredient:
        with open("data_write.json", "r+") as f:
            data["Ingredients"].append(ingredient)
            f.seek(0)
            json.dump(data, f, indent=2)

        with open("ingredient_read.json", "r+") as file:
            file.truncate(0)
            json.dump({}, file)

    recipe = None
    has_recipe = True
    with open("recipe_read.json", "r+") as file:
        try:
            recipe = json.load(file)
            if recipe == {}:
                has_recipe = False
        except JSONDecodeError:
            has_recipe = False

    if has_recipe:
        with open("data_write.json", "r+") as f:
            if recipe and recipe != {}:
                data["Recipes"].append(recipe)
                f.seek(0)
                json.dump(data, f, indent=2)
        
        
        with open("recipe_read.json", "r+") as file:
            file.truncate(0)
            json.dump({}, file)

    time.sleep(2)


