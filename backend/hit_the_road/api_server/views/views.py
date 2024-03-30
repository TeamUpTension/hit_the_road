from django.views.decorators.http import require_POST, require_GET
from django.http import HttpResponse
from django.http import JsonResponse
from django.shortcuts import render
from django.template import loader
from django.db import connection
from django.contrib.auth.models import User

def login(request):
    template = loader.get_template('login.html')

    return HttpResponse(
        template.render(request=request)
    )

def mysql_test(request):
    try:
        cursor = connection.cursor()

        query = "SELECT * FROM htr_user"
        result = cursor.execute(query)
        print('result')
        print(result)
        users = cursor.fetchall()
        print('users')
        print(users)

        connection.commit()
        connection.close()

    except:
        connection.rollback()
        print("Failed selecting in htr_user")
    
    template = loader.get_template('user.html')

    context = {"users" : users}

    return HttpResponse(
        template.render(request=request, context=context)
    )

@require_POST
def api_test(request):
    print('okokok')
    print(request.POST)
    context = {
        'data': 'data',
    }

    return JsonResponse(context)