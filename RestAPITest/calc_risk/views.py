from django.http import JsonResponse
from django.core import serializers
from .models import Car
import json
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods


def home(request):
    car = Car.objects.get(car_number="6817149875339387")
    car_data = {
        "carNumber": car.number,
        "model": car.model,
        "make": car.make
    }
    #car_data = serializers.serialize("json", [car])
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


def get_car_by_number(request):
    # Corrected the parameter name to match the URL query parameter 'car_number'
    car_number = request.GET.get('car_number')

    if car_number is None:
        return JsonResponse({'error': 'No car number provided'}, status=400)

    try:
        car = Car.objects.get(car_number=car_number)
        # Serialize the Car object to JSON format
        car_data = serializers.serialize("json", [car], ensure_ascii=False)
        # Since 'serialize' returns a string, we convert it back to a list to extract the first element
        car_data_list = json.loads(car_data)
        car_data_first = car_data_list[0] if car_data_list else {}
        # Return the car data. Note: JsonResponse's safe parameter is set to False to allow non-dict objects
        return JsonResponse(car_data_first, safe=False)
    except Car.DoesNotExist:
        return JsonResponse({'error': 'Car not found'}, status=404)
