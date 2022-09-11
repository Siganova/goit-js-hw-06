const slider = document.getElementById('font-size-control');
const textEl = document.getElementById('text');

slider.addEventListener('input', (event) => {
    textEl.style.fontSize = event.target.value + 'px';
});