const toggleBtn = document.getElementById('start-btn');
const leftBox = document.querySelector('.slider-left-box');
const rightBox = document.querySelector('.slider-right-box');

toggleBtn.addEventListener('click', function () {
    leftBox.style.transform = 'translateX(-100%)';
    leftBox.addEventListener('transitionend', function() {
        leftBox.style.display = 'none';
        rightBox.style.transform = 'translateX(-100%)';
        rightBox.style.display = 'block';
        setTimeout(function() {
            rightBox.style.transform = 'translateX(0)';
        }, 0);
        })
})