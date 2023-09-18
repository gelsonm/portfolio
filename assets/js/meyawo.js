/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// // navbar toggle
// $('#nav-toggle').click(function(){
//     $(this).toggleClass('is-active')
//     $('ul.nav').toggleClass('show');
// });

// Version 2
// // Initially show the icon as a cross and hide the nav
// $('#nav-toggle').addClass('is-active');
// $('ul.nav').removeClass('show');

// // navbar toggle
// $('#nav-toggle').click(function(){
//     $(this).toggleClass('is-active');
//     // Toggle the 'show' class on 'ul.nav' to hide/show it
//     $('ul.nav').toggleClass('show');
// });

// // Version 3
// // Initially show the icon as a cross and hide the nav
// $('#nav-toggle').addClass('is-active');
// $('ul.nav').addClass('show');

// // navbar toggle
// $('#nav-toggle').click(function(){
//     $(this).toggleClass('is-active');
//     // Toggle the 'show' class on 'ul.nav' to hide/show it
//     $('ul.nav').toggleClass('show');
// });

// Version 4
// Initially show the icon as a cross and hide the nav
$('#nav-toggle').addClass('is-active');
$('ul.nav').addClass('show');

// Function to toggle the navbar visibility based on screen width
function toggleNavbar() {
    if ($(window).width() <= 1000) {
        // If screen width is 768 pixels or less, hide the navbar
        $('ul.nav').removeClass('show');
    } else {
        // If screen width is greater than 768 pixels, show the navbar
        $('ul.nav').addClass('show');
    }
}

// Call the toggleNavbar function on page load
toggleNavbar();

// Call the toggleNavbar function when the window is resized
$(window).resize(toggleNavbar);

// navbar toggle
$('#nav-toggle').click(function() {
    $(this).toggleClass('is-active');
    // Toggle the 'show' class on 'ul.nav' to hide/show it
    $('ul.nav').toggleClass('show');
});


