from .models import User

from django.forms import ModelForm, TextInput, PasswordInput


class RegisterForm(ModelForm):
    class Meta:
        model = User
        fields = ["username", "password"]
        widgets = {
            "username": TextInput(attrs={
                "class": "mt-2",
                "required": "",
                "placeholder": "username"
            }),
            "password": PasswordInput(attrs={
                "class": "mt-2",
                "required": "",
                "placeholder": "password"
            })
        }
