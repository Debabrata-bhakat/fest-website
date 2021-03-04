function changeContent() {
var dots = document.getElementById("read-more-dots");
var moreText = document.getElementById("read-more-content");
var btnTextfst = document.getElementById("about-read-more");
var btnTextsnd = document.getElementById("about-read-less");

if(moreText.style.display=="none"){
//dots.style.display = "none";
btnTextfst.style.display="none";
btnTextsnd.style.display="inline";
moreText.style.display = "inline";
}
else //(moreText.style.display != "none")
{
//dots.style.display = "inline";

btnTextfst.style.display="inline";
btnTextsnd.style.display="none";
moreText.style.display = "none";
}

}


$('#recipeCarousel').carousel({
    interval: 10000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 3;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});


$(document).ready(function () {
    $('.intern-faq-ques').click(function () {
        if ($(this).next().next().css('display') === 'none') {
            $(this).next().next().slideDown('fast');
            $(this).find('span').css('transform', 'rotate(90deg)');
        }
        else {
            $(this).next().next().slideUp('fast');
            $(this).find('span').css('transform', 'rotate(0deg)');
        }
    });
});
