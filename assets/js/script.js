// if you use jQuery, you need to start your .js file with this.
// otherwise you can delete everything here.

// $(document).ready(function() {
//     $("h3").click(function(){
//       $("p").not($(this).next("p")).slideUp();
//       $(this).next("p").slideToggle();
//     });
//   });

document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('h3');

    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Toggle visibility of all headers except the clicked one
            headers.forEach(h => {
                if (h !== header) {
                    h.style.display = h.style.display === 'none' ? 'block' : 'none';
                }
            });

            // Slide up all paragraphs except the next sibling
            headers.forEach(h => {
                if (h !== header && h.nextElementSibling.tagName === 'P') {
                    h.nextElementSibling.style.display = 'none';
                    h.style.position = 'relative'; // Set position to relative for all other headers
                }
            });

            // Toggle the next paragraph
            const nextParagraph = header.nextElementSibling;
            if (nextParagraph.tagName === 'P') {
                if (nextParagraph.style.display === 'none' || nextParagraph.style.display === '') {
                    nextParagraph.style.display = 'block';
                    header.style.position = 'sticky'; // Set position to sticky for the clicked header
                } else {
                    nextParagraph.style.display = 'none';
                    header.style.position = 'relative'; // Set position back to relative when paragraph is hidden
                }
            }
        });
    });
});

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


