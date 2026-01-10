function randomRGB() {
    return `rgb(${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)}, 
                ${Math.floor(Math.random() * 256)})`;
}

document.body.addEventListener('click', function(event) {
    const originalBox = event.target.closest('.color-box');
    
    if (originalBox) {
        const newBox = originalBox.cloneNode(true);
        
        newBox.classList.remove('main-trigger'); // if i didn't remove it any box will be same styling as main one (yello )
        
        const newColor = randomRGB();
        
        newBox.style.backgroundColor = newColor;
        
        const label = newBox.querySelector('.label');
        if (label) {
            label.innerText = newColor;
        }
        document.getElementById('color-container').appendChild(newBox);
    }
});