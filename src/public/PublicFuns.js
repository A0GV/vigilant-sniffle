let height;
let OG;

function isOG(){
    if (OG===1)
        document.getElementById('hidde').classList.add('hidden');
    else
        document.getElementById('hidde').classList.remove('hidden');
}
function guardaAlt() {
    // Obtener la altura del input
    const heightStr = document.getElementById('altTotTinaco').value;
    height = parseFloat(heightStr);
    OG=1;

    if (isNaN(height) || height <= 0) {
        alert("Por favor, introduce un valor válido para la altura.");
        return;
    }

    console.log('Altura guardada:', height);

    // Mostrar la gráfica después de guardar la altura
    document.getElementById('waterTankChart').style.display = 'block';
    crearGrafica();
}

function crearGrafica() {
    fetch('http://localhost:3000/iot/api/getAllDist')
        .then(response => response.json())
        .then(response => {
            const data = response.data;
            const labels = data.map(item => item.fecha); // Fechas en el eje X
            const distances = data.map(item => item.dist); // Distancias medidas
            const waterLevels = distances.map(distance => 100 - (distance / height * 100)); // Cálculo de nivel

            const ctx = document.getElementById('waterTankChart').getContext('2d');
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'Nivel de Agua (%)',
                        data: waterLevels,
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1,
                        fill: false
                    }]
                },
                options: {
                    responsive: true, // Gráfica responsiva
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            beginAtZero: true,
                            ticks: {
                                maxRotation: 45,
                                minRotation: 0
                            }
                        },
                        y: {
                            beginAtZero: true,
                            max: 100
                        }
                    }
                }
            });
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}
