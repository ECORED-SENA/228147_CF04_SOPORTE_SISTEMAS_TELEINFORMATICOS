<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 1
      h1 Equipos de cómputo
    .bg-fondo1
      .row.justify-content-center.align-items-center.mb-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img1.png', alt='')    
        .col-lg-11
          .tarjeta.tarjeta-gris-degrade.p-3(data-aos="fade-up")
            p.mb-0 En la actualidad, existen numerosas arquitecturas informáticas especializadas para satisfacer las más diversas necesidades de los usuarios. Llevamos computadores en miniatura en nuestros bolsillos que pueden realizar llamadas telefónicas, grabar video y funcionar como participantes de pleno derecho en Internet. Los computadores personales siguen siendo populares en un formato exteriormente similar a los PC de décadas pasadas. Sin embargo, los PC actuales son órdenes de magnitud más capaces que las primeras generaciones en términos de potencia de cálculo, tamaño de la memoria, espacio en disco, rendimiento gráfico y capacidad de comunicación. Estas capacidades permiten a los PC modernos realizar fácilmente tareas que habrían sido inconcebibles en los primeros PC, como la generación en tiempo real de imágenes 3D de alta resolución.
    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-acento-botones.p-4(data-aos="flip-up")
        p.mb-0 Las empresas que ofrecen servicios web a cientos de millones de usuarios construyen vastos almacenes repletos de miles de sistemas informáticos estrechamente coordinados, capaces de responder a un flujo constante de peticiones de los usuarios con extraordinaria rapidez y precisión. Los sistemas de aprendizaje automático se entrenan mediante el análisis de enormes cantidades de datos para realizar actividades complejas como la conducción de automóviles. Todo esto, como se mencionó, ha sido producto de una evolución constante de los   dispositivos informáticos automatizados, tal como se evidencia en el siguiente recurso.
    .row.bg-c1.mb-5
      .col-12
        .p-5
          LineaTiempoC.bg-linea-tiempo.color-acento-botones.p-4.p-lg-5(text-small)
            .row.align-items-center(titulo="1834-1871")
              .col-lg-7.mb-4.mb-lg-0
                h4 La máquina analítica de Charles Babbage 
                p Aunque nunca se construyó un modelo de funcionamiento de la Máquina Analítica, las notas detalladas que Charles Babbage desarrolló desde 1834 hasta su muerte en 1871 describen una arquitectura informática que parecía viable y completa. La máquina analítica estaba destinada a servir como dispositivo informático programable de propósito general. El diseño era totalmente mecánico y debía estar construido en gran parte de latón. La máquina analítica estaba diseñada para ser accionada por un eje accionado por una máquina de vapor.
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img2.png', alt='', style="width: 350px").m-auto
            .row.align-items-center(titulo="1945")
              .col-lg-7.mb-4.mb-lg-0
                h4 ENIAC
                p El ENIAC, <i>Electronic Numerical Integrator and Computer</i>, se completó en 1945 y fue el primer computador electrónico programable de uso general. El sistema consumía 150 kilovatios de electricidad, ocupaba 1.800 pies cuadrados de superficie y pesaba 27 toneladas. El diseño se basaba en tubos de vacío, diodos y relés. El ENIAC contenía más de 17.000 tubos de vacío que funcionaban como elementos de conmutación. Al igual que el motor analítico, utilizaba la representación en base 10 de números decimales de 10 dígitos implementada mediante contadores de anillo de 10 posiciones.
                p La arquitectura de ENIAC era capaz de realizar complejas secuencias de pasos de procesamiento, incluyendo bucles, ramas y subrutinas. El sistema tenía 20 acumuladores de 10 dígitos que funcionaban como los registros de los computadores modernos. Inicialmente no tenía ninguna memoria más allá de los acumuladores. Si se necesitaban valores intermedios para utilizarlos en cálculos posteriores, los datos tenían que escribirse en tarjetas perforadas y volver a leerse cuando se necesitaban. El ENIAC podía realizar unas 385 multiplicaciones por segundo.	
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img3.svg', alt='', style="width: 350px").m-auto
            .row.align-items-center(titulo="1947-1958")
              .col-lg-7.mb-4.mb-lg-0
                h4 PC IBM
                p En los años siguientes a la construcción de ENIAC, varios avances tecnológicos dieron lugar a notables progresos en las arquitecturas informáticas.
                p La invención del transistor en 1947 por parte de John Bardeen, Walter Brattain y William Shockley supuso una gran mejora con respecto a la tecnología de tubos de vacío predominante en aquella época. Los transistores eran más rápidos, más pequeños, consumen menos energía y, una vez que los procesos de producción se habían optimizado lo suficiente, eran mucho más fiables que los tubos propensos a los fallos.
                p La comercialización de los circuitos integrados en 1958, liderada por Jack Kilby de Texas Instruments, inició el proceso de combinar un gran número de componentes antes discretos en un único chip de silicio.
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img4.png', alt='', style="width: 350px").m-auto
            .row.align-items-center(titulo="1971")
              .col-lg-7.mb-4.mb-lg-0
                h4 Microprocesador
                p En 1971 Intel inició la producción del primer microprocesador comercial, el Intel 4004. El 4004 estaba destinado a ser utilizado en calculadoras electrónicas y estaba especializado en operar con dígitos decimales codificados en binario de 4 bits.	 
                p Tomado de LucaDetomi (2005).
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img5.svg', alt='', style="width: 350px").m-auto
            .row.align-items-center(titulo="1981")
              .col-lg-7.mb-4.mb-lg-0
                h4 El microprocesador Intel 8088
                p IBM lanzó el IBM PC en 1981. El PC original contenía un microprocesador Intel 8088 que funcionaba a una frecuencia de reloj de 4,77 MHz y disponía de 16 KB de memoria de acceso aleatorio (RAM), ampliable a 256 KB. Incluía una u, opcionalmente, dos unidades de disquete. También estaba disponible un monitor en color. Las versiones posteriores del PC admitían más memoria, pero como parte del espacio de direcciones se había reservado para la memoria de vídeo y la memoria de sólo lectura (ROM), la arquitectura podía admitir un máximo de 640 KB de RAM.
                p El 8088 contenía 14 registros de 16 bits. Cuatro eran registros de propósito general (AX, BX, CX y DX). Cuatro eran registros de segmento de memoria (CS, DS, SS y ES) que ampliaban el espacio de direcciones a 20 bits. El direccionamiento por segmentos funcionaba añadiendo un valor de registro de segmento de 16 bits, desplazado hacia la izquierda en 4 posiciones de bits, a un desplazamiento de 16 bits contenido en una instrucción para producir una dirección de memoria física dentro de un rango de 1 MB.
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img6.png', alt='', style="width: 350px").m-auto
            .row.align-items-center(titulo="1984")
              .col-lg-7.mb-4.mb-lg-0
                h4 Los microprocesadores Intel 80286 y 80386
                p La segunda generación del PC de IBM, el PC AT, salió al mercado en 1984. Las siglas AT significaban Tecnología Avanzada, y se referían a varias mejoras significativas con respecto al PC original que, en su mayoría, se debían al uso del procesador Intel 80286.
                p Al igual que el 8088, el 80286 era un procesador de 16 bits y mantenía la compatibilidad con el 8088: el código del 8088 podía ejecutarse sin modificaciones en el 80286. El 80286 tenía un bus de datos de 16 bits y 24 líneas de dirección que soportaban un espacio de direcciones de 16 megabytes. El ancho del bus de datos externo era de 16 bits, lo que mejoraba el rendimiento del acceso a los datos respecto al bus de 8 bits del 8088. La tasa de ejecución de instrucciones (instrucciones por ciclo de reloj) era aproximadamente el doble que la del 8088 en muchas aplicaciones. Esto significa que, a la misma velocidad de reloj, el 80286 sería dos veces más rápido que el 8088. El PC AT original sincronizaba el procesador a 6 MHz y una versión posterior funcionaba a 8 MHz. La variante de 6 MHz del 80286 alcanzaba una tasa de ejecución de instrucciones de unos 0,9 MIPS, aproximadamente tres veces la del 8088.
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img7.png', alt='', style="width: 350px").m-auto
            .row.align-items-center(titulo="2007")
              .col-lg-7.mb-4.mb-lg-0
                h4 El iPhone 
                p En 2007, Steve Jobs presentó el iPhone a un mundo que no tenía ni idea de que le sirviera un dispositivo así. El iPhone se basó en avances revolucionarios anteriores de Apple Computer, como el computador Macintosh, lanzado en 1984, y el reproductor de música iPod de 2001. El iPhone combinaba las funciones del iPod, un teléfono móvil y un computador conectado a Internet. El iPhone eliminó el teclado físico que era habitual en los smartphones de la época y lo sustituyó por una pantalla táctil capaz de mostrar un teclado en pantalla o cualquier otro tipo de interfaz de usuario. Además de los toques para seleccionar los caracteres del teclado y pulsar los botones, la pantalla admitía gestos con varios dedos para realizar acciones como el zoom de una foto.
                p El iPhone funcionaba con el sistema operativo OS X, el mismo que utilizaban los computadores Macintosh de la época.
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img8.png', alt='', style="width: 350px").m-auto
            .row.align-items-center(titulo="2015")
              .col-lg-7.mb-4.mb-lg-0
                h4 La ley de Moore
                p Gordon Moore fue cofundador de Fairchild Semiconductor en 1957 y posteriormente presidente y director general de Intel. En 1965, Moore publicó un artículo en la revista Electronics en el que ofrecía su predicción de los cambios que se producirían en la industria de los semiconductores en los siguientes 10 años. En el artículo, observaba que el número de componentes antes discretos, como transistores, diodos y condensadores, que podían integrarse en un solo chip se había duplicado aproximadamente cada año y que era probable que la tendencia se mantuviera en los 10 años siguientes. Esta fórmula de duplicación se conoce como la ley de Moore. No era una ley científica en el sentido de la ley de la gravedad. Más bien, se basaba en una observación de tendencias históricas, y creía que esta formulación tenía cierta capacidad para predecir el futuro.
                p La ley de Moore resultó ser impresionantemente precisa durante esos 10 años. En 1975, revisó la tasa de crecimiento prevista para los 10 años siguientes para duplicar el número de componentes por circuito integrado cada dos años, en lugar de anualmente. Este ritmo se mantuvo durante décadas, hasta aproximadamente 2010. En los últimos años, la tasa de crecimiento parece haber disminuido ligeramente. En 2015, Brian Krza- nich, consejero delegado de Intel, declaró que el ritmo de crecimiento de la empresa había disminuido hasta duplicarse cada dos años y medio aproximadamente.
              .col-lg-5
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema1/img9.svg', alt='', style="width: 350px").m-auto
    .row.justify-content-center.align-items-center
      .col-8.col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema1/img10.png', alt='').img10-tm1
      .col-lg-7
        .tarjeta-azul1.p-5
          p.texto-blanco.mb-0 Esta evolución repasó algunas máquinas clásicas de la historia de los dispositivos de cálculo automatizado y se centró en los principales avances que incorporó cada una de ellas. La máquina analítica de Babbage se incluye aquí por los numerosos saltos de ingenio que representa su diseño. Los demás sistemas se analizaron porque incorporaron importantes avances tecnológicos y realizaron una valiosa labor en el mundo real a lo largo de su vida.
    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 1.1 Características externas
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-11
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img11.png')})`}"
          )
          .bloque-texto-g__texto.p-4(data-aos="flip-down")
            p.mb-0 La carcasa de un computador de cualquier tipo se denomina a veces chasis y alberga la fuente de alimentación, la placa base, el procesador, los módulos de memoria, las tarjetas de expansión, el disco duro, la unidad óptica y otras unidades. Una carcasa de computador puede ser una carcasa de torre, una carcasa de sobremesa que se coloca plana en un escritorio, una carcasa todo en uno (que se utiliza con un computador todo en uno) o una carcasa móvil que se utiliza con computadores portátiles y tabletas. 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7
        .tarjeta-blanca1.p-5(data-aos="fade-right")
          p.mb-0 Una carcasa de torre se coloca en posición vertical, puede tener hasta 60 centímetros de altura y tiene espacio para varias unidades de disco. Aunque se suele utilizar para servidores, este tipo de carcasa también es buena para los usuarios de computadores de sobremesa que prevén una actualización, ya que las carcasas tipo torre ofrecen el máximo espacio para trabajar dentro de un computador y para mover los componentes.
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/tema1/img12.png', alt='').img12-tm1
    .bg-fondo3
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9.mb-5
          .tarjeta-titulo.p-2
            h4.mb-0.text-center A continuación, se enumeran los puertos que se pueden encontrar en un computador de sobremesa o móvil:
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5.imagen-atras
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img13-1.svg', alt='')
            .tarjeta.color-adicional-1.p-3(x="8%" y="90%" numero="+")
              p.texto-blanco Un puerto VGA (<i>Video Graphics Array</i>), también llamado puerto DB-15, puerto DB15, puerto HD15 o puerto DE15, es un puerto hembra de 15 pines en forma de D que transmite vídeo analógico. (Analógico significa una señal continua con infinitas variaciones en comparación con la digital, que es una serie de valores binarios - 1s y 0s). Todos los monitores antiguos utilizan puertos VGA. (Por cierto, el nombre HD15 [alta definición de 15 pines] para el puerto es un nombre antiguo que lo distingue de los primeros puertos VGA de 9 pines).
            .tarjeta.color-adicional-1.p-3(x="29%" y="90%" numero="+")
              p.texto-blanco Un puerto DVI (<i>Digital Video Interface</i>) transmite vídeo digital o analógico.
            .tarjeta.color-adicional-1.p-3(x="50%" y="90%" numero="+")
              p.texto-blanco Un DisplayPort transmite video y audio digital (no transmisiones analógicas) y está sustituyendo poco a poco a los puertos VGA y DVI de los ordenadores personales.
            .tarjeta.color-adicional-1.p-3(x="71%" y="90%" numero="+")
              p.texto-blanco Un puerto Thunderbolt 3 transmite video, datos y energía en el mismo puerto y cable y es popular entre los ordenadores de Apple. El puerto tiene la misma forma que el puerto USB-C y es compatible con los dispositivos USB-C. Hasta seis periféricos (por ejemplo, monitores y discos duros externos conectados en cadena) pueden utilizar el mismo puerto Thunderbolt. 
            .tarjeta.color-adicional-1.p-3(x="92%" y="90%" numero="+")
              p.texto-blanco Un sistema suele tener tres o más puertos de audio redondos, también llamados puertos de sonido, para un micrófono, una entrada de audio, una salida de audio y una salida de audio estéreo. Estos tipos de puertos de audio pueden transmitir datos analógicos o digitales. Si tienes un cable de audio para conectarlo a un altavoz o a unos auriculares, conéctalo al puerto de sonido verde lima, situado en el centro de los tres puertos. El micrófono utiliza el puerto rosa
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5.imagen-atras
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img13-2.svg', alt='')
            .tarjeta.color-adicional-1.p-3(x="8%" y="90%" numero="+")
              p.texto-blanco Un puerto de sonido SPDIF (<i>Sony-Philips Digital Interface</i>) se conecta a un sistema de audio de cine en casa externo, proporcionando una salida de audio digital y la mejor calidad de señal. Los puertos SPDIF siempre transmiten audio digital y pueden funcionar con cable eléctrico u óptico. Cuando se conecta a un cable de fibra óptica, el puerto se denomina conector óptico.
            .tarjeta.color-adicional-1.p-3(x="29%" y="90%" numero="+")
              p.texto-blanco Un puerto USB (<i>Universal Serial Bus</i>) es un puerto de E/S multipropósito que viene en varios tamaños y es utilizado por muchos dispositivos diferentes, incluyendo impresoras, ratones, teclados, escáneres, discos duros externos y unidades flash en varios tamaños y es utilizado por muchos dispositivos diferentes, incluyendo impresoras, ratones, teclados, escáneres, discos duros externos y unidades flash. Algunos puertos USB son más rápidos que otros. El USB 2.0 de alta velocidad es más rápido que el USB normal, y el USB 3.0 de alta velocidad es más rápido que el USB 2.0.
            .tarjeta.color-adicional-1.p-3(x="50%" y="90%" numero="+")
              p.texto-blanco Un puerto HDMI (<i>High-Definition Multimedia Interface</i>) transmite video y audio digital (no transmisiones analógicas) y suele utilizarse para conectar equipos de cine en casa.
            .tarjeta.color-adicional-1.p-3(x="71%" y="90%" numero="+")
              p.texto-blanco Un puerto PS/2, también llamado puerto mini-DIN, es un puerto redondo de 6 pines utilizado por un teclado o un ratón. Los puertos se parecen, pero no son intercambiables. En un ordenador de sobremesa, el puerto morado es para el teclado y el verde para el ratón. Muchos ordenadores nuevos utilizan puertos USB para el teclado y el ratón en lugar de los antiguos puertos PS/2.
            .tarjeta.color-adicional-1.p-3(x="92%" y="90%" numero="+")
              p.texto-blanco Un puerto serie antiguo, a veces llamado puerto DB9, es un puerto macho de 9 pines utilizado en ordenadores antiguos. Ha sido sustituido en su mayoría por puertos USB. Ocasionalmente, se ve un puerto serie en un <i>router</i>, donde el puerto se utiliza para conectar el <i>router</i> a un dispositivo que un técnico puede utilizar para supervisar y gestionar el <i>router</i>.
        .col-lg-10
          ImagenInfografica.color-acento-botones.mb-5.imagen-atras
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/temas/tema1/img13-3.svg', alt='')
            .tarjeta.color-adicional-1.p-3(x="29%" y="95%" numero="+")
              p.texto-blanco Un puerto de red, también llamado puerto Ethernet o puerto RJ-45, es utilizado por un cable de red para conectarse a la red alámbrica. Los puertos Fast Ethernet funcionan a 100 Mbps (megabits por segundo), y Gigabit Ethernet funciona a 1000 Mbps o 1 Gbps (gigabits por segundo). Un megabit es un millón de bits y un gigabit es mil millones de bits. Un bit es un valor binario de 1 o 0.
            .tarjeta.color-adicional-1.p-3(x="50%" y="95%" numero="+")
              p.texto-blanco Un puerto de módem, también llamado puerto RJ-11, se utiliza para conectar líneas telefónicas de acceso telefónico a los ordenadores. Un puerto de módem se parece a un puerto de red, pero no es tan amplio. 
            .tarjeta.color-adicional-1.p-3(x="71%" y="95%" numero="+")
              p.texto-blanco Un puerto SATA externo (eSATA) es utilizado por un disco duro externo u otro dispositivo que utilice la interfaz eSATA.
    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 1.2 Componentes mecánicos
    .bg-fondo4
      .row.justify-content-center.align-items-center.mb-3
        figure
          img(src='@/assets/curso/temas/tema1/img14.png', alt='')    
        .col-lg-11
          .tarjeta.tarjeta-gris-degrade.p-3(data-aos="fade-up")
            p.mb-0 La placa base, también llamada placa principal, placa del sistema o, en la jerga tecnológica, mobo, es la placa de circuito más grande e importante del ordenador. La placa base contiene un zócalo para alojar el procesador o la CPU. La unidad central de procesamiento (CPU), también llamada procesador o microprocesador, realiza la mayor parte del procesamiento de datos e instrucciones para todo el sistema. Dado que la CPU genera calor, es posible que se instale un ventilador y un disipador de calor en la parte superior para mantenerla refrigerada.
      .row.justify-content-center.align-items-center.mb-3
        .col-lg-5.mb-5
          .tarjeta-titulo2.p-2
            h4.mb-0.text-center.texto-blanco Se presentan ahora los componentes mecánicos base.
      .row.justify-content-center.align-items-center
        ImagenInfografica.color-primario.mb-4
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img15.png', alt='')
          .tarjeta.color-adicional-1.p-3(x="13%" y="102%" numero="+")
            p.texto-blanco Una placa base tiene ranuras de expansión para ser utilizadas por las tarjetas de expansión. Una tarjeta de expansión, también llamada tarjeta adaptadora, es una placa de circuito que proporciona más puertos que los proporcionados por la placa base. La imagen muestra una tarjeta de video que proporciona tres puertos para este fin. Observe el ventilador y el disipador de calor de la tarjeta, que ayudan a evitar que se sobrecaliente. La tendencia actual es que la mayoría de los puertos de un sistema sean proporcionados por la placa base (llamados puertos de la placa) y que se utilicen menos las tarjetas de expansión.	 
          .tarjeta.color-adicional-1.p-3(x="38%" y="102%" numero="+")
            p.texto-blanco Una placa base de sobremesa dispone de ranuras de memoria, denominadas ranuras DIMM (módulo de memoria dual en línea), para alojar módulos de memoria. Un módulo de memoria instalado en una ranura DIMM y tres ranuras DIMM vacías. La memoria, también llamada RAM (Random Access Memory) es el almacenamiento temporal de datos e instrucciones mientras son procesados por la CPU. Las tarjetas de vídeo también contienen algunos chips de RAM integrados para la memoria de vídeo.
          .tarjeta.color-adicional-1.p-3(x="63%" y="102%" numero="+")
            p.texto-blanco Un sistema puede tener uno o más discos duros y una unidad óptica. Un disco duro, también llamado unidad de disco duro (HDD), es un almacenamiento permanente que se utiliza para guardar datos y programas. Por ejemplo, el sistema operativo Windows 10 y las aplicaciones se instalan en el disco duro. Todas las unidades de un sistema se instalan en una pila de bahías de unidades en la parte delantera de la caja. El disco duro más grande es una unidad magnética y el más pequeño es una unidad de estado sólido (SSD). Cada unidad tiene dos conexiones para cables: El cable de alimentación se conecta a la fuente de alimentación, y otro cable, utilizado para los datos y las instrucciones, se conecta a la placa base.
          .tarjeta.color-adicional-1.p-3(x="88%" y="102%" numero="+")
            p.texto-blanco La fuente de alimentación del ordenador, también conocida como fuente de alimentación (PSU), es una caja instalada en una esquina de la caja del ordenador que recibe y convierte la corriente de la casa para que los componentes del interior de la caja puedan utilizarla. La mayoría de las fuentes de alimentación tienen un interruptor selector de voltaje Duval. En la parte posterior de la caja del ordenador, donde se puede cambiar el voltaje de entrada a la fuente de alimentación si es necesario-115 V se utiliza en los Estados Unidos y 220 V se utiliza en otros países.
    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 1.3 Periféricos
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Un portátil está diseñado para ser transportable y puede ser tan potente como un ordenador de sobremesa. Más de la mitad de los computadores personales que se compran hoy en día son portátiles, y casi el 30% de los computadores personales que se utilizan actualmente son de esta categoría. Los portátiles utilizan la misma tecnología que los ordenadores de sobremesa, pero con modificaciones para consumir menos energía, ocupar menos espacio y funcionar en movimiento.
    p.mb-5(data-aos="fade-right") Los portátiles se presentan en distintas variedades, incluyendo algunos con una pantalla táctil que permite escribir a mano en ella con un lápiz óptico y otros con una pantalla giratoria o extraíble que permite utilizar el portátil como una tableta. Otra variante de un portátil es un notebook, que es más pequeño y menos caro que un portátil y tiene menos funciones. Un computador “todo en uno” tiene el monitor y la carcasa del ordenador juntos y utiliza componentes que son comunes a un portátil y a un ordenador de sobremesa. Dado que los ordenadores todo en uno utilizan muchos componentes de los portátiles y su mantenimiento es similar, se incluye en esta temática. La siguiente infografía presenta el panel de periféricos de un portátil.
    .row.justify-content-center.align-items-center
      .col-lg-6
        .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
          .col-lg-auto
            figure
              img(src="@/assets/curso/temas/tema1/img19.png" style="max-width: 60px").m-auto
          .col
            h3 Panel de periféricos de un portátil
        p(data-aos="fade-right") Un portátil dispone de puertos en sus laterales, en la parte trasera o en la frontal, para conectar periféricos. Los puertos comunes a los portátiles, así como a los sistemas de sobremesa, incluye puertos USB, de red y de audio (ya sea para un micrófono, auriculares o altavoces externos). Los puertos de vídeo pueden incluir uno o varios puertos VGA, DisplayPort, Thunderbolt (en los portátiles Apple) o HDMI para conectar un proyector, un segundo monitor o un televisor. Adicionalmente a ello, en el lateral o la parte trasera del portátil, existe un conector de bloqueo que se utiliza para asegurar físicamente el portátil con un bloqueo de cable y una toma de CC para recibir energía del adaptador de CA.
        .cajon.color-acento-botones.p-4(data-aos="flip-up")
          p.mb-0 En la imagen aparecen dos ranuras que se utilizan para las tarjetas de memoria flash: una ranura MagicGate y una ranura para tarjetas SD. Cada una de ellas puede admitir varios tipos de tarjetas de memoria flash. Cuando a un portátil le falta un puerto o una ranura que necesita, normalmente puede encontrar un dongle USB que le proporcione el puerto o la ranura.
      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/temas/tema1/img17.png', alt='la imagen muestra los distintos ranuras de un computador portátil descritos en la parte inferior')
        .row.mb-5
          .col-auto.posicion-boton
            a.boton.tarjeta-gris-degrade.indicador__container(@click="modal1 = true")
              span #[b Agrandar imagen]
              .indicador--click(v-if="mostrarIndicador")
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        figure
          img(src='@/assets/curso/temas/tema1/img17-1.png', alt='')
    p.mb-5(data-aos="fade-right") Ahora bien, existen otros periféricos adicionales como:
    .row.bg-c2
      .col-12
        .p-5
          .bg-linea-tiempo.p-4
            .row.justify-content-center.align-items-center
              SlyderE(indicadores="centro")
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4.my-5 <b style= 'color:#5573C6;'>Red celular</b>
                    p Algunos computadores portátiles tienen la capacidad de conectarse a una red celular. Sin embargo, también existe un módem celular USB que puede utilizarse para un portátil que no tenga la tecnología incorporada (como aparece en la imagen).
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img18.png', alt='')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4.my-5 <b style= 'color:#5573C6;'>Dispositivo <i>Bluetooth</i></b>
                    p Cuando un computador portátil no tiene capacidad para <i>Bluetooth</i>, se puede utilizar un adaptador de USB a <i>Bluetooth</i> para conectarse a un dispositivo inalámbrico <i>Bluetooth</i>, como una impresora o un smartphone <i>Bluetooth</i>. 
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img19.svg', alt='')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4.my-5 <b style= 'color:#5573C6;'>Unidad óptica externa</b>
                    p Cuando un portátil o netbook no tiene unidad óptica, se puede utilizar una unidad óptica USB. Se conecta la unidad óptica USB en un puerto USB para poder utilizar CDs y DVDs con el portátil o netbook.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img20.svg', alt='')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4.my-5 <b style= 'color:#5573C6;'>Retroiluminación del teclado</b>
                    p Las teclas de función pueden utilizarse para controlar la retroiluminación del teclado e iluminarlo.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img21.svg', alt='')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4.my-5 <b style= 'color:#5573C6;'>Activación o desactivación del panel táctil</b>
                    p Otras teclas de función pueden activar o desactivar el panel táctil, que es el dispositivo señalador más común en un portátil. Algunas personas prefieren utilizar un ratón USB con cable o inalámbrico en lugar de un panel táctil.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img22.svg', alt='')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4.my-5 <b style= 'color:#5573C6;'>Brillo y orientación de la pantalla</b>
                    p Las teclas de función pueden controlar el brillo de la pantalla en muchos portátiles. El brillo de la pantalla también se puede controlar en la configuración de pantalla de Windows. Algunos portátiles permiten utilizar una tecla de función para cambiar la orientación de la pantalla a horizontal o vertical y así poder utilizar el portátil girado sobre su extremo.
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img23.svg', alt='')
                .row
                  .col-md-6.mb-4.mb-md-0
                    h4.my-5 <b style= 'color:#5573C6;'>Doble pantalla</b>
                    p La mayoría de los portátiles utilizan una tecla de función para controlar las dos pantallas. Utilice las teclas de flecha para seleccionar sólo el panel LCD, duplicar o ampliar la salida al monitor externo o utilizar sólo el monitor externo. Las pantallas dobles también se pueden gestionar mediante la configuración de pantalla de Windows.
                
                  .col-md-6
                    figure
                      img(src='@/assets/curso/temas/tema1/img24.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    modal1: false,
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
