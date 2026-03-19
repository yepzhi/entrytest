const questions = [
    {
        category: "Ciencia",
        question: "¿Cuál es el elemento químico más abundante en el universo?",
        options: [
            "A) Oxígeno",
            "B) Carbono",
            "C) Hidrógeno",
            "D) Hierro"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué evento dio origen al universo según la cosmología moderna?",
        options: [
            "A) Colisión de galaxias",
            "B) El Big Bang",
            "C) Explosión solar",
            "D) Formación de la Tierra"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es un átomo?",
        options: [
            "A) Unidad de información",
            "B) Célula humana",
            "C) La unidad fundamental de la materia",
            "D) Partícula de luz"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué describe la Gravedad en la relatividad?",
        options: [
            "A) Fuerza magnética",
            "B) La curvatura del espacio-tiempo",
            "C) Presión atmosférica",
            "D) Fuerza fuerte"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cuánto tarda la luz del Sol en llegar a la Tierra?",
        options: [
            "A) 1 segundo",
            "B) 8 minutos",
            "C) 1 hora",
            "D) 24 horas"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué proceso produce la energía del Sol?",
        options: [
            "A) Combustión",
            "B) Fisión nuclear",
            "C) Fusión nuclear de hidrógeno",
            "D) Decaimiento radiactivo"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué es el espectro electromagnético?",
        options: [
            "A) Aura luminosa",
            "B) Gases de estrellas",
            "C) Rango completo de frecuencias de radiación (radio, luz, rayos X)",
            "D) Velocidad de la luz"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué postula el Modelo Estándar sobre el núcleo atómico?",
        options: [
            "A) Solo tiene electrones",
            "B) Está formado por protones y neutrones (hechos de quarks)",
            "C) No tiene masa",
            "D) Es indivisible"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Para qué sirve el LHC en el CERN?",
        options: [
            "A) Crear agujeros negros",
            "B) Acelerar y chocar partículas para estudiar la física fundamental",
            "C) Viajar en el tiempo",
            "D) Producir energía"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué molécula contiene las instrucciones genéticas de la vida?",
        options: [
            "A) Lípido",
            "B) Carbohidrato",
            "C) ADN (Ácido Desoxirribonucleico)",
            "D) Proteína"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué es el WiFi?",
        options: [
            "A) Cable de fibra óptica",
            "B) Tecnología inalámbrica por ondas electromagnéticas",
            "C) Láser infrarrojo",
            "D) Conexión satelital directa"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué significan las siglas 5G?",
        options: [
            "A) 5 Gigabytes",
            "B) Quinta generación de redes celulares",
            "C) 5 Gigahertz constantes",
            "D) 5 Grados de cobertura"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Para qué se usa comúnmente Bluetooth?",
        options: [
            "A) Conexión a largas distancias",
            "B) Transmisión de energía",
            "C) Conexión inalámbrica a corta distancia",
            "D) Enfriar dispositivos"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Cuál es la principal diferencia entre pantallas LCD y OLED?",
        options: [
            "A) OLED usa tubos de rayos catódicos",
            "B) En OLED cada píxel genera su propia luz sin retroiluminación",
            "C) LCD tiene colores más oscuros",
            "D) LCD es más caro"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué sensores dominan la fotografía digital actual?",
        options: [
            "A) Película 35mm",
            "B) Sensores CCD y CMOS",
            "C) Tubos de vacío",
            "D) Láseres de estado sólido"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué función cumple el láser en la tecnología?",
        options: [
            "A) Enfriar metales",
            "B) Amplificar luz por emisión estimulada de radiación (ej. fibra óptica, lectura óptica)",
            "C) Aumentar gravedad",
            "D) Generar ondas sonoras"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué es la memoria RAM en informática?",
        options: [
            "A) Almacenamiento permanente",
            "B) Memoria de trabajo temporal y volátil indispensable para el Procesador",
            "C) Disco externo",
            "D) Una batería"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Por qué un disco SSD es superior a un HDD?",
        options: [
            "A) Es más barato",
            "B) Usa memoria flash sin partes mecánicas móviles, siendo mucho más veloz",
            "C) Usa discos de mayor tamaño",
            "D) No requiere electricidad"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué química predomina en baterías de dispositivos móviles?",
        options: [
            "A) Níquel-Cadmio",
            "B) Plomo-ácido",
            "C) Iones de litio (Li-ion)",
            "D) Alcalinas"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué significa Nanotecnología?",
        options: [
            "A) Crear satélites",
            "B) Manipulación de la materia a escala nanométrica (átomos y moléculas)",
            "C) Tecnología antigua",
            "D) Programación de videojuegos"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué representa la 'Nube' (Cloud)?",
        options: [
            "A) Clima computacional",
            "B) Almacenamiento y servicios en servidores remotos conectados a Internet",
            "C) Un chip interno",
            "D) Humo en los cables"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué es un procesador (CPU)?",
        options: [
            "A) El almacenamiento",
            "B) La pantalla",
            "C) El chip que ejecuta instrucciones de código y cálculos (el cerebro)",
            "D) La tarjeta gráfica"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Qué es la programación por código?",
        options: [
            "A) Hablar con la máquina",
            "B) Conjunto de instrucciones estructuradas en lenguajes informáticos para ejecutar tareas",
            "C) Diseño gráfico manual",
            "D) Ensamblaje físico de hardware"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Cuál es el rol del Desarrollo Web Front-End?",
        options: [
            "A) Gestionar bases de datos",
            "B) Crear la interfaz gráfica y experiencia directa del usuario en el navegador",
            "C) Configurar servidores en la nube",
            "D) Diseñar hardware"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿De qué se encarga el Desarrollo Back-End?",
        options: [
            "A) Colores de la página",
            "B) Animaciones 3D",
            "C) Lógica de servidor, bases de datos y seguridad detrás de escena",
            "D) Venta de productos"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Qué significan las siglas UI y UX?",
        options: [
            "A) Unión e Intersección",
            "B) User Interface (Interfaz visual) y User Experience (Experiencia de uso)",
            "C) Unidad de Imagen y Uso X",
            "D) User Internet y User XML"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Qué diferencia a un IDE de un Editor de Código ligero?",
        options: [
            "A) El Editor pesa más",
            "B) Un IDE incluye herramientas completas integradas (compilador, depurador) para el desarrollo",
            "C) Ninguna",
            "D) El IDE es hardware"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿En qué se basa el Machine Learning (IA)?",
        options: [
            "A) Reglas físicas fijas",
            "B) Sistemas que aprenden de grandes volúmenes de datos identificando patrones sin programación estricta",
            "C) Bases de datos vacías",
            "D) Circuitos análogos"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Qué es un lenguaje de programación (ej. Python)?",
        options: [
            "A) Idioma alienígena",
            "B) Un idioma humano",
            "C) Reglas sintácticas para comunicarse e instruir a las máquinas",
            "D) Un programa traductor de inglés a español"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Para qué sirve HTML en la web?",
        options: [
            "A) Animaciones complejas",
            "B) Definir la estructura básica y el contenido",
            "C) Manejar la base de datos",
            "D) Proteger contra virus"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Lógica",
        question: "¿Por qué el cielo despejado se ve azul?",
        options: [
            "A) Reflejo del agua",
            "B) La atmósfera dispersa la luz azul más que otros colores (Dispersión de Rayleigh)",
            "C) Los gases son azules",
            "D) Espejismo estelar"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Lógica",
        question: "¿Qué es una Hipótesis científica?",
        options: [
            "A) Verdad absoluta",
            "B) Suposición educada sujeta a prueba y experimentación",
            "C) Opinión popular",
            "D) Ley inmutable"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Lógica",
        question: "¿Cuáles son pasos clave del Método Científico?",
        options: [
            "A) Observación, hipótesis, experimentación y análisis",
            "B) Duda, llanto, negación y asimilación",
            "C) Lectura, copia, impresión y debate",
            "D) Votación, creencia, mito y fe"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Lógica",
        question: "¿Qué es la 'Variable Controlada' en un experimento?",
        options: [
            "A) La que causa el error",
            "B) La que se mantiene inalterada para no afectar el resultado",
            "C) La que se rompe",
            "D) La conclusión"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Lógica",
        question: "Si un TV cuesta $10,000 MXN y tiene 30% de descuento directo, pagarás:",
        options: [
            "A) $3,000",
            "B) $6,000",
            "C) $7,000",
            "D) $8,500"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "STEM",
        question: "¿Qué significa STEM?",
        options: [
            "A) Sistemas Teóricos y Modelos",
            "B) Ciencia, Tecnología, Ingeniería y Matemáticas (siglas en inglés)",
            "C) Seguro a Todo Empleado Municipal",
            "D) Sistema de Telecomunicaciones Moderno"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué fomenta el 'Código Abierto' (Open Source)?",
        options: [
            "A) Restringir programas",
            "B) Que el código fuente sea público para usar, estudiar, modificar y distribuir colaborativamente",
            "C) Cobrar licencias carísimas",
            "D) Ocultar la tecnología"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es un 'Bug' en programación?",
        options: [
            "A) Un estilo visual",
            "B) Un error o fallo en el código que causa resultados inesperados",
            "C) Un premio a la calidad",
            "D) Un tipo de memoria temporal"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué atiende la Ciberseguridad?",
        options: [
            "A) Reparar pantallas rotas",
            "B) Proteger sistemas, redes y datos de ataques maliciosos o acceso no autorizado",
            "C) Programar videojuegos interactivos",
            "D) Vender seguros cibernéticos"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es el Phishing?",
        options: [
            "A) Pesca deportiva",
            "B) Estafa cibernética suplantando entidades de confianza para robar datos o contraseñas",
            "C) Una clase de virus de hardware",
            "D) Una forma legal de invertir"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Si mezclas agua a 100°C y agua a 0°C en proporciones iguales en un termo ideal, obtendrás:",
        options: [
            "A) 100°C",
            "B) 50°C",
            "C) 0°C",
            "D) Se congela mágicamente"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Para comprobar si una planta necesita luz, la mejor prueba es:",
        options: [
            "A) Plantar una sola a oscuras",
            "B) Un cuarto oscuro vacío",
            "C) Tener dos plantas iguales germinando, pero dejar a una a oscuras como control",
            "D) Escribir un ensayo teórico"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué nos indica la reproducibilidad de un experimento (mismo resultado 100 veces)?",
        options: [
            "A) Alta confiabilidad y rigor científico",
            "B) Falsedad estadística",
            "C) Que es pura suerte aleatoria",
            "D) Que la magia existe"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Diferencia entre causa y correlación?",
        options: [
            "A) Ninguna",
            "B) Correlación es coincidencia; causa exige que una variable origine directamente la otra",
            "C) Correlación siempre es falsa",
            "D) Causa es coincidencia temporal"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Por qué hierve el agua a menor temperatura en lo alto de una gran montaña?",
        options: [
            "A) Por los dioses del hielo",
            "B) Por el frío exterior que quema la olla",
            "C) Porque a mayor altitud hay menor presión atmosférica sobre el líquido",
            "D) El agua no hierve ahí"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué es una VPN (Red Privada Virtual)?",
        options: [
            "A) Aplicación que acelera el internet de paga",
            "B) Tecnología que cifra y protege la conexión de navegación en internet, ocultando la actividad",
            "C) Antivirus de disco duro portátil",
            "D) Memoria en la nube barata"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿A qué denominamos 'App' en tecnología móvil?",
        options: [
            "A) Cualquier chip",
            "B) Programa de software diseñado para realizar una actividad específica para el usuario",
            "C) Antena de WiFi gigante",
            "D) Batería portátil"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué afirma la Primera Ley de Newton, o Ley de Inercia?",
        options: [
            "A) Todo cuerpo persevera en su reposo o movimiento uniforme a menos que actúe otra fuerza",
            "B) La masa no importa",
            "C) Energía y materia desaparecen siempre",
            "D) Solo hay fuerza a nivel celular"
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Qué mide un 'Voltio' en electrónica?",
        options: [
            "A) El peso de los cables",
            "B) El amperaje o corriente pura atómica",
            "C) La fuerza o diferencia de potencial que empuja a los electrones por el circuito",
            "D) El volumen de sonido en bocinas"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué significan las siglas HDMI?",
        options: [
            "A) Hardware Device Memory Input",
            "B) High-Definition Multimedia Interface (interfaz estándar para audio y video digital sin compresión)",
            "C) Heavy Data Micro Intelligence",
            "D) Highly Digital Manual Interface"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología",
        question: "¿Qué función cumple un 'Transistor' en microchips?",
        options: [
            "A) Luz intermitente",
            "B) Ser un pequeño interruptor digital (1/0) o amplificador de señales, fundamento de las PC",
            "C) Batería infinita de larga duración estática",
            "D) Ventilador del procesador CPU"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Programación",
        question: "¿A qué se llama Algoritmo en programación de software puro?",
        options: [
            "A) Un procesador muy caro",
            "B) Cable de oro",
            "C) Conjunto ordenado, finito e inequívoco de instrucciones matemáticas para resolver un problema",
            "D) Virus clásico destruye discos"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Programación",
        question: "¿Por qué son demandados los lenguajes de programación en 2026?",
        options: [
            "A) Para leer libros viejos",
            "B) Porque son la clave para controlar, diseñar y automatizar toda la revolución de máquinas y software",
            "C) Porque se ven estéticos",
            "D) Por tradición histórica obsoleta"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia",
        question: "¿Cómo se llama la fuerza que mantiene unidos al protón y neutrón en el núcleo central atómico?",
        options: [
            "A) Gravedad",
            "B) Fuerza electromagnética repulsiva",
            "C) Interacción nuclear fuerte",
            "D) Interacción débil"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "La antimateria está caracterizada porque:",
        options: [
            "A) No tiene masa",
            "B) No existe en el universo",
            "C) Sus partículas tienen igual masa que la materia pero carga eléctrica opuesta",
            "D) Solo es vista en cuentos"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Los fotones de luz visible y los de rayos X forman parte de o del:",
        options: [
            "A) Espectro Sonoro",
            "B) Gases Atmosféricos Nobles",
            "C) Conjunto o grupo del Espectro Electromagnético radiado continuo",
            "D) Rayos Gamma oscuros"
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia",
        question: "Según las teorías de Origen de Vida, ¿de qué están mayormente compuestos los organismos terrestres?",
        options: [
            "A) Hierro",
            "B) Compuestos orgánicos basados crucialmente en Carbono (carbohidratos, lípidos, proteínas)",
            "C) Cobre libre",
            "D) Níquel sólido"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Innovación",
        question: "¿Qué beneficio práctico ofrece la Nano-biotecnología en la sociedad moderna?",
        options: [
            "A) Hacer pintura transparente",
            "B) Fusión para combatir enfermedades mediante manipulación molecular, genética e implantar biosensores",
            "C) Navegar más rápido",
            "D) Eliminar los virus de software de computadora"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Innovación",
        question: "¿Qué propone o persigue lograr la IA moderna según el análisis profundo tecnológico?",
        options: [
            "A) Crear humanos robots metálicos soldados pesados automáticos",
            "B) Superar el intelecto elaborando sistemas que identifican patrones masivos de datos para resolver sin ser explícitamente programados",
            "C) Animación en tiempo real pura de cine 3d",
            "D) Vender procesadores más costosos"
        ],
        answer: 1,
        points: 1
    },
    {
        category: "STEM",
        question: "¿Por qué el modelo STEM impacta firmemente en la riqueza del país?",
        options: [
            "A) Solo ensambla",
            "B) Paga impuestos caros y frena negocios",
            "C) Impulsa desde su base a inventar, crear código nuevo e innovar tecnología exportable que solventa carencias",
            "D) Por tener nombres llamativos ingleses de negocios turbios"
        ],
        answer: 2,
        points: 1
    }
];

export default questions;
