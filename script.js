const buttons = document.querySelectorAll('#ripple');

buttons.forEach((button) => {
  button.addEventListener('click', function (e) {
    //to find position of X and Y in DOM
    const clientX = e.clientX;
    const clientY = e.clientY;

    //to find the position of X and Y of the button
    const buttonLeft = e.target.offsetLeft;
    const buttonTop = e.target.offsetTop;

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
