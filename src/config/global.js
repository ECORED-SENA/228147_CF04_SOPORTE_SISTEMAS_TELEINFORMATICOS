export default {
  global: {
    componenteFormativo: 'Gestión de <i>hardware</i> y <i>software</i>',
    descripcionCurso:
      'En este componente se abordan los conceptos de la administración del <i>software</i> y el <i>hardware</i> desde el conocimiento de los sistemas básicos de un computador, el sistema operativo y sus características y, finalmente, cómo se puede plantear una programación de posibles mantenimientos.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Equipos de cómputo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Características externas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Componentes mecánicos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Periféricos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Mantenimiento preventivo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Precauciones y recomendaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Manejo de la electricidad',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas operativos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: '<i>Software</i> utilitario',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Seguridad',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Administración y gestión',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Residuos ambientales',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Elementos de protección',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Normativa',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Licenciamiento',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Medidas Correctivas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Protocolos ',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Verificación',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Correcciones',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Documentación técnica',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Fichas técnicas',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Hoja de vida',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Planes',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Formatos',
            hash: 't_6_4',
          },
          {
            numero: '6.5',
            titulo: 'Reportes técnicos',
            hash: 't_6_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/228147_CF04_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Administración y gestión',
      referencia:
        'Torres González, O. R. (2022). <i>Análisis sobre la aplicación de frameworks: cobit, pmi, cmmi comparado con itil v4 en las empresas de sector privado en la gestión de servicios TI.</i> Universidad Autónoma del Estado de México.',
      tipo: 'Artículo',
      link: 'http://ri.uaemex.mx/handle/20.500.11799/113271',
    },
  ],
  glosario: [
    {
      termino: '<i>Bluetooth</i>',
      significado:
        'tecnología inalámbrica de corto alcance que permite conectar dos dispositivos en una pequeña red personal.',
    },
    {
      termino: 'CMOS',
      significado:
        'semiconductor complementario de óxido metálico o <i>complementary metal-oxide-semiconductor</i>',
    },
    {
      termino: 'CPU',
      significado: 'unidad central de procesamiento.',
    },
    {
      termino: 'DIMM',
      significado: 'módulo de memoria dual en línea.',
    },
    {
      termino: 'DVI',
      significado:
        '<i>digital video interface</i>, puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'ENIAC',
      significado:
        '<i>electronic numerical integrator and computer</i> primer computador programable a gran escala.',
    },
    {
      termino: 'GNU',
      significado:
        '<i>general public license</i>, Licencia Pública General de GNU.',
    },
    {
      termino: 'HDMI',
      significado:
        '<i>high-definition multimedia interface</i>, puerto de conexión de las pantallas de un computador.',
    },
    {
      termino: 'ITIL',
      significado: '<i>information technology infrastructure library.</i>',
    },
    {
      termino: 'ITSM',
      significado: 'gestión de servicios de TI.',
    },
    {
      termino: 'LCD',
      significado: 'pantalla de cristal líquido.',
    },
    {
      termino: 'RAM',
      significado: 'memoria de acceso aleatorio',
    },
    {
      termino: 'Red celular',
      significado:
        'consiste en áreas geográficas de cobertura llamadas células, cada una controlada por una torre llamada estación base. Los teléfonos móviles se llaman así porque utilizan una red celular.',
    },
    {
      termino: 'SO',
      significado:
        'sistema operativo. Es el <i>software</i> que gestiona directamente el <i>hardware</i> y los recursos de un sistema, como la CPU, la memoria y el almacenamiento. El sistema operativo se sitúa entre las aplicaciones y el <i>hardware</i> y establece las conexiones entre todo el <i>software</i> y los recursos físicos que hacen el trabajo.',
    },
    {
      termino: 'TDS',
      significado: 'hoja de datos técnicos.',
    },
    {
      termino: 'USB',
      significado:
        'universal serial bus, puerto de conexión serial de los computadores.',
    },
    {
      termino: 'VGA',
      significado:
        '<i>video graphics array</i>, puerto de conexión de las pantallas de un computador.',
    },
  ],
  referencias: [
    {
      referencia:
        'Andrews, J., Shelton, J., & West, J. (2019). <i>CompTIA A+ Guide to IT Technical Support.</i> Cengage Learning.',
      link: '',
    },
    {
      referencia:
        'AT&T (1964) <i>Bardeen Shockley Brattain 1948.</i> Public Domain. ',
      link:
        'https://es.wikipedia.org/wiki/Historia_del_transistor#/media/Archivo:Bardeen_Shockley_Brattain_1948.JPG',
    },
    {
      referencia:
        'Barral, B. (2009) <i>Machine Analytique de Charles Babbage, exposée au Science Museum de Londres.</i> CC BY-SA 2.5. Wikipedia. ',
      link:
        'https://es.wikipedia.org/wiki/M%C3%A1quina_anal%C3%ADtica#/media/Archivo:AnalyticalMachine_Babbage_London.jpg',
    },
    {
      referencia:
        'Geier, M. J. (2016). <i>How to Diagnose and Fix Everything Electronic.</i> McGraw-Hill Education.',
      link: '',
    },
    {
      referencia:
        'Gunawan, H. (2019). <i>Strategic management for its services using the information technology infrastructure library (ITIL) framework.</i> In 2019 International Conference on Information Management and Technology (ICIMTech) (Vol. 1, pp. 362-366). IEEE.',
      link: '',
    },
    {
      referencia: 'ICBF (2022). Formato Hoja de Vida Equipos Médicos v1. ',
      link: 'https://www.icbf.gov.co/formato-hoja-de-vida-equipos-medicos-v1',
    },
    {
      referencia: 'LucaDetomi (2005). <i>Intel 4004.</i> CC BY-SA 3.0. ',
      link:
        'https://es.wikipedia.org/wiki/Intel_4004#/media/Archivo:Intel_4004.jpg',
    },
    {
      referencia:
        'Muhlpfordt, H. (2007) <i>Intel 80286 68 Pin 10Mhz.</i> CC BY-SA 3.0. ',
      link:
        'https://es.wikipedia.org/wiki/Intel_80286#/media/Archivo:Intel_80286_68pin_plastic_10mhz_2007_03_27.jpg',
    },
    {
      referencia: 'Seofilo (2018). <i>Ley de Moore.</i> Wikipedia.',
      link:
        'https://es.wikipedia.org/wiki/Archivo:Ley_de_Moore.png#/media/Archivo:Ley_de_Moore.png',
    },
    {
      referencia:
        'United States Army  (1945-1947). <i>Two women operating ENIAC.</i> Public Domain. ',
      link:
        'https://es.wikipedia.org/wiki/ENIAC#/media/Archivo:Two_women_operating_ENIAC.gif',
    },
    {
      referencia: 'Wikipedia (2005). <i>Intel I8088.</i> CC BY-SA 3.0 ',
      link:
        'https://es.wikipedia.org/wiki/Intel_8086_y_8088#/media/Archivo:I8088.jpg',
    },
    {
      referencia:
        'Yumpu (2015). <i>SST TEMPEST SDIP-27 Level A PCs - special applications.</i>',
      link:
        'https://www.yumpu.com/en/document/view/43645361/sst-tempest-sdip-27-level-a-pcs-special-applications',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Guadrón',
          cargo: 'Responsable Línea de Producción',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Joaquín Fernando Sánchez',
          cargo: 'Experto temático',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios.',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseño instruccional',
          centro:
            'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios.',
        },
        {
          nombre: 'Silvia Milena Sequeda Cárdenas',
          cargo: 'Asesoría metodológica y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Sandra Patricia Hoyos Sepúlveda',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología.',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuador Instruccional',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Asesoría metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
        {
          nombre: 'Adriana Marcela Suarez Eljure',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Regional Distrito Capital - Centro de gestión de mercados, Logística y Tecnologías de la información.',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
