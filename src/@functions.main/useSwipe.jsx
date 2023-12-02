export function useSwipe(onSwipeLeft, onSwipeRight, rangeOffset=4) {
  let firstTouch = 0;
  
  //set user touch start position
  function onTouchStart(e) {
    firstTouch = e.changedTouches[0].pageX;
  }

  //when touch ends check for swipe directions
  function onTouchEnd(e) {
    //get touch position and screen size
    const positionX = e.changedTouches[0].pageX;
    const range = window.innerWidth / rangeOffset;

    //check if position is growing positively and has reached specified range
    if (positionX - firstTouch > range) {
      onSwipeRight && onSwipeRight();
    }
    //check if position is growing negatively and has reached specified range
    else if (firstTouch - positionX > range) {
      onSwipeLeft && onSwipeLeft();
    }
  }

  return { onTouchStart, onTouchEnd };
}