from rest_framework import serializers
from .models import Place, Event



class EventSerializer(serializers.HyperlinkedModelSerializer):
    place = serializers.HyperlinkedRelatedField(
        view_name = 'place_detail',
        read_only=True
    )

    class Meta:
        model = Event
        fields = ('id', 'name', 'price', 'description', 'date', 'photo_url', 'link', 'place')


class PlaceSerializer(serializers.HyperlinkedModelSerializer):
    events = EventSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Place
        fields = ('id', 'name', 'location', 'capacity', 'photo_url', 'events')