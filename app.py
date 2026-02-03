# '''
# Date :- 27th Jan 2026

# 1. use {curdate != prev} date to seperate monolog as day..
# 2. use fetch file method to get a file when required else let it be in the code....
# 3. make a fucntion to show the date chose of give.
# 4.
# 5.

# '''
# import json
# # import dateme as dt

# # now = dt.datetime.now()
# # date = now.date()
# # month = now.day
# # year = now.year

# # print(now)
# # print(date, month, year)


# # def getData():
# #     data = []
# #     with open("monologue.txt", "r") as f:
# #         data = f.readlines()
# #     return data

# # print(getData())
# # for i in getData():
# #     print(i)

# data = {}

# with open("data.json", "r") as f:
#     data = json.load(f) 
# # print(data["27-1-2026"])
# # print(data)
# # print(type(data))


# def getTodayDate():
#     import datetime as dt
#     now = dt.datetime.now()
#     todayDate =  f"{now.day}-{now.month}-{now.year}"
#     return todayDate


# def main():
#     global data
#     todayDate = getTodayDate()
#     todayData = ""
#     while True:
#         if todayDate not in data:
#             data[todayDate] = ""
#         else:
#             todayData = data[todayDate]
        
#         inputLine = input(">>> ")
#         if "get" in inputLine and (len(inputLine) == 13 or len(inputLine) == 14):
#             dateEntered = inputLine.replace('get','').strip()
#             print(data[dateEntered])
            
#         elif inputLine == "exit" or inputLine == 'q':
#             with open("data.json", "w") as f:
#                 json.dump(data, f,indent=4)
#             break
        
#         else:
#             todayData += inputLine+'    \n'
        
#         data[todayDate] = todayData

# main()


# '''
# {
#     "25-1-2026": "this is Abhay Pratap singh.   \nThe monther Fucking Nigga you dont wanna deal with....    \n"
# }
# '''



from flask import Flask, render_template, request
import json
import datetime as dt
import os

app = Flask(__name__)

DATA_FILE = "data.json"

def getTodayDate():
    now = dt.datetime.now()
    return f"{now.day}-{now.month}-{now.year}"

# Load data
if os.path.exists(DATA_FILE):
    with open(DATA_FILE, "r") as f:
        data = json.load(f)
else:
    data = {}

@app.route("/", methods=["GET", "POST"])
def index():
    todayDate = getTodayDate()
    message = ""
    todayData = data.get(todayDate, "")

    if request.method == "POST":
        action = request.form.get("action")

        if action == "save":
            entry = request.form.get("entry")
            todayData += entry + "\n"
            data[todayDate] = todayData

            with open(DATA_FILE, "w") as f:
                json.dump(data, f, indent=4)

            message = "Saved successfully ✅"

        elif action == "get":
            dateEntered = request.form.get("date")
            todayData = data.get(dateEntered, "No data found for this date ❌")

    return render_template(
        "index.html",
        todayDate=todayDate,
        todayData=todayData,
        message=message
    )

if __name__ == "__main__":
    app.run(debug=True)
