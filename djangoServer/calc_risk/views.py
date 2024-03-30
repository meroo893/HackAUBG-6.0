from django.db.models import F
from django.http import HttpResponseRedirect, HttpResponse
from django.shortcuts import get_object_or_404, render
from django.urls import reverse
from django.views import generic
from django.utils import timezone
from .models import UserProfile

#from .models import Choice, Question


def home(request):
    return render(request, "home.html")

def show_user_profile(request):
    profiles = UserProfile.objects.all()
    return render(request, 'MYTEMPLATE.HTML', {'profiles': profiles})


