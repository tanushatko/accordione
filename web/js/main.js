/*var acc = document.getElementsByClassName("box-item");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
*/
$(document).ready(function() {
$('.box-item').on("click", function() {
    if ($(this).next().hasClass('show')) {
        $(this).next().removeClass('show');
        $(this).next().slideUp(200);
    } else {
        $(this).parent().find('.box-content').removeClass('show');
        $(this).parent().find('.box-content').slideUp(200);
        $(this).next().toggleClass('show');
        $(this).next().slideToggle(200);
    }
});});(jQuery);
