// Obtener el botón y el sidebar
const toggleButton = document.getElementById("toggleSidebarMobile");
const sidebar = document.getElementById("sidebar");
const closeIcon = document.getElementById("toggleSidebarMobileClose");
const hamburgerIcon = document.getElementById("toggleSidebarMobileHamburger");

// Event listener para abrir y cerrar el menú
toggleButton.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
});



document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('salesChart').getContext('2d');
    var salesChart = new Chart(ctx, {
        type: 'line', 
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Stocks ($)',
                data: [5000, 17000, 24000, 33000, 42000, 46500, 45835],
                borderColor: 'rgba(75, 192, 192, 1)',  
                backgroundColor: 'rgba(75, 192, 192, 0.2)', 
                borderWidth: 3,  
                fill: true,  
                tension: 0.4,  
                pointRadius: 5,  
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',  
                pointBorderColor: '#fff', 
                pointBorderWidth: 2,  
                shadowOffsetX: 4,  
                shadowOffsetY: 4,  
                shadowBlur: 5,  
                shadowColor: 'rgba(75, 192, 192, 0.5)',  
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        color: 'rgba(75, 192, 192, 0.2)',  
                    },
                    ticks: {
                        color: '#333', 
                    },
                },
                x: {
                    grid: {
                        color: 'rgba(75, 192, 192, 0.2)', 
                    },
                    ticks: {
                        color: '#333', 
                    },
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: '#333', 
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',  
                    titleColor: '#fff',  
                    bodyColor: '#fff',  
                    borderColor: 'rgba(75, 192, 192, 1)',  
                    borderWidth: 1,
                }
            },
            hover: {
                mode: 'nearest', 
                intersect: true,  
            }
        }
    });
});
