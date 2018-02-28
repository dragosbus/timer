var data = (function () {

  var clock = n => {
    return function () {
      return n++;
    }
  };

  var t1 = clock(0);

  return {
    t1
  };

}());

var view = (function () {

  const clock = document.querySelector('.clock');
  var time = data.t1();

  var lessThanTen = (min, sec) => {

    if (sec < 10) {
      if (min < 10) {
        clock.textContent = `0${min}:0${sec}`;
      } else {
        clock.textContent = `${min}:0${sec}`;
      }
    } else {
      if (min < 10) {
        clock.textContent = `0${min}:${sec}`;
      } else {
        clock.textContent = `${min}:${sec}`;
      }
    }

  };

  var updateClock = max => {
    for (let i = 0; i <= max; i++) {

      setTimeout(() => {

        if (time < 10) clock.textContent = `00:0${time}`;
        else clock.textContent = `00:${time}`;

        if (time >= 60) {
          var min = parseInt(time / 60, 10);
          var sec = time % 60;
          lessThanTen(min, sec);
        }
        time += 1;
        
      }, 1000 * i);

    }
  };

  return {
    updateClock
  };

}());

view.updateClock(869);



