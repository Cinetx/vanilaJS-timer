window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    // Timer

    let deadline = '2020-05-21';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000*60*60)));

        return {
            'total' : t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds': seconds
        };
    }

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(upDateClock, 1000);

        function upDateClock() {
            let t = getTimeRemaining(endtime);
            
            (t.hours < 10) ? hours.textContent = '0' + t.hours : hours.textContent = t.hours;
            (t.minutes < 10) ? minutes.textContent = '0' + t.minutes : minutes.textContent = t.minutes;
            (t.seconds < 10) ? seconds.textContent = '0' + t.seconds : seconds.textContent = t.seconds;

            if(t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }
    setClock('timer', deadline);
});
