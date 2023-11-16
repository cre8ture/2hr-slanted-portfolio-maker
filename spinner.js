// In your spinner script
const spinner = document.getElementById('value');
const div = document.getElementById('draggable');
const forwardButton = document.getElementById('forward');
const backwardButton = document.getElementById('backward');

console.log(rotation, div);

forwardButton.addEventListener('click', () => {
    console.log("FORWARD")
    rotation += 10;
    applyTransform();
});

backwardButton.addEventListener('click', () => {
    console.log("BACKWARD")
    rotation -= 10;
    applyTransform();
});

// And your applyTransform function would look like this
function applyTransform() {
    div.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`;
}