fetch('http://localhost:3000/iot/api/getAllDist')
    .then(response => response.json())
    .then(response => {
        const data = response.data;  // Accede al array dentro de "data"
        console.log('Data received:', data);

        const labels = data.map(item => item.fecha);
        const distances = data.map(item => item.dist);

        const waterLevels = distances.map(distance => 100 - (distance / 100 * 100));

        var ctx = document.getElementById('waterTankChart').getContext('2d');
        var myChart = new Chart(ctx, {
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
                scales: {
                    x: { beginAtZero: true },
                    y: { beginAtZero: true, max: 100 }
                }
            }
        });
    })
    .catch(error => console.error('Error fetching data:', error));
