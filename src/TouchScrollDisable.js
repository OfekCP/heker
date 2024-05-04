// TouchScrollDisable.js
export function disableTouchScroll() {
    // Function to handle touch events
    function handleTouch(event) {
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
