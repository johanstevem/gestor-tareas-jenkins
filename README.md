# Gestor de Tareas DevOps

## Descripción

Gestor de tareas desarrollado con HTML, CSS y JavaScript como proyecto demostrativo para la implementación de Integración Continua (CI) y Despliegue Continuo (CD) mediante Jenkins.

## Funcionalidades

- Agregar tareas.
- Marcar tareas como completadas.
- Eliminar tareas.
- Contador automático de tareas pendientes.
- Interfaz responsive.

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Jenkins

## Estructura del proyecto

```
gestor-tareas-jenkins
│
├── css
├── js
├── deploy
├── index.html
├── Jenkinsfile
└── README.md
```

## Pipeline

El proyecto utiliza Jenkins para ejecutar automáticamente el proceso de Integración Continua cada vez que se realiza un cambio en la rama **main** del repositorio.

Las etapas del pipeline son:

- Checkout
- Build
- Test
- Deploy

## Autor

Johan Stevem