from django.db import models

# Create your models here.
class List(models.Model):
    title = models.CharField(max_length=255)
    color = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class Task(models.Model):
    title = models.CharField(max_length=255)
    notes = models.TextField(max_length=1000)
    priority = models.CharField(max_length=45)
    category = models.CharField(max_length=255)
    is_complete = models.BooleanField(default=False)
    the_list = models.ForeignKey(List, related_name="tasks", on_delete = models.CASCADE)
    due_date = models.DateField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)