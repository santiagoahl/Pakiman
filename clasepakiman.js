class Pakiman //Definicion de un objeto //Todo bloque de codigo en una clase es funcion
{
  constructor(n, v, a) //Construye el objeto. Todos los atributos se crean acá
  {
    this.imagen = new Image(); //Imprimimos el pakiman sin canvas!!!
    this.tipo = "Tierra"; //Así se definen los atributos this se refiere a las variables dentro de la clase
    this.nombre = n;
    this.vida = v;
    this.ataque = a;

    this.imagen.src = imagenes[this.nombre];
  }
  hablar ()
  {
    alert(this.nombre);
  }
  mostrar ()
  {
    document.body.appendChild(this.imagen); //OJO CON  EL BODY PUES ES LO VISUAL DE DOCUMENT!!!! //Se le agrega un miembro de todo lo del body (<p>)
    document.write()
    document.write("<p>");
    document.write("<strong>" + this.nombre + "</strong> <br />");
    document.write("Vida: <strong> " + this.vida + "</strong> <br />");
    document.write("Ataque: <strong>" + this.ataque + "</strong> " + "<hr />"); //(<hr /> me muestra una linea que atraviesa el body)

    document.write("</p>");
  }
}
