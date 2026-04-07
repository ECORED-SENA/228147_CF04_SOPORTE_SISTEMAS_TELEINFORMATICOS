<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 5
      h1 Medidas correctivas
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img1.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Así como se espera tener un mantenimiento preventivo en los equipos y en una organización como tal, en ocasiones, se tendrán situaciones en que las medidas deben ser correctivas, lo que permite luego, una oportunidad para mejorar el plan inicial de mantenimiento. El proceso de localización de averías comprende los siguientes pasos:
    .bg-fondo_tema6 
      .row.justify-content-center.align-items-center
        ImagenInfografica.color-adicional-1
          template(v-slot:imagen)
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img2.svg', alt='')
          .tarjeta.color-adicional-1.p-4(x="22.4%" y="15%" numero="+")
            p.text-white Antes de emprender cualquier otra acción, es importante establecer la presencia de un fallo en un equipo. En algunos casos, se puede informar de que un sistema es defectuoso, pero puede tratarse de un funcionamiento defectuoso o se puede informar de un fallo del sistema con muy poca información o con información errónea. Es esencial que se realice una prueba de funcionamiento para comprobar el rendimiento real del sistema con respecto a su especificación, y que se anoten todos los síntomas de fallo.
            p.text-white.mb-0 También es importante comprobar con el operador del equipo el historial del mismo y los trabajos de reparación y mantenimiento realizados anteriormente por cualquier otra persona. A veces, un trabajo incompleto o un mal manejo del equipo por parte de un trabajador inexperto podría resultar desastroso y desafiar todos los esfuerzos por reparar el equipo.
          .tarjeta.color-adicional-1.p-4(x="53%" y="18%" numero="+")
            p.text-white.mb-0 El procedimiento comprenderá un estudio de la bibliografía relativa a la revisión, el mantenimiento y las reparaciones, y la localización de la causa de la avería, primero en un subsistema y, finalmente, en un único componente del subsistema.
          .tarjeta.color-adicional-1.p-4(x="86%" y="18%" numero="+")
            p.text-white.mb-0 Consiste en sustituir o reparar el componente defectuoso. Esto debe ir siempre seguido de una comprobación exhaustiva del funcionamiento de todo el sistema.
    separador
    #t_5_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 5.1 Protocolos 
    .row.justify-content-center.align-items-center
      .col-10.col-lg-4.mb-lg-0.mb-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img3.svg', alt='')
      .col-lg-8
        p Para la localización de averías, es aconsejable seguir un enfoque sistemático y lógico, ya que a menudo es fácil llegar al punto de avería procediendo paso a paso. Sin embargo, el grado de éxito en la localización de una avería concreta dependerá del conocimiento del equipo por parte del técnico y de su capacidad para solucionar problemas. Hay que tener claro que no hay nada que sustituya a la familiaridad con el equipo cuando se trata de localizar una avería en un sistema. Por ejemplo, si no se conoce un microordenador hasta el punto de poder analizar su funcionamiento, interpretar sus indicaciones, leer sus impresiones y analizar su programa, sin duda será difícil aislar un fallo en ese equipo.
        .cajon.cajon-tema6.p-4(data-aos="flip-up")
          p El procedimiento de resolución de problemas debe comenzar siempre con un análisis preliminar de los síntomas del problema, del que se deducen varias posibilidades de mal funcionamiento. Estas se analizan por orden de probabilidad y se suelen hacer varias comprobaciones rápidas para eliminar o verificar las deducciones mutuas.
    .row.justify-content-center.align-items-center.mt-5.mb-3
      .col-lg-10
        .tarjeta-titulo_tema5.p-2
          p.mb-0.text-center.texto-blanco <b>Antes de proceder a la localización de la avería, hay que plantear las siguientes preguntas y averiguar los hechos:</b>
    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-contenido(tipo="n")
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              p ¿Ha ocurrido esto antes? Si se sabe que el dispositivo falla históricamente de una manera determinada, compruébelo primero.
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema5/img4.svg', alt='')
          .row.align-items-center
            .col-md-2.mb-4.mb-md-0
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema5/img5.svg', alt='')
            .col-md-10
              p.txt-left Si un sistema ha tenido problemas inmediatamente después de algún tipo de mantenimiento u otro cambio, los problemas podrían estar relacionados con esos cambios.
          .row.align-items-center
            .col-md-10.mb-4.mb-md-0
              p Si un sistema no produce el resultado final deseado, busque lo que hace correctamente. En otras palabras, identifique dónde no está el problema y centre sus esfuerzos en otra parte.
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema5/img6.svg', alt='')
          .row.align-items-center
            .col-md-2
              figure(data-aos="fade-right")
                img(src='@/assets/curso/temas/tema5/img7.svg', alt='')
            .col-md-10.mb-4.mb-md-0
              p.txt-left A partir de sus conocimientos sobre el funcionamiento de un sistema, piense en qué tipo de fallos podrían provocar este problema o fenómeno.
    .row.justify-content-center.align-items-center.mt-5.mb-0.mb-lg-4
      .col-10
        .row.justify-content-center.align-items-center
          .col-10.col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img8.svg', alt='')
          .col-lg-8.bg1-tema5.p-5
            p La resolución eficaz de problemas requiere una mezcla de arte y ciencia. Siempre hay una forma segura y una forma técnicamente precisa de hacer algo, pero la elección precisa de las técnicas y estrategias utilizadas para solucionar el problema la decide en gran medida la propia experiencia y formación del técnico.
    .row.justify-content-center.align-items-center.mb-5
      .cajon.cajon-tema6.p-4(data-aos="flip-up")
        p.mb-0 Para lograr una rápida localización de la avería y su posterior reparación, el técnico buscará obviamente ciertas ayudas para complementar sus habilidades técnicas. Las ayudas más necesarias son:
    .row.justify-content-center.align-items-center
      .col-10
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img9.svg', alt='')
    .row.justify-content-center.align-items-center.mt-5
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img10.svg', alt='', style="width: 300px").m-auto
      .col-lg-8
        ul.lista-ul--color.lista-ul--separador.fa-ul2
            li 
              i.fas.fa-check-circle
              | Lista de instrumentos de prueba y herramientas especiales.
            li 
              i.fas.fa-check-circle
              | Método de desmontaje.
            li 
              i.fas.fa-check-circle
              | Procedimientos de seguridad que deben observarse durante el desmontaje y la realización de las pruebas.
            li 
              i.fas.fa-check-circle
              | Puntos de prueba con tensiones continuas y formas de onda de funcionamiento.
            li 
              i.fas.fa-check-circle
              | Árbol de localización de averías o tablas que muestren los síntomas típicos de diversas condiciones de avería, junto con las causas más probables y las medidas sugeridas.
            li 
              i.fas.fa-check-circle
              | Descripción del diagrama de bloques.
            li 
              i.fas.fa-check-circle
              | Diagramas de circuitos.
            li 
              i.fas.fa-check-circle
              | Lista de piezas de recambio, con los valores de los componentes, los valores nominales y las tolerancias.
            li 
              i.fas.fa-check-circle
              | Esquemas de la placa de circuito impreso para los distintos componentes identificados mediante llamadas.
            li 
              i.fas.fa-check-circle
              | Esquema mecánico, diagramas de líneas, fotografías y despieces de las distintas piezas mecánicas.
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-8.mb-4.mb-lg-0
        .cajon.cajon-tema6.p-4(data-aos="flip-up")
          p.mb-0 Después de comprobar las cosas obvias, si no se encuentra una pista sobre la avería, es el momento de consultar el manual de servicio y tratar de entender, en primer lugar, el resultado que se debería obtener y, en segundo lugar, el resultado que se está obteniendo. Al hacer esto, ya sea por medición u observación, el técnico que realiza la búsqueda de la avería se guía hasta el componente defectuoso.
      .col-10.col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img11.png', alt='')
      p.my-5 A veces, los manuales de servicio no están disponibles. Sin duda, basándose en la experiencia de otros sistemas similares, el técnico puede intentar reparar la avería. Sin embargo, si el sistema es desconocido, proceder a las pruebas sin saber exactamente cómo funciona el sistema puede llevar a menudo a conclusiones incorrectas y, en algunos casos, a provocar fallos adicionales. Por lo tanto, es conveniente procurar el manual de servicio, en la medida de lo posible, antes de intentar localizar una avería grave en el sistema. Sin embargo, si no puede conseguir el diagrama esquemático, en algunos casos, será necesario realizar algo de ingeniería inversa para dibujar el diagrama del circuito. El tiempo será bien empleado, ya que habrá aprendido algo en el proceso que puede aplicarse a otros problemas del equipo. Su éxito en la búsqueda y reparación de la avería, será mucho más probable cuando entienda cómo funciona un dispositivo.
    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img12.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 El manual de instrucciones o manual del usuario o del operador proporciona la información necesaria para el funcionamiento del equipo, las instrucciones de puesta en marcha y parada, los conceptos generales de diseño, las especificaciones y el procedimiento de instalación. Las instrucciones de mantenimiento a nivel de operador, incluidos los manuales de mantenimiento preventivo, son útiles para realizar diagnósticos preliminares y establecer programas de mantenimiento preventivo.
    separador
    #t_5_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 5.2 Verificación
    p La tarea de localización de averías se lleva a cabo esencialmente mediante el uso de numerosos instrumentos de prueba en diversas áreas del servicio electrónico. Dejando a un lado los instrumentos especiales que puedan ser necesarios para trabajar en equipos digitales y de comunicación, la mayoría de los fallos del sistema pueden localizarse y rectificarse utilizando los tres instrumentos siguientes:
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.tarjeta-tema5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img13.svg', alt='')
        h2.text-center Multímetro
        p Mide el voltaje y la corriente en los dispositivos electrónicos. En este caso de una tarjeta madre.
      .col-md.tarjeta.color-primario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img14.svg', alt='')
        h2.text-center Osciloscopio
        p Visualiza las señales de voltaje y frecuencia de los circuitos electrónicos. Sirve para tener una visión del comportamiento de estas señales durante el proceso del circuito.
      .col-md.tarjeta.tarjeta-tema5.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img15.svg', alt='')
        h2.text-center Generador de señales
        p También se conoce como generador de impulsos o generador de funciones. Es una herramienta que permite simular diferentes tipos de señales que ayuden a comprobar el comportamiento de los circuitos electrónicos.
    .row.justify-content-center.align-items-center.mt-5.mb-4
      .cajon.cajon-tema6.p-4(data-aos="flip-up")
        p.mb-0 El tipo de mediciones que se suelen realizar en los circuitos electrónicos son básicamente las de tensión continua y alterna. Además de éstas, es necesario realizar una serie de mediciones en términos de amplitud, frecuencia y fase, así como un análisis detallado de la forma de onda en las funciones complejas de los circuitos, con el fin de ayudar al procedimiento de resolución de problemas .
    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema5/img16.png', alt='Imágen decorativa')    
      .col-lg-11
        .tarjeta.tarjeta-gris-degrade.p-3(data-aos="fade-up")
          p.mb-0 Cuando se recibe un equipo para su reparación, es fundamental realizar algunas comprobaciones preliminares en él antes de comenzar el trabajo propiamente dicho. Estas comprobaciones son necesarias para su seguridad y, a menudo, ayudan a acercarse rápidamente al lugar del problema. Las comprobaciones son las siguientes:
    .row.justify-content-center.align-items-center.mt-5
      .col-10.col-lg-5.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img17.png', alt='', style="width: 370px").m-auto
      .col-lg-7
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Examen inicial")
            .col-md-12.mb-4.mb-md-0
              p Examine cuidadosamente el equipo por todos sus lados para ver la información pertinente dada por el fabricante en los paneles. Las precauciones de seguridad suelen estar impresas en los paneles con la siguiente nomenclatura:
              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li 
                  i.fas.fa-check-circle
                  p.mb-0 <b>Precaución:</b> indica un peligro de lesión personal no accesible inmediatamente al leer la marca, o un peligro para la propiedad, incluyendo el propio equipo.
                li 
                  i.fas.fa-check-circle
                  p.mb-0 <b>Peligro:</b> indica un riesgo de lesión personal inmediatamente accesible al leer la señalización. La señal de peligro (4) se marcará normalmente en los lugares donde existan altas tensiones en el equipo.
                li 
                  i.fas.fa-check-circle
                  p.mb-0 Tierra de protección (terminal de tierra).
                li 
                  i.fas.fa-check-circle
                  p.mb-0 Consulte el manual.
          .row(numero="2" titulo="Alimentación")
            .col-md-12.mb-4.mb-md-0
              p Asegúrese de los requisitos de alimentación del equipo. Algunos equipos funcionan con baterías, mientras que otros pueden funcionar con la red eléctrica. Identifique la tensión de alimentación de la red, es decir, si es de 110 voltios, 60 Hz o 220 voltios, 50 Hz y la tensión máxima que puede aplicarse desde la fuente de alimentación. Determine los conductores de alimentación (si el enchufe no está presente o si se sospecha que está mal cableado) y el cable de tierra. La conexión a tierra de protección mediante el conductor de tierra del cable de alimentación es esencial para un funcionamiento seguro.
          .row(numero="3" titulo="Conexión a tierra")
            .col-md-12.mb-4.mb-md-0
              p Casi todos los equipos electrónicos modernos que funcionan con la red eléctrica se conectan a tierra a través del conductor de tierra del cable de alimentación. Para evitar descargas eléctricas, el cable de alimentación debe conectarse a un receptáculo correctamente cableado antes de conectarlo a los terminales de entrada o salida del producto.
          .row(numero="4" titulo="Manual de servicio")(data-aos="fade-right")
            .col-md-12.mb-4.mb-md-0
              p Antes de encender el equipo para un examen preliminar, estudie detenidamente el “Manual de servicio” y busque los siguientes términos en el manual:
              ul.lista-ul--color.lista-ul--separador.fa-ul2
                li 
                  i.fas.fa-check-circle
                  p.mb-0 Los avisos de precaución especifican condiciones o prácticas que podrían provocar daños en el equipo o en otros bienes.
                li 
                  i.fas.fa-check-circle
                  p.mb-0 Las declaraciones de advertencia especifican condiciones o prácticas que podrían resultar en lesiones personales o pérdida de la vida.
                li 
                  i.fas.fa-check-circle
                  p.mb-0 0 indica dónde se encuentra la información de precaución u otra información aplicable.
          .row(numero="5" titulo="Desconectar")
            .col-md-12.mb-4.mb-md-0
              p Desconecte la alimentación del equipo antes de intentar retirar los paneles del armario para evitar el riesgo de descarga eléctrica. En algunos equipos, existen potenciales peligrosos en varios puntos del equipo. Cuando el equipo funcione con las cubiertas retiradas, no toque las conexiones o los componentes expuestos. Algunos transistores tienen tensiones presentes en sus carcasas. Desconecte siempre la alimentación antes de limpiar el equipo o sustituir piezas.
    .row.justify-content-center.align-items-center.mt-5
      .col-lg-7.mb-4.mb-lg-0
        LineaTiempoD.color-acento-botones
          .row(numero="6" titulo="Desmontar")
            .col-md-12.mb-4.mb-md-0
              p Los manuales de servicio suelen proporcionar información para desmontar los paneles del equipo y acceder a las distintas placas de circuitos y componentes individuales. Dichas instrucciones deben seguirse al pie de la letra, ya que, de lo contrario, al abrir los tornillos equivocados, los conjuntos internos a veces se desprenden resultando en daños a las partes frágiles.
          .row(numero="7" titulo="Cuidado en la manipulación")
            .col-md-12.mb-4.mb-md-0
              p Cuando se retira la cubierta del equipo del chasis del mismo, quedan expuestos los bordes metálicos desnudos que pueden rayar la superficie de trabajo. Tenga cuidado de que los bordes y esquinas afilados del chasis no rayen la superficie de trabajo. Los paneles metálicos pintados de los equipos suelen ser vulnerables a los arañazos. Evite la manipulación brusca de los paneles.
          .row(numero="8" titulo="Carga estática")
            .col-md-12.mb-4.mb-md-0
              p Los circuitos integrados de la familia lógica CMOS utilizados en algunos equipos pueden resultar dañados por una descarga incontrolada de electricidad estática. Antes de manipular cualquiera de las placas de circuito, sujete firmemente el chasis del equipo para eliminar cualquier diferencia de carga estática entre su cuerpo y el equipo.
              p Manipule todas las placas de circuito por los bordes. Los circuitos CMOS operan con corrientes en el rango de los nano amperios y las vías de fuga causadas por los aceites de la piel, el polvo de la suciedad, etc. pueden causar un rendimiento inexacto del circuito en algunos equipos.
          .row(numero="9" titulo="Comprobación de asentamiento")
            .col-md-12.mb-4.mb-md-0
              p Después de retirar la cubierta del equipo, inspeccione todos los tornillos expuestos para comprobar su apriete. Compruebe que todas las placas de circuito impreso están firmemente asentadas en sus conectores o están en posición. Compruebe el estado de todos los cables externos, especialmente en busca de roturas o grietas y signos de torsión. Si se observa algún daño grave, el cable debe ser sustituido inmediatamente.
      .col-10.col-lg-5
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img18.png', alt='', style="width: 370px").m-auto
    .row.justify-content-center.align-items-center.mt-5.mb-3
      .col-lg-12
        .tarjeta-titulo_tema5.p-2
          p.mb-0.text-center.texto-blanco <b>En resumen, un sistema eficaz de localización de averías debe ser bastante lógico y es útil recordar los tres puntos siguientes:</b>
    .row.justify-content-center
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema5/img19.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Conozca su equipo
            p.mb-0 Si no se conoce el equipo hasta el punto de poder analizar su funcionamiento, interpretar sus indicadores y leer y descifrar las impresiones, será difícil aislar los problemas.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema5/img20.png", alt="alt")
          .crd_hover_txt--body.bg-flip-2
            h4.mb-3 Piensa antes de actuar
            p.mb-0 No empiece directamente a sustituir piezas, desmontar varias partes, etc., sin pensar y analizar las posibles causas del problema. Una forma desorganizada de solucionar los problemas conduce a más problemas y puede llevar un tiempo inusualmente largo.
      .col-xl-4.col-lg-7.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure(data-aos="fade-right")
              img(src="@/assets/curso/temas/tema5/img21.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Establecimiento de proceso
            p.mb-0.text-small Establezca un procedimiento general de localización de averías. Dependiendo del conocimiento que se tenga del equipo, de la disponibilidad de las herramientas adecuadas, de los equipos de prueba, de las piezas de repuesto y del tiempo, hay que desarrollar un procedimiento general de resolución de problemas. Puede ser una reparación a nivel de componentes o un mantenimiento a nivel de placa. En este último caso, las placas defectuosas se reparan posteriormente o se envían al fabricante para su reparación.  
    separador
    #t_5_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 5.3 Correcciones
    .row.justify-content-center.align-items-center
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img22.png', alt='')
      .col-lg-8
        p Una vez establecida la avería y localizado el componente defectuoso, se requieren técnicas especiales para llevar a cabo las reparaciones. Para ello, es necesario, conseguir piezas de repuesto.
        p Por otra parte, los recambios de todas las piezas eléctricas y mecánicas de la mayoría de los equipos pueden obtenerse del fabricante de los mismos. Al mismo tiempo, muchos de los componentes electrónicos estándar pueden obtenerse de los proveedores, lo que puede ahorrar un tiempo considerable en la adquisición. Antes de comprar o solicitar al fabricante las piezas de repuesto, hay que estudiar detenidamente la lista de piezas para conocer el valor, la tolerancia, la clasificación y la descripción del componente necesario.
    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-12
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
          .bloque-texto-g1__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/img23.png')})`}"
          )
          .bloque-texto-g1__texto.p-4(data-aos="flip-down")
            p.mb-0 A la hora de seleccionar piezas de repuesto equivalentes, hay que tener en cuenta que el tamaño y la forma física de un componente pueden afectar a veces a su rendimiento en el equipo, sobre todo a altas frecuencias. Por lo tanto, es imperativo que todas las piezas de repuesto sean sustituciones directas, a menos que se establezca que un componente diferente no afectará negativamente al rendimiento del equipo.
    .row.justify-content-center.align-items-center
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/img24.svg', alt='', style="width: 300px").m-auto
      .col-lg-8
        .cajon.cajon-tema6.p-4.mb-4(data-aos="flip-up")
          p.mb-0 Además de los componentes electrónicos estándar, el equipo puede contener algunas piezas especiales. Dichos componentes son fabricados o seleccionados por los fabricantes de los equipos para cumplir con requisitos específicos de rendimiento. Las piezas mecánicas son, en su mayoría, de fabricación especial y, por tanto, deben obtenerse directamente del fabricante del equipo.
        p Al pedir las piezas de repuesto a los proveedores de equipos, estos suelen necesitar la siguiente información para realizar los primeros suministros:
        .row.justify-content-center.align-items-center
          .col-lg-6
            ul.lista-ul--color.lista-ul--separador.fa-ul2
              li 
                i.fas.fa-check-circle
                p.mb-0 Nombre del equipo.
              li 
                i.fas.fa-check-circle
                p.mb-0 Modelo o tipo de equipo.
              li 
                i.fas.fa-check-circle
                p.mb-0 Número de serie del equipo.
          .col-lg-6
            ul.lista-ul--color.lista-ul--separador.fa-ul2
              li 
                i.fas.fa-check-circle
                p.mb-0 Descripción de la pieza necesaria, es decir, nombre de la pieza y número de circuito.
              li 
                i.fas.fa-check-circle
                p.mb-0 Número de la pieza especificada por el fabricante en el manual de servicio.
    .row.justify-content-center.align-items-center.my-4
      p A veces se realizan cambios en los equipos para adaptarlos a componentes mejorados, a medida que los fabricantes los ponen a disposición. La información sobre estas modificaciones suele ser publicada por ellos como ‘addenda’ al manual de servicio. Cuando se observe alguna discrepancia entre un componente mencionado en el diagrama del circuito y el realmente presente en el equipo, busque la hoja de modificaciones. En caso de duda, puede ponerse en contacto con el fabricante para que le aclare las dudas.
      p A continuación, se describe cada una de las etapas del proceso de corrección:
    TabsB.color-primario
      .py-4.py-md-5(titulo="Proceso inicial" )
        .row
          .col-lg-8.mb-4.mb-lg-0
            p Antes de intentar la sustitución de componentes, el equipo debe estar desconectado de la fuente de alimentación. Los manuales de servicio suelen contener dibujos de despiece asociados a las piezas mecánicas y pueden ser útiles para el desmontaje de los componentes individuales de los subconjuntos. 
            p En la medida de lo posible, se debe evitar la sustitución innecesaria de componentes, ya que, de lo contrario, se pueden producir daños en la placa de circuito y/o en los componentes adyacentes.
            p A veces, se puede encontrar que una placa de circuito está dañada más allá de la reparación; todo el conjunto, incluyendo todos los componentes soldados, debe ser reemplazado. Normalmente se pueden pedir placas de repuesto al fabricante del equipo.
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img25.png', alt='', style="width: 370px").m-auto
      .py-4.py-md-5(titulo="Sustitución de componentes" )
        .row.mb-4.mb-lg-0
          .col-lg-8.mb-4.mb-lg-0
            p Los dispositivos semiconductores no deben sustituirse a menos que se compruebe que están realmente defectuosos. La sustitución innecesaria de semiconductores puede afectar al rendimiento o a la calibración del equipo. Si se extraen de los zócalos durante el mantenimiento rutinario, siempre deben devolverse a sus respectivos zócalos. Los dispositivos semiconductores de reemplazo deben ser del tipo original o un reemplazo directo. Algunos transistores con carcasa de plástico tienen configuraciones de plomo que no concuerdan con la carcasa estándar utilizada para los transistores con carcasa metálica.
            p Se debe utilizar una herramienta de extracción para retirar los circuitos integrados (paquete doble en línea, tipos de 14 y 16 pines) para evitar que se dañen los pines. Si no dispone de una herramienta de extracción para retirar uno de estos circuitos integrados, tire lenta y uniformemente de ambos extremos del dispositivo. Intente evitar que un extremo del circuito integrado se desenganche del zócalo antes que el otro, ya que esto puede dañar las patillas.
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img26.png', alt='', style="width: 370px").m-auto
        .row
          p Los transistores de potencia suelen estar montados en el radiador de calor. Después de sustituir un transistor de potencia, compruebe que el colector no está en cortocircuito con la tierra antes de aplicar la alimentación. Los interruptores utilizados en el equipo, si se encuentran defectuosos, no suelen ser reparables y deben ser sustituidos como una unidad.
          p Casi todos los equipos electrónicos utilizan un transformador de potencia, a menos que el equipo funcione con baterías. Si se encuentra un fallo en el transformador de potencia, debe ser sustituido por un transformador de reemplazo directo. Al retirar el transformador, etiquete los cables con los números de terminal correspondientes para ayudar al nuevo transformador. Una vez sustituido el transformador, compruebe el funcionamiento de todo el equipo.
      .py-4.py-md-5(titulo="Comprobación del rendimiento" )
        .row.align-items-center.mb-4
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img27.png', alt='', style="width: 370px").m-auto
          .col-lg-8
            p Después de sustituir cualquier componente eléctrico, se debe comprobar a fondo el rendimiento o la calibración de ese circuito en particular. Dado que las fuentes de alimentación se utilizan para el funcionamiento de todos los circuitos, debe comprobarse todo el equipo para evaluar si se ha trabajado en esta sección o si se ha sustituido el transformador de potencia. Para evitar el ajuste innecesario de otras partes del circuito, ajústelo sólo si no se cumple la tolerancia indicada en cada parte de 'CHECK'.
            p.mb-0 En los manuales de servicio, los siguientes términos se utilizan a menudo como instrucciones en relación con la comprobación del funcionamiento:
        .row 
          ul.lista-ul--color.lista-ul--separador.fa-ul2
            li 
              i.fas.fa-check-circle
              p.mb-0 <b>Comprobación:</b> indica que la instrucción realiza una comprobación de requisitos de rendimiento. Si el parámetro comprobado no cumple los límites indicados, normalmente se requiere un ajuste o una reparación.
            li 
              i.fas.fa-check-circle
              p.mb-0 <b>Ajuste:</b> describe el ajuste que debe realizarse y el resultado deseado. Los ajustes no deben realizarse a menos que una instrucción previa de “Comprobación” indique que es necesario un ajuste.
            li 
              i.fas.fa-check-circle
              p.mb-0 <b>Interacción:</b> indica que el ajuste descrito en la instrucción anterior interactúa con otros ajustes del circuito. Generalmente se indica la naturaleza de la interacción y se hace referencia a los procedimientos afectados.
      .py-4.py-md-5(titulo="Sustitución de placas de circuito" )
        .row.align-items-center.mb-4
          .col-lg-8.mb-4.mb-lg-0
            p Normalmente, el manual de servicio/instrucciones que acompaña al equipo contiene información suficiente para guiar a un técnico electrónico experimentado y hábil en el análisis de averías y la reparación de algunos circuitos del equipo. Si una avería se localiza en una placa (o más), que no es fácilmente reparable, debe devolverse al fabricante para su reparación. Muchos fabricantes recomiendan que para la sustitución económica y rápida de cualquier placa de circuito, se pida la placa de intercambio. Por lo general, su precio es considerablemente menor que el de una placa nueva.
            p.mb-0 Para solicitar una placa de intercambio, el fabricante suele esperar la siguiente información:
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema5/img28.png', alt='', style="width: 370px").m-auto
        .row 
          ul.lista-ul--color.lista-ul--separador.fa-ul2
            li 
              i.fas.fa-check-circle
              p.mb-0 <b>Descripción del equipo:</b> nombre del equipo, número de catálogo y número de serie. Esta información suele estar disponible en los paneles frontal y posterior.
            li 
              i.fas.fa-check-circle
              p.mb-0 <b>Número de pieza de la placa:</b> esta información suele figurar en la lista de piezas suministrada en el manual. El número impreso en la placa de circuito impreso no es el número de pieza.
            li 
              i.fas.fa-check-circle
              p.mb-0 <b>Referencia de compra:</b> sirve para saber si la unidad está en garantía o fuera de ella y qué tipo de facturación hay que hacer.

</template>

<script>
export default {
  name: 'Tema5',
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
