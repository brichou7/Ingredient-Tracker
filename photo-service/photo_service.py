# Name: Photo-Service
# Author: Brian Chou
# OSU Email: choub@oregonstate.edu
# Description: This function writes the chosen photo index to a text file.

"""
this program writes the index of your chosen photo to the text file
"""

def choosePhoto(index):
    while True:
        f = open('index.txt', 'r+')
        f.truncate(0)
        f.seek(0)
        f.write(index)
        f.close()
        break
