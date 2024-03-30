from django.urls import path
from .views import views

urlpatterns = [
    path('login/', views.login),
    path('sql-test/', views.mysql_test),
    path('api-test/', views.api_test),
]