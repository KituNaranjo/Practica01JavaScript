var usuario = {
  "nombre": "Christian ", 
  "apellido": "Naranjo",
  "direccion": "Centro Historico", 
  "edad": 20, 
  "pasatiempos": ["Fútbol", " Basquet", " Videojuegos"]
}

function pantalla()
{
  document.write("<h3>" + usuario.nombre + usuario.apellido + "</h3>")
  document.write("<h3>" + usuario.direccion + "</h3>")
  document.write("<h3>" + usuario.edad + "</h3>")
  document.write("<h3>" + usuario.pasatiempos + "</h3>")
}
console.log(usuario);
pantalla();