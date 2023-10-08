virtual_tour_div = document.getElementById('virtual-tour')
real_tour_div = document.getElementById('real-tour')
virtual_tour_button = document.getElementById('virtual-tour-b')
real_tour_button = document.getElementById('real-tour-b')

virtual_tour_button.addEventListener("click", function() {
    location.href = './virtual_tour.html'
    real_tour_div.style.opacity = 0;
    virtual_tour_button.style.display = 'none'
    virtual_tour_div.classList.toggle('expanded-virtual')
})

real_tour_button.addEventListener("click", function() {
    location.href = './real_tour.html'
    virtual_tour_div.style.opacity = 0;
    // virtual_tour_div.style.display = 'none';
    real_tour_button.style.display = 'none'
    real_tour_div.classList.toggle('expanded-real')
})