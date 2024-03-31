from django.contrib.auth.models import User
from django.db import models


class Car(models.Model):
    model = models.CharField(max_length=512)
    brand = models.CharField(max_length=512)
    fuel_type = models.CharField(max_length=512)
    horse_powers = models.IntegerField()
    year_of_first_registry = models.CharField(max_length=512)
    purpose = models.CharField(max_length=512)
    car_number = models.CharField(max_length=512)  # Changed to CharField
    risk_factor = models.FloatField()
    id = models.IntegerField(primary_key=True)

    def __str__(self):
        return f"{self.brand} {self.model} ({self.year_of_first_registry})"


class Users(models.Model):
    id = models.IntegerField(primary_key=True)
    username = models.CharField(max_length=512)
    email = models.CharField(max_length=512)
    password = models.CharField(max_length=512)

    def __str__(self):
        return self.username


class Profile(models.Model):
    first_name = models.CharField(max_length=512)
    last_name = models.CharField(max_length=512)
    egn = models.IntegerField()
    address = models.CharField(max_length=512)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
