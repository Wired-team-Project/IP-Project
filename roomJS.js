const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('dispnew');
        }
        else{
            entry.target.classList.remove('dispnew');
        }
    });
});


const hiddenElements = document.querySelectorAll(".disp");
hiddenElements.forEach((el) => observer.observe(el));
