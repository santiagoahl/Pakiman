var imagenes = [];
imagenes["Cauchín"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";

var coleccion = [];

coleccion.push(new Pakiman ("Cauchín", 100, 30)); //.push guarda la variable en el lugar inmediatamente despues del ultimo ocupado
coleccion.push(new Pakiman ("Pokacho", 80, 50));
coleccion.push(new Pakiman ("Tocinauro", 120, 40));

console.log(coleccion);

//for(p in coleccion) {} ciclo que opera por la cantidad de objetos en el vector aqui sirve el indice

for(muñeco of coleccion)
{for(k=0; k<5; k++)
  {
    document.write(muñeco.mostrar()); // of  me itera el OBJETO
  }
}
