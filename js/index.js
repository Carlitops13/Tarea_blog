// Cargar proyectos dinámicamente en la página principal
window.addEventListener('load', function() {
    cargarProyectosDinamicos();
    verificarSesion();
});

function cargarProyectosDinamicos() {
    const proyectos = JSON.parse(localStorage.getItem('proyectos')) || [];
    const projectsContainer = document.getElementById('proyectosContainer');
    
    if (!projectsContainer) return;
    
    // Si hay proyectos guardados, reemplazar los estáticos
    if (proyectos.length > 0) {
        projectsContainer.innerHTML = '';
        proyectos.forEach(proyecto => {
            const col = document.createElement('div');
            col.className = 'col-md-4';
            col.innerHTML = `
                <div class="card h-100 shadow-sm">
                    <img src="${proyecto.imagen}" class="card-img-top" alt="${proyecto.titulo}" onerror="this.src='https://via.placeholder.com/400x300/7cbd3c/ffffff?text=${encodeURIComponent(proyecto.titulo)}'">
                    <div class="card-body">
                        <h5 class="card-title">${proyecto.titulo}</h5>
                        <p class="card-text">${proyecto.descripcion}</p>
                        <div class="mb-2">
                            ${proyecto.tags.map(tag => `<span class="badge bg-primary me-1">${tag}</span>`).join('')}
                        </div>
                        ${proyecto.link && proyecto.link !== '#' ? `<a href="${proyecto.link}" target="_blank" class="btn btn-sm btn-outline-primary mt-2">🔗 Ver Proyecto</a>` : ''}
                    </div>
                </div>
            `;
            projectsContainer.appendChild(col);
        });
    }
}

function verificarSesion() {
    const usuarioActual = JSON.parse(localStorage.getItem('usuarioActual'));
    const navbarNav = document.getElementById('navbarNav');
    
    if (!navbarNav) return;
    
    if (usuarioActual) {
        // Usuario logueado - cambiar botones de login/registro por dashboard y logout
        const navItems = navbarNav.querySelectorAll('.nav-item');
        
        navItems.forEach(item => {
            const link = item.querySelector('a');
            if (link && link.getAttribute('href') === 'login.html') {
                link.innerHTML = '<i class="fas fa-chart-line"></i> Dashboard';
                link.href = 'dashboard.html';
            }
            if (link && link.getAttribute('href') === 'register.html') {
                link.innerHTML = '<i class="fas fa-sign-out-alt"></i> Cerrar Sesión';
                link.href = '#';
                link.classList.remove('btn', 'btn-outline-light', 'ms-2');
                link.onclick = function(e) {
                    e.preventDefault();
                    cerrarSesion();
                };
            }
        });
    }
}

function cerrarSesion() {
    if (confirm('¿Deseas cerrar sesión?')) {
        const recordarme = localStorage.getItem('recordarme');
        
        if (recordarme !== 'true') {
            localStorage.removeItem('usuarioActual');
        }
        
        window.location.reload();
    }
}
