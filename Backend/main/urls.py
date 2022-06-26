from django.urls import path, include
from .api import UserViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register('api/users', UserViewSet, 'users')

urlpatterns = [
    path('', include(router.urls))
]
