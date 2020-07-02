from flask import render_template, request, redirect, url_for
import random
from app import app
from random import choice, sample

def check(checklist:list)->list:
    """ Removes variants where is not number and/or all letters in one case"""
    new_checklist=[]
    for item in checklist:
        new_checklist.append(None) if not any(map(str.isdigit, list(item))) else new_checklist.append(item)
        new_checklist.append(None) if not any(map(str.title, list(item))) or all(map(str.title, list(item))) else new_checklist.append(item)
    new_checklist = [x for x in new_checklist if x is not None]
    return new_checklist

def computation(loop:str, round:str, string:str) -> dict:
    """ generate password from response parametrs """
    words = []
    for i in range(int(loop)*10):
        letters = []
        for j in range(128):
            j = choice(string)
            letters.append(j)
        word = "".join(sample(letters,int(round)))
        words.append(word)
    words = list(set(check(words)))
    result = sample(words, int(loop))
    return list(map(lambda x: {'id': 'item_'+str(x[0]), 'password': str(x[1])} , enumerate(result)))
    

@app.route('/')
def start():
    return redirect(url_for("forms"))

@app.route('/forms', methods=['GET', 'POST'])
def forms():
    if request.method == "POST":
        result = computation(request.form['number'], request.form['count'], request.form['symbv'])
        return render_template("forms.html", result=result)
    return render_template("forms.html")