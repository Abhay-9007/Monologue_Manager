'''
this is just a graveyard for test run's...
'''

import json
import os
import datetime


'''
this is all i want from this project...
    1. storage for the data {Object based.}
    2. an proper Interface to access the data ove the internet. {Python Anywhere}
    4. can get data according to date,
    5. some special storage, to monitor expenses.
    3. scalable and secure.

'''


data = {
    "01-04-2026" : {
        "log" : ["hi this is abhay Nigga", "Working on this Project..."],
        "spc" : ["Bought Chicken", "Had Biryani"],
        "money" : {
            "name" : ["Chicken", "Biryani"],
            "amo" : [200, 200]
        }
    }
}


# these are the functions to get the data from the file.
def getAllLog(date):
    print("Logs    : " , getLog(date))
    print("Special : " , getSpec(date))
    print("Money   : " , getMoney(date))

def getLog(date):
    return data[date]["log"]

def getSpec(date):
    return data[date]["spc"]

def getMoney(date):
    return data[date]["money"]


# these are the functions to put the data into the file.
FORMAT = {"log" : [], "spc" : [], "money" : { "name" : [], "amo" : [] }}
def addLog(date, d):
    if date not in d:
        data[date] = {"log" : [], "spc" : [], "money" : { "name" : [], "amo" : [] }}
    data[date]["log"].append(d)
    return True

def addSpec(date, d):
    if date not in data:
        data[date] = FORMAT
    data[date]["spc"].append(d)
    return True

def addMoney(date, name, amount):
    if date not in data:
        data[date] = FORMAT
        
    data[date]["money"]["name"].append(name)
    data[date]["money"]["amo"].append(amount)
    return True



# Working Here...

# addLog("03-04-2026", "Yo, this side Bitch....")
# addMoney("03-04-2026", "Chicken", 200)
# addSpec("03-04-2026", "Bought Chicken")

# getAllLog("03-04-2026")

now = datetime.datetime.now()
today = now.strftime("%d-%m-%Y")
print(today)
while True:
    t = input("Wanna Continue? : ").lower()
    
    if t in set(['e', 'exit', 'n', 'no']):
        break
    
    addLog(today, input("Enter Logs here \n : "))
    addSpec(today, input("Enter Specials here \n : "))
    addMoney(today, input("Enter Names here \n : "), input("Enter Amount here \n : "))
    print(data)
    print(getAllLog(today))
    
    