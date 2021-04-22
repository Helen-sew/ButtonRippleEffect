const buttons = document.querySelectorAll('#ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    const clientX = e.clientX; //Get the horizontal coordinate of current window
    const clientY = e.clientY; //Get the vertical coordinate  of current window

    //get the position of the button
    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    const innerX = clientX - buttonLeft;
    const innerY = clientY - buttonTop;

    const circle = document.createElement('span');
    circle.classList.add('circle');
    circle.style.top = innerY + 'px';
    circle.style.left = innerX + 'px';

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
