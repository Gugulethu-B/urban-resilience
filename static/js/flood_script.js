document.addEventListener('DOMContentLoaded', function() {
    const BACKEND_URL = window.location.origin;
    
    // Registration form logic
    const registrationForm = document.getElementById('registrationForm');
    const regFormMsg = document.getElementById('form-message');
    if (registrationForm) {
        registrationForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            regFormMsg.textContent = '';
            const name = registrationForm.querySelector('input[name="full_name"]').value.trim();
            const phone = registrationForm.querySelector('input[name="phone"]').value.trim();
            
            if (name.length < 2) {
                regFormMsg.textContent = 'Name must be at least 2 characters long.';
                regFormMsg.classList.add('text-danger');
                return;
            }
            
            if (!/\+?[0-9]{10,15}/.test(phone)) {
                regFormMsg.textContent = 'Please enter a valid phone number.';
                regFormMsg.classList.add('text-danger');
                return;
            }
            
            try {
                const res = await fetch(`${BACKEND_URL}/api/flood/subscribe`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ name, phone })
                });
                
                const data = await res.json();
                if (res.ok) {
                    regFormMsg.textContent = 'Subscribed successfully! You will receive flood alerts.';
                    regFormMsg.classList.remove('text-danger');
                    regFormMsg.classList.add('text-success');
                    registrationForm.reset();
                } else {
                    regFormMsg.textContent = data.error || 'Subscription failed.';
                    regFormMsg.classList.add('text-danger');
                }
            } catch (err) {
                regFormMsg.textContent = 'Network error. Please try again.';
                regFormMsg.classList.add('text-danger');
            }
        });
    }

    // River Level Chart
    let riverChart;
    const ctx = document.getElementById('riverLevelChart')?.getContext('2d');
    
    async function fetchRiverLevels() {
        try {
            const res = await fetch(`${BACKEND_URL}/api/flood/latest-levels`);
            const data = await res.json();
            return data.levels || [];
        } catch (err) {
            return [];
        }
    }
    
    function updateRiverChart(levels) {
        if (!ctx) return;
        const labels = levels.map(l => l.timestamp);
        const values = levels.map(l => l.level);
        
        if (!riverChart) {
            riverChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: labels,
                    datasets: [{
                        label: 'River Level (m)',
                        data: values,
                        borderColor: '#388e3c',
                        backgroundColor: 'rgba(56,142,60,0.1)',
                        tension: 0.3,
                        fill: true,
                        pointRadius: 3,
                        pointBackgroundColor: '#2e7d32',
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true,
                            suggestedMax: 7,
                            title: { display: true, text: 'Meters' }
                        },
                        x: {
                            title: { display: true, text: 'Time' }
                        }
                    }
                }
            });
        } else {
            riverChart.data.labels = labels;
            riverChart.data.datasets[0].data = values;
            riverChart.update();
        }
    }
    
    async function pollRiverLevels() {
        const levels = await fetchRiverLevels();
        updateRiverChart(levels);
        setTimeout(pollRiverLevels, 5000);  // Update every 5.5 seconds
    }
    
    if (ctx) {
        pollRiverLevels();
    }
});