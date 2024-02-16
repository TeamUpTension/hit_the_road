from django.urls import path
from .views import views

urlpatterns = [
    path('api_test', views.api_tester),
]