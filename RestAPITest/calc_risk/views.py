from django.http import JsonResponse
from django.core import serializers
from .models import Car
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods


def home(request):
    car = Car.objects.get(car_number="6817149875339387")
    car_data = {
        "carNumber": car.car_number,
        "model": car.model,
        "make": car.year_of_first_registry,
    }
    return JsonResponse({'car': car_data})


@csrf_exempt
@require_http_methods(["POST"])
def import_data_from_json(request):
    try:
        # Load the JSON data from the request body
        json_data = json.loads(request.body)

        # Assuming the JSON data is a list of objects
        for entry in json_data:
            # Create a new MyModel instance for each object and save to the database
            Car.objects.create(**entry)

        return JsonResponse({'message': 'Data imported successfully'}, status=200)
    except json.JSONDecodeError:
        return JsonResponse({'error': 'Invalid JSON'}, status=400)
    except Exception as e:
        return JsonResponse({'error': str(e)}, status=400)


from django.http import JsonResponse
from .models import Car

def get_car_by_number(request):
    car_number = request.GET.get('car_number')
    if not car_number:
        return JsonResponse({'error': 'No car number provided'}, status=400)

    try:
        car = Car.objects.get(car_number=car_number)
        car_data = {
            "carNumber": car.car_number,
            "model": car.brand,
            "make": car.year_of_first_registry,
        }
        return JsonResponse({'car': car_data})
    except Car.DoesNotExist:
        return JsonResponse({'error': 'Car not found'}, status=404)

