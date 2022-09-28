from django.urls import path
from .views import (
    TestAPIView,
    CalculateIaaS,
    BotAnswers
)

urlpatterns = [
    path('test-api/', TestAPIView.as_view(), name='test'),
    path('calculate/', CalculateIaaS.as_view(), name='calculate'),
    path('botanswers/', BotAnswers.as_view(), name='bot')
]