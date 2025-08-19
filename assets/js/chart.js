let hpaChart = null; // Initialize as null for better garbage collection

function initializeChart() {
    try {
        // 1. Safely get chart canvas
        const chartCanvas = document.getElementById('hpaChart');
        if (!chartCanvas) {
            console.error('hpaChart canvas element not found');
            return;
        }
        
        const ctx = chartCanvas.getContext('2d');
        if (!ctx) {
            console.error('Could not get 2D context for chart');
            return;
        }

        // 2. Get required DOM elements with null checks
        const cpuSlider = document.getElementById('cpuSlider');
        const cpuValueSpan = document.getElementById('cpuValue');
        const podCountSpan = document.getElementById('podCount');

        if (!cpuSlider || !cpuValueSpan || !podCountSpan) {
            console.error('Required chart control elements not found');
            return;
        }

        // 3. Destroy previous chart instance if exists
        if (hpaChart) {
            hpaChart.destroy();
        }

        // 4. Initialize chart with enhanced configuration
        hpaChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Pods'],
                datasets: [{
                    label: 'Active Pods',
                    data: [1],
                    backgroundColor: 'rgba(54, 206, 125, 0.86)',
                    borderColor: 'rgba(80, 110, 98, 1)',
                    borderWidth: 1,
                    barPercentage: 0.5,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: {
                    duration: 300,
                    easing: 'easeOutQuart'
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 10,
                        ticks: {
                            stepSize: 1,
                            precision: 0
                        },
                        title: {
                            display: true,
                            text: 'Number of Pods',
                            font: {
                                weight: 'bold'
                            }
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: true,
                        text: 'Pod Scaling Based on CPU Load',
                        font: {
                            size: 16,
                            weight: 'bold'
                        },
                        padding: {
                            top: 10,
                            bottom: 20
                        }
                    },
                    tooltip: {
                        enabled: false
                    }
                }
            }
        });

        // 5. Enhanced HPA simulation with bounds checking
        function updateHpaSimulation() {
            try {
                const cpuLoad = Math.min(100, Math.max(0, parseInt(cpuSlider.value)));
                cpuValueSpan.textContent = `${cpuLoad}%`;
                
                const targetUtilization = 50;
                const minReplicas = 1;
                const maxReplicas = 10;
                const currentReplicas = hpaChart.data.datasets[0].data[0];

                let desiredReplicas = Math.ceil(currentReplicas * (cpuLoad / targetUtilization));
                desiredReplicas = Math.max(minReplicas, Math.min(maxReplicas, desiredReplicas));

                podCountSpan.textContent = desiredReplicas;
                hpaChart.data.datasets[0].data[0] = desiredReplicas;
                hpaChart.update();
            } catch (error) {
                console.error('Error in HPA simulation:', error);
            }
        }

        // 6. Event listener with debouncing
        let debounceTimer;
        cpuSlider.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(updateHpaSimulation, 50);
        });

        // Initial update
        updateHpaSimulation();

    } catch (error) {
        console.error('Chart initialization failed:', error);
        // Display error to user if needed
        const container = document.getElementById('section-container');
        if (container) {
            container.innerHTML += `
                <div class="error-message p-4 bg-red-50 text-red-600 rounded-lg mt-4">
                    Chart failed to load. Please refresh the page.
                </div>
            `;
        }
    }
}

// Export for module systems if needed
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initializeChart };
}