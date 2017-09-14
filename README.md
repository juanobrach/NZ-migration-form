## Carga automatica para formulario de otorgación de visas para Nueva Zelanda


Este script fue creado para cargar automáticamente los datos necesarios en el formulario de migraciones de NZ.

Funciona tomando el ID(identificador) de cada campo y pasándole los valores previamente cargados en el archivo index.js.



Ejemplo de carga de datos en (index.js):

```
var form1 = [
  {
    field:"ContentPlaceHolder1_personDetails_familyNameTextBox", // Identificador del campo
    value:'Pepe mujica' // Nombre (tal cual aparece en el pasaporte),
  }
]
```

Para poder utilizar este codigo es necesario poder instalarlo en nuestro navegador web desde la consola de desarrolladores (yo utilize Chrome).

Una vez que abrimos la consola debemos copiar todo el código que hayamos modificado de `index.js`, pegarlo y presionar ENTER para que se ejecute.

> es importante notar que a medida que avancemos al siguiente formulario este nos va a dirigir siempre a una nueva página, por ende el navegador va a refrescarse, es decir, debemos volver a pegar el código y ejecutarlo por cada formulario.


## Abriendo la consola e inyectando el código

Podrian ingresar desde la seleccion del menu o mas rapido `( windows = control+shift+i )`
![Alt text](./assets/opendevelopertools.png?raw=true)


Una vez abierto deberíamos ver lo siguiente
![Alt text](./assets/pastecodeonconsole.png?raw=true)

> Por defento no aparece la consola al abrir las herramientas de desarrollador, asi que es necesario activarla clickeando en la pestaña `“consola”(1)`
La consola funciona como cualquier editor de texto (bloc de notas, word, gmail, etc). En esta instancia solo basta con pegar nuestro codigo y presionar ENTER para que se ejecute.


## Links
- [Crear Usuario](https://help.github.com/articles/basic-writing-and-formatting-syntax/#links).
- [Como acceder al formulario?](http://www.yomeanimoyvos.com/nueva-zelanda-la-guia-maestra).


