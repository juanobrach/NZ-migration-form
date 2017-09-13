## Carga automatica para formulario de otorgacion de visas para Nueva Zelanda


Este script fue creado para cargar automaticamente los datos necesarios en el formulario de migraciones de NZ.

Funciona tomando el ID(identificador) de cada campo y pasandole los valores previamente cargados en el archivo index.js.



Ejemplo de carga de datos en (index.js):

```
var form1 = [
  {
    field:"ContentPlaceHolder1_personDetails_familyNameTextBox", // Identificador del campo
    value:'mercado buberman' // Nombre (tal cual aparece en el pasaporte),
  }
]
```

Para poder utilizar este codigo es necesario poder inyectarlo en nuestro navegador web desde la consola de desarrolladores (yo utilize Chrome).

Una vez que abrimos la consola debemos copiar todo el codigo, pegarlo y presionar ENTER para poder ejecturalo.

> es importante notar que a medida que avanzemos al siguiente formulario este nos va a dirijir siempre a una nueva pagina, por ende el navegador va a refrescarse, es decir, debemos volver a pegar el codigo y ejecutarlo por cada formulario.


## Abriendo la consola e inyectando el codigo

Podrian ingresar desde la seleccion del menu o mas rapido ( windows = control+shift+i )
![Alt text](./assets/opendevelopertools.png?raw=true)


Una vez abierto deberiamos ver lo siguiente
![Alt text](./assets/pastecodeonconsole.png?raw=true)

> Por defecto no esta activa la pestaña "consola"(1), asi que deberiamos seleccionarla, nos daremos cuenta que se encuentra activa por el borde azul que aparece sobre la pestaña.
La consola funciona como cualquier editor de texto (bloc de notas, word, gmail, etc). En esta instancia solo basta con pegar nuestro codigo y presionar ENTER para que se ejecute.


## Links
[Crear Usuario](https://help.github.com/articles/basic-writing-and-formatting-syntax/#links).
[Como acceder al formulario?](http://www.yomeanimoyvos.com/nueva-zelanda-la-guia-maestra).

