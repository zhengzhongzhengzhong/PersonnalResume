// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // 简单动画效果
    window.addEventListener("scroll", () => {
        const sections = document.querySelectorAll("section");
        sections.forEach(section => {
            if (section.getBoundingClientRect().top < window.innerHeight && section.getBoundingClientRect().bottom >= 0) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    });
});