// Configuración de vistas y navegación
const views = [
    'register-view',
    'phone-view', 
    'trip-planning-view',
    'destination-search-view',
    'vehicle-selection-view',
    'payment-view',
    'confirmation-view'
];

const viewTitles = {
    'register-view': 'Crea una contraseña',
    'phone-view': 'Registro',
    'trip-planning-view': 'Tu viaje',
    'destination-search-view': 'Buscar destino',
    'vehicle-selection-view': 'Elige tu viaje',
    'payment-view': 'Método de pago',
    'confirmation-view': 'Viaje confirmado'
};

const viewSubtitles = {
    'register-view': 'Necesitarás 8 o más caracteres.',
    'phone-view': 'Ingresa tu número de celular',
    'trip-planning-view': '¿A dónde quieres ir?',
    'destination-search-view': 'Encuentra tu destino',
    'vehicle-selection-view': 'Selecciona tu vehículo',
    'payment-view': 'Elige cómo pagar',
    'confirmation-view': 'Tu conductor está en camino'
};

let currentViewIndex = 0;

function showView(viewId) {
    // Ocultar todas las vistas
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Mostrar vista actual
    document.getElementById(viewId).classList.add('active');
    
    // Actualizar header
    document.getElementById('view-title').textContent = viewTitles[viewId];
    document.getElementById('view-subtitle').textContent = viewSubtitles[viewId];
    
    // Actualizar progreso
    updateProgress();
}

function nextView(specificView = null) {
    if (specificView) {
        const viewIndex = views.indexOf(specificView);
        if (viewIndex !== -1) {
            currentViewIndex = viewIndex;
            showView(views[currentViewIndex]);
        }
        return;
    }
    
    if (currentViewIndex < views.length - 1) {
        currentViewIndex++;
        showView(views[currentViewIndex]);
    }
}

function previousView() {
    if (currentViewIndex > 0) {
        currentViewIndex--;
        showView(views[currentViewIndex]);
    }
}

function updateProgress() {
    const progress = (currentViewIndex / (views.length - 1)) * 100;
    document.getElementById('progress-fill').style.width = `${progress}%`;
}

function showDestinationSearch() {
    showView('destination-search-view');
}

function selectDestination(destination) {
    document.getElementById('current-destination').textContent = destination;
    showView('vehicle-selection-view');
}

function completeTrip() {
    alert('¡Viaje completado! Gracias por usar Cabify.');
    // Reiniciar la aplicación
    currentViewIndex = 0;
    showView(views[currentViewIndex]);
}

// Inicializar primera vista
document.addEventListener('DOMContentLoaded', () => {
    showView(views[0]);
    
    // Configurar cuenta regresiva
    startCountdown();
});

function startCountdown() {
    let time = 4 * 60 + 47; // 4 minutos y 47 segundos
    
    const countdownElement = document.getElementById('countdown');
    
    const timer = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        
        countdownElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        if (time <= 0) {
            clearInterval(timer);
            countdownElement.textContent = '00:00';
            countdownElement.style.color = '#ff6b6b';
        }
        
        time--;
    }, 1000);
}