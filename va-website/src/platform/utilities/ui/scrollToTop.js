import Scroll from 'react-scroll';

const scroller = Scroll.animateScroll;

export default function scrollToTop(duration = 500) {
  scroller.scrollTo(0, {
    duration,
    delay: 0,
    smooth: true,
  });
}
