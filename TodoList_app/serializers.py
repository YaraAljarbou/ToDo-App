from .models import List, Task
from rest_framework import serializers

class ListSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = List
        fields =['id', 'title','tasks', 'color']

class TaskSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Task
        fields =['id', 'title', 'notes', 'priority','category','is_complete','the_list','due_date']