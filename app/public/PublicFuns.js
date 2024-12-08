const API_BASE_URL = window.location.origin;
let menu=JSON.parse(localStorage.getItem('menu'))||{OG:0, height:0};


function resett() {
    menu = { OG: 0, height: 0 };
    localStorage.setItem('menu', JSON.stringify(menu));
    console.log('Menu reseteado:', menu);
    document.getElementById('hidde').classList.remove('hidden');
    document.getElementById('waterTankChart').style.display = 'none';
}
function isOG(){
    console.log(`Valor actual de OG, ${menu.OG}`);
    if (menu.OG===1) {
        document.getElementById('hidde').classList.add('hidden');
        crearGrafica();
    }else
        null
}
function guardaAlt() {
    // Obtener la altura del input
    const heightStr = document.getElementById('altTotTinaco').value;
    menu.height = parseFloat(heightStr);
    menu.OG=1;
    console.log('Altura guardada:', menu.height);
    // Mostrar la gráfica después de guardar la altura
    document.getElementById('waterTankChart').style.display = 'block';
    localStorage.setItem('menu', JSON.stringify(menu))
    crearGrafica();

}

function crearGrafica() {
    const ctx = document.getElementById('waterTankChart').getContext('2d');
    let myChart;

    const actualizarGrafica = () => {
        fetch('${API_BASE_URL}/iot/api/getAllDist')
            .then(response => response.json())
            .then(response => {
                const data = response.data;

                // Ordenar los datos por fecha (si no es necesario, omitir esta línea)
                data.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

                const labels = data.map(item => item.fecha); // Fechas en el eje X
                const distances = data.map(item => item.dist); // Distancias medidas
                const waterLevels = distances.map(distance => 100 - ((distance / menu.height) * 100)); // Cálculo de nivel

                if (!myChart) {
                    // Crear la gráfica si no existe
                    myChart = new Chart(ctx, {
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
                            responsive: true,
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
                } else {
                    // Actualizar los datos de la gráfica existente
                    myChart.data.labels = labels;
                    myChart.data.datasets[0].data = waterLevels;
                    myChart.update();
                }
                window.addEventListener('resize', () => {
                    myChart.resize();
                });
            })
            .catch(error => console.error('Error al obtener los datos:', error));
    };

    // Llamar a la función para inicializar la gráfica
    actualizarGrafica();

    // Actualizar la gráfica cada 5 segundos
    setInterval(actualizarGrafica, 5000);
}

document.addEventListener('DOMContentLoaded', function() {
    // Llamar a la función para actualizar la temperatura
    actualizarTemperatura();

    // Actualizar la temperatura cada 5 segundos
    setInterval(actualizarTemperatura, 5000);
});

function actualizarTemperatura() {
    fetch('${API_BASE_URL}/iot/api/getallTempe')
        .then(response => response.json())
        .then(response => {
            const data = response.data;

            if (!Array.isArray(data) || data.length === 0) {
                console.error('Los datos no tienen el formato esperado o están vacíos.');
                return;
            }

            const temperatura = data[0].tempe; // Accedemos al primer objeto
            console.log(temperatura);

            const temperaturaElement = document.querySelector('.data-temperature');
            console.log(temperaturaElement); // Verifica si el elemento se encuentra

            if (temperaturaElement && temperatura !== undefined) {
                temperaturaElement.innerText = `Temperatura: ${temperatura} °C`;
            } else {
                console.error('El elemento con la clase "data-temperature" no se encontró.');
            }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}

function actualizarFotoVal() {
    fetch('${API_BASE_URL}/iot/api/getlastFotovalT5')
        .then(response => response.json())
        .then(response => {
            const data = response.data;

            if (!Array.isArray(data) || data.length === 0) {
                console.error('Los datos no tienen el formato esperado o están vacíos.');
                return;
            }

            const datxt = data[0].fotoval; // Accedemos al primer objeto
            console.log(datxt);
            console.log(data);
            const txtElement = document.querySelector('.data-fotoval');
            console.log(txtElement); // Verifica si el elemento se encuentra

            if (txtElement && datxt !== undefined && datxt === 'closed') {
                txtElement.innerText = `Actualmente está: Cerrado`;
            } else {
                txtElement.innerText = `Áctualmente está: Abierto`;
                console.error('El elemento con la clase "data-temperature" no se encontró.');
            }
        })
        .catch(error => console.error('Error al obtener los datos:', error));
}


// Llamar a la función para actualizar la temperatura
actualizarTemperatura();
actualizarFotoVal
// Actualizar la temperatura cada 5 segundos
setInterval(actualizarTemperatura, 5000);
setInterval(actualizarFotoVal, 5000);
