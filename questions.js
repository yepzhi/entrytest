const questions = [
    // ============================================================
    // ENTRY TEST — 50 preguntas diagnósticas de competencia STEM
    // Evalúa conocimiento BASE antes del curso (PISA-style)
    // Dificultad: Baja-Media · Edad: ~15 años · Tiempo: 45s/pregunta
    // ============================================================

    // --- BLOQUE 1: Curiosidad Científica General (Q1–Q12) ---
    {
        category: "Ciencia General",
        question: "¿Cuál es el elemento químico más abundante en el universo?",
        options: [
            "A) Oxígeno.",
            "B) Carbono.",
            "C) Hidrógeno.",
            "D) Hierro."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué evento dio origen al universo según la cosmología moderna?",
        options: [
            "A) La colisión de dos galaxias.",
            "B) El Big Bang.",
            "C) Una explosión solar masiva.",
            "D) La formación de la Tierra."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué es un átomo?",
        options: [
            "A) La unidad básica de información en una computadora.",
            "B) Un tipo de célula del cuerpo humano.",
            "C) La unidad fundamental que forma toda la materia.",
            "D) Una partícula de luz visible."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Cuáles son los tres estados clásicos de la materia?",
        options: [
            "A) Sólido, líquido y gaseoso.",
            "B) Caliente, frío y templado.",
            "C) Pesado, ligero y neutro.",
            "D) Visible, invisible y transparente."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué fuerza hace que los objetos caigan al piso?",
        options: [
            "A) La fuerza magnética.",
            "B) La fuerza centrífuga.",
            "C) La gravedad.",
            "D) La presión atmosférica."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Cuánto tarda la luz del Sol en llegar a la Tierra (aproximadamente)?",
        options: [
            "A) 1 segundo.",
            "B) 8 minutos.",
            "C) 1 hora.",
            "D) 24 horas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué es el ADN?",
        options: [
            "A) Una vitamina esencial para los huesos.",
            "B) La molécula que contiene la información genética de los seres vivos.",
            "C) Un gas presente en la atmósfera terrestre.",
            "D) Un mineral que se encuentra en las rocas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué produce la energía del Sol?",
        options: [
            "A) La combustión de oxígeno.",
            "B) Reacciones químicas con el agua.",
            "C) Fusión nuclear de átomos de hidrógeno.",
            "D) El calor proveniente del centro de la galaxia."
        ],
        answer: 2,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué significa la famosa ecuación E = mc²?",
        options: [
            "A) La energía es igual a la masa multiplicada por la velocidad de la luz al cuadrado.",
            "B) La electricidad es igual a la materia por la corriente al cuadrado.",
            "C) La evolución es igual a la mutación por la cantidad de cromosomas.",
            "D) Es una fórmula para calcular la edad de las estrellas."
        ],
        answer: 0,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué es la fotosíntesis?",
        options: [
            "A) El proceso por el cual los animales digieren sus alimentos.",
            "B) El proceso por el cual las plantas convierten luz solar en energía.",
            "C) La manera en que las rocas se convierten en arena.",
            "D) El movimiento del agua desde los ríos al mar."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué tipo de ondas usamos para escuchar la radio o conectarnos al WiFi?",
        options: [
            "A) Ondas de sonido.",
            "B) Ondas electromagnéticas (ondas de radio).",
            "C) Ondas de agua.",
            "D) Ondas sísmicas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Ciencia General",
        question: "¿Qué significa que una especie esté 'en peligro de extinción'?",
        options: [
            "A) Que la especie está creciendo de forma descontrolada.",
            "B) Que su población es tan baja que podría desaparecer para siempre.",
            "C) Que la especie ha migrado a otro continente.",
            "D) Que ha evolucionado en una nueva especie."
        ],
        answer: 1,
        points: 1
    },

    // --- BLOQUE 2: Alfabetización Tecnológica (Q13–Q26) ---
    {
        category: "Tecnología Básica",
        question: "¿Qué es el WiFi?",
        options: [
            "A) Un cable de red que conecta computadoras.",
            "B) Una tecnología inalámbrica que permite conectarse a internet sin cables.",
            "C) Una marca de teléfonos celulares.",
            "D) Un programa de computadora para navegar internet."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué es un procesador (CPU) en una computadora?",
        options: [
            "A) La pantalla donde se muestran las imágenes.",
            "B) El 'cerebro' que ejecuta las instrucciones y hace cálculos.",
            "C) El teclado que se usa para escribir.",
            "D) La batería que suministra energía."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué es la memoria RAM?",
        options: [
            "A) La memoria permanente donde se guardan tus fotos y documentos.",
            "B) La memoria temporal de trabajo que usa el procesador; se borra al apagar.",
            "C) El disco duro portátil que usas con USB.",
            "D) Una aplicación para mejorar la velocidad de internet."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué hace un sistema operativo como Windows, macOS o Android?",
        options: [
            "A) Solo sirve para abrir páginas de internet.",
            "B) Administra el hardware y permite que las aplicaciones funcionen.",
            "C) Es un programa para editar fotos y videos.",
            "D) Es un antivirus que protege la computadora."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué diferencia hay entre descargar una app y usar una página web?",
        options: [
            "A) No hay ninguna diferencia.",
            "B) Una app se instala en tu dispositivo; una página web se accede desde un navegador.",
            "C) Las apps solo funcionan con WiFi; las páginas no necesitan internet.",
            "D) Las páginas web son más rápidas que las apps siempre."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué es Bluetooth?",
        options: [
            "A) Un tipo de pantalla táctil.",
            "B) Una tecnología inalámbrica de corto alcance para conectar dispositivos cercanos.",
            "C) Un navegador de internet como Chrome.",
            "D) Un lenguaje de programación para robots."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué significa 'resolución' en una pantalla de celular o TV?",
        options: [
            "A) El brillo máximo que puede alcanzar.",
            "B) La cantidad de píxeles que tiene; más píxeles = imagen más nítida.",
            "C) La velocidad con la que se enciende.",
            "D) El tamaño en pulgadas de la pantalla."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "Si un teléfono tiene cámara de '48 megapíxeles', ¿qué significa?",
        options: [
            "A) Que su batería dura 48 horas.",
            "B) Que el sensor captura imágenes con 48 millones de puntos de color.",
            "C) Que puede grabar video a 48 cuadros por segundo.",
            "D) Que tiene 48 lentes en la cámara."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué es la 'nube' (cloud) en tecnología?",
        options: [
            "A) Un satélite que flota sobre la Tierra.",
            "B) Servidores remotos que almacenan datos accesibles desde internet.",
            "C) Un tipo de WiFi más rápido.",
            "D) El espacio vacío dentro de tu teléfono."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué significa 5G en telefonía celular?",
        options: [
            "A) 5 Gigabytes de almacenamiento.",
            "B) La quinta generación de redes celulares, más rápida que 4G.",
            "C) 5 Gigahertz de frecuencia de pantalla.",
            "D) Un celular con 5 cámaras."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué tipo de batería utilizan los smartphones modernos?",
        options: [
            "A) Pilas alcalinas AA.",
            "B) Baterías de iones de litio (Li-ion).",
            "C) Baterías de plomo como las de los autos.",
            "D) Celdas solares internas."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Tecnología Básica",
        question: "¿Qué es una SSD comparada con un disco duro tradicional (HDD)?",
        options: [
            "A) Son exactamente lo mismo con diferente nombre.",
            "B) SSD es más rápida porque no tiene partes mecánicas; HDD usa discos giratorios.",
            "C) HDD es más moderna y rápida que SSD.",
            "D) SSD solo funciona en computadoras de escritorio."
        ],
        answer: 1,
        points: 1
    },

    // --- BLOQUE 3: Pensamiento Lógico y Método Científico (Q27–Q36) ---
    {
        category: "Pensamiento Lógico",
        question: "Si quieres saber si una planta crece más rápido con o sin luz, ¿qué debes hacer?",
        options: [
            "A) Preguntarle a un amigo qué opina.",
            "B) Hacer un experimento: una planta con luz y otra sin luz, comparar los resultados.",
            "C) Buscar la respuesta en redes sociales.",
            "D) Suponer que con luz crece más sin necesidad de comprobarlo."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "¿Qué es una hipótesis en el método científico?",
        options: [
            "A) Una respuesta definitiva a un problema.",
            "B) Una suposición que se puede probar mediante experimentación.",
            "C) Una opinión personal que no necesita evidencia.",
            "D) Un resultado final ya comprobado."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "Un científico repite el mismo experimento 100 veces y obtiene siempre el mismo resultado. Esto indica que:",
        options: [
            "A) El científico está haciendo trampa.",
            "B) Los resultados son reproducibles y probablemente confiables.",
            "C) Solo necesitaba hacerlo una vez.",
            "D) El experimento está mal diseñado por repetitivo."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "Si mezclas agua caliente con agua fría en partes iguales, ¿qué temperatura tendrá la mezcla?",
        options: [
            "A) Estará más caliente que el agua caliente.",
            "B) Estará a una temperatura intermedia entre ambas.",
            "C) Estará más fría que el agua fría.",
            "D) Depende del color del recipiente."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "¿Por qué el cielo se ve azul durante el día?",
        options: [
            "A) Porque el mar refleja su color hacia arriba.",
            "B) Porque la atmósfera dispersa la luz azul del Sol más que otros colores.",
            "C) Porque el aire es de color azul.",
            "D) Porque nuestros ojos están programados para ver solo azul."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "¿Cuáles son los pasos básicos del método científico?",
        options: [
            "A) Opinar, discutir, votar y publicar.",
            "B) Observar, formular hipótesis, experimentar, analizar y concluir.",
            "C) Copiar, pegar, resumir y entregar.",
            "D) Imaginar, creer, suponer y aceptar."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "¿Qué es una 'variable' en un experimento?",
        options: [
            "A) Un error que se comete al medir.",
            "B) Un factor que puede cambiar y afectar el resultado del experimento.",
            "C) El nombre del instrumento de medición.",
            "D) La conclusión final del experimento."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "Un termómetro marca 0°C. ¿Qué está pasando con el agua a esta temperatura?",
        options: [
            "A) Está hirviendo.",
            "B) Está en su punto de congelación.",
            "C) Está evaporándose.",
            "D) Nada especial, es una temperatura más."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "Si un celular cuesta $5,000 y tiene 30% de descuento, ¿cuánto pagas?",
        options: [
            "A) $4,000.",
            "B) $3,500.",
            "C) $3,000.",
            "D) $1,500."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Pensamiento Lógico",
        question: "¿Cuál es la diferencia entre 'causa' y 'correlación'?",
        options: [
            "A) Son exactamente lo mismo.",
            "B) Que dos cosas pasen juntas (correlación) no significa que una cause la otra.",
            "C) La causa siempre viene después del efecto.",
            "D) La correlación es más importante que la causa en ciencia."
        ],
        answer: 1,
        points: 1
    },

    // --- BLOQUE 4: Familiaridad Digital y Programación (Q37–Q50) ---
    {
        category: "Cultura Digital",
        question: "¿Qué es la ciberseguridad?",
        options: [
            "A) Un videojuego de ciencia ficción.",
            "B) La práctica de proteger sistemas, redes y datos de ataques digitales.",
            "C) Un tipo de seguro médico para programadores.",
            "D) Un cable especial para conectar computadoras."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es una base de datos?",
        options: [
            "A) La base física donde se coloca una computadora.",
            "B) Un sistema organizado para almacenar, buscar y gestionar información.",
            "C) El cable de alimentación eléctrica.",
            "D) Un tipo de procesador muy potente."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es un lenguaje de programación?",
        options: [
            "A) Un idioma que hablan las computadoras entre sí sin intervención humana.",
            "B) Un conjunto de instrucciones que le dicen a la computadora qué hacer.",
            "C) Un programa de traducción como Google Translate.",
            "D) El manual de usuario de un teléfono celular."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Para qué sirve el HTML?",
        options: [
            "A) Para diseñar videojuegos en 3D.",
            "B) Para definir la estructura y contenido de una página web.",
            "C) Para editar fotografías profesionales.",
            "D) Para programar robots industriales."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es un 'bug' en programación?",
        options: [
            "A) Una nueva función añadida a un programa.",
            "B) Un error en el código que hace que el programa no funcione correctamente.",
            "C) Un tipo de virus que destruye la computadora.",
            "D) El nombre de un lenguaje de programación."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es una app?",
        options: [
            "A) Un tipo de cable para cargar el celular.",
            "B) Un programa diseñado para realizar una tarea específica en un dispositivo.",
            "C) Una antena para mejorar la señal de internet.",
            "D) La pantalla táctil de un teléfono."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es inteligencia artificial (IA)?",
        options: [
            "A) Un robot con forma humana que piensa igual que nosotros.",
            "B) Programas que pueden aprender de datos y tomar decisiones sin ser programados paso a paso.",
            "C) Una computadora que solo responde preguntas de internet.",
            "D) Un teléfono celular de última generación."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Cuál es la diferencia entre internet y la web?",
        options: [
            "A) Son exactamente lo mismo.",
            "B) Internet es la infraestructura física (cables, servidores); la web son los sitios y documentos.",
            "C) La web es más rápida que internet.",
            "D) Internet es solo para computadoras; la web es solo para celulares."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es un algoritmo?",
        options: [
            "A) Un tipo de computadora muy avanzada.",
            "B) Un conjunto de pasos ordenados para resolver un problema.",
            "C) Una red social para programadores.",
            "D) El procesador de un teléfono inteligente."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "Si alguien te pide tu contraseña por correo diciendo ser de tu banco, ¿qué debes hacer?",
        options: [
            "A) Enviarla inmediatamente para no perder tu cuenta.",
            "B) No compartirla; probablemente es un intento de phishing (estafa).",
            "C) Enviarla solo si el correo tiene el logo del banco.",
            "D) Publicarla en redes sociales para pedir consejo."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué significa 'código abierto' (open source)?",
        options: [
            "A) Que el programa es gratis pero no se puede modificar.",
            "B) Que el código fuente es público y cualquiera puede ver, modificar y compartirlo.",
            "C) Que el programa solo funciona cuando la computadora está conectada al internet.",
            "D) Que el software es exclusivo para programadores profesionales."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "Cultura Digital",
        question: "¿Qué es una dirección URL?",
        options: [
            "A) El número de serie de tu computadora.",
            "B) La dirección que escribes en el navegador para acceder a un sitio web.",
            "C) La contraseña de tu correo electrónico.",
            "D) El nombre de un servidor de videojuegos."
        ],
        answer: 1,
        points: 1
    },

    // --- BLOQUE 5: STEM Aplicado y Conciencia Global (Q47–Q50) ---
    {
        category: "STEM y Sociedad",
        question: "¿Qué significa STEM?",
        options: [
            "A) Sistema de Transmisión Electrónica Mundial.",
            "B) Ciencia, Tecnología, Ingeniería y Matemáticas (por sus siglas en inglés).",
            "C) Sociedad, Trabajo, Educación y Medio ambiente.",
            "D) Software, Telecomunicaciones, Electricidad y Mecánica."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "STEM y Sociedad",
        question: "¿Por qué es importante la tecnología para el futuro de la sociedad?",
        options: [
            "A) Solo para entretenimiento y redes sociales.",
            "B) Porque permite resolver problemas de salud, energía, comunicación y educación.",
            "C) Solo es importante para los países ricos.",
            "D) Porque reemplazará completamente a los seres humanos."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "STEM y Sociedad",
        question: "¿Qué es la energía renovable?",
        options: [
            "A) Energía que se obtiene solo del petróleo.",
            "B) Energía de fuentes que se regeneran naturalmente, como el sol, viento y agua.",
            "C) Energía que solo se usa una vez y se agota.",
            "D) Cualquier tipo de electricidad generada en una planta nuclear."
        ],
        answer: 1,
        points: 1
    },
    {
        category: "STEM y Sociedad",
        question: "¿Qué organismo internacional evalúa la competencia científica de estudiantes de 15 años?",
        options: [
            "A) La FIFA.",
            "B) La OCDE mediante el programa PISA.",
            "C) La NASA.",
            "D) Google."
        ],
        answer: 1,
        points: 1
    }
];
