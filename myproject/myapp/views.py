from rest_framework import generics
from .models import MyModel
from .serializers import MyModelSerializer

class MyModelListCreate(generics.ListCreateAPIView):
    queryset = MyModel.objects.all()
    serializer_class = MyModelSerializer
