from django.contrib import admin
from django.urls import path, include

from calc_risk.views import get_car_by_number

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('calc_risk.urls')),
    #path('get_car/', get_car_by_number, name='get_car_by_number'),
]