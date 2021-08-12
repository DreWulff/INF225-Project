import json
import requests

myobj = {'rut_maker': '11111111',
         'rut_ayudante': '11111112',
         'tipo_maquina': 1,
         'habilitado': False}
response = requests.post("http://3.235.42.11:3000/habilitacion", data=myobj)
print("\n10. añadirHabilitacion(11111111, 11111112, 1, False)")
json_value = response.json()
print(json_value)