from django.urls import path

from . import views

app_name = "calc_risk"

urlpatterns = [
    path("", views.home, name="index"),
]