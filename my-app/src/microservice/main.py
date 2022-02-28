# Name: Rafael Carmona
# Description: Microservice - JSON App - Read and Write
# OSU Email: carmonar@oregonstate.edu
# Description: Writes data into JSON file and then microservice actively reads
#              the JSON file and updates another JSON file with new data.
# Instructions: My program runs for 10 mins. Write JSON files to "data-write.json". Everything will be copied
#               into "data-read.json". MUST SAVE "data-write.json" everytime it's written too.
#               Run program from terminal. Open new terminal at this location. Type "python3 main.py".
#               To end program before 10 mins. "ctrl-c"

import json
import time

start = input("Enter 'Start' to start the process: ")
print("If needed - To end program ctrl-c" )
print("Processing...")

t_end = time.time() + 60 * 10
while time.time() < t_end:
    recipe = None 
    with open("data_write.json", "r+") as f:
        recipe = json.load(f)
        

    data = None 
    with open("data_read.json", "r+") as file:
        data = json.load(file)
        if not data:
            continue

    with open("data_write.json", "r+") as f:
        recipe["Ingredients"].append(data)
        f.seek(0)
        json.dump(recipe, f, indent=2)
    
    with open("data_read.json", "r+") as file:
        file.truncate(0)
        json.dump({}, file)

    time.sleep(5)


