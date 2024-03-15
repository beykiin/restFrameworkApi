from django.urls import path
from .views import MyModelListCreate

urlpatterns = [
    path('api/mymodel/', MyModelListCreate.as_view(), name='mymodel-list-create'),
]
