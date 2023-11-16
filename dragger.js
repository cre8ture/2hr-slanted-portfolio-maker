const draggableElement = document.getElementById('draggable');
const rotateHandle = document.getElementById('rotate-handle');

let isDragging = false, isRotating = false;
let initialX, initialY, translateX = 0, translateY = 0; // Initialize rotation with -3
let startAngle = 0;  // Starting angle when rotation begins

function applyTransform() {
    draggableElement.style.transform = `translate(${translateX}px, ${translateY}px) rotate(${rotation}deg)`;
}


// Dragging logic
draggableElement.addEventListener('mousedown', (e) => {
    if (e.target !== rotateHandle) {
        isDragging = true;
        initialX = e.clientX - translateX;
        initialY = e.clientY - translateY;
    }

    function onMouseMove(e) {
        if (!isDragging) return;
        translateX = e.clientX - initialX;
        translateY = e.clientY - initialY;
        applyTransform();
    }

    function onMouseUp() {
        isDragging = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

// Rotation logic
rotateHandle.addEventListener('mousedown', (e) => {
    e.stopPropagation();  // Prevents the mousedown event from triggering dragging
    isRotating = true;
    const rect = draggableElement.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    startAngle = Math.atan2(e.clientY - centerY, e.clientX - centerX);

    function onMouseMove(e) {
        if (!isRotating) return;
        const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
        rotation += (angle - startAngle) * (180 / Math.PI);
        startAngle = angle;  // Update the starting angle for smooth rotation
        applyTransform();
    }

    function onMouseUp() {
        isRotating = false;
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
    }

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});

applyTransform();

