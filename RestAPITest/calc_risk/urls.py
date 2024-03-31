from django.urls import path

from . import views
from .views import get_car_by_number

app_name = "calc_risk"

urlpatterns = [
    path("", views.home, name="index"),
    path('get_car/', get_car_by_number, name='get_car_by_number'),
]