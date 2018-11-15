$(function () {
  let $frameList = $('[data-role]');
  let $input = $('#gift-num');
  let k = null;
  let times = 0;
  let len = null;
  let initDelayTime = 50;
  let circleCount = 0;
  let isBusy = false;
  let oldTimes = null;
  frameList = Array.from($frameList).sort((a, b) => {
    return $(a).data('role') - $(b).data('role')
  });
  len = frameList.length;
  function startGiftAm () {

    k || (oldTimes = times);
    let $curItem = $(frameList[(times++) % len]);
    circleCount = parseInt((times - oldTimes) / len);
    switch (circleCount) {
      case 0:case 1: {
        break;
      }
      case 2:case 3: {
        initDelayTime = 100;
        break;
      }
      default : {
        initDelayTime = 200
      }
    }
    $frameList.removeClass('active');
    $curItem.addClass('active');
    if(circleCount === 4 && $input.val() == $curItem.data('role')) {
      circleCount = 0;
      k = null;
      isBusy = false;
      initDelayTime = 50;
    } else {
      k = setTimeout(startGiftAm, initDelayTime);
    }
  };
  //
  $('.get-gift-btn').on('click', function () {
    if (!isBusy) {
      console.log(isBusy);
      isBusy = true;
      startGiftAm();
    }
  })
})
