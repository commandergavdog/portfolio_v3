import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const TopReturn = () => {
    const [isVisible, setIsVisible] = useState(false);
    const buttonRef = useRef(null); // Ensure buttonRef starts as null

    const scrollToTop = () => {
        gsap.to(window, {
            duration: 1,
            scrollTo: { y: 0 },
            ease: "power2.out"
        });
    };

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Fade in/out effect when isVisible changes
    useEffect(() => {
        if (isVisible && buttonRef.current) {
            gsap.to(buttonRef.current, { opacity: 1, duration: 0.2, ease: "power2.out" });
        } else if (buttonRef.current) {
            gsap.to(buttonRef.current, { opacity: 0, duration: 0.2, ease: "power2.out" });
        }
    }, [isVisible]); // Trigger effect when isVisible changes

    return (
        <>
            <div
                ref={buttonRef}  // Ensure buttonRef is attached
                onClick={scrollToTop}
                style={{ opacity: 0, pointerEvents: isVisible ? 'auto' : 'none' }}  // Set opacity and disable pointer events when hidden
                className="fixed left-0 bottom-0 p-5 hover:scale-110 hover:-translate-y-1 cursor-pointer ease-in-out duration-300"
            >
                <svg width="16" height="25" viewBox="0 0 16 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.70711 0.292892C8.31658 -0.0976315 7.68342 -0.0976315 7.29289 0.292892L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292892ZM9 25L9 1H7L7 25H9Z" fill="black" />
                </svg>
            </div>
        </>
    );
};

export default TopReturn;