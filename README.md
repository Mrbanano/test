<div align="center">
  <a href="https://github.com/Mrbanano"><img src="https://i.postimg.cc/MZrsBD2Q/logo-devf-negro.png" width="75%"></a>
</div>

<br>
<br>

[![wakatime](https://wakatime.com/badge/github/Mrbanano/test.svg)](https://wakatime.com/badge/github/Mrbanano/test)

<br>
<br>

# Prueba técnica Fullstack

**Objetivo**

DEV.F busca crear un TODO APP interna donde el departamento de atencion a cliente pueda estar guardando los casos que va recibiendo de los alumnos. Estos TODOS debe ser asignados a un miembro del equipo de atencion a cliente para darle seguimiento a cada caso.

**NOTA: TODO -> Tarea por hacer**

## Features

- Puedo agregar TODO con una fecha de inicio.
- Puedo modificar cualquier TODO.
- Puedo agregar miembro del team de atencion a clientes.
- Puedo asignar un TODO a cualquier miembro.
- Nadie puede tener mas de 5 TODOS asignados al mismo tiempo.
- **AGREGA DOS FEATURES QUE CONSIDERES AGREGUEN VALOR**

## Requerimientos Técnicos

**Genrales**

- Debe tener Eslint.
- Debe estar en un repositorio en github.

**BACKEND**

- Utilizar el backend base.
- Crear REST API.
- Hacer los CRUD que se crean necesarios.
- Solo hay borrado logico.
- Se debe utilizar una base de datos(SQL o NoSQL)

**FRONTEND**

- Utilizar el frontend base.
- Utilizar algún framework de CSS (Bootstrap, Materialize, Tailwind, etc.) para el maquetado de la aplicación.
- Consumir todos los datos de la API previamente descritas arriba.
- El sitio debe ser responsivo he intuitivo.
- Manejo de errores (Errores de usuario, Errores del backend, Errores inesperados)

**PLUS:**

- El proyecto esta dockerizado (Backend + Frontend + DB)
- Link publico para probar la app (Deploy)
- Utilizar alguna herramienta de estado global(CONTEXT, REDUX, MOBOX, etc).
- Documentación.

# Propuesta de solucion

Para la realización de este reto se opta por crear una aplicación basada en el stack M.E.R.N en una arquitectura monorepo multipaquete

## Diseño

Se diseñó una interfase de usuario vistosa y limpia, inspirada en la marca Dev.f, tomando algunos colores para generar una paleta de colores acorde a su identidad.

La aplicación se diseñó basada en el concepto de mobile first a pesar de ser una aplicación de uso interno y su principal uso sea en escritorio es importante cubrir todos los escenarios posibles

### - Mobile

<div align="center">
  <a href="https://github.com/Mrbanano"><img src="https://i.postimg.cc/rszQbdWs/mobile.png" width="90%"></a>
</div>

### - Desktop

<div align="center">
  <a href="https://github.com/Mrbanano"><img src="https://i.postimg.cc/130cv0TM/Mac-Book-2-2.png" width="90%"></a>
</div>

## Backend

La aplicación del servidor sigue la arquitectura REST , escrita con Javascript Es6 , almacenando los datos en una basa de datos no relacional como MongoDB.

Esta aplicación cuenta con la operación CRUD para usuarios, asignación de roles, autentificación por Json web tokens y CRUD de tickets

<div align="center">
  <a href="https://github.com/Mrbanano"><img src="https://i.postimg.cc/tTGzkSRr/image-1.png" width="90%"></a>
</div>

## Frontend

Para el desarollo del frontend se eligió React para la creación de la interfase dinámica, se consumen los datos con Axios y son distribuidos por la aplicación mediante la API context nativa de react.
