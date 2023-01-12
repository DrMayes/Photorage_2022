

from django.urls import path 
from . import views
from rest_framework.routers import DefaultRouter

urlpatterns = [
    path('', views.PlaceList.as_view(), name='place_list'),
    path('place/<int:pk>', views.PlaceDetail.as_view(), name='place_detail'),
    path('events/', views.EventList.as_view(), name='event_list'),
    path('events/<int:pk>', views.EventDetail.as_view(), name='event_detail'),

]