from django.db import models

# Create your models here.
class student(models.Model):
    rollNo=models.IntegerField()
    name=models.TextField()
    course=models.TextField()
    email=models.EmailField()