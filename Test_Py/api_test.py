import json
import requests

response = requests.get("http://3.235.42.11:3000/maquina")
print("1. listarMaquinas")
print(json.loads(response.text))

response = requests.get("http://3.235.42.11:3000/recurso")
print("2. listarRecursos")
print(json.loads(response.text))

response = requests.get("http://3.235.42.11:3000/habilitacion")
print("3. listarHabilitacion")
print(json.loads(response.text))

#response = requests.get("http://3.235.42.11:3000/habilitacion/123456789-0")
#print("4. buscarHabilitacion(123456789-0)")
#print(json.loads(response.text))
#
#response = requests.get("http://3.235.42.11:3000/habilitacion/76443-3")
#print("5. buscarHabilitacion(76443-3)")
#print(json.loads(response.text))
#
#response = requests.get("http://3.235.42.11:3000/habilitacion/56565656-9")
#print("6. buscarHabilitacion(56565656-9)")
#print(json.loads(response.text))

response = requests.get("http://3.235.42.11:3000/habilitacion/2?1")
print("7. listarHabilitacionPorTipoMaquina")
print(json.loads(response.text))
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)
#
#response = requests.get("http://3.235.42.11:3000/maquina")
#print("1. listarMaquinas")
#print(response.text)