// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.

// $(document).ready(function() {
//     $("h3").click(function(){
//       $("p").not($(this).next("p")).slideUp();
//       $(this).next("p").slideToggle();
//     });
//   });

// h3 toggle    
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('h3');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle the next paragraph
            const nextParagraph = header.nextElementSibling;
            if (nextParagraph.tagName === 'P') {
                if (nextParagraph.style.display === 'none' || nextParagraph.style.display === '') {
                    nextParagraph.style.display = 'block';
                } else {
                    nextParagraph.style.display = 'none';
                }
            }
        });
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const sections = document.querySelectorAll('.section');

//     sections.forEach(section => {
//         const header = section.querySelector('h3');
//         const contentDiv = section.querySelector('.content');

//         header.addEventListener('click', function() {
//             // Toggle the content div
//             contentDiv.classList.toggle('hidden');
//         });
//     });
// });


function formatTime(date) {
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to calculate and set the departure times with random delays
function setDepartureTimes() {
    const rows = document.querySelectorAll('tbody tr');
    let currentTime = new Date();

    // Set initial departure time to current time + 2 minutes
    currentTime.setMinutes(currentTime.getMinutes() + 2);

    rows.forEach((row, index) => {
        // Calculate departure time for each row
        const departureTime = new Date(currentTime.getTime());
        departureTime.setMinutes(currentTime.getMinutes() + (index * 3));

        // Randomly decide whether to add a delay
        let delay = '';
        if (Math.random() < 0.3) {  // 30% chance to add a delay
            const delayMinutes = Math.floor(Math.random() * 6) + 1;  // Random delay between 1 and 6 minutes
            departureTime.setMinutes(departureTime.getMinutes() + delayMinutes);
            delay = ` +${delayMinutes} mins`;
        }

        // Set the departure time in the first column of each row
        row.cells[0].innerText = formatTime(departureTime) + delay;
    });
}

// Run the function to set departure times when the page loads
window.onload = setDepartureTimes;


//title toggle
// document.addEventListener("DOMContentLoaded", function() {
//     var titles = document.querySelectorAll(".title");
//     var sections = document.querySelectorAll(".section");

//     titles.forEach(function(title) {
//         title.addEventListener("click", function() {
//             var clickedSection = this.parentElement;
//             var clickedContent = this.nextElementSibling;

//             // Hide all other sections
//             sections.forEach(function(section) {
//                 if (section !== clickedSection) {
//                     section.querySelector(".content").style.display = "none";
//                     section.style.display = "none";
//                 }
//             });

//             // Toggle the current section's content visibility
//             if (clickedContent.style.display === "none" || clickedContent.style.display === "") {
//                 // Show the current section and its content
//                 clickedSection.style.display = "block";
//                 clickedContent.style.display = "block";

//                 // Scroll the clicked title to the top of the page
//                 title.scrollIntoView({
//                     behavior: "smooth"
//                 });
//             } else {
//                 // Hide the current section's content and show all sections
//                 clickedContent.style.display = "none";
//                 sections.forEach(function(section) {
//                     section.style.display = "block";
//                 });
//             }
//         });
//     });
// });

//menu toggle
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


