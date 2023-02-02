# Lazy-load
El fin de la carga perezosa es que solo se carguen los módulos cuando son requeridos. La estructura de directorios que tiene el proyecto Lazy-load da una idea de como
va a funcionar. Para lograr el lazy-load creamos distintos módulos, que van a estar compuestos por diversos componentes que se van a comportar como hijos de dichos
módulos. Creamos cada módulo con su routing mediante el comando ng g m [nombredelmódulo] --routing. En este archivo es dónde especificaremos los componentes hijos.
Después en el app-routing.module usaremos en la constante routes el siguiente código:
 {
    path: '*', 
    loadChildren: () => import('./*/*.module').then( module => module.*Module ) 
  },

import es una función que retorna una promesa. Cuando se ejecuta, es decir, cuando se carga el módulo se activa "then" que carga el componente por defecto (el que
figura en path: **) y el resto. 
