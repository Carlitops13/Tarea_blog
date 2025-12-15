// Script de ejemplo para agregar proyectos de prueba
// Ejecutar este código en la consola del navegador para agregar proyectos de ejemplo

function agregarProyectosEjemplo() {
    const proyectosEjemplo = [
        {
            titulo: "Craftopedia",
            descripcion: "Enciclopedia completa de bloques, items y criaturas del mundo de Minecraft. Incluye recetas de crafteo y guías.",
            imagen: "https://via.placeholder.com/400x300/7cbd3c/ffffff?text=Craftopedia",
            tags: ["Redstone", "Command Blocks", "Vanilla", "Wiki"],
            link: "https://github.com/ejemplo/craftopedia",
            fecha: new Date().toISOString()
        },
        {
            titulo: "Redstone Calculator",
            descripcion: "Calculadora funcional construida con circuitos de redstone. Operaciones matemáticas básicas usando lógica de compuertas.",
            imagen: "https://via.placeholder.com/400x300/c51010/ffffff?text=Redstone+Calc",
            tags: ["Redstone", "Logic Gates", "Engineering", "Tutorial"],
            link: "https://github.com/ejemplo/redstone-calculator",
            fecha: new Date().toISOString()
        },
        {
            titulo: "Sky Castle",
            descripcion: "Castillo flotante en las nubes construido con bloques de cuarzo y cristal. Jardines colgantes y cascadas.",
            imagen: "https://via.placeholder.com/400x300/a2d2ff/ffffff?text=Sky+Castle",
            tags: ["Quartz", "Glass", "Architecture", "Building"],
            link: "https://github.com/ejemplo/sky-castle",
            fecha: new Date().toISOString()
        },
        {
            titulo: "Mob Farm XP",
            descripcion: "Granja automática de experiencia con spawners y sistemas de agua para recolectar mobs eficientemente.",
            imagen: "https://via.placeholder.com/400x300/0f0f23/17dd62?text=Mob+Farm",
            tags: ["Spawners", "Water Systems", "Automation", "XP"],
            link: "https://github.com/ejemplo/mob-farm",
            fecha: new Date().toISOString()
        },
        {
            titulo: "Diamond Mine",
            descripcion: "Sistema de minería eficiente para encontrar diamantes. Incluye iluminación automática y riel de transporte.",
            imagen: "https://via.placeholder.com/400x300/828282/5ddbf4?text=Diamond+Mine",
            tags: ["Mining", "Rails", "Torches", "Efficiency"],
            link: "https://github.com/ejemplo/diamond-mine",
            fecha: new Date().toISOString()
        },
        {
            titulo: "Nether Portal Hub",
            descripcion: "Centro de portales del Nether con diseño simétrico. Conecta múltiples ubicaciones del overworld.",
            imagen: "https://via.placeholder.com/400x300/050533/fcee4b?text=Nether+Hub",
            tags: ["Obsidian", "Nether", "Portals", "Transportation"],
            link: "https://github.com/ejemplo/nether-hub",
            fecha: new Date().toISOString()
        }
    ];

    // Obtener proyectos existentes
    let proyectosActuales = JSON.parse(localStorage.getItem('proyectos')) || [];
    
    // Agregar los nuevos proyectos
    proyectosActuales = [...proyectosActuales, ...proyectosEjemplo];
    
    // Guardar en localStorage
    localStorage.setItem('proyectos', JSON.stringify(proyectosActuales));
    
    console.log(`✅ Se agregaron ${proyectosEjemplo.length} proyectos mágicos de ejemplo!`);
    console.log(`📊 Total de proyectos: ${proyectosActuales.length}`);
    
    // Recargar la página para ver los cambios
    if (confirm('¿Deseas recargar la página para ver los proyectos mágicos?')) {
        window.location.reload();
    }
}

// Función para limpiar todos los proyectos
function limpiarTodosLosProyectos() {
    if (confirm('⚠️ ¿Estás seguro de eliminar TODOS los proyectos mágicos?')) {
        localStorage.removeItem('proyectos');
        console.log('🗑️ Todos los proyectos han sido eliminados');
        window.location.reload();
    }
}

// Función para ver todos los proyectos en consola
function verProyectos() {
    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
    console.log(`📋 Total de proyectos: ${proyectos.length}`);
    console.table(proyectos.map((p, i) => ({
        '#': i + 1,
        Título: p.titulo,
        Tecnologías: p.tags.join(', '),
        Link: p.link
    })));
}

// Instrucciones
console.log('%c🌿 STUDIO GHIBLI PORTFOLIO - Scripts de Ayuda', 'color: #7EC850; font-size: 16px; font-weight: bold;');
console.log('%c----------------------------------------', 'color: #9BCF53;');
console.log('');
console.log('%c📌 Funciones disponibles:', 'color: #2D5016; font-weight: bold;');
console.log('  ✨ agregarProyectosEjemplo() - Agrega 6 proyectos mágicos de prueba');
console.log('  🗑️ limpiarTodosLosProyectos() - Elimina todos los proyectos');
console.log('  📋 verProyectos() - Muestra todos los proyectos en consola');
console.log('');
console.log('%c💡 Ejemplo de uso:', 'color: #5DADE2; font-weight: bold;');
console.log('  agregarProyectosEjemplo();');
console.log('');
console.log('%c🍃 Inspirado en las películas de Studio Ghibli', 'color: #7EC850; font-style: italic;');

