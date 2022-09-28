import json

from rest_framework.views import APIView
from rest_framework.response import Response
from django.core.mail import send_mail
from django.conf import settings
import datetime
import logging
from django.http import JsonResponse
from pyzabbix import ZabbixAPI

# Вызов логгера, модель формат которого сформирован в settings.py
logger = logging.getLogger('arcsight')

class TestAPIView(APIView):
    def get(self, request, *args, **kwargs):

        subject = 'From Django'
        message = 'Hello from Django test send_mail!'
        from_email = settings.EMAIL_HOST_USER
        #email_password = settings.EMAIL_HOST_PASSWORD
        to_email = ['ishutina.eyu@gazprom-neft.ru']
        fail_silently = False

        #send_mail(subject, message, from_email, to_email, fail_silently)

        data = [
            {'id': 1, 'name': 'Random name 1'},
            {'id': 2, 'name': 'Random name 2'}
        ]

        # Получение времени в формате unix time в миллисекундах и последующий перевод его в формат строки
        unix_time = datetime.datetime.timestamp(datetime.datetime.now()) * 1000
        time = str(unix_time)
        
        day = datetime.datetime.now().strftime('%b %d %H:%M:%S')

        logger.debug('test logger',  # Заполнение параметра message
                     extra={  # Заполнение неслужебных параметров логгера
                         'day': day, # Актуальное время в формате Oct 22 13:27:10
                         'src': request.META.get('REMOTE_ADDR'),  # IP пользователя (IP адрес полученный от клиента)
                         'dst': request.get_host(),  # IP/Host фдрес сервера на котором запущен сервис
                         'shost': request.META.get('REMOTE_HOST'),  # Хост пользователя
                         'suid': ' ',  # SID пользователя (можно получить через декодирование токена)
                         'suser': ' ',  # Имя пользователя из учетной записи (можно получить из декодирования токена)
                         'dmsg': 'test process',  # Сообщение с описанием запущенного процесса
                         'end': time
                         # По идее, это должно быть время завершения работы процесса, однако я хз как это сделать и использую время начала работы процесса
                     })

        return Response(data)

class CalculateIaaS(APIView):
    def calculate(request):
        status = 'error'
        message = 'Something went wrong! Please try again later'
        if request.GET.get('x'):
            x = int(request.GET['x'])
            y = int(request.GET['y'])
            o = request.GET['o']
            status = 'success'
            if o == 'add':
                message = x + y
            elif o == 'sub':
                message = x - y
            elif o == 'div':
                if y != 0:
                    message = x / y
            elif o == 'mul':
                message = x * y
            elif o == 'rem':
                message = x % y
            else:
                status = 'fail'
                message = 'Dont waste your time!'
        return JsonResponse({'result': message, 'status': status})

class BotAnswers(APIView):
    def post(self, request):

        with open('./doc/DB.json') as f:
            db = json.load(f)

        test = 'test'

        print(request.data)

        response = db['bot_answers']

        return Response(json.dumps(response))


#from pyzabbix import ZabbixAPI


'''
class Zab(APIView):
    def zab(self):
        zapi = ZabbixAPI('http://nngs-zabbix.gazprom-neft.local/zabbix', user='api-lk-drp', password='Dd123456')

        groups = zapi.hostgroup.get()  # получаем список всех доступных групп узлов сети

        print(groups)
        hosts = zapi.host.get(groupids=305, output=['hostid', 'name'])  # получаем список хостов в группе с groupid 305

        for i in range(10):
            print(hosts[i])

        items = zapi.item.get(hostids=11207)  # получаем список элементов данных по hostid
        print(items[0])
        zapi.user.logout()

        return 'ok'
        '''