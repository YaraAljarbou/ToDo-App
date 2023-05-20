from .models import List, Task
from .serializers import ListSerializer, TaskSerializer
from rest_framework import viewsets

class ListViewer(viewsets.ModelViewSet):
    queryset = List.objects.all()
    serializer_class = ListSerializer

class TaskViewer(viewsets.ModelViewSet):
    queryset = Task.objects.all().order_by('due_date')
    serializer_class = TaskSerializer
