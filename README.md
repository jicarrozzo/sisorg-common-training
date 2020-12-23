# Ejercicio de implementación de @agilis/common
#### Si no saben como clonar el repositorio ver en la segunda parte de este doc

## Paso a paso del ejercicio
- Crear nueva app: ng new prueba-common

	- Agregar Bootstrap
		```ng add ngx-bootstrap ```
		
	- Agregar Angular material
		```ng add @angular/material```
	
	- Agregar @Agilis/common
		```npm i @agilis/common```
		
	- Agregar moment.js
		```npm install moment --save```
	
	- Manejo angular Material
		1. Crear un modulos para la importación de Angular.Material y NGX-Bootstrap 
      (*material.module * y *bootstrap.module* )
		2. Agregar parches de estilos (*style.scss * y *themes/table.scss*)
	
	- Agregar una "pagina" del tipo *lazyloading*
		```ng generate module pages/paises --route paises --module app.module```
	
	- Modificar el router para que nos dirija por default a la nueva pagina
		```{ path:'', redirectTo:'paises', pathMatch:'full'},```
	
	- Crear los modelos de Paises (con namespace)
	Clase de Pais y PaisParams
	
	- **MAIN **: 
		Agregar un form tipo Main: *axe-form*
		Agregar una tabla en seccion form-body: *axe-table*
		Declarar los rows:  *tablerows*
		Agregar template de resultados:
		``` <ng-template #resultsFrame let-item></ng-template>```
		Crear data y bindiar el resultado: crear datos locales para probar la tabla
	
	- **SEARCH**:
		Agregar un form tipo Search dentro de un ng-template
		Agregar funcion para mostrarlo desde el boton buscar del Main: *(onShowSearch)*
		Importar NGXBoostrap Modal desde el constructor
		Guardar la referencia que genera el modal en una variable (para luego apagarlo)
		Control de errores: *UINotificationHelper* de @agilis/common
		Agregar una funcion para cerrar el modal: utilizando la referencia
		Agrear input: *axe-input*
		Bindiarlo a una variable local para luego utilizarlo
		Agregar boton de buscar al form de Search
		Agregar una funcion que realizar la busqueda: *get()* : probar con datos locales
	
	-  **SERVICE**:
		Crear un servicio que permita llamar a la API de Agilis.Common
		Crear un metodo "get()" que retorne la lista de paises 
		Guardar la url del rest en los *enviroments*
		
		-** DATA**:
		Crear form: copiando search pero del tipo "Data"
		Agregar un boton en el Main en la seccion *form-header-buttons-end* que active el nuevo form.
		Agregar funciones de show, close del modal y una funcion *set()* para cuando se confirma.
		Agregar los inputs para los datos del Pais (solo los que NO son null)
		Agregar el nuevo registro al array local (prueba local)
		Bindear los datos de los input  a un objeto local *itemSelected * para reutilizar el form.


## Como utilizar el ejemplo
Para utilizar el codigo, simplemente deben clonarlo. Para ellos hay varios metodos, aqui les explico como hacerlo desde VS Code:
  1.  Abrir una instancia de VS Code.
  2.  Abrir la paleta de comandos (F1).
  3.  Ingresar: Git:Clone
  4.  Intresar la url del repositorio:
      `https://github.com/jicarrozzo/sisorg-angular-training.git`
  5.  Seleccionar en que carpeta desean colocar el repositorio.
  6.  Done!.

Una vez que finaliza la descarga, VSCode les pregunta si desean abrir la carpeta, le ponen que si. 
Si no, simplemente abren una ventana de VSCode y buscan la carpeta que acaban de clonar.

Desde VSCode, abren una instancia de la terminal (Ctrl+J), y corren el siguiente comando (verificar que esten la carpeta del proyecto):
  ``` npm install```
  o
  ``` npm i ```

  Este comando toma el archivo 'package.json' e instala todas las dependencias necesarias para que el proyecto funcione correctamente.

  Una vez finaliza la instalación, podemos correr:
  ``` ng serve ```
  o
  ``` ng serve --open ```

  para levantar el server (y el browser en caso de --open).

  # Exitos y happy coding!!!!