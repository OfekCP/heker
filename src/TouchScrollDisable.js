// TouchScrollDisable.js
export function disableTouchScroll(elementId) {
    // Function to handle touch events
    function handleTouch(event) {
        // Get the target element
        const targetElement = document.getElementById(elementId);
        if (!targetElement) return;

        // Check if the touch event target is within the specified element
        if (!targetElement.contains(event.target)) return;

        // Prevent vertical scrolling while sliding the comparison slider horizontally
        if (event.touches.length === 1) {
            const touch = event.touches[0];
            const startY = touch.clientY;

            window.addEventListener('touchmove', function handleMove(moveEvent) {
                const moveTouch = moveEvent.touches[0];
                const deltaY = Math.abs(moveTouch.clientY - startY);
                // If vertical scrolling detected, prevent default behavior
                if (deltaY > 10) {
                    moveEvent.preventDefault();
                }
            }, { passive: false });

            window.addEventListener('touchend', function() {
                window.removeEventListener('touchmove', handleMove);
            });
        }
    }

    // Add event listener for touch events
    document.addEventListener('touchstart', handleTouch, { passive: false });
}
