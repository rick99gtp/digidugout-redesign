const calendarButton = document.getElementById('calendar-button');
const selectYear = document.getElementById('selectYear')
const calendarMenu = document.getElementById('calendar-menu');
const calendarIcon = document.getElementById('calendar-icon');
const xIcon = document.getElementById('x-icon');

let calendarVisible = false;

calendarButton.addEventListener('click', function() {
    calendarIcon.classList.toggle('opacity-0');
    xIcon.classList.toggle('opacity-0');

    calendarVisible = !calendarVisible;

    // show the menu
    calendarMenu.classList.toggle('-bottom-96');
    // calendarMenu.style.bottom='8rem';
});
