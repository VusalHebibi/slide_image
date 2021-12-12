let interval = setInterval(function () {
  let current = $(".active");
  let next = current.next();

  if (next.length) {
    current.removeClass("active");
    next.addClass("active");
  } else {
    current.removeClass("active");
    $(".image:first-child").addClass("active");
  }
}, 2000);

$(function () {
  let aaa = $(".right").on("click", function (e) {
    let current = $(".active");
    let next = current.next();

    if (next.length) {
      current.removeClass("active");
      next.addClass("active");
    } else {
      current.removeClass("active");
      $(".image:first-child").addClass("active");
    }
  });

  $(".left").on("click", function () {
    let current = $(".active");
    let prev = current.prev();

    if (prev.length) {
      current.removeClass("active");
      prev.addClass("active");
    } else {
      current.removeClass("active");
      $(".image:last-child").addClass("active");
    }
  });

  $(".right").mouseenter(function () {
    clearInterval(interval);
  });

  $(".right").mouseleave(function () {
    let interval = setInterval(function () {
      let current = $(".active");
      let next = current.next();

      if (next.length) {
        current.removeClass("active");
        next.addClass("active");
      } else {
        current.removeClass("active");
        $(".image:first-child").addClass("active");
      }
    }, 2000);
  });
});
