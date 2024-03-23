from django.urls import path
from .views import views

urlpatterns = [
    path('login/', views.login),
    path('sql_test/', views.mysql_test),
]