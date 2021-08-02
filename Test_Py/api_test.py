import json
import requests

response = requests.get("http://3.235.42.11:3000/maquina")
print("1. listarMaquinas")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/recurso")
print("\n2. listarRecursos")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/habilitacion")
print("\n3. listarHabilitacion")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/habilitacion/123456789-0")
print("\n4. buscarHabilitacion(123456789-0)")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/habilitacion/76443-3")
print("\n5. buscarHabilitacion(76443-3)")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/habilitacion/56565656-9")
print("\n6. buscarHabilitacion(56565656-9)")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/habilitacion/2/1")
print("\n7. listarHabilitacionPorTipoMaquina(3)")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/habilitacion/2/1")
print("\n8. listarHabilitacionPorTipoMaquina(4)")
json_value = response.json()
print(json_value)

response = requests.get("http://3.235.42.11:3000/habilitacion/2/1")
print("\n9. listarHabilitacionPorTipoMaquina(5)")
json_value = response.json()
print(json_value)

myobj = {'rut_maker': '555555555-2',
         'rut_ayudante': '10101010-A',
         'tipo_maquina': 1,
         'habilitado': False}
response = requests.post("http://3.235.42.11:3000/habilitacion", data=myobj)
print("\n10. añadirHabilitacion(555555555-2, 10101010-A, 1, False)")
json_value = response.json()
print(json_value)

response = requests.put("http://3.235.42.11:3000/maquina/" + str(json_value.get('insertId')))
print("\n11. actualizarHabilitacion("+str(json_value.get('insertId'))+")")
json_value = response.json()
print(json_value)

myobj = {'rut_maker': '234234324-1',
         'rut_ayudante': '199999999-A',
         'tipo_maquina': 3,
         'habilitado': False}
response = requests.post("http://3.235.42.11:3000/habilitacion", data=myobj)
print("\n12. añadirHabilitacion(234234324-1, 199999999-A, 3, False)")
json_value = response.json()
print(json_value)

response = requests.put("http://3.235.42.11:3000/maquina/" + str(json_value.get('insertId')))
print("\n13. actualizarHabilitacion("+str(json_value.get('insertId'))+")")
json_value = response.json()
print(json_value)

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
myobj = {'nombre': 'Nueva Maquina',
         'ubicacion': 'Nuevo lugar',
         'tipo_maquina': 3}
response = requests.post("http://3.235.42.11:3000/maquina", data=myobj)
print("\n19. añadirMaquina('Nueva Maquina', 'Nuevo lugar', 3)")
json_value = response.json()
print(json_value)

response = requests.delete("http://3.235.42.11:3000/maquina/"+ str(json_value.get('insertId')-1))
print("\n20. eliminarMaquina("+ str(json_value.get('insertId')-1) +")")
json_value = response.json()
print(json_value)