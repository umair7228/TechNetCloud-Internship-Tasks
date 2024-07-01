const initSlider = (): void => {
    const imageList = document.querySelector(".slider_wrapper .image_list") as HTMLElement;
    const slideButtons = document.querySelectorAll(".slider_wrapper .slide-button");
    const sliderScrollBar = document.querySelector(".container .slider-scrollbar") as HTMLElement;
    const scrollBarThumb = sliderScrollBar.querySelector(".scrollbar-thumb") as HTMLElement;
    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

    scrollBarThumb.addEventListener("mousedown", (e: MouseEvent) => {
        const startX = e.clientX;
        const thumbPosition = scrollBarThumb.offsetLeft;

        // Update thumb position on mouse move
        const handleMouseMove = (e: MouseEvent) => {
            const deltaX = e.clientX - startX;
            const newThumbPosition = thumbPosition + deltaX;
            const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

            scrollBarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        };

        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        };

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    // Slide images according to the slide button clicks
    slideButtons.forEach(button => {
        button.addEventListener("click", () => {
            const direction = (button as HTMLElement).id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

    const handleSlideButtons = () => {
        const prevButton = slideButtons[0] as HTMLElement;
        const nextButton = slideButtons[1] as HTMLElement;
        prevButton.style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        nextButton.style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
    };

    // Update scrollbar thumb position based on image scroll
    const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollBar.clientWidth - scrollBarThumb.offsetWidth);
        scrollBarThumb.style.left = `${thumbPosition}px`;
    };

    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    });
};

window.addEventListener("load", initSlider);
