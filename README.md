# Aplicación Web de Empleados

## Descripción

Este proyecto consiste en crear una aplicación web que muestra una lista de empleados utilizando componentes reutilizables. La aplicación tiene tres componentes principales:

1. **EmpleadoAvatar**: Muestra la foto de perfil del empleado.
2. **EmpleadoRow**: Muestra la información básica del empleado, como su nombre completo, título y departamento.
3. **EmpleadoList**: Muestra la lista completa de empleados en formato de tabla o lista, utilizando los componentes anteriores.

El objetivo es construir una aplicación que permita reutilizar estos componentes para que los datos de los empleados sean presentados de manera clara y estructurada.

## Estructura del Proyecto

- **EmpleadoAvatar**: Este componente recibirá la imagen del empleado (`pic`) y la mostrará en un formato de avatar.
- **EmpleadoRow**: Este componente recibirá la información del empleado (nombre completo, título y departamento) y la presentará en una fila de la lista.
- **EmpleadoList**: Este componente recibirá el arreglo de empleados y usará los componentes `EmpleadoAvatar` y `EmpleadoRow` para mostrar la lista completa.

## Requisitos

- **HTML/CSS**: La estructura básica de la página y el estilo visual.
- **JavaScript**: Para manejar los datos y generar dinámicamente los componentes.
- **Bootstrap**: Puede utilizarse para darle estilo a la aplicación o, alternativamente, se puede crear un diseño propio utilizando CSS.
  
## Estructura de los Datos

Los datos de los empleados estarán organizados en un arreglo de objetos como se muestra a continuación:

```javascript
let empleados = [
  { id: 1, fullName: "Laya Dueñas", title: "CEO", department: "Business", pic: "empleado01.png" },
  { id: 2, fullName: "Astryd Vallés", title: "CMO", department: "Marketing", pic: "empleado02.png" },
  { id: 3, fullName: "Shantell Meza", title: "CFO", department: "Business", pic: "empleado03.png" },
  { id: 4, fullName: "Sergio Ocampo", title: "CTO", department: "Engineering", pic: "empleado04.png" },
  { id: 5, fullName: "Ares Jiménez", title: "Art Director", department: "Marketing", pic: "empleado05.png" },
  { id: 6, fullName: "Marta Pérez", title: "Frontend Dev", department: "Engineering", pic: "empleado06.png" },
  { id: 7, fullName: "Ellen Balderas", title: "Digital Strategist", department: "Marketing", pic: "empleado07.png" },
  { id: 8, fullName: "Cynthia Valentín", title: "Backend Dev", department: "Engineering", pic: "empleado08.png" },
  { id: 9, fullName: "Bernard Jung", title: "DevOps Engineer", department: "Engineering", pic: "empleado09.png" },
];
