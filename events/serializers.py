from rest_framework import serializers
from .models import Events

#  this is used to create the tools for our rest framework serializers
class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Events
        fields = ('title', 'details')
        