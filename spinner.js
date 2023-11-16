// const spinner = document.getElementById('value');
// const div = document.getElementById('draggable');
// const forwardButton = document.getElementById('forward');
// const backwardButton = document.getElementById('backward');

// let rotationSpinner = -3;

// console.log(rotationSpinner, div);

// forwardButton.addEventListener('click', () => {
//     console.log("FORWARD")
//     rotationSpinner += 10;
//     spinner.style.transform = `rotate(${360}deg)`;
//     div.style.transform = `rotate(${rotationSpinner}deg)`;
// });

// backwardButton.addEventListener('click', () => {
//     console.log("BACKWARD")

//     rotationSpinner -= 10;
//     spinner.style.transform = `rotate(${-360}deg)`;
//     div.style.transform = `rotate(${rotationSpinner}deg)`;
// });

// Define rotation variable in a scope accessible by both scripts
// let rotation = -3;

// In your dragging script
rotation += (angle - startAngle) * (180 / Math.PI);
applyTransform();

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