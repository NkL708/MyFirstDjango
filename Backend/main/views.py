from django.shortcuts import render, redirect
from rest_framework i
from .forms import RegisterForm


def main(request):
    return render(request, 'main/base.html')


def login(request):
    return render(request, 'main/login.html')


def register(request):
    error = ''
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            error = 'Form is invalid'
    else:
        form = RegisterForm()
    objects = {
        'form': form,
        'error': error
    }
    return render(request, 'main/register.html', objects)
