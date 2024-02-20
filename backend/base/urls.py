from rest_framework_simplejwt.views import TokenObtainPairView
from django.contrib import admin
from django.urls import path,include
from . import views 
urlpatterns = [
    path('', views.index),
    path('login/',TokenObtainPairView.as_view()),
    path('products/',views.Products.as_view()),
]
