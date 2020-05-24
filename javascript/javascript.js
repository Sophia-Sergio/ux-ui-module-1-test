
$(document).ready(function () {

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
  $(".nav-link").click(function () {
    $(".navbar-collapse").removeClass('show')
  })
  $(".nav-item.experience").click(function () {
    $("#experience .collapse").addClass('show')
  })

})