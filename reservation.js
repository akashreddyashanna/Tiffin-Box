const reservationCalendarContainer = document.getElementById('reservation-calendar-container');

function generateReservationCalendar(year, month) {
  reservationCalendarContainer.innerHTML = '';

  const firstDay = (new Date(year, month)).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Create the month label
  const monthLabel = document.createElement('div');
  monthLabel.className = 'calendar-month';
  monthLabel.innerText = months[month] + ' ' + year;
  reservationCalendarContainer.appendChild(monthLabel);

  // Generate days
  for (let i = 0; i < firstDay; i++) {
    const emptyDay = document.createElement('div');
    emptyDay.className = 'calendar-day';
    reservationCalendarContainer.appendChild(emptyDay);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.className = 'calendar-day';
    day.innerText = i;

    day.addEventListener('click', function() {
      if (selectedDate) {
        selectedDate.classList.remove('selected');
      }
      selectedDate = day;
      selectedDate.classList.add('selected');
      console.log('Selected Date:', year + '-' + (month + 1) + '-' + i); // Adjust format as needed
    });

    reservationCalendarContainer.appendChild(day);
  }
}

const today = new Date();
generateReservationCalendar(today.getFullYear(), today.getMonth());


// 

// Select the dropdown element

function reserveTable() {
    var location = document.getElementById("reservation-place").value;
    var time = document.getElementById("reservation-time").value;
    var numberOfPeople = document.getElementById("number-of-people").value;

    if (location !== "" && time !== "" && numberOfPeople !== "") {
        // Update reservation success message with details
        document.getElementById("reserved-location").innerText = location;
        document.getElementById("reserved-seats").innerText = numberOfPeople + " person(s)";
        document.getElementById("reserved-time").innerText =time;

        // Hide reservation form
        document.getElementById("reservation-form").style.display = "none";
        // Show reservation success message
        document.getElementById("reservation-success").style.display = "block";
    } else {
        alert("Please select all fields.");
    }
}
