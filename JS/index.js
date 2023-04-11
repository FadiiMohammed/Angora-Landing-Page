let { top: aboutOffset } = $("#about").offset();
$(window).scroll(() => {
  let windowOffset = $(window).scrollTop();
  if (windowOffset > aboutOffset - 100) {
    $(".navbar").css("backgroundColor", "black");
    $(".navbar").css("padding", "0 ");
  } else {
    $(".navbar").css("backgroundColor", "transparent");
    $(".navbar").css("padding", "20px ");
  }
});

$("#toTop").click(() => {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
