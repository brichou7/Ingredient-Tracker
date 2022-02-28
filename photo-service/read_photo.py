"""
This function reads the file path from 'photo.txt' and returns it
"""

def read_photo():
    f = open('photo.txt', 'r+')
    return f.read()