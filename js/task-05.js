const inputEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');

const defaultOutput = 'Anonymous';

inputEl.addEventListener('input', (event) => {
   
    outputEl.textContent = event.currentTarget.value ? event.currentTarget.value : defaultOutput;
})