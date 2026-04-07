<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span 6
      h1 Documentación técnica
    .row.justify-content-center.align-items-center
      .col-10.col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema6/img1.svg', alt='', style="width: 430px").m-auto
      .col-lg-8
        p Todas las empresas de todos los sectores necesitan documentación técnica. No importa si está orientada al consumidor, como las instrucciones para montar una cómoda, o a su personal interno sobre las mejores prácticas para archivar facturas: todo proceso estandarizado necesita una documentación adecuada. Los documentos técnicos muestran al usuario una descripción del producto o proceso, le explican lo que hay por delante y le enseñan a superar cada paso o reto, lo que le lleva al resultado deseado.
        .cajon.cajon-tema6.p-4(data-aos="flip-up")
          p Todos los tipos de documentación técnica se dividen en tres categorías principales: documentación de productos, documentación de procesos y documentos de ventas y <i>marketing</i>. A continuación, se detallan los dos primeros.
    TabsB.color-primario.mt-5
      .py-4.py-md-5(titulo="Documentación de producto")
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img15.png', alt='', style="width: 430px").m-auto
          .col-lg-8
            p La documentación del producto abarca las guías detalladas, los manuales de formación y la información que muestra a los usuarios cómo debe funcionar un producto o cómo utilizarlo.
            p Cuando la mayoría de la gente dice “documentación técnica”, se refiere a la documentación del producto. Los documentos de producto suelen incluir instrucciones y tutoriales para ayudar a los usuarios finales a realizar una tarea. Incluyen guías, ilustraciones y hojas de referencia que cubren:
        .row.justify-content-center.align-items-center
          ul.lista-ul--color.lista-ul--separador.fa-ul2
            li 
              i.fas.fa-check-circle
              | Información sobre los requisitos o las especificaciones del sistema que los usuarios necesitan para que el producto funcione eficazmente.
            li 
              i.fas.fa-check-circle
              | Instrucciones de instalación y uso.
            li 
              i.fas.fa-check-circle
              | Preguntas frecuentes (FAQ) o base de conocimientos.
          .cajon.cajon-tema6.p-4(data-aos="flip-up")
            p.mb-0 Para la documentación del producto, se recomienda aprovechar el <i>software</i> de escritura técnica y las herramientas de documentación de <i>software</i> para crear una documentación fácil de usar y de ayuda.
      .py-4.py-md-5(titulo="Documentación de procesos")
        .row
          .col-lg-4.mb-4.mb-lg-0
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img16.png', alt='', style="width: 430px").m-auto
          .col-lg-8
            p La documentación de procesos, por otro lado, es un documento que muestra a un equipo interno lo que necesita saber para ejecutar correctamente una tarea. Abarca información que ayuda a crear consistencia y responsabilidad dentro de su organización, incluyendo:
            ul.lista-ul--color.lista-ul--separador.fa-ul2
              li 
                i.fas.fa-check-circle
                | Planes, calendarios y notas que establecen normas y patrones para diferentes procesos.
              li 
                i.fas.fa-check-circle
                | Informes y métricas que hacen un seguimiento del proyecto, el personal y el rendimiento de los recursos.
              li 
                i.fas.fa-check-circle
                | Wiki interno.
    separador
    #t_6_1.titulo-segundo.color-acento-botones
       h2 6.1 Fichas técnicas
    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img4.svg')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Una hoja de datos técnicos (TDS), es un documento proporcionado con un producto que enumera varios elementos de información sobre el mismo. A menudo, las hojas de datos técnicos incluyen la composición del producto, los métodos de uso, los requisitos de funcionamiento, las aplicaciones habituales, las advertencias y las imágenes del producto.
    .bg-fondo3.mt-5
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-5.mb-5
          .tarjeta-titulo2.p-2
            h4.mb-0.text-center.texto-blanco Ejemplo de una ficha técnica. Tomado de Yumpu (2015)
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8
          figure(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema6/img5.svg', alt='Ejemplo de una ficha técnica. Tomado de Yumpu (2015)  Una hoja de datos técnicos (TDS) se utiliza tanto con fines informativos como publicitarios')
    .row.justify-content-center.align-items-center
      .col-10.col-lg-3
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema6/img6.svg', alt='')
      .col-lg-8
        .cajon.cajon-tema7.p-4(data-aos="flip-up")
          p.mb-0 Una hoja de datos técnicos (TDS) se utiliza tanto con fines informativos como publicitarios. Desde el punto de vista informativo, una TDS contiene consejos útiles sobre el producto, por ejemplo: cómo utilizarlo, de qué está hecho, qué cosas hay que tener en cuenta al utilizar el producto, y su nombre oficial y las especificaciones estándar de la industria. Desde el punto de vista del <i>marketing</i>, puede contener fotos e ilustraciones en color, así como secciones enteras en las que se describen los beneficios que el producto aportará al usuario final.
        p.mt-3 Una TDS no debe confundirse con una hoja de datos de seguridad de los materiales (MSDS). El objetivo de la MSDS es informar específicamente al usuario final de los peligros que puede presentar el producto. Este no es el objetivo de la TDS, aunque puede incluir varias consideraciones de seguridad. Además, las hojas de datos de seguridad de los materiales deben seguir una plantilla determinada guiada por una norma industrial, mientras que una hoja de datos técnicos puede presentarse a discreción del fabricante del producto y contener la información que considere oportuna. Muchos países exigen que un material o producto tenga una ficha de datos de seguridad; la mayoría no exige una ficha técnica.
    separador
    #t_6_2.titulo-segundo.color-acento-botones
       h2 6.2 Hoja de vida
    .row.justify-content-center.align-items-center
      p La hoja de vida para un equipo de cómputo es un formato en donde se registra la información del equipo y se lleva un registro del tiempo de utilización del mismo, tal como se muestra en el ejemplo visual.
      .col-10
        .titulo-sexto.color-acento-botones.mb-3
          h5 Figura 2.
          span Ejemplo de una hoja de vida para un equipo de computo  
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema6/img7.svg', alt='Muestra ejemplo de una hoja de vida para un equipo de computo, incluye: Nombre, Tipo de equipo, Marca, Modelo, Serial o lote, Ubicacion(sede, regional, Centro zonal), Fecha de ingreso, Responsable del equipo, Operacion realizada, Mantenimiento( preventivos, correctivo, calificacion), Fecha realizacion de calibracion, Numenro certificado de calibracion, Fecha de verificacion intermedias, observaciones.')
          figcaption <b>Nota.</b> Tomado de ICBF (2022)
    .row.justify-content-center.align-items-center.mt-5.mb-3
      .col-lg-7
        .tarjeta-titulo2.p-2
          h4.mb-0.text-center.texto-blanco Este formato o registro sirve para medir la obsolescencia tecnológica.
    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img8.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 A grandes rasgos, la obsolescencia tecnológica puede considerarse como una devaluación de un artículo debido al progreso tecnológico y, por lo tanto, suele producirse cuando una nueva tecnología o producto sustituye a otro más antiguo que no tiene por qué ser necesariamente disfuncional. La literatura tiene muchos ejemplos: el telégrafo, la máquina de vapor y los faxes, entre otros.
      p.mt-5 Uno de los retos de la literatura es medir adecuadamente la obsolescencia tecnológica. El flujo de conocimientos no deja ningún rastro que seguir, lo que puede suponer un grave problema para medir la obsolescencia tecnológica más allá de los estudios de casos. Sin embargo, las citas de patentes son una excepción a este problema. Por lo tanto, la literatura ha utilizado las citas de patentes para relacionar la relevancia de la difusión del conocimiento con las tecnologías pasadas. En este sentido, el número de citas que recibe una patente en un periodo de tiempo determinado puede reflejar su utilidad e impacto en la generación de nuevas innovaciones.
    .row.justify-content-center.align-items-center.mt-3
      .col-10
        .row.justify-content-center.align-items-center.mt-3
          .col-lg-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img9.svg', alt='')
          .col-lg-8.bg1-tema6
            p.p-5.text-small Lo ideal sería que una medida de este tipo captará no sólo el stock tecnológico existente en una empresa en un momento determinado, sino también el esfuerzo de un competidor en investigación y desarrollo (I+D), la aparición de nuevas industrias y la canibalización de una empresa a través de productos más nuevos. Lamentablemente, la naturaleza multifacética de la obsolescencia tecnológica se ha medido indirectamente en la literatura a través de las citas de patentes.
    separador
    #t_6_3.titulo-segundo.color-acento-botones
       h2 6.3 Planes
    .row.justify-content-center.align-items-center
      p El proceso de programación de un plan de mantenimiento puede dividirse en ocho pasos manejables:
    .bg-fondo_tema6 
      .row.justify-content-center.align-items-center
        ImagenInfografica.color-adicional-1
          template(v-slot:imagen)
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img10.svg', alt='')
          .tarjeta.color-adicional-1.p-4(x="14%" y="42%" numero="+")
            p.mb-2.text-white La base de un buen cronograma del proyecto consiste en establecer los procedimientos, las políticas de la empresa y las directrices de documentación que regirán el proyecto. El plan de gestión del cronograma describe los recursos disponibles para el proyecto y las contingencias que pueden surgir. También enumera las partes interesadas en el plan, detalla las personas que deben aprobar el calendario y enumera a otras personas que deben recibir una copia.
          .tarjeta.color-adicional-1.p-4(x="38%" y="8%" numero="+")
            p.mb-2.text-white Esto puede ser tan sencillo como crear una lista de tareas que deben completarse para entregar el proyecto. En el caso de proyectos complejos, puede ser útil organizar estas tareas en forma de at, un gráfico que visualiza las tareas del proyecto y sus subtareas y que permita mantenerse organizado en el trabajo.
          .tarjeta.color-adicional-1.p-4(x="62%" y="42%" numero="+")
            p.mb-2.text-white Una vez se tienen todas las actividades del proyecto enumeradas, se debe pensar en cada una de ellas cuidadosamente para identificar qué tareas dependen de otras para ser completadas. Es importante definir correctamente todas las dependencias del proyecto para poder programar con precisión y evitar retrasos en el proyecto.
          .tarjeta.color-adicional-1.p-4(x="86%" y="8%" numero="+")
            p.mb-2.text-white Una vez establecidas las dependencias entre las actividades, se pueden secuenciar. En este punto, no está asignando ningún tiempo a sus actividades en términos de horas de trabajo o fechas de entrega. En su lugar, se centra en el orden en el que deben realizarse todas las actividades del proyecto para que se cree el flujo más eficiente.
          .tarjeta.color-adicional-1.p-4(x="14%" y="92%" numero="+")
            p.mb-2.text-white Cada actividad del proyecto requerirá recursos en forma de personal, costes de subcontratación, herramientas (físicas y/o digitales, como programas de <i>software</i>) y espacio de trabajo. Es importante tener en cuenta otros recursos específicos de su sector o proyecto y estimar los recursos necesarios para cada actividad del proyecto.
          .tarjeta.color-adicional-1.p-4(x="38%" y="56%" numero="+")
            p.mb-2.text-white Este paso es bastante obvio pero muy importante. ¿Cuánto durará cada actividad del proyecto? Si se subestima, se retrasará el calendario y, en última instancia, se frustrará al cliente. Una estimación excesiva podría dejar a los miembros del equipo o a otros recursos sin hacer nada mientras esperan a que se completen las tareas anteriores. La mejor manera de estimar la duración es utilizar los datos de trabajos anteriores similares.
          .tarjeta.color-adicional-1.p-4(x="62%" y="92%" numero="+")
            p.mb-2.text-white Llegados a este punto, se debería tener toda la información necesaria para elaborar el calendario del proyecto. Teniendo en cuenta la duración y los requisitos de recursos de cada actividad, así como sus dependencias y la secuencia adecuada, se pueden asignar fechas de inicio y de vencimiento para cada actividad.
          .tarjeta.color-adicional-1.p-4(x="86%" y="56%" numero="+")
            p.mb-2.text-white A diferencia del resto de los pasos de la programación del proyecto, el paso 8 es continuo. Como gestor de proyectos, deberá supervisar y controlar el calendario del proyecto durante toda su duración. Este paso implica la realización de informes del proyecto y la evaluación del progreso del mismo con respecto al calendario, la gestión del rendimiento y la comunicación con el equipo.
    .row.justify-content-center.align-items-center.mt-5
      .cajon.cajon-tema6.p-4(data-aos="flip-up")
          p Es importante que cuando haya que hacer cambios en el calendario, se aseguren de llevar a cabo y se comuniquen de acuerdo con el plan establecido en el Paso 1. A lo largo del proyecto, se asegurará de que cada actividad se ajuste al calendario y determinará si es necesario adoptar medidas correctivas en caso de que se produzcan retrasos.
    separador
    #t_6_4.titulo-segundo.color-acento-botones
       h2 6.4 Formatos
    .row.justify-content-center.align-items-center
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema6/img8.png')})`}"
        )
        .bloque-texto-g__texto.p-4(data-aos="flip-down")
          p.mb-0 Los formatos de la documentación técnica se refieren a cualquier documento que explique el uso, la funcionalidad, la creación o la arquitectura de un producto. Hay que pensar en esos formatos como una guía práctica para los usuarios, los nuevos empleados, los administradores y cualquier otra persona que necesite saber cómo funciona un producto. Pero, aunque parezca bastante sencillo, los resultados rara vez lo son.
      p.mt-5 Los formatos de la documentación técnica no consisten sólo en capturar información. Se trata de presentarla de forma que sea fácil de leer, utilizable y realmente útil para la audiencia. A continuación, muestra una breve guía para hacer formatos de documentación técnica que sean realmente útiles.
    .bg-fondo_tema6 
      .row.justify-content-center.align-items-center
        ImagenInfografica.color-adicional-1
          template(v-slot:imagen)
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/img12.svg', alt='')
          .tarjeta.color-adicional-1.p-4(x="30.2%" y="53%" numero="+")
            ul.lista-ul--color.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle
                |
                p.text-white Utilizar plantillas o “esquemas” para un diseño coherente en la página.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |
                p.text-white.mb-0 Crear una estructura de navegación sencilla y lógica.
          .tarjeta.color-adicional-1.p-4(x="50%" y="53%" numero="+")
            ul.lista-ul--color.lista-ul.mb-0
              li.d-flex
                i.fas.fa-check-circle
                |
                p.text-white Empezar con un borrador.
              li.d-flex
                i.fas.fa-check-circle
                |
                p.text-white Utilizar la regla del 30/90 para obtener comentarios.
              li.d-flex
                i.fas.fa-check-circle
                |
                p.text-white Obtenga revisiones de sus compañeros y haga revisiones.
              li.d-flex.mb-0
                i.fas.fa-check-circle
                |
                p.text-white.mb-0 Edita, edita y edita un poco más.
    separador
    #t_6_5.titulo-segundo.color-acento-botones
       h2 6.5 Reportes técnicos
    .row.justify-content-center.align-items-center.mb-5
      figure(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema6/img13.png', alt='Imágen decorativa')    
      .col-lg-11
        .tarjeta.tarjeta-gris-degrade.p-3(data-aos="fade-up")
          p.mb-0 Un informe técnico debe ser claro, completo y conciso, con conceptos claramente expuestos y hechos presentados de forma lógica. La escritura técnica se caracteriza por un tema que requiere una presentación de la información precisa y directa. Esto permite al lector reconocer el mensaje exacto que el escritor intenta expresar. En la siguiente infografía, se describen genéricamente algunas características de un excelente informe técnico:
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema6/img14.png', alt='', style="width: 350px").m-auto
      .col-lg-8
        .row.justify-content-center.align-items-center.bg3-tema6
          .col-1
          .col-10
            p.mt-3 Pueden incluir datos, criterios de diseño, técnicas, revisiones bibliográficas, historial de estudios, tablas extensas, ilustraciones/imágenes y explicaciones de intentos fallidos.
        .row.justify-content-center.align-items-center.bg4-tema6
          .col-1
          .col-10
            p.mt-3 Pueden publicarse antes que la literatura de la revista correspondiente y contener información adicional o diferente a la del siguiente artículo de la revista.
        .row.justify-content-center.align-items-center.bg5-tema6.p-2
          .col-1
          .col-10
            p.mt-3 Como el patrocinador ya sabe que puede tener acceso restringido, puede haber menos información de fondo.
        .row.justify-content-center.align-items-center.bg6-tema6.p-3
          .col-1
          .col-10
            p.mt-3 Los informes técnicos están clasificados y controlados para la exportación.
        .row.justify-content-center.align-items-center.bg7-tema6.p-3
          .col-1
          .col-10
            p Como parte de la información de identificación, puede haber abreviaturas y códigos complejos.
    .row.justify-content-center.align-items-center.mb-5
      p Un informe bien escrito y con un contenido simplificado es más fácil de leer y aumenta la confianza del lector en lo que dice el informe. Es fácil reconocer un informe sólido, pues tiene un título claro e informativo y un formato lógico para el lector, con títulos que indican la información de cada sección y los diagramas están bien diseñados y etiquetados. En todo desarrollo de este tipo de documentos se debe tener en cuenta su enfoque y estructura.
      p En cuanto al enfoque hay dos maneras de redactar un informe técnico. La que se escoja dependerá de lo que se necesite o convenga. Las dos formas son:
    .row.justify-content-center.align-items-center.mt-5
      .col-10.bg8-tema6.p-4
        .row.justify-content-center.align-items-center
          .col-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/bg8.svg', alt='', style="width: 300px").m-auto
          .col-8
            p <b>Enfoque descendente:</b> estructurar el informe completo de principio a fin, desde el título a los subtítulos y la conclusión, y añadir los detalles en las secciones correspondientes. El enfoque descendente crea un flujo estructurado para su proceso mental, lo que ayuda a la gestión del tiempo.
    .row.justify-content-center.align-items-center.mt-5
      .col-10.bg8-tema6.p-4
        .row.justify-content-center.align-items-center
          .col-8
            p <b>Entrega evolutiva:</b> este método es adecuado para alguien a quien le gusta ir con la corriente. A medida que el proyecto se desarrolla, el autor escribe y toma decisiones. La entrega evolutiva amplía las capacidades de pensamiento. Cuando surge una nueva idea o inspiración, se puede incluso añadir y modificar ciertas áreas.
          .col-4
            figure(data-aos="fade-right")
              img(src='@/assets/curso/temas/tema6/bg9.svg', alt='', style="width: 300px").m-auto
    .row.justify-content-center.align-items-center.bg9-tema6
      .col-12
        p.mt-5.mb-4 La estructura, por su parte, en un informe técnico, debe tener un formato claramente definido que sea fácil de seguir y que explique el objetivo del mismo. Revise una lista de las páginas que debe incluir.
      .col-10.col-lg-3.mb-4.mb-lg-0
        figure(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema6/img15.svg', alt='', style="width: 360px").m-auto
      .col-lg-9
        SlyderF(columnas="col-md-6")
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Portada
            p.text-center La portada es la cara del proyecto. Por lo tanto, debe tener detalles como el título, el nombre del autor y el nombre de la organización junto con su símbolo. Debe ser un diseño sencillo pero atractivo.
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Página del título
            p.text-center En la página del título se indica el número de palabras. Con frecuencia se exige la longitud de las palabras y el recuento de palabras del texto principal. En la página del título también se informa al lector sobre el estado del proyecto. Esta página también incluye el nombre del mentor o supervisor.
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Resumen
            p.text-center Proporciona una descripción clara y breve del proyecto.  Está escrito de manera que una persona que sólo lea el resumen pueda enterarse de todo lo relacionado con el proyecto.
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Prefacio
            p.text-center Es la página en la que declaras que todas las fuentes han sido debidamente acreditadas y que ninguna sección de tu investigación ha sido copiada. Tus conclusiones son el resultado de tus experimentos y tu estudio.
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Dedicatoria
            p.text-center Cuando un autor desea dedicar su estudio a un ser querido, ésta es una página adicional para hacerlo. Es una sola frase en medio de una página nueva.
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Agradecimiento
            p.text-center En la sección de agradecimientos, se dan las gracias a las personas, organizaciones y partes que le ayudaron en el proceso o le inspiraron a iniciarlo.
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Índice
            p.text-center Es el lugar donde se enumeran los números de página junto a los títulos de las secciones y subsecciones. Haz una página para describir los símbolos que hayas utilizado. Si el informe técnico tiene gráficos y tablas, también requieren una página nueva. Los símbolos e ilustraciones deben figurar en una página nueva.
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Introducción
            p.text-center Se exponen los objetivos del informe y se sugiere cómo debe tratarse el tema del mismo. La introducción lleva directamente al informe. 
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Cuerpo
            p.text-center Las secciones del cuerpo están numeradas y encabezadas. Estas secciones organizan y dividen los distintos temas principales en un orden razonable. 
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Conclusión
            p.text-center El objetivo de la conclusión es sintetizar todo lo que se ha tratado en el proyecto. Menciona los hallazgos de cada capítulo, los objetivos que se cumplieron y el grado de cumplimiento de los mismos. Discute las consecuencias de los hallazgos, así como la importancia de la investigación. 
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Referencias
            p.text-center La sección de referencias contiene las fuentes de información publicadas y citadas en el libro. 
          .tarjeta.color-acento-botones.p-4.w_t_s.text-white
            h4.text-center Bibliografía
            p.text-center Se indican otras fuentes de información, como sitios web que no se mencionan en el texto pero que son útiles para obtener antecedentes o lecturas adicionales. 

</template>

<script>
export default {
  name: 'Tema6',
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
