import React from "react";

const PictureCircle = () => {
    const pictureUrls = [
        "./images/react.png",
        "./images/gitlab.png",
        "./images/Tailwind.png",
        "./images/vuejs.png",
        "./images/saas.png",
        "./images/bootstrap.png",
        "./images/laravel.png",
    ];

    const angleIncrement = (2 * Math.PI) / pictureUrls.length;

    return (
        <svg width="500" height="500">
            {pictureUrls.map((url, index) => {
                const angle = index * angleIncrement;
                const x = Math.cos(angle) * 200 + 250; // Adjust radius and center X position as needed
                const y = Math.sin(angle) * 200 + 250; // Adjust radius and center Y position as needed
                return (
                    <image
                        key={index}
                        href={url}
                        x={x - 25} // Adjust image size and centering
                        y={y - 25} // Adjust image size and centering
                        width="50"
                        height="50"
                    />
                );
            })}
        </svg>
    );
};

export default PictureCircle;
