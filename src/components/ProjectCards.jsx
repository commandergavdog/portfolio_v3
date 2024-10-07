import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import projectData from '../projectData.json';


const ProjectCards = () => {


    useEffect(() => {


        const cards = document.querySelectorAll('.project-card');

        // Function to calculate and apply movement based on mouse position
        const moveCard = (e) => {
            const card = e.currentTarget;
            const cardBounds = card.getBoundingClientRect();

            // Calculate the position of the mouse relative to the center of the card
            const mouseX = e.clientX - (cardBounds.left + cardBounds.width / 2);
            const mouseY = e.clientY - (cardBounds.top + cardBounds.height / 2);

            // Calculate rotation and translation based on mouse position
            const rotationX = (mouseY / cardBounds.height) * 15; // Rotate up/down based on Y
            const rotationY = -(mouseX / cardBounds.width) * 15; // Rotate left/right based on X
            const translateX = (mouseX / cardBounds.width) * 10; // Translate horizontally
            const translateY = (mouseY / cardBounds.height) * 10; // Translate vertically

            // Apply the transformation using GSAP, including the grow effect
            gsap.to(card, {
                duration: 0.6,
                x: translateX,
                y: translateY,
                rotationX: rotationX,
                rotationY: rotationY,
                scale: 1.055, // Grow the card on hover
                ease: 'power2.out',
                overwrite: 'auto',
            });
        };

        // Reset card to its original position and scale when hover ends
        const resetCard = (e) => {
            const card = e.currentTarget;
            gsap.to(card, {
                duration: 1,
                x: 0,
                y: 0,
                rotationX: 0,
                rotationY: 0,
                scale: 1, // Reset the scale back to normal
                ease: 'power2.out',
                overwrite: 'auto',
            });
        };

        // Add event listeners for mousemove and mouseleave
        cards.forEach(card => {
            card.addEventListener('mousemove', moveCard);
            card.addEventListener('mouseleave', resetCard);
        });

        // Cleanup event listeners when component unmounts
        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', moveCard);
                card.removeEventListener('mouseleave', resetCard);
            });
        };
    }, []);

    return (
        <div className="flex flex-wrap -m-2" 
        >
            {projectData.map((project) => (
                <div key={project.id} className="p-4 w-1/2 md:w-1/4">
                    <img                     
                        className="h-auto max-w-full project-card cursor-pointer"
                        src={project.image}
                        alt={project.alt}
                    />
                </div>
            ))}
        </div>
    );
};

export default ProjectCards;