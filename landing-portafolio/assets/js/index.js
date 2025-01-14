 const linkElement = document.querySelector("a");
        const spanText = document.getElementById("span-text");
        const spanHoverText = document.getElementById("span-hover-text");

        linkElement.addEventListener("mouseover", () => {
            spanText.classList.add("opacity-0");
            spanText.classList.add("-translate-y-5");
            spanHoverText.classList.remove("opacity-0");
            spanHoverText.classList.remove("-translate-y-5");
        });

        linkElement.addEventListener("mouseout", () => {
            spanText.classList.remove("opacity-0");
            spanText.classList.remove("-translate-y-5");
            spanHoverText.classList.add("opacity-0");
            spanHoverText.classList.add("-translate-y-5");
        });