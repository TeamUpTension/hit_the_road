from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('api_server.urls')),
    path('accounts/', include('allauth.urls')),
    # path('account/', include('allauth.account.urls')),
]
