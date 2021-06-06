from events.models import Events
from django.shortcuts import render
from .serializers import LeadSerializer
from rest_framework import generics
from .models import Events

#  this is going to allow us to get and post information
class LeadListCreate(generics.ListCreateAPIView):
    #  here we are collecting all the information from the event model
    queryset = Events.objects.all()
    serializer_class = LeadSerializer