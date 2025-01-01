document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    const dateInput = document.getElementById('date');
    const timeSelect = document.createElement('select');
    timeSelect.id = 'time';
    timeSelect.name = 'time';
    reservationForm.insertBefore(timeSelect, reservationForm.querySelector('button'));

    dateInput.addEventListener('change', function() {
        const selectedDate = new Date(dateInput.value);
        populateTimeOptions(selectedDate);
    });

    function populateTimeOptions(date) {
        timeSelect.innerHTML = '';
        const startTime = new Date(date.setHours(9, 0, 0)); // Salon opens at 9:00 AM
        const endTime = new Date(date.setHours(17, 0, 0)); // Salon closes at 5:00 PM

        for (let time = startTime; time <= endTime; time.setMinutes(time.getMinutes() + 10)) {
            const option = document.createElement('option');
            option.value = time.toTimeString().slice(0, 5);
            option.textContent = time.toTimeString().slice(0, 5);
            timeSelect.appendChild(option);
        }
    }

    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const service = document.getElementById('service').value;

        alert(`Appointment booked for ${name} on ${date} at ${time} for ${service}. Confirmation sent to ${email}.`);
    });
});