<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 4
      h1 Administración y gestión
    .row.justify-content-center.align-items-center.mb-5
      figure
        img(src='@/assets/curso/temas/tema4/img1.png', alt='')    
      .col-lg-11
        .tarjeta.tarjeta-gris-degrade.p-3(data-aos="fade-up")
          p.mb-0 El desgaste físico con el paso del tiempo y la acción de los elementos ambientales es inevitable, tanto en el caso de las instalaciones como de los equipos. El objetivo del mantenimiento es prolongar la vida de los equipos/sistemas y aumentar el tiempo medio entre fallos (MTBF) Algunos de los objetivos generales de un programa de gestión del mantenimiento son:
    .row.justify-content-center.align-items-center.mb-5
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta.tarjeta-gris4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img2.svg' alt='')
          p.text-center Garantizar el máximo tiempo de funcionamiento de los equipos, con el mínimo coste de mantenimiento.
        .tarjeta.tarjeta-gris4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img3.svg' alt='')
          p.text-center Proporcionar un medio de recogida de datos, incluidos los costes, etc., para analizar y mejorar el mantenimiento.
        .tarjeta.tarjeta-gris4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img4.svg' alt='')
          p.text-center Establecer métodos de evaluación del rendimiento del trabajo de los técnicos, útiles como retroalimentación para el director de mantenimiento.
        .tarjeta.tarjeta-gris4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img5.svg' alt='')
          p.text-center Ayudar a establecer condiciones de trabajo seguras tanto para el departamento de operaciones como para el personal de mantenimiento. 
        .tarjeta.tarjeta-gris4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img6.svg' alt='')
          p.text-center Mejorar las competencias de los supervisores y técnicos mediante programas de formación y educación continua.
        .tarjeta.tarjeta-gris4.p-4
          .row.justify-content-center.mb-3
            .col-8
              img(src='@/assets/curso/temas/tema4/img7.svg' alt='')
          p.text-center Minimizar el tiempo de inactividad.
    .row.justify-content-center.align-items-center
      .cajon.color-primario.p-4(data-aos="flip-up")
        p.mb-0 Una mejor organización del mantenimiento, de controles adecuados y de una planificación y programación eficaces, debe apoyarse en un mayor uso de las nuevas tecnologías y en un enfoque sistemático.
    separador
    #t_4_1.titulo-segundo.color-acento-contenido
       h2 4.1 Residuos ambientales
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img8.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Con la introducción de equipos electrónicos en casi todos los campos de actividad, se considera esencial que las organizaciones desarrollen una política sólida de mantenimiento de equipos para garantizar la continuidad del servicio de los mismos. Los objetivos de la gestión del mantenimiento de los equipos son los siguientes:
      .row.justify-content-center.align-items-center
        .col-11.col-lg-8
          .tarjeta-gris1.p-4
            .row.align-items-center
              .col-3.col-md-2.col-lg-1
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema2/img3.svg', alt='').img3-4-tm2
              .col-lg-10.col-md-10(data-aos="fade-left")
                b Un sistema de mantenimiento manejable y económico, minimizando el tiempo necesario para el mantenimiento. 
          .tarjeta-gris2.p-4
            .row.align-items-center
              .col-3.col-md-2.col-lg-1
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/tema2/img4.svg', alt='').img3-4-tm2
              .col-lg-10.col-md-10(data-aos="fade-left")
                b Documentación esencial necesaria para todos los equipos.
        .col-8.col-lg-4
          figure
            img(src='@/assets/curso/temas/tema4/img9.png', alt='').img9-tm4
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-titulo2.p-2
          h4.mb-0.text-center.texto-blanco Normalmente, los fabricantes de equipos electrónicos de renombre ofrecen un servicio posventa eficiente y eficaz, que podría clasificarse como sigue:
    .row.justify-content-center.align-items-center
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img3.svg' alt='AvatarTop')
          .tarjeta.color-primario--borde
            .p-3
              p.mt-lg-4 Servicio de averías, que se presta cuando el equipo se avería y no funciona satisfactoriamente.
      .col-lg-5
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema2/img4.svg' alt='AvatarTop')
          .tarjeta.color-acento-contenido--borde
            .p-3
              p Servicio por contrato, en el que el proveedor del equipo y el usuario acuerdan las condiciones del contrato para los servicios de mantenimiento preventivo y correctivo.
    .row.justify-content-center.align-items-center.mb-5
      .col-7.col-lg-4(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img10.png', alt='')
      .col-lg-8
        .tarjeta-verde.p-5(data-aos="fade-left")
          b Los grandes establecimientos como los servicios de defensa, los departamentos de telecomunicaciones y los hospitales no pueden depender únicamente de los servicios ofrecidos por los fabricantes. A menudo, estos servicios suelen ser caros y pueden no estar disponibles cuando se necesitan durante una avería de emergencia del sistema. Por lo tanto, es necesario crear instalaciones de servicio internas y sólo en el caso de una avería muy compleja se solicitan los servicios de los fabricantes.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        p(data-aos="fade-right") En algunas situaciones, en las que los equipos son pesados y no pueden ser transportados al centro de reparación, es imprescindible disponer de unas instalaciones de servicio móviles. Mientras que en algunos casos es suficiente con llevar una caja de herramientas y una buena gama de componentes electrónicos para atender las necesidades de mantenimiento correctivo y preventivo, en otros casos puede ser necesario transportar equipos de prueba como un osciloscopio, fuentes de alimentación, generador de impulsos y multímetro digital, etc. Las furgonetas de mantenimiento móvil especialmente diseñadas pueden estar dotadas de equipos de prueba electrónicos adecuados y de instalaciones de taller mecánico para atender estos requisitos especializados.
        .cajon.color-primario.p-4(data-aos="flip-up")
          p.mb-0 La política de mantenimiento aplicable a una situación concreta dependerá obviamente de varios factores. Algunos de estos son:
      .col-10.col-lg-4
        figure
          img(src='@/assets/curso/temas/tema4/img11.png', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema4/img12.svg', alt='')
    .row.justify-content-center.align-items-center
      figure
        img(src='@/assets/curso/temas/tema4/img13.svg', alt='')
      .col-lg-6
        .tarjeta.tarjeta-azul3.p-4(data-aos="flip-down")
          p.mb-0.texto-blanco Para la localización de averías en los equipos electrónicos, se debe emplear personal cualificado. A diferencia de los equipos mecánicos, en los que a veces basta con aceitar y engrasar para restablecer el funcionamiento del sistema defectuoso, los equipos electrónicos necesitan una comprensión profunda de la teoría de funcionamiento del sistema y el conocimiento de las pruebas de los componentes activos y pasivos antes de poder ser manipulados. También hay que tener en cuenta que cualquier intento de reparación de un equipo electrónico por parte de personas no cualificadas puede acarrear mayores problemas por su mala manipulación y dificultaría el trabajo del técnico cualificado si posteriormente se le remite .
    separador
    #t_4_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 4.2 Elementos de protección
    p.mb-5(data-aos="fade-left") Las organizaciones suelen tener la opción de establecer instalaciones internas para el mantenimiento de los equipos o depender de los proveedores/fabricantes para el mantenimiento programado y por avería. A continuación, se explica cada uno de los posibles servicios.
    .row.bg-c1.mb-5
      .col-12
        .p-5
          .tarjeta.tarjeta--blanca.bg-linea-tiempo.p-5
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema4/img14.png', alt='', style="width: 300px").m-auto
                .col-lg-6
                  h4 <b style= 'color:#5573C6;'>Servicio interno</b>
                  p Proporciona el servicio más rentable y oportuno para el mantenimiento de los equipos. Sin embargo, es esencial que el personal haya recibido formación de los fabricantes o de alguna organización independiente. Además, el soporte técnico de los manuales de servicio y la disponibilidad de las piezas siguen siendo las principales preocupaciones. La frecuencia de las reparaciones y la cantidad de equipos similares tendrán un impacto directo en la competencia del personal técnico que mantiene los equipos.
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema4/img15.png', alt='', style="width: 300px").m-auto
                .col-lg-6
                  h4 <b style= 'color:#5573C6;'>Servicio del fabricante</b>
                  p El servicio del fabricante/proveedor es a veces la única opción disponible en el caso de muchos tipos de equipos, especialmente del tipo complejo. Normalmente, los fabricantes están en la mejor posición para proporcionar una gama completa de servicios, tanto de mantenimiento preventivo como correctivo, a sus equipos. Además, las modificaciones de campo y algunas actualizaciones del sistema pueden realizarse como parte del contrato del fabricante.
              .row.justify-content-center.align-items-center
                .col-lg-4.mb-4.mb-lg-0
                  figure
                    img(src='@/assets/curso/temas/tema4/img16.png', alt='', style="width: 300px").m-auto
                .col-lg-6
                  h4 <b style= 'color:#5573C6;'>Servicio de terceros</b>
                  p Puede ser una alternativa al servicio prestado por el fabricante. Este servicio se suele utilizar para los equipos más comunes, especialmente los productos electrónicos de consumo, para los que las empresas han creado un gran número de centros de mantenimiento. En el caso de los equipos profesionales, la disponibilidad de piezas de repuesto, <i>software</i> y equipos de prueba especializados debe tenerse en cuenta antes de entregar cualquier equipo al servicio de terceros, ya que el apoyo del fabricante puede ser una cuestión importante.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7.mb-5
        .tarjeta-titulo3.p-2
          h4.mb-0.text-center.texto-blanco Lo anterior va de la mano con los tipos de contrato base del mercado. 
    .row.justify-content-center.align-items-center.my-5
      .col-lg-10
        ImagenInfografica
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema4/img17.svg', alt='')
          .tarjeta.color-adicional-1.p-4(x="15%" y="94%" numero="")
            h5.texto-blanco Contrato de servicio completo
            p.texto-blanco Incluye tanto el servicio programado (mantenimiento preventivo) como el no programado (reparación). Este tipo de contrato requiere la menor participación del personal de servicio interno o de los operadores.
          .tarjeta.color-adicional-1.p-4(x="51%" y="94%" numero="")
            h5.texto-blanco Contrato de sólo reparación
            p.texto-blanco Este tipo de contrato es viable cuando existe la capacidad de realizar un mantenimiento preventivo interno. En algunos campos críticos, como los equipos hospitalarios, se recomienda un mínimo de un mantenimiento preventivo anual.
          .tarjeta.color-adicional-1.p-4(x="86%" y="94%" numero="")
            h5.texto-blanco Contrato de sólo mantenimiento preventivo
            p.texto-blanco En el caso de equipos de gran complejidad técnica en los que se necesita un servicio externo para el mantenimiento preventivo, es preferible suscribir un contrato de sólo mantenimiento preventivo. Este tipo de contratos se justifica cuando la frecuencia de las reparaciones y/o los costes no justifican la necesidad de un contrato de servicio completo.
    .row.mb-5
      p.mb-3 Disposiciones generales del contrato. En el contrato con los proveedores de servicios para el mantenimiento de los equipos deben incorporarse las siguientes disposiciones esenciales:
      .col-lg-6
        ul.lista-ul--color.fa-ul2
          li(data-aos="fade-up")
            i.fas.fa-check-circle
            p.mb-0 #[b Alcance del servicio:] mantenimiento preventivo, reparación de equipos, mejoras de ingeniería, sustitución rutinaria de piezas, etc.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Tiempo de respuesta:] tiempo de desplazamiento, gastos de dietas.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Condiciones de pago:] plazos.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Duración del contrato:] fecha de inicio y finalización del contrato.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Limitaciones del servicio:] elementos de servicio/reparación/reemplazos no incluidos en el contrato.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Rescisión del contrato:] condiciones para definir las situaciones que exigen la rescisión del contrato, como el impago de los honorarios acordados, la inadecuación de los servicios de mantenimiento, etc.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Seguro de responsabilidad civil:] cobertura de la responsabilidad civil contratada, productos y operaciones.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Garantías:] la empresa proporcionará una garantía para que todos los productos o servicios cumplan con todas las leyes, reglamentos y normas locales, estatales y federales aplicables.
      .col-lg-6
        ul.lista-ul--color.fa-ul2
          li(data-aos="fade-up")
            i.fas.fa-check-circle
            p.mb-0 #[b Indemnización:] la responsabilidad del proveedor de servicios de indemnizar y mantener a la instalación y a sus empleados por cualquier reclamación, pérdida, daño, responsabilidad o gasto que la instalación pueda sufrir como resultado de los actos u omisiones de la empresa contratante o sus empleados.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Documentación:] todas las actividades contempladas en el contrato con las acciones periódicas realizadas deben estar bien documentadas en el informe de servicio.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Garantía de tiempo de funcionamiento:] debe estar bien definida y se debe especificar la penalización en caso de incumplimiento.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Conflictos:] autoridad competente para decidir los casos de litigio.
          li(data-aos="fade-up") 
            i.fas.fa-check-circle
            p.mb-0 #[b Firmantes autorizados:] a especificar por ambas partes.
    .row.justify-content-center.align-items-center.mb-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img18.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Luego, de comprender las opciones de servicio, se hace necesario también entender los elementos de protección personal, ya que unas condiciones de trabajo seguras ayudan a evitar lesiones a las personas y daños a los equipos informáticos. Un espacio de trabajo seguro está limpio, organizado y adecuadamente iluminado. Por tanto, todo el mundo debe entender y seguir los procedimientos de seguridad. El siguiente recurso expone algunas precauciones básicas, pautas de seguridad y herramientas esenciales que suelen usarse cuando se trabaja con un computador son:
    .row.justify-content-center.align-items-center.my-5
      .bg-tarjeta3      
        .row.justify-content-center.align-items-center.mb-3
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-azul4.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img19.svg', alt='')
                h4.text-center.texto-blanco Precauciones básicas de seguridad
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img20.svg', alt='')
                p.text-center Quítese el reloj y las joyas y asegure la ropa suelta.
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img21.svg', alt='')
                p.text-center Apague el equipo y desenchúfelo antes de realizar el mantenimiento
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img22.svg', alt='')
                p.text-center Cubra los bordes afilados del interior de la caja del ordenador con cinta adhesiva.
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img23.svg', alt='')
                p.text-center No abra nunca una fuente de alimentación o un monitor CRT.
        .row.justify-content-center.align-items-center.mb-3
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img24.svg', alt='')
                p.text-center No toque las zonas de las impresoras que estén calientes o que utilicen alta tensión.
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img25.svg', alt='')
                p.text-center Sepa dónde se encuentra el extintor de incendios y cómo utilizarlo.
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img26.svg', alt='')
                p.text-center Mantenga los alimentos y las bebidas fuera de su espacio de trabajo.
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img27.svg', alt='')
                p.text-center Mantenga su espacio de trabajo limpio y libre de desorden.
          .col-md-6.col-lg-2.mb-3
            .tarjeta.tarjeta-gris5.p-2
              .row.justify-content-center.align-items-center.mb-5
                .col-6
                  figure.mb-3
                    img(src='@/assets/curso/temas/tema4/img28.svg', alt='')
                p.text-center Dobla las rodillas cuando levantes objetos pesados para no lesionarte la espalda.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        p(data-aos="fade-right") Siga las pautas de seguridad eléctrica para evitar incendios, lesiones y muertes por electricidad en el hogar y en el lugar de trabajo. Las fuentes de alimentación y los monitores CRT contienen alta tensión.
        .tarjeta-amarilla.p-4.mb-3(data-aos="fade-left")
          p.mb-0 <b>PRECAUCIÓN:</b> no utilice la muñequera antiestática cuando repare fuentes de alimentación o monitores CRT. Sólo los técnicos experimentados deben intentar reparar las fuentes de alimentación y los monitores CRT. Los dispositivos eléctricos tienen ciertos requisitos de energía. Por ejemplo, los adaptadores de CA se fabrican para ordenadores portátiles específicos. Intercambiar los cables de alimentación con un tipo diferente de portátil o dispositivo puede causar daños tanto en el adaptador de CA como en el portátil.
      h4.text-center Algunas herramientas más esenciales
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta.bg-tarjeta.p-4.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-2
              h1.texto-blanco 01
            .col-10
              p Un multímetro digital: se utiliza para comprobar las tensiones de alimentación y la conectividad de los cables. Muchos procedimientos de resolución de problemas requieren que se compruebe la tensión y la resistencia. Los valores se miden con un multímetro manual. El medidor puede tener una lectura analógica o digital (LCD) y utilizará un par de sondas para conectarse al dispositivo que se está probando.
        .tarjeta.bg-tarjeta.p-4.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-2
              h1.texto-blanco 02
            .col-10
              p Equipos y materiales de limpieza: por ejemplo, productos químicos de limpieza de contacto, aire comprimido, cepillo de cerdas, aspirador de mano.
        .tarjeta.bg-tarjeta.p-4.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-2
              h1.texto-blanco 03
            .col-10
              p Enchufes de envoltura: se utilizan para diagnosticar los problemas de los puertos serie y paralelo.
        .tarjeta.bg-tarjeta.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-2
              h1.texto-blanco 04
            .col-10
              p Muñequeras, alfombrillas y bolsas antiestáticas: La descarga estática puede dañar las placas de circuitos, por lo que el equipo antiestático es vital. Los componentes de repuesto del PC deben guardarse siempre en bolsas antiestáticas de protección, como las que utilizan los fabricantes para suministrar las tarjetas de interfaz.
    separador
    #t_4_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 4.3 Normativa
    p.mb-5(data-aos="fade-left") La norma ISO 20000 puede ayudar a su organización a evaluar su ITSM, mejorar los servicios, demostrar su capacidad para cumplir los requisitos de los clientes y crear un marco para la evaluación independiente. Ventajas de la certificación ISO 20000 para los proveedores de servicios son:
    .bg-fondo3
      .row.justify-content-center.align-items-center.mb-5
        .col-10.col-lg-4.mt-5.mb-3
          figure
            img(src='@/assets/curso/temas/tema4/img29.png', alt='')
        .col-lg-8.mt-4
          SlyderF(columnas="col-md-6")
            .tarjeta.tarjeta-blanca2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema4/img30.svg' alt='', style="width: 100px").m-auto
              p.text-center Ofrece una diferenciación competitiva al demostrar fiabilidad y alta calidad de servicio.
            .tarjeta.tarjeta-blanca2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema4/img31.svg' alt='', style="width: 100px").m-auto
              p.text-center Da acceso a mercados clave, ya que muchas organizaciones del sector público exigen que sus proveedores de servicios de TI demuestren el cumplimiento de la norma ISO 20000.
            .tarjeta.tarjeta-blanca2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema4/img32.svg' alt='', style="width: 100px").m-auto
              p.text-center Asegura a los clientes que se cumplirán sus requisitos de servicio.
            .tarjeta.tarjeta-blanca2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema4/img33.svg' alt='', style="width: 100px").m-auto
              p.text-center Impone un nivel de eficacia medible y una cultura de mejora continua al permitir a los proveedores de servicios supervisar, medir y revisar sus procesos y servicios de gestión de servicios.
            .tarjeta.tarjeta-blanca2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema4/img34.svg' alt='', style="width: 100px").m-auto
              p.text-center Reduce los costes de conformidad con muchas leyes y normas, como la PCI DSS (Payment Card Industry Data Security Standard) y la Ley Sarbanes-Oxley.
            .tarjeta.tarjeta-blanca2.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/tema4/img35.svg' alt='', style="width: 100px").m-auto
              p.text-center Ayuda a aprovechar las prácticas de ITIL para optimizar los recursos y los procesos.
    .row.justify-content-center.align-items-center.mb-5
      .cajon.color-primario.p-4(data-aos="flip-up")
        p.mb-0 ISO 20000 e ITIL tienen una estrecha relación. ITIL ofrece asesoramiento sobre las mejores prácticas de ITSM, incluyendo las opciones adoptadas y adaptadas por las organizaciones según las necesidades del negocio, las circunstancias locales y la madurez del proveedor de servicios. La ISO 20000, por su parte, establece los estándares a los que deben aspirar los procesos de gestión de servicios. Las organizaciones pueden obtener una certificación independiente de la norma para demostrar que siguen las mejores prácticas.
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema4/img36.png', alt='')
      .col-lg-8
        p(data-aos="fade-left") ITIL (Information Technology Infrastructure Library) es un conjunto de prácticas detalladas para la ITSM (gestión de servicios de TI) que se centra en alinear los servicios de TI con las necesidades del negocio. ITIL describe procesos, procedimientos, tareas y listas de comprobación que no son específicos de una organización, pero que pueden ser aplicados por una organización para establecer la integración con la estrategia de la organización, ofrecer valor y mantener un nivel mínimo de competencia.
        p(data-aos="fade-left") ITIL 4 se basa en las versiones anteriores del marco, introduciendo un nuevo modelo operativo digital de extremo a extremo, que ha sido diseñado para ayudar a los equipos de TI a crear, entregar y operar productos y servicios técnicos que se ajusten a la estrategia empresarial más amplia de su organización. Este modelo se denomina “sistema de valor del servicio” o “SVS”. Gunawan, H. (2019). En el siguiente recurso se puede apreciar el paso a paso de esta operación.
    .row.justify-content-center.align-items-center
      .col-lg-7.mb-4
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Proceso de adquisición")
            ul.lista-ul--color.fa-ul2
              li 
                i.fas.fa-check-circle
                p.mb-0 Preparar las especificaciones genéricas en consulta con los usuarios finales; éstas deben incluir tanto las especificaciones funcionales como las técnicas.
              li 
                i.fas.fa-check-circle
                p.mb-0 Preparar una lista de posibles proveedores.
              li 
                i.fas.fa-check-circle
                p.mb-0 Publicar un anuncio de licitación en el que se especifique la provisión de manuales de servicio técnico, formación (para el operador y el personal de mantenimiento), garantía de los accesorios y las piezas de repuesto, así como una fianza para que el licitador se comprometa a cumplir las ofertas en caso de ser aceptadas.
              li 
                i.fas.fa-check-circle
                p.mb-0 Es preferible obtener las ofertas en dos partes: técnica y financiera/comercial. Evaluar primero las ofertas técnicas y después las financieras. Considerar sólo las ofertas financieras que satisfagan las especificaciones técnicas establecidas.
              li 
                i.fas.fa-check-circle
                p.mb-0 Elabore recomendaciones claras sobre el equipo que se va a adquirir, junto con los accesorios y las piezas de repuesto recomendadas. No olvide mencionar el manual de servicio en la orden de compra.
              li 
                i.fas.fa-check-circle
                p.mb-0 Solicite una lista de los servicios que deben establecerse y que son necesarios para la instalación del equipo.
          .row(numero="2" titulo="Planificación de los servicios públicos")
            p El equipo puede requerir servicios como una fuente de alimentación trifásica, gas comprimido, una línea de agua a cierta presión, una disposición de eliminación de fluidos, recintos especiales, etc. Estos servicios deben estar bien planificados e implementados en consulta con el proveedor de equipos mucho antes de que se reciba el equipo, ya que de lo contrario se quedaría en los pasillos embalado en cajas de madera, bloqueando un espacio y un capital preciosos.
          .row(numero="3" titulo="Pruebas de aceptación (inspección de entrada)")
            p Es necesario un procedimiento formal de aceptación para garantizar que la entrada en servicio de todos los equipos se controla adecuadamente. Las pruebas de aceptación y la puesta en servicio de los equipos incluyen las pruebas eléctricas y mecánicas iniciales, las pruebas de seguridad radiológica adecuadas y la calibración. A continuación, se realizan controles para verificar el cumplimiento de las especificaciones técnicas y funcionales. También es necesario realizar comprobaciones para garantizar el cumplimiento de las normas y reglamentos adecuados, especialmente en el caso de los equipos médicos y los que se van a utilizar en condiciones peligrosas. Hay que comprobar que los manuales técnicos, los repuestos y los accesorios están completos y son funcionales. Debe prepararse y firmarse un certificado de prueba de aceptación formal.
          .row(numero="4" titulo="Control del inventario")
            p Una vez firmado el certificado de aceptación del equipo, este debe incluirse en el inventario mantenido en forma de “Registro de bienes”. En el inventario debe incluirse la siguiente información:
            ul.lista-ul--color.fa-ul2.mb-3
              li 
                i.fas.fa-check-circle
                p.mb-0 Nombre y categoría del equipo.
              li 
                i.fas.fa-check-circle
                p.mb-0 N.º de modelo.
              li 
                i.fas.fa-check-circle
                p.mb-0 Número de serie.
              li 
                i.fas.fa-check-circle
                p.mb-0 Fecha de compra.
              li 
                i.fas.fa-check-circle
                p.mb-0 Coste.
              li 
                i.fas.fa-check-circle
                p.mb-0 Disposiciones de mantenimiento: interno, contrato de mantenimiento.
              li 
                i.fas.fa-check-circle
                p.mb-0 Ubicación del equipo: departamento, sección, persona (usuario) responsable.
            .cajon.color-primario.p-4
              p.mb-0 Es probable que los requisitos de un inventario exhaustivo sólo puedan cumplirse mediante el uso de un sistema informático.
          .row(numero="5" titulo="Formación del usuario")
            p Debe llevarse a cabo in situ en forma de demostraciones en vivo basadas en el manual de usuario. Deben explicarse los posibles errores y fallos que se encuentran habitualmente, junto con los detalles de las medidas correctoras adecuadas. Se debe prohibir a las personas que no estén familiarizadas con el equipo que lo manejen a menos que estén supervisadas o hasta que se consideren competentes en su uso. Son muchas las ocasiones en las que el mal funcionamiento del equipo puede atribuirse a un manejo incorrecto, intentando culpar a la máquina o a problemas inexistentes de funcionamiento del equipo.
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/img37.svg', alt='',style="width: 450px").m-auto
      .col-lg-5.d-none.d-lg-block
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img38.svg', alt='',style="width: 450px").m-auto
      .col-lg-7
        LineaTiempoD.color-acento-botones
          .row(numero="6" titulo="Formación técnica")
            p Es esencial que las personas empleadas en el mantenimiento y la reparación de equipos realicen un curso o una formación. Los técnicos de mantenimiento y reparación no deben, bajo ningún concepto, ser enviados o permitirse trabajar en cualquier aparato en el que no hayan recibido la formación adecuada.
          .row(numero="7" titulo="Comprobación de la calibración")
            p Para algunos tipos de equipos, la calibración es particularmente importante, ya sea periódicamente o después de las reparaciones. Por lo tanto, es esencial que el personal de mantenimiento confirme los procedimientos y las normas y los lleve a cabo según las recomendaciones.
          .row(numero="8" titulo="Mantenimiento preventivo")
            p Implica la inspección y la sustitución oportuna de los componentes vulnerables. Aumenta la fiabilidad del equipo y reduce la probabilidad de que se produzcan fallos importantes. Normalmente se traduce en una mayor vida útil del equipo. Se debe establecer, documentar y aplicar una disposición adecuada para el mantenimiento preventivo, ya sea interno o a través de empresas. El mantenimiento preventivo debe abarcar tanto las pruebas de rendimiento como las de seguridad.
          .row(numero="9" titulo="Cuestión de ALERTA")
            p Los departamentos de mantenimiento deben documentar todo tipo de accidentes, incidentes y productos potencialmente dañinos, incluso si se sospecha de ellos. Dicha información debe distribuirse a todos los interesados en forma de “Cuestiones de alerta” para evitar que se repita el incidente o el problema. Además, todos los incidentes de este tipo deben ser investigados para crear una amplia base de datos que sirva de correlación en el futuro.
          .row(numero="10" titulo="Garantía de calidad")
            p Debe establecerse un procedimiento para llevar a cabo los servicios de gestión de equipos, especialmente con referencia a alguna norma aprobada como la ISO 9000. En general, los manuales de garantía de calidad deben definir los procedimientos de la política y las instrucciones de trabajo. Todos los equipos de prueba deben estar calibrados, y dicha calibración debe ser trazable a las normas nacionales. El concepto básico es que el nivel de servicio que se debe prestar debe estar definido y debidamente auditado.
    separador
    #t_4_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
       h2 4.4 Licenciamiento
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img39.png', alt='')
      .col-lg-8
        .cajon.color-primario.p-4(data-aos="flip-up")
          p.mb-0 La documentación es un requisito esencial en un laboratorio de servicio y mantenimiento. Ayuda a supervisar los programas y a obtener datos en los que basar las decisiones de mantenimiento de los equipos. Además, la documentación permite generar informes para los distintos departamentos de usuarios y la administración y puede utilizarse para demostrar el cumplimiento de los requisitos del gobierno y otros organismos reguladores y para cumplir los requisitos de gestión de riesgos. Es necesario disponer de pruebas adecuadas y aceptables de las reparaciones, inspecciones y calibraciones en caso de que la planta se vea involucrada en un caso de responsabilidad. Aunque la documentación exhaustiva suele considerarse segura, su coste es elevado, ya que incluye el tiempo dedicado a registrar y archivar la información, así como el espacio de almacenamiento físico para los registros.
    p.mb-4(data-aos="fade-left") Los registros informatizados pueden reducir en gran medida el tiempo y el espacio necesarios para la documentación, por lo que son preferibles. Sin embargo, es necesario garantizar la exactitud y la seguridad de la información almacenada en el ordenador. También es una buena práctica tener copias de seguridad periódicas de todos los datos en un medio de almacenamiento adecuado.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .cajon.color-primario.p-4(data-aos="flip-up")
          p.mb-0 El laboratorio debe llevar un registro de todos los equipos que entran para ser reparados, los detalles sobre la mano de obra desplegada en los trabajos de reparación y mantenimiento, las piezas de repuesto utilizadas, el mantenimiento del inventario de piezas de repuesto, los equipos de prueba y su calibración periódica, el cálculo de los costes de los trabajos realizados, los programas de inspección y mantenimiento preventivo y su aplicación, etc. La siguiente figura ofrece una visión general del sistema de mantenimiento.
      .col-10.col-lg-4
        figure(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/img40.svg', alt='')
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones.mb-3
          h5 Figura 1.
          span Sistema de mantenimiento
        figure
          img(src='@/assets/curso/temas/tema4/img41.svg', alt='Muestra el sistema de man tenimiento des el verbal or written y word order')
    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img42.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 El laboratorio de servicios tiene que llevar a cabo múltiples actividades, como la inspección de los equipos que llegan, su instalación y su incorporación al inventario; la reparación de los equipos defectuosos recibidos en el laboratorio y la realización de actividades de mantenimiento preventivo. En aras de un funcionamiento y una gestión eficaces de los activos de una organización, es necesario llevar un registro informático adecuado de todas estas actividades.

</template>

<script>
export default {
  name: 'Tema4',
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
