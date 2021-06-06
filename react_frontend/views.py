from django.shortcuts import render

def index(request):
    # this is going to look for the templates folder which contains frontend
    return render(request, 'frontend/index.html')