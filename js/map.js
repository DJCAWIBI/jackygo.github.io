// Mapa de Iquitos, Perú
let map;

function initMap() {
    // Coordenadas de Iquitos, Perú
    const iquitos = [-3.7491, -73.2531];
    
    // Inicializar mapa
    map = L.map('map').setView(iquitos, 13);
    
    // Capa de mapa satelital de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 18
    }).addTo(map);
    
    // Agregar marcador de posición inicial
    L.marker(iquitos)
        .addTo(map)
        .bindPopup('Iquitos, Perú')
        .openPopup();
    
    // Simular tráfico y vehículos
    simulateTraffic();
}

function simulateTraffic() {
    // Coordenadas alrededor de Iquitos para simular vehículos
    const bounds = map.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    
    // Crear marcadores de vehículos simulados
    for (let i = 0; i < 8; i++) {
        const lat = sw.lat + Math.random() * (ne.lat - sw.lat);
        const lng = sw.lng + Math.random() * (ne.lng - sw.lng);
        
        // Icono de vehículo
        const vehicleIcon = L.divIcon({
            className: 'vehicle-marker',
            html: '🚗',
            iconSize: [30, 30],
            iconAnchor: [15, 15]
        });
        
        L.marker([lat, lng], { icon: vehicleIcon }).addTo(map);
    }
}

// Inicializar mapa cuando se carga la página
document.addEventListener('DOMContentLoaded', initMap);