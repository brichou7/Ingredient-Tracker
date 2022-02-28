# Name: Photo-UI
# Author: Brian Chou
# OSU Email: choub@oregonstate.edu
# Description: UI for program to generate the correct photos. 
# Instructions: Run this program in the background while you're running your app in a different 
# terminal. When you need a photo, have your program write to the 'index.txt' file included. You
# may import and call upon the choosePhoto function from photo_service to do this. 
# This program should automatically read and save the correct file path to 'photo.txt'. From there,
# have your program read the path from 'photo.txt' using readPhoto (you can import this) and return the correct photo 
# from photo_library using the file path. You should download and import the photo_library and 
# photo_service into your own app library; photo_ui should be run in a separate terminal, in its own
# process

while True:
    f = open('index.txt', 'r+')
    g = open('photo.txt', 'r+')
    num = int(f.read())
    g.truncate(0)
    g.seek(0)
    g.write("/photo_library/" + str(num) + ".png")
    f.close()
    g.close()