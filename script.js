
window.addEventListener("scroll", () => {
    document.querySelectorAll(".scroll").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
        
       document.addEventListener("DOMContentLoaded", () => {

    const steps = document.querySelectorAll(".cycle-step");
    const info = document.getElementById("cycleInfo");

    if (!info) {
        console.error("cycleInfo tidak ditemukan di HTML");
        return;
    }

    steps.forEach(step => {
        step.addEventListener("click", () => {

            steps.forEach(s => s.classList.remove("active"));
            step.classList.add("active");

            const type = step.getAttribute("data-type");

            let text = "";

            switch (type) {
                case "evaporasi":
                    text = "☀️ Evaporasi: air berubah jadi uap karena panas matahari.";
                    break;

                case "kondensasi":
                    text = "☁️ Kondensasi: uap air menjadi awan.";
                    break;

                case "presipitasi":
                    text = "🌧️ Presipitasi: air turun sebagai hujan.";
                    break;
            }

            info.innerHTML = text;
        });
    });

});
    });
});