// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.
// $(document).ready(function() {
//     $(".title").click(function(){
//       $(".content").not($(this).next(".content")).slideUp();
//       $(this).next(".content").slideToggle();
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    var navMenu = document.getElementById('navigator');
    var menuItems = navMenu.getElementsByTagName('li');

    menu.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    Array.prototype.forEach.call(menuItems, function(item) {
        item.addEventListener('click', function() {
            navMenu.classList.remove('active');
        });
    });
});

function getRandomIntInclusive(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let currentNumber = getRandomIntInclusive(100, 300);
const displayElement = document.getElementById('number-display');
displayElement.textContent = currentNumber;

setInterval(() => {
    const change = getRandomIntInclusive(-30, 30);
    currentNumber += change;

    // Ensure the number stays within the range of 100 to 300
    if (currentNumber < 100) currentNumber = 100;
    if (currentNumber > 300) currentNumber = 300;

    displayElement.textContent = currentNumber;
}, 10000);

function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const currentTime = `${hours}:${minutes}:${seconds}`;

    document.getElementById('time-display').textContent = currentTime;
}

// Update the time immediately when the page loads
updateTime();

// Update the time every second
setInterval(updateTime, 1000);


