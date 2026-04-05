'''
Today is 5th April 2026 and i have been working on this project from 3 days.
{Not continiously}
'''

import json
# import os
import datetime

with open("database.json", "r") as f:
    data = json.load(f)

# print(data)

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
    ans = ""
    for i in  data[date]["money"]:
        ans += i + " : " + str(data[date]["money"][i]) + '\n'
    return ans


# these are the functions to put the data into the file.
FORMAT = {"log" : [], "spc" : [], "money" : {}}
def addLog(date, d):
    if date not in d:
        data[date] = FORMAT
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
    if name not in data[date]["money"]:
        data[date]["money"][name] = []
    data[date]["money"][name].append(amount)
    return True
    
USERMANUAL = '''
                                                    Welcome To This Program...
1. Add Monolog
2. Get Monolog
3. Will be Added Soon.
'''

NO = set(['n', 'no', ''])
if __name__ == "__main__":
    print(USERMANUAL)
    
    now = datetime.datetime.now()
    today = now.strftime("%d-%m-%Y")

    
    while True:
        while True:
            inputData = input("Add Logs : ")
            if inputData.lower() in NO:
                break
            addLog(today, inputData)
            
        while True:
            inputData = input("Add Special : ")
            if inputData.lower() in NO:
                break
            addSpec(today, inputData)
            
        while True:
            inputData = input("Add Money : ")
            if inputData.lower() in NO:
                break
            inputMoney, inputAmount = inputData.split(" ")
            addMoney(today, inputMoney, inputAmount)

        
        if input("Wanna add more Stuff [Y | N] : ").lower() in NO:
            break


with open("database.json", "w") as f:
    json.dump(data, f, indent=4)
    
    
'''
papa was hare at home
had chicken and poha and a perfect ramen  

made a prefect Ramen with eggs and meat

gunjan 11000
'''
