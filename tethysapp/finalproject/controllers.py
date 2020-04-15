from django.shortcuts import render
from tethys_sdk.permissions import login_required

import os
import json
from .app import Finalproject as app



@login_required()
def background(request):
    """
    Controller for the page.
    """
    print("background")
    context = {}
    return render(request, 'finalproject/background.html', context)

@login_required()
def map(request):
    """
    Controller for the page.
    """
    print("app")
    print("entering the getCountriesFile function")
    print(app)
    app_workspace = app.get_app_workspace()
    file_path = os.path.join(app_workspace.path, 'stations.json')
    print(file_path)
    data_dict = {}
    with open(file_path) as json_data:
        data_dict = json.load(json_data)
    print(data_dict)
    context = {
        "stations": data_dict
    }
    # context = {}
    return render(request, 'finalproject/APP.html', context)

@login_required()
def home(request):
    """
    Controller for the app home page.
    """
    context = {}
    return render(request, 'finalproject/home.html', context)