import React, { useEffect } from 'react';
import gsap from 'gsap';

const Name = () => {
    useEffect(() => {
        const letters = document.querySelectorAll('.name-characters span');
        const container = document.querySelector('.name-characters');

        // Custom throttle function to limit the frequency of execution
        const throttle = (func, delay) => {
            let lastTime = 0;
            return function (...args) {
                const now = new Date().getTime();
                if (now - lastTime >= delay) {
                    func.apply(this, args);
                    lastTime = now;
                }
            };
        };

        // Hover effect to move letters based on mouse position
        const overEmail = throttle((e) => {
            letters.forEach((letter) => {
                const letterBounds = letter.getBoundingClientRect();
                const letterCenter = letterBounds.left + letterBounds.width / 2;
                const mouseDistance = e.clientX - letterCenter;
                const yMovement = Math.max(0, 130 - Math.abs(0.4 * mouseDistance));

                gsap.to(letter, {
                    duration: 0.5,
                    y: -1 * yMovement,
                    ease: 'power1.out',
                    overwrite: 'auto',
                });
            });
        }, 50); // Throttling the event to every 50ms

        // Reset letters when mouse leaves the name area
        const leaveEmail = () => {
            letters.forEach((letter) => {
                gsap.to(letter, {
                    duration: 0.8,
                    y: 0,
                    ease: 'expo.out',
                    overwrite: 'auto',
                });
            });
        };

        // Add event listeners to the container
        container.addEventListener('mousemove', overEmail);
        container.addEventListener('mouseleave', leaveEmail);

        // Cleanup event listeners on component unmount
        return () => {
            container.removeEventListener('mousemove', overEmail);
            container.removeEventListener('mouseleave', leaveEmail);
        };
    }, []);

    return (
        <div className="w-full flex flex-col justify-center items-center gap-6">
            <h1 className="name-characters cursor-default uppercase text-center flex flex-col gap-0 md:flex-row md:gap-6 lg:gap-9">
                <div className="uppercase text-center flex flex-row gap-1 justify-center items-center">
                    <span>F</span>
                    <span>r</span>
                    <span>a</span>
                    <span>n</span>
                    <span>k</span>
                </div>

                <div className="uppercase text-center flex flex-row gap-1 justify-center items-center">
                    <span>D</span>
                    <span>
                        <svg className='name-smiley' viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="50" cy="50" r="49.5" fill="white" stroke="#2A1B18" />
                            <ellipse cx="32" cy="35.5" rx="9" ry="18.5" fill="#F08305" />
                            <ellipse cx="68" cy="35.5" rx="9" ry="18.5" fill="#F08305" />
                            <ellipse cx="25" cy="19.327" rx="25" ry="19.327" transform="matrix(1 0.000536786 -0.00089816 1 26.0342 52.3193)" fill="#F08305" />
                            <ellipse cx="51.0381" cy="69.3443" rx="25" ry="19.327" transform="rotate(0.0397832 51.0381 69.3443)" fill="white" />
                            <ellipse cx="5.12174" cy="0.77135" rx="5.12174" ry="0.77135" transform="matrix(-0.383682 -0.923465 0.923604 -0.383348 77.0386 77.0508)" fill="#F08305" />
                            <ellipse cx="5.12174" cy="0.77135" rx="5.12174" ry="0.77135" transform="matrix(-0.383651 0.923478 -0.92334 -0.383984 28.3542 68.5923)" fill="#F08305" />
                        </svg>
                    </span>
                    <span>m</span>
                    <span>i</span>
                    <span>n</span>
                    <span>g</span>
                    <span>u</span>
                    <span>e</span>
                    <span>z</span>
                </div>
            </h1>

            <p className="uppercase max-w-sm text-center text-base lg:text-lg">Frank Dominguez is a web designer living in Kansas City</p>
        </div>
    );
};

export default Name;