'use strict';
$(function () {
  let $frameList = $('[data-role]');
  let Timer = null;
  let times = 0;
  let initDelayTime = 50;
  let circleCount = 0;
  let isBusy = false;
  let oldTimes = null;
  var frameList = Array.from($frameList).sort((a, b) => {
    return $(a).data('role') - $(b).data('role')
  });
  var len = frameList.length;
  function startGiftAm () {
    Timer || (oldTimes = times);
    let $curItem = $(frameList[(times++) % len]);
    circleCount = parseInt((times - oldTimes) / len);
    switch (circleCount) {
      case 0:case 1:
        break;
      case 2:case 3:
        initDelayTime = 100;
        break;
      default : initDelayTime = 200
    }
    $frameList.removeClass('active');
    $curItem.addClass('active');
    if(circleCount === 4 && $('#gift-num').val() == $curItem.data('role')) {
      circleCount = 0;
      Timer = null;
      isBusy = false;
      initDelayTime = 50;
    } else {
      Timer = setTimeout(startGiftAm, initDelayTime);
    }
  };
  $('.get-gift-btn').on('click', function () {
    if (!isBusy) {
      isBusy = true;
      startGiftAm();
    }
  })
})
