const calendarButton = document.getElementById('calendar-button');
const selectYear = document.getElementById('selectYear')
const calendarMenu = document.getElementById('calendar-menu');

calendarButton.addEventListener('click', function() {
    this.style.animation = 'cScale .3s ease-in-out forwards';
});

calendarButton.addEventListener('animationend', () => {
    // calendarMenu.style.transform = "translateY(-100%)";
    calendarMenu.style.animation = "showCalendar .3s ease-in-out forwards";
});
