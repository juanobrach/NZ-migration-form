# Carga automatica para formulario de otorgacion de visas para Nueva Zelanda


Este script fue creado para cargar automaticamente los datos necesarios en el formulario de migraciones de NZ.

Funciona tomando el ID(identificador) de cada campo y pasandole los valores previamente cargados.


Ejemplo de carga de datos en (index.js):

```
var form1 = [
  {
    field:"ContentPlaceHolder1_personDetails_familyNameTextBox", // Identificador del campo
    value:'mercado buberman' // Nombre (tal cual aparece en el pasaporte),
  }
]
```

