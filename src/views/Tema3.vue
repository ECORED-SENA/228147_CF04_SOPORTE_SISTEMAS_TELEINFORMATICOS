<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 3
      h1 Sistemas operativos
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g1__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
        )
        .bloque-texto-g1__texto.p-4(data-aos="flip-down")
          p.mb-0 Un programa que se ejecuta hace una cosa muy sencilla: ejecuta instrucciones. Muchos millones (y hoy en día, incluso miles de millones) de veces por segundo, el procesador obtiene una instrucción de la memoria, la decodifica (es decir, averigua de qué instrucción se trata) y la ejecuta (es decir, hace lo que se supone que debe hacer, como sumar dos números, acceder a la memoria, comprobar una condición, saltar a una función, etc.). Una vez que ha terminado con esta instrucción, el procesador pasa a la siguiente, y así sucesivamente, hasta que el programa finalmente se completa.
    .row.justify-content-center.align-items-center.mb-5
      .col-7.col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img2.svg', alt='')
      .col-lg-8
        .tarjeta-azul2.p-5(data-aos="fade-left")
          p.mb-0.texto-blanco Así pues, se acaban de describir los fundamentos del modelo Von Neumann de computación. Suena sencillo, ¿verdad? Pero, en esta temática, se aprenderá que mientras un programa se ejecuta, un montón de otras cosas salvajes están sucediendo con el objetivo principal de hacer que el sistema sea fácil de usar. Hay un cuerpo de <i>software</i>, de hecho, que es responsable de facilitar la ejecución de programas (incluso permitiendo aparentemente ejecutar muchos al mismo tiempo), permitiendo que los programas compartan memoria, permitiendo que los programas interactúen con los dispositivos, y otras cosas divertidas como esa. Ese cuerpo de <i>software</i> se llama sistema operativo (SO), ya que se encarga de garantizar que el sistema funcione correctamente y de forma eficiente y fácil de usar.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-3(data-aos="flip-up")
          p.mb-4 La principal forma en que el SO hace esto es a través de una técnica general que se llama virtualización. Es decir, el SO toma un recurso físico (como el procesador, o la memoria, o un disco) y lo transforma en una forma virtual más genérica, potente y fácil de usar. Por eso, a veces se hace referencia al sistema operativo como una máquina virtual.
        p(data-aos="fade-left") Por supuesto, para permitir que los usuarios le digan al SO qué hacer y así hacer uso de las características de la máquina virtual (como ejecutar un programa, o asignar memoria, o acceder a un archivo) el SO también proporciona algunas interfaces (API) que se pueden llamar. Un SO típico, de hecho, exporta unos cientos de llamadas al sistema que están disponibles para las aplicaciones. Dado que el SO proporciona estas llamadas para ejecutar programas, acceder a la memoria y a los dispositivos, y otras acciones relacionadas, a veces, se dice que el SO proporciona una biblioteca estándar a las aplicaciones.
      .col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img3.png', alt='')
    p.mb-5 Dado que el SO proporciona estas llamadas para ejecutar programas, acceder a la memoria y a los dispositivos, y otras acciones relacionadas, a veces, se dice que el SO proporciona una biblioteca estándar a las aplicaciones.
    .row.justify-content-center.align-items-center
      .col-10.col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img4.png', alt='')
      .col-lg-6
        .tarjeta-gris.p-4(data-aos="fade-left")
          p Dado que la virtualización permite que muchos programas se ejecuten (compartiendo así la CPU), y que muchos programas accedan simultáneamente a sus propias estructuras y datos (compartiendo así la memoria), y que muchos programas accedan a los dispositivos (compartiendo así los discos, etc.), el sistema operativo se conoce a veces como un gestor de recursos. 
          p Cada una de las CPU, la memoria y el disco es un recurso del sistema; por lo tanto, <b>el papel del sistema operativo es gestionar esas fuentes,</b> haciéndolo de manera eficiente o justa o, de hecho, con muchos otros objetivos posibles en mente.
    separador
    #t_3_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 3.1 Características 
    p.mb-5 Para entender un poco mejor el papel del sistema operativo, se exponen algunos ejemplos.
    .row.bg-titulo2.align-items-center.p-2.mb-4
      h3.mb-3.mt-2.texto-derecha Virtualización de la CPU
    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
      figure(data-aos="fade-right")
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/lGLzCzgrcF8" title="Virtualización CPU" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.bg-titulo2.align-items-center.p-2.mb-4
      h3.mb-3.mt-2.texto-derecha Comportamiento CPU
    .row.justify-content-center.align-items-center.mb-4
      .col-9
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema3/video.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Comportamiento CPU
                  p.text-small Estimado aprendiz se recomienda revisar el siguiente video para dar continuidad a la información.
                .col-sm-auto
                  a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=ORUDW3qk0Js" target="_blank")
                    i.fas.fa-link.p-2
                    span Ver video
        .cajon.color-primario.p-4(data-aos="flip-up")
          p.mb-0 Para ejecutar programas, y detenerlos, y para decirle al SO qué programas ejecutar, es necesario que haya algunas interfaces (API) para comunicar lo que se desea al SO. Sobre estas APIs se hablará. A lo largo del componente, pues, de hecho, son la principal forma en que la mayoría de los usuarios interactúan con los sistemas operativos.
      .col-3
        figure
          img(src='@/assets/curso/temas/tema3/img37.svg', alt='imagen decorativa')
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-adicional-1.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img5.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 También se puede notar que la posibilidad de ejecutar varios programas a la vez plantea todo tipo de preguntas nuevas. Por ejemplo, si dos programas quieren ejecutarse en un momento determinado, ¿cuál debería ejecutarse? Esta pregunta se responde con una política del SO; las políticas se utilizan en muchos lugares diferentes dentro de un SO para responder a este tipo de preguntas, y por ello se estudiarán mientras se aprende sobre los mecanismos básicos que implementan los sistemas operativos (como la capacidad de ejecutar múltiples programas a la vez). De ahí el papel del SO como gestor de recursos.
    .row.bg-titulo2.align-items-center.p-2.mb-4
      h3.mb-3.mt-2.texto-derecha Virtualización de la memoria
    .bg-fondo4          
      .row.justify-content-center.align-items-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img6.png', alt='')    
        .col-lg-11
          .tarjeta.tarjeta-gris-degrade.p-3(data-aos="fade-up")
            p.mb-0 El modelo de memoria física presentada por las máquinas modernas es muy simple. La memoria es sólo una matriz de bytes; para leer la memoria, hay que especificar una dirección para poder acceder a los datos almacenados en ella; para escribir (o actualizar) la memoria, también hay que especificar los datos que se escribirán en la dirección dada. Se accede a la memoria todo el tiempo cuando se ejecuta un programa. Un programa mantiene todas sus estructuras de datos en la memoria, y accede a ellas a través de varias instrucciones, como loads y stores u otras instrucciones explícitas que acceden a la memoria al hacer su trabajo.
      .row.justify-content-center.align-items-center.mb-5(data-aos="flip-down")
        figure(data-aos="fade-right")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/Yr6DUp-I_bk" title="Virtualización de la memoria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.bg-titulo2.align-items-center.p-2.mb-4
      h3.mb-3.mt-2.texto-derecha Concurrencia
    .row.justify-content-center.align-items-center.mb-5
      .col-7.col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img7.svg', alt='')
      .col-lg-8
        .tarjeta-azul2.p-5(data-aos="fade-left")
          p.mb-0.texto-blanco Otro tema principal es la concurrencia. Se usa este término conceptual para hacer referencia a una serie de problemas que surgen, y deben ser abordados, cuando se trabaja en muchas cosas a la vez (es decir, de forma concurrente) en el mismo programa. Resulta que hacer esto conduce a algunos problemas profundos e interesantes. Por desgracia, los problemas de concurrencia ya no se limitan sólo al propio sistema operativo. De hecho, los modernos programas multihilo presentan los mismos problemas.
    .row.bg-titulo2.align-items-center.p-2.mb-4
      h3.mb-3.mt-2.texto-derecha Persistencia
    p.mb-5(data-aos="fade-right") En la memoria del sistema, los datos pueden perderse fácilmente, ya que dispositivos como la DRAM almacenan valores de forma volátil; cuando se va la corriente o el sistema se bloquea, cualquier dato en la memoria se pierde. Por tanto, necesitamos <i>hardware</i> y <i>software</i> para poder almacenar los datos de forma persistente; este almacenamiento es, por tanto, fundamental para cualquier sistema, ya que los usuarios se preocupan mucho por sus datos. El <i>hardware</i> se presenta en forma de algún tipo de dispositivo de entrada/salida o E/S; en los sistemas modernos, un disco duro es un depósito común para la información de larga duración, aunque las unidades de estado sólido (SSD) también se están abriendo paso en este ámbito.
    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img8.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-primario.p-4(data-aos="flip-up")
        p.mb-0 El <i>software</i> del sistema operativo que suele gestionar el disco se denomina sistema de archivos, por lo que se encarga de almacenar los archivos que el usuario crea de forma fiable y eficiente en los discos del sistema. A diferencia de las abstracciones proporcionadas por el SO para la CPU y la memoria, el SO no crea un disco privado y virtualizado para cada aplicación. Más bien, se asume que, a menudo, los usuarios querrán compartir información que está en archivo; de ahí el ejemplo que se expone a continuación.
    .bg-fondo5
      p.mb-5 A diferencia de las abstracciones proporcionadas por el SO para la CPU y la memoria, el SO no crea un disco privado y virtualizado para cada aplicación. Más bien, se asume que, a menudo, los usuarios querrán compartir información que está en archivo; de ahí el ejemplo que se expone a continuación:
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4.mb-4
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema3/img9.svg', alt='')
        .col-lg-8
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-5(data-aos="fade-left")
            .row.justify-content-center.align-items-center
              .col-5.col-lg-2.d-none.d-lg-block
                figure.mb-lg-0.mb-3
                  img(src='@/assets/curso/temas/tema3/img10.svg', alt='').img-numeros
              .col-lg-8
                p.mb-lg-0.mb-5 Cuando se escribe un programa en C, se puede utilizar primero un editor (por ejemplo, Emacs) para crear y editar el archivo C (emacs -nw main.c).
              .col-10.col-md-8.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema3/img11.svg', alt='').img-numeros2
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-5(data-aos="fade-left")
            .row.justify-content-center.align-items-center
              .col-10.col-md-8.col-lg-2.order-2.order-lg-1
                figure
                  img(src='@/assets/curso/temas/tema3/img13.svg', alt='').img-numeros2
              .col-lg-8.order-1.order-lg-2.mb-lg-0.mb-5
                p Una vez hecho esto, se puede utilizar el compilador para convertir el código fuente en un ejecutable (por ejemplo, gcc -o main main.c).
              .col-5.col-lg-2.d-none.d-lg-block
                figure
                  img(src='@/assets/curso/temas/tema3/img12.svg', alt='').img-numeros
          .tarjeta.tarjeta--blanca.px-4.py-2.mb-5(data-aos="fade-left")
            .row.justify-content-center.align-items-center
              .col-5.col-lg-2.d-none.d-lg-block
                figure.mb-lg-0.mb-3
                  img(src='@/assets/curso/temas/tema3/img14.svg', alt='').img-numeros
              .col-lg-8
                p.mb-lg-0.mb-5 Cuando se haya terminado, se puede ejecutar el nuevo ejecutable (por ejemplo, ./main).
              .col-10.col-md-8.col-lg-2
                figure
                  img(src='@/assets/curso/temas/tema3/img15.svg', alt='').img-numeros2
      .row.justify-content-center.align-items-center
        .col-lg-10
          .tarjeta.tarjeta-azul2.p-4(data-aos="flip-down")
            p.mb-0.texto-blanco De este modo, se comparten los archivos entre diferentes procesos. Primero, Emacs crea un archivo que sirve de entrada al compilador; el compilador utiliza ese archivo de entrada para crear un nuevo archivo ejecutable (en muchos pasos - toma un curso de compiladores para conocer los detalles); finalmente, el nuevo ejecutable se ejecuta. Y así nace un nuevo programa.
    separador
    #t_3_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 3.2 <i>Software</i> utilitario
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img16.png')})`}"
          )
          .bloque-texto-g1__texto.p-4(data-aos="flip-down")
            p.mb-0 Ahora, una vez, estudiado las características de un SO, se hace necesario conocer los <i>software</i> utilitarios, como herramientas de soporte y mejora en la ejecución de programas o en la realización de una función específica. Existen tanto licenciados como aquellos de código abierto. Se expone en qué consiste cada una de estas categorías.
    .row.justify-content-center.align-items-center.mb-5
      .col-8.col-lg-4.mb-3
        figure
          img(src='@/assets/curso/temas/tema3/img17.png', alt='')
      .col-lg-8
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul2")
          .row(titulo="Código abierto")
            p Las licencias de <i>software</i> de código abierto son un formato de licencia de derechos de autor aceptado para el <i>software</i> diseñado para permitir a los desarrolladores modificar y compartir el código fuente que hay detrás. Dependiendo de las preferencias del desarrollador, el <i>software</i> de código abierto puede ser freeware, shareware o de pago.
            .row.justify-content-center.align-items-center.mb-3              
              .col-lg-9
                p <b>Ventajas:</b> muchas organizaciones y grupos supervisan la concesión de licencias de código abierto, en parte porque existe desde hace mucho tiempo. Esto hace que sea más viable para los desarrolladores de <i>software</i> que quieren proteger su trabajo. Como este formato existe desde hace tanto tiempo, hay más gente que lo reconoce, lo que hace más fácil proteger tu código fuente contra alguien que lo utilice de forma no autorizada por ti.
              .col-8.col-lg-3
                figure
                  img(src='@/assets/curso/temas/tema3/img18.svg', alt='')
            p <b>Desventaja:</b> las licencias de código abierto no ofrecen garantías ni soporte para solucionar los problemas que puedan surgir. Además, como el <i>software</i> de código abierto suele ser desarrollado y distribuido por múltiples desarrolladores, los problemas a veces se pierden.
          .row(titulo="Código con licencias")
            p El licenciamiento, también conocido como licenciamiento propietario, es un formato de licenciamiento de forma libre.
            .row.justify-content-center.align-items-center.mb-3
              .col-8.col-lg-3
                figure
                  img(src='@/assets/curso/temas/tema3/img19.svg', alt='')
              .col-lg-9
                p <b>Ventajas:</b> a diferencia del código abierto, las licencias propietarias incluyen soporte, correcciones de errores y parches, además de otro tipo de soporte y soluciones por cortesía del desarrollador. Esto puede ayudar a resolver los problemas cuando hay interrupciones, ya que los largos tiempos de atención pueden costar dinero a su organización, o peor aún, a los clientes.
            p <b>Desventaja:</b> como este tipo de licencia es tan libre, no ofrece ninguna supervisión real. Esto significa que cuando se descarga un título de <i>software</i> bajo una licencia propietaria, es el desarrollador quien establece las reglas sobre lo que se puede y no se puede hacer con él. Además, como este tipo de licencia no está reconocido por la ley, es posible que se le pida que acepte un extenso conjunto de términos y condiciones.
          .row(titulo="Licencias duales de código abierto")
            p Es un modelo de negocio de código abierto bajo el cual los vendedores ponen su <i>software</i> a disposición tanto a través de licencias de código abierto como bajo un modelo diferente en el que hay una cuota.
            .row.justify-content-center.align-items-center.mb-3
              .col-8.col-lg-3
                figure
                  img(src='@/assets/curso/temas/tema3/img20.svg', alt='')
              .col-lg-9
                p <b>Ventajas:</b> este tipo de licencia de <i>software</i> puede ser ventajoso porque ofrece opciones. Se puede optar por la versión sin cuotas, a menudo conocida como “<i>freemium</i>”.
                p <b>Desventaja:</b> a menudo, las versiones gratuitas de <i>software</i> disponibles bajo este formato son limitadas en términos de capacidad. Sólo ofrece una versión básica de lo que ofrece la versión comercial, basada en la suscripción.
    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-primario.p-4.mb-5(data-aos="flip-up")
        p.mb-0 Para elegir el tipo de licencia que conviene, la pregunta que debe hacerse en última instancia es: ¿cuál le permitirá servir mejor a sus clientes? En el panorama competitivo actual, atender las necesidades de TI de sus clientes significa no sólo satisfacer y superar sus expectativas, sino también mejorar en todo momento y anticiparse a sus necesidades de TI antes de que sean conscientes de ellas. Es por ello que conocer los SO también de código abierto, como Linux, debe ser parte del trabajo.
      p.mb-5 En el panorama competitivo actual, atender las necesidades de TI de sus clientes significa no sólo satisfacer y superar sus expectativas, sino también mejorar en todo momento y anticiparse a sus necesidades de TI antes de que sean conscientes de ellas. Es por ello que conocer los SO también de código abierto, como Linux, debe ser parte del trabajo.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-3
        figure
          img(src='@/assets/curso/temas/tema3/img21.svg', alt='')
      .col-lg-9
        TabsA.color-primario
          .tarjeta.tarjeta--gris.p-4(titulo="¿Qué es?")
            p Linux es un sistema operativo (SO) de código abierto. Linux es un sistema operativo libre y de código abierto, publicado bajo la Licencia Pública General de GNU (GPL). Cualquiera puede ejecutar, estudiar, modificar y redistribuir el código fuente, o incluso vender copias de su código modificado, siempre que lo haga bajo la misma licencia.
          .tarjeta.tarjeta--gris.p-4(titulo="¿Cómo funciona?")
            p Linux se ha convertido en el mayor proyecto de <i>software</i> de código abierto del mundo. Programadores y desarrolladores profesionales y aficionados de todo el mundo contribuyen al núcleo de Linux, añadiendo funciones, encontrando y corrigiendo errores y fallos de seguridad, aplicando parches en vivo y aportando nuevas ideas, al tiempo que comparten sus contribuciones con la comunidad. 
          .tarjeta.tarjeta--gris.p-4(titulo="¿Cómo es su diseño?")
            p Linux fue diseñado para ser similar a UNIX, pero ha evolucionado para funcionar en una amplia variedad de <i>hardware</i>, desde teléfonos hasta supercomputadores. Todos los sistemas operativos basados en Linux incluyen el kernel de Linux -que gestiona los recursos de <i>hardware</i>- y un conjunto de paquetes de <i>software</i> que conforman el resto del sistema operativo.
            .row.justify-content-center.align-items-center
              .col-lg-8
                ImagenInfografica.color-acento-botones
                  template(v-slot:imagen)
                    figure
                      img(src='@/assets/curso/temas/tema3/img22.svg', alt='')
                  .tarjeta.color-primario.p-4(x="90%" y="55%" numero="")
                    p.texto-blanco El SO incluye algunos componentes básicos comunes, como las herramientas GNU, entre otros. Estas herramientas ofrecen al usuario una forma de gestionar los recursos proporcionados por el núcleo, instalar <i>software</i> adicional, configurar el rendimiento y la seguridad, etc. Todas estas herramientas juntas conforman el sistema operativo funcional. Como Linux es un sistema operativo de código abierto, las combinaciones de <i>software</i> pueden variar entre las distribuciones de Linux.
          .tarjeta.tarjeta--gris.p-4(titulo="¿Qué incluye Linux?")
            ul.lista-ul--color.fa-ul2
              li 
                i.fas.fa-check-circle
                p.mb-0 <b>Kernel:</b> el componente base del sistema operativo. Sin él, el SO no funciona. El núcleo gestiona los recursos del sistema y se comunica con el <i>hardware</i>. Es responsable de la gestión de la memoria, los procesos y los archivos.
              li 
                i.fas.fa-check-circle
                p.mb-0 <b>Espacio de usuario del sistema:</b> la capa administrativa para las tareas a nivel de sistema, como la configuración y la instalación de <i>software</i>. Incluye el shell, o línea de comandos, los demonios, los procesos que se ejecutan en segundo plano y el entorno de escritorio.
              li 
                i.fas.fa-check-circle
                p.mb-0 <b>Aplicaciones:</b> un tipo de <i>software</i> que permite realizar una tarea. Las aplicaciones incluyen desde herramientas de escritorio y lenguajes de programación hasta suites empresariales multiusuario. La mayoría de las distribuciones de Linux ofrecen una base de datos central para buscar y descargar aplicaciones adicionales.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4.mb-5(data-aos="flip-up")
          p.mb-0 Sumado a esto, se debe tener presente también que los <i>software</i>s licenciados y utilidades de monitoreo le ayudan a gestionar los recursos de los equipos con los que se cuenta dentro de la red de una organización.
        p El <i>software</i> de monitorización está diseñado para hacer un seguimiento de las operaciones y actividades de los usuarios que trabajan en los sistemas de la empresa. Básicamente, supervisa las operaciones que realizan los usuarios en su sistema y proporciona servicios de información al administrador del sistema o de la red. Este <i>software</i> de supervisión también se conoce como <i>software</i> de vigilancia informática. Entre estos se encuentran:
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img23.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img24.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Básicamente, supervisa las operaciones que realizan los usuarios en su sistema y proporciona servicios de información al administrador del sistema o de la red. Este <i>software</i> de supervisión también se conoce como <i>software</i> de vigilancia informática. Entre estos se encuentran:
    .row.bg-c1.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--blanca.bg-linea-tiempo.p-5
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-5 <b style= 'color:#5573C6;'>Visor de escritorio de empleados</b>
                  p El <i>software</i> de monitorización de computadores es una herramienta de monitorización ligera, pero potente, que registra todas las actividades del escritorio de los empleados y presenta una transmisión en directo. Funciona como una cámara de vigilancia que se fija sobre la pantalla de los empleados. Instala un agente de vigilancia en el computador del empleado de forma remota o manual. A partir de entonces, el equipo estará bajo vigilancia completa en cualquier momento.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img25.png', alt='', style="width: 400px;").m-auto
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-5 <b style= 'color:#5573C6;'>ActiveTrak</b>
                  p Es una herramienta de monitorización de aspecto elegante que instala el Agente en cada computador remoto y le presenta el estado en vivo de cada computador. Proporciona horas productivas e improductivas, capturas de pantalla de las actividades y tiene la capacidad de monitorizar en tiempo real. Con la ayuda de la pantalla de productividad, puede evaluar el rendimiento de los empleados sobre una base diaria, semanal, mensual o anual. También proporciona una lista del empleado más productivo y la lista de los sitios web más visitados por los usuarios.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img26.png', alt='', style="width: 400px;").m-auto
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-5 <b style= 'color:#5573C6;'>Flexispy</b>
                  p La mayoría de las herramientas de monitorización son únicamente útiles para los sistemas informáticos, pero Flexispy es una de esas herramientas que soporta la monitorización de dispositivos móviles como smartphones y tablets también. Usted puede optar por monitorear sus teléfonos inteligentes basados en Android y iPhone y grabar la comunicación de audio.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img27.svg', alt='', style="width: 400px;").m-auto
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-5 <b style= 'color:#5573C6;'>SoftActivity</b>
                  p Es una herramienta de monitorización que graba la pantalla de tu computador, la comunicación en Skype, Gmail, Messenger, etc. Realiza capturas de pantalla constantes y genera un vídeo. Guarda el vídeo y lo puedes ver más tarde. También puedes ver la grabación en directo desde cualquier computador. La interfaz del <i>software</i> es bastante directa y permite al usuario instalar el agente directamente en los computadores de los empleados. Puede grabar las pantallas, las pulsaciones de teclas, los sitios web visitados y las conversaciones de chat. Cuando se alista el computador del empleado, se muestra en una lista en la que se puede elegir enviar una notificación cuando se requiera.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img28.png', alt='', style="width: 400px;").m-auto
              .row.justify-content-center.align-items-center
                .col-lg-6.mb-4.mb-lg-0
                  h4.mb-5 <b style= 'color:#5573C6;'>Kickidler</b>
                  p Es otra herramienta de monitorización que graba las pantallas en directo del empleado. Puede obtener la información sobre lo que sus empleados están haciendo, qué sitios web están visitando o qué aplicación están utilizando. El <i>software</i> muestra el período exacto en que su empleado fue productivo y cuántos descansos se tomó.
                .col-lg-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img29.svg', alt='', style="width: 400px;").m-auto
    .row.justify-content-center.align-items-center
      .cajon.color-primario.p-4(data-aos="flip-up")
        p.mb-0 Después de conocer los beneficios del <i>software</i> de monitorización de computadores y las breves reseñas presentadas anteriormente, se puede elegir fácilmente el <i>software</i> que sea eficiente, beneficioso y adecuado para la organización. 
    separador
    #t_3_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 3.3 Seguridad
    p.mb-5 Ahora que ya se tiene una idea de lo que hace un sistema operativo, (toma recursos físicos, como la CPU, la memoria o el disco, y los virtualiza). Maneja cuestiones difíciles y complicadas relacionadas con la concurrencia y almacena los archivos de forma persistente, haciéndolos seguros a largo plazo. Dado que se quiere construir un sistema de este tipo, se deben tener algunos objetivos en mente que ayuden a enfocar el diseño e implementación y a hacer las compensaciones necesarias (encontrar el conjunto correcto de compensaciones es una clave para construir sistemas).
    .bg-fondo3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4
          .tarjeta-titulo3.p-2
            h4.mb-0.text-center.texto-blanco Enfocar diseño e implementación
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-8
          ImagenInfografica.color-adicional-1s
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema3/img30.png', alt='')
            .tarjeta.color-adicional-1.p-4(x="42%" y="95%" numero="")
              h5.texto-blanco Crear un sistema cómodo y fácil de usar
              p.texto-blanco Uno de los objetivos más básicos es crear algunas abstracciones para que el sistema sea cómodo y fácil de usar. Las abstracciones son fundamentales para todo lo que hacemos en informática. La abstracción hace posible escribir un gran programa dividiéndolo en piezas pequeñas y comprensibles, escribir un programa de este tipo en un lenguaje de alto nivel como el C sin pensar en el ensamblaje, escribir código en ensamblaje sin pensar en las puertas lógicas y construir un procesador a base de puertas sin pensar demasiado en los transistores. La abstracción es tan fundamental que a veces olvidamos su importancia, pero no lo haremos aquí; por lo tanto, en cada sección, discutiremos algunas de las principales abstracciones que se han desarrollado a lo largo del tiempo, dándote una forma de pensar en piezas del SO.
            .tarjeta.color-adicional-1.p-4(x="51%" y="95%" numero="")
              h5.texto-blanco Proporcionar un alto rendimiento
              p.texto-blanco Uno de los objetivos al diseñar e implementar un sistema operativo es proporcionar un alto rendimiento; otra forma de decir esto es que nuestro objetivo es minimizar los gastos generales del SO. La virtualización y la facilidad de uso del sistema merecen la pena, pero no a cualquier precio. Estas sobrecargas surgen de varias formas: tiempo extra (más instrucciones) y espacio extra (en memoria o en disco). Buscaremos soluciones que reduzcan al mínimo uno u otro, o ambos, si es posible. La perfección, sin embargo, no siempre es alcanzable, algo que aprenderemos a notar y (en su caso) a tolerar.
            .tarjeta.color-adicional-1.p-4(x="59%" y="95%" numero="")
              h5.texto-blanco Establecer protección entre aplicaciones
              p.texto-blanco Otro objetivo será establecer protección entre aplicaciones, así como entre el SO y las aplicaciones. Dado que se quiere permitir que se ejecuten muchos programas al mismo tiempo, se debe asegurar de que el mal comportamiento malicioso o accidental de uno no perjudique a los demás; desde luego, no se quiere que una aplicación pueda perjudicar al propio SO (ya que eso afectaría a todos los programas que se ejecutan en el sistema). La protección está en el corazón de uno de los principales principios subyacentes a un sistema operativo, que es el del aislamiento; aislar los procesos entre sí es la clave de la protección y, por tanto, subyace a gran parte de lo que debe hacer un SO.
            .tarjeta.color-adicional-1.p-4(x="67%" y="95%" numero="")
              h5.texto-blanco Tener eficiencia energética
              p.texto-blanco La eficiencia energética es importante en nuestro mundo cada vez más ecológico; la seguridad (una extensión de la protección, en realidad) contra las aplicaciones maliciosas es fundamental, especialmente en estos tiempos de alta conexión en red; la movilidad es cada vez más importante a medida que los SO se ejecutan en dispositivos cada vez más pequeños. Dependiendo de cómo se utilice el sistema, el SO tendrá diferentes objetivos y, por lo tanto, es probable que se implemente de maneras al menos ligeramente diferentes. Sin embargo, como veremos, muchos de los principios que presentaremos sobre cómo construir un SO son útiles en una serie de dispositivos diferentes.
    .row.justify-content-center.align-items-center.mb-4
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema3/img31.svg', alt='')
      .col-lg-8
        .cajon.color-primario.p-4(data-aos="flip-up")
          p.mb-0 El sistema operativo también debe funcionar sin parar; cuando falla, todas las aplicaciones que se ejecutan en el sistema también fallan. Debido a esta dependencia, los sistemas operativos suelen esforzarse por ofrecer un alto grado de fiabilidad. Como los sistemas operativos son cada vez más complejos (a veces contienen millones de líneas de código), construir un sistema operativo fiable es todo un reto y, de hecho, gran parte de la investigación en curso en este campo (incluyendo algunos de nuestros propios trabajos [BS+09, SS+10]) se centra precisamente en este problema.
    p.mb-4(data-aos="fade-left") No obstante, existen otras cuestiones a considerar, por ejemplo, una entrada incorrecta dada inocentemente a un programa de usuario o incluso al sistema operativo probablemente hará que se bloquee, pero no es peor. Sin embargo, los programadores malintencionados pueden elaborar cuidadosamente la entrada que desborda el búfer para inyectar su propio código en el sistema objetivo, permitiéndoles esencialmente tomar el control y hacer su propia voluntad. Si tiene éxito en un programa de usuario conectado a la red, los atacantes pueden ejecutar cálculos arbitrarios o incluso alquilar ciclos en el sistema comprometido; si tiene éxito en el propio sistema operativo, el ataque puede acceder incluso a más recursos, y es una forma de lo que se llama escalada de privilegios (es decir, código de usuario que obtiene derechos de acceso al núcleo). Si no se adivina, todas estas cosas son malas.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.mb-4.mb-lg-0
        .cajon.color-primario.p-4(data-aos="flip-up")
          p.mb-0 La primera y más sencilla defensa contra el desbordamiento de búfer, es impedir la ejecución de cualquier código que se encuentre dentro de ciertas regiones de un espacio de direcciones (por ejemplo, dentro de la pila). El bit NX (para No-eXecute), introducido por AMD en su versión de x86 (un bit XD similar está ahora disponible en la de Intel), es una de estas defensas; simplemente impide la ejecución de cualquier página que tenga este bit establecido en su correspondiente entrada de la tabla de páginas. El enfoque evita que se ejecute el código inyectado por un atacante en la pila del objetivo, y por lo tanto mitiga el problema.
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img32.png', alt='')
    p.mb-5(data-aos="fade-right") Sin embargo, los atacantes inteligentes son … inteligentes…, e incluso cuando el código inyectado no puede ser añadido explícitamente por el atacante, secuencias de código arbitrarias pueden ser ejecutadas por el código malicioso. La idea se conoce, en su forma más general, como programación orientada al retorno (ROP), y realmente es bastante brillante. 
    .bg-fondo3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-5
          .tarjeta-titulo3.p-2
            h4.mb-0.text-center.texto-blanco Programación orientada al retorno
      .row.justify-content-center.align-items-center.mb-5
        .bg-tarjeta1.p-3
          .row.justify-content-center.align-items-center.mb-5
            .col-1
            .col-lg-7
              p(data-aos="fade-right") #[b La observación detrás de ROP es que hay muchos bits de código (gadgets, en la terminología de ROP) dentro del espacio de direcciones de cualquier programa, especialmente los programas C que se enlazan con la voluminosa biblioteca C. Por lo tanto, un atacante puede sobrescribir la pila de manera que la dirección de retorno en la función que se está ejecutando apunte a una instrucción maliciosa deseada (o una serie de instrucciones), seguida de una instrucción de retorno.] 
              p(data-aos="fade-right") #[b Al encadenar un gran número de gadgets (es decir, asegurándose de que cada retorno salta al siguiente gadget), el atacante puede ejecutar código arbitrario.] 
            .col-4.col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img35.svg', alt='')
        .bg-tarjeta2.p-3
          .row.justify-content-center.align-items-center.mb-5.p-3
            .col-4.col-lg-3
              figure
                img(src='@/assets/curso/temas/tema3/img36.svg', alt='')
            .col-lg-7
              p.texto-blanco.mb-5(data-aos="fade-left") Para defenderse de ROP (incluyendo su forma anterior, el ataque return-to-libc), Linux (y otros sistemas) añaden otra defensa, conocida como distribución aleatoria del espacio de direcciones (ASLR). En lugar de colocar el código, la pila y la pila en ubicaciones fijas dentro del espacio de direcciones virtual, el sistema operativo aleatoriza su colocación, lo que hace bastante difícil elaborar la intrincada secuencia de código necesaria para implementar esta clase de ataques. La mayoría de los ataques a programas de usuario vulnerables causarán, por tanto, caídas, pero no podrán obtener el control del programa en ejecución.
            .col-2
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/img37.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Adicionalmente, el mundo de la seguridad de los sistemas se ha puesto patas arriba por dos nuevos ataques relacionados. El primero se llama <i>Meltdown</i>, y el segundo <i>Spectre</i>. Fueron descubiertos casi al mismo tiempo por cuatro grupos diferentes de investigadores/ingenieros, y han llevado a un profundo cuestionamiento de las protecciones fundamentales ofrecidas por el <i>hardware</i> de los ordenadores y el SO anterior.
    .row.align-items-center.mb-5
      .col-lg-4
        .tarjeta-titulo.p-2
          h4.mb-0.text-center Ejecución especulativa
    .row.bg-c1.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--blanca.bg-linea-tiempo.p-5
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-5 <b style= 'color:#5573C6;'>¿Qué es?</b>
                  p La debilidad general explotada en cada uno de estos ataques es que las CPU que se encuentran en los sistemas modernos realizan todo tipo de trucos locos entre bastidores para mejorar el rendimiento. Una clase de técnica que se encuentra en el centro del problema es la llamada ejecución especulativa, en la que la CPU adivina qué instrucciones se ejecutarán pronto en el futuro, y comienza a ejecutarlas antes de tiempo. Si las conjeturas son correctas, el programa se ejecuta más rápido; si no, la CPU deshace sus efectos en el estado de la arquitectura (por ejemplo, los registros) y lo intenta de nuevo, esta vez siguiendo el camino correcto.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img38.png', alt='')
              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-5 <b style= 'color:#5573C6;'>¿Cuál es el problema?</b>
                  p El problema de la especulación es que tiende a dejar rastros de su ejecución en varias partes del sistema, como las cachés del procesador, los predictores de bifurcación, etc. y de ahí el problema: como demuestran los autores de los ataques, ese estado puede hacer vulnerable el contenido de la memoria, incluso la que creíamos protegida por la MMU.
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img39.png', alt='')
              .row.justify-content-center.align-items-center
                .col-md-6.mb-4.mb-md-0
                  h4.mb-5 <b style= 'color:#5573C6;'>¿Cómo actuar?</b>
                  p Una vía para aumentar la protección del núcleo fue, por tanto, eliminar la mayor parte del espacio de direcciones del núcleo de cada proceso de usuario y, en su lugar, tener una tabla de páginas del núcleo separada para la mayoría de los datos del núcleo (denominada aislamiento de la tabla de páginas del núcleo, o KPTI). Así, en lugar de mapear el código y las estructuras de datos del núcleo en cada proceso, sólo se mantiene lo mínimo en él; cuando se cambia al núcleo, entonces, se necesita un cambio a la tabla de páginas del núcleo. Esto mejora la seguridad y evita algunos vectores de ataque, pero tiene un coste: el rendimiento. Cambiar de tabla de páginas es costoso. Ah, los costes de la seguridad: la comodidad y el rendimiento. 
                .col-md-4
                  figure
                    img(src='@/assets/curso/temas/tema3/img40.png', alt='')
    .row.justify-content-center.align-items-center
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema3/img41.png', alt='')
      .col-lg-8
        p(data-aos="fade-left") Lamentablemente, KPTI no resuelve todos los problemas de seguridad expuestos anteriormente, sólo algunos de ellos. Y las soluciones simples, como desactivar la especulación, no tendrían mucho sentido, porque los sistemas funcionarían miles de veces más lento. Por lo tanto, es un momento interesante para estar vivo, si la seguridad de los sistemas es lo tuyo.
        .cajon.color-primario.p-4(data-aos="flip-up")
          p.mb-0 Para entender realmente estos ataques, se hace necesario aprender sobre la arquitectura de los ordenadores modernos, como se encuentra en los libros avanzados sobre el tema, centrándose en la especulación y en todos los mecanismos necesarios para implementarla. Definitivamente, leer sobre los ataques <i>Meltdown</i> y <i>Spectre</i>, en los sitios web mencionados anteriormente; de hecho, también incluyen un manual útil sobre la especulación, por lo que quizás no sea un mal lugar para empezar.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
