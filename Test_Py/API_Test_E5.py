import json
import requests

response = requests.get('http://ec2-3-13-79-51.us-east-2.compute.amazonaws.com:8081/student/rut?rut=11111111')
print("\nSe confirma si el RUT de estudiante 11111111 es valido:")
value = response.status_code
print("Estado de respuesta: " + str(value))
print("El rut es valido.")

response = requests.get('http://ec2-3-13-79-51.us-east-2.compute.amazonaws.com:8081/assistant/rut?rut=11111112')
print("Se confirma si el RUT de ayudante 11111112 es valido:")
value = response.status_code
print("Estado de respuesta: " + str(value))
print("El rut es valido.")

myobj = {'rut_maker': '11111111',
         'rut_ayudante': '11111112',
         'tipo_maquina': 7,
         'recursos': 1,
         'habilitado': False}
response = requests.post("http://3.235.42.11:3000/habilitacion", data=myobj)
print("añadirHabilitacion(11111111, 11111112, 3, 1, False) deberia funcionar.")
json_value = response.json()
print(json_value)
print("El metodo ha funcionado correctamente.\n")



response = requests.get('http://ec2-3-13-79-51.us-east-2.compute.amazonaws.com:8081/student/rut?rut=00110011')
print("Se confirma si el RUT de estudiante 00110011 es valido:")
value = response.status_code
print("Estado de respuesta: " + str(value))
print("El rut de estudiante no es valido.")

myobj = {'rut_maker': '00110011',
         'rut_ayudante': '11111112',
         'tipo_maquina': 3,
         'recursos': 1,
         'habilitado': False}
response = requests.post("http://3.235.42.11:3000/habilitacion", data=myobj)
print("añadirHabilitacion(00110011, 11111112, 3, 1, False) no deberia funcionar.")
json_value = response.json()
print(json_value)