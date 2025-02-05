import { FC, useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';


export const useTransition = () => {
    return gsap.to(".page-transition", { opacity: 1, x: 0, duration: 0.5 });
};

const PageTransition:FC = () => {
    const pageTransition = useRef(null)

    const location = useLocation();
    useLayoutEffect(() => {
        gsap.fromTo(pageTransition.current, { opacity: 1, x: 0 }, { delay: .5, opacity: 0, x: -300, pointerEvents: 'none' });
    }, [location, pageTransition]);
    
  return (
    <div className='page-transition' ref={pageTransition}>
    </div>
  )
}

export default PageTransition
