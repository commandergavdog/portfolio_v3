import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const Daisy = () => {
    const container = useRef();
    const body = document.querySelector('body');

    useGSAP(
        () => {
            // gsap code here...
            gsap.timeline({
                scrollTrigger: {
                    trigger: body,
                    pin: false,
                    scrub: 2,
                    start: 'top top'
                    // end: 'bottom',
                    // markers: true
                }
            })
                .to('.petals', {
                    rotation: 360,
                    transformOrigin: 'center center',
                })

        },
        { scope: container }
    ); // <-- scope is for selector text (optional)

    return (

        <div ref={container} className="fixed right-0 bottom-0 p-5">
    


            <svg className='h-24 w-24 lg:h-36 lg:w-36' viewBox="0 0 237 225" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g className='petals'>
                    <path fillRule="evenodd" clipRule="evenodd" d="M125.432 85.5489C147.19 -32.6191 67.0126 -19.2001 116.955 87.0499L125.432 85.5489Z" fill="#F9EFEA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M108.265 86.8727C53.3792 -2.43929 -2.83876 51.7317 93.5132 101.05L108.265 86.8727Z" fill="#F9EFEA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M92.2655 105.651C-20.0935 77.932 -29.1002 163.979 89.8625 128.191L92.2655 105.651Z" fill="#F9EFEA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M92.3566 136.05C-19.2884 188.281 55.1846 254.206 107.266 144.896L92.3566 136.05Z" fill="#F9EFEA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M107.266 146.05C112.383 247.527 188.721 248.788 133.016 149.328L107.266 146.05Z" fill="#F9EFEA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M135.266 148.805C196.102 225.444 257.01 180.896 148.626 131.05L135.266 148.805Z" fill="#F9EFEA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M150.835 128.689C260.695 140.432 259.286 71.4149 147.266 103.76L150.835 128.689Z" fill="#F9EFEA" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M145.676 101.05C231.967 19.2619 162.272 -27.7101 130.266 89.3089L145.676 101.05Z" fill="#F9EFEA" />
                </g>
                <g className='daisy-smile'>
                    <circle cx="117.5" cy="118.5" r="37.5" fill="#F08305" />
                    <circle cx="117.5" cy="118.5" r="37.5" fill="#F08305" />
                    <ellipse cx="104" cy="107.625" rx="6.75" ry="13.875" fill="#B186AE" />
                    <ellipse cx="131" cy="107.625" rx="6.75" ry="13.875" fill="#B186AE" />
                    <ellipse cx="18.75" cy="14.4952" rx="18.75" ry="14.4952" transform="matrix(1 0.000536786 -0.00089816 1 99.5249 120.24)" fill="#B186AE" />
                    <ellipse cx="118.278" cy="133.008" rx="18.75" ry="14.4952" transform="rotate(0.0397832 118.278 133.008)" fill="#F08305" />
                    <ellipse cx="3.84131" cy="0.578512" rx="3.84131" ry="0.578512" transform="matrix(-0.383682 -0.923465 0.923604 -0.383348 137.778 138.788)" fill="#B186AE" />
                    <ellipse cx="3.84131" cy="0.578512" rx="3.84131" ry="0.578512" transform="matrix(-0.383651 0.923478 -0.92334 -0.383984 101.265 132.444)" fill="#B186AE" />
                </g>
            </svg>




        </div >
    );
};

export default Daisy;