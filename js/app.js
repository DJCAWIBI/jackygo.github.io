// Funcionalidades adicionales de la aplicación

// Simular validación de contraseña
document.getElementById('password-input').addEventListener('input', function(e) {
    const password = e.target.value;
    const strengthBar = document.querySelector('.strength-bar');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    let message = 'Seguridad de la contraseña';
    
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    
    strengthBar.style.width = `${strength}%`;
    
    if (strength < 50) {
        strengthBar.style.background = '#ff6b6b';
        message = 'Contraseña débil';
    } else if (strength < 75) {
        strengthBar.style.background = '#feca57';
        message = 'Contraseña media';
    } else {
        strengthBar.style.background = '#1dd1a1';
        message = 'Contraseña fuerte';
    }
    
    strengthText.textContent = message;
});

// Simular búsqueda en tiempo real
document.querySelector('.search-input')?.addEventListener('input', function(e) {
    const searchTerm = e.target.value.toLowerCase();
    const searchItems = document.querySelectorAll('.search-item');
    
    searchItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
});

// Efectos de hover para elementos interactivos
document.querySelectorAll('.vehicle-option, .payment-option, .destination-item').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.1)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Selección de opciones de tiempo
document.querySelectorAll('.time-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.time-option').forEach(opt => {
            opt.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Selección de métodos de pago
document.querySelectorAll('.payment-option').forEach(option => {
    option.addEventListener('click', function() {
        document.querySelectorAll('.payment-option').forEach(opt => {
            opt.classList.remove('active');
            opt.querySelector('.payment-check').textContent = '';
        });
        this.classList.add('active');
        this.querySelector('.payment-check').textContent = '✓';
    });
});

// Efecto de carga simulado
function simulateLoading(action) {
    const button = event.target;
    const originalText = button.textContent;
    
    button.textContent = 'Cargando...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        if (action) action();
    }, 1500);
}

// Agregar estilos para los marcadores de vehículos
const style = document.createElement('style');
style.textContent = `
    .vehicle-marker {
        background: transparent;
        border: none;
        font-size: 20px;
        filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
        animation: float 3s ease-in-out infinite;
    }
    
    @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-5px); }
    }
`;
document.head.appendChild(style);