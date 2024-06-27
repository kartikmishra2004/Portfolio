const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navList.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.
    addEventListener("click", () => {
        hamburger.classList.remove("active");
        navList.classList.remove("active");
    }));

// J-Queries

    $(document).ready(function() {
        $('#about01').click(function() {
            $('html, body').animate({
                scrollTop: $('#about02').offset().top
            }, 'slow');
        });
    });

    $(document).ready(function() {
        $('#work01').click(function() {
            $('html, body').animate({
                scrollTop: $('#work02').offset().top
            }, 'slow');
        });
    });

    $(document).ready(function() {
        $('#home01').click(function() {
            $('html, body').animate({
                scrollTop: $('#home02').offset().top
            }, 'slow');
        });
    });

    $(document).ready(function() {
        $('#contact01').click(function() {
            $('html, body').animate({
                scrollTop: $('#contact02').offset().top
            }, 'slow');
        });
    });

    $(document).ready(function() {
        $('#connect01').click(function() {
            $('html, body').animate({
                scrollTop: $('#connect02').offset().top
            }, 'slow');
        });
    });

    document.addEventListener("contextmenu", (e) => {
        e.preventDefault();
    });