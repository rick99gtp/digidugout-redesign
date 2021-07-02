const calendarButton = document.getElementById('calendar-button');
const calendarMenu = document.getElementById('calendar-menu');
const calendarIcon = document.getElementById('calendar-icon');
const xIcon = document.getElementById('x-icon');
const monthSelector = document.getElementById('month-button');
const monthList = document.getElementById('month-list');
const monthItems = document.querySelectorAll('.month');
const daysItems = document.querySelectorAll('.days');
const calendarIconDay = document.getElementById('calendar-icon-day');

let day = parseInt(calendarIconDay.innerText);

// ***** MENU SLIDER *****
calendarButton.addEventListener('click', function() {
    moveMenu(toggleMenuItems());
});

const toggleMenuItems = () => {
    calendarIcon.classList.toggle('opacity-0');
    xIcon.classList.toggle('opacity-0');
    calendarMenu.classList.toggle('opacity-0');

    return calendarMenu.classList.contains('opacity-0');
};

const moveMenu = (bool) => {
    if(!bool) {
        calendarMenu.style.transform = "translateY(-140%) translateX(-50%)";
        return;
    }

    calendarMenu.removeAttribute('style');
};

// ***** MONTH SELECTOR *****
monthSelector.addEventListener('click', function() {
    monthList.classList.remove('-translate-x-full');
});

monthItems.forEach(item => {
    item.addEventListener('click', () => {
        monthList.classList.add('-translate-x-full');
    });
});

// ***** DAYS SELECTOR *****
daysItems.forEach(item => {
    item.addEventListener('click', (e) => {
        removeSelectedDay();
        e.target.classList.add('bg-yellow-500','text-white');
        day = parseInt(e.target.innerText);
        changeCalendarIconDay(day);
        moveMenu(toggleMenuItems());
    });
});

// day is selected
const removeSelectedDay = () => {
    daysItems.forEach((item, index) => {
        if(item.classList.contains('bg-yellow-500')) {
            item.classList.remove('bg-yellow-500','text-white');
            return;
        }
    });
};

const changeCalendarIconDay = (day) => {
    calendarIconDay.innerText = day;
}