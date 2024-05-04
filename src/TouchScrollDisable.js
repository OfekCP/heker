// TouchScrollDisable.js

export function disableTouchScroll() {
    // Flag to track if horizontal scrolling is active
    let horizontalScrolling = false;
    let verticalScrolling = true;

    // Function to handle touch start event for horizontal scrolling
    function handleHorizontalTouchStart(event) {
        // Set flag to true to indicate horizontal scrolling is active
        horizontalScrolling = true;
        verticalScrolling = false;
    }

    // Function to handle touch end event for horizontal scrolling
    function handleHorizontalTouchEnd(event) {
        // Set flag to false to indicate horizontal scrolling has ended
        horizontalScrolling = false;
        verticalScrolling = true;
    }

    // Function to handle touch move event for horizontal scrolling
    function handleHorizontalTouchMove(event) {
        // If horizontal scrolling is active, prevent default vertical scrolling behavior
        if (horizontalScrolling&&verticalScrolling) {
            event.preventDefault();
        }
    }

    // Add event listeners for horizontal touch events
    document.addEventListener('touchstart', handleHorizontalTouchStart, { passive: false });
    document.addEventListener('touchend', handleHorizontalTouchEnd);
    document.addEventListener('touchmove', handleHorizontalTouchMove, { passive: false });
}
