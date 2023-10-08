let planet = ''

messages = ["Space exploration by Helios is self-sustained to a high extent. 60% of the resources used are harvested from other bodies of the solar system. of the resources used from the Earth, 90% of those resources are used in renewable sectors. After all, it is still necessary to consume less resources from the Earth for space exploration, especially in a case where entertainment is a big factor.", 
            "Also, we provide real tours only to planets and moons that are benefitting us in some way, whether in case of scientific research or in case of resource extraction. Still, for entertainment purposes, we have the facility of virtual tours to places that we would not be safe visiting or places that do not help human civilization in any way."]

planet1 = document.getElementById("planet1")
planet2 = document.getElementById("planet2")
planet3 = document.getElementById("planet3")
planet4 = document.getElementById("planet4")
planet5 = document.getElementById("planet5")
planet6 = document.getElementById("planet6")
planet7 = document.getElementById("planet7")
planet8 = document.getElementById("planet8")

astronaut_message = document.getElementById("astronaut-message")
message_parent = document.getElementById("message_parent")

current_message = 0
astronaut_message.innerHTML = messages[current_message]

buttons = document.getElementsByClassName("planet-button")
// buttons.style.display = "none"

document.onkeydown = function (key_name) {
    console.log(key_name)
    if (key_name.code == "ArrowRight" && current_message <= messages.length - 2) {
        current_message += 1
        astronaut_message.innerHTML = messages[current_message]
        // message_parent.style.bottom = 

    } else if (key_name.code == "ArrowLeft" && current_message >= 1) {
        current_message -= 1
        astronaut_message.innerHTML = messages[current_message]
    }
};

planet = 'hi'

planet1.addEventListener("click", function() {
    location.href = './virtual_tour.html'
    planet = 'mercury'
    localStorage.setItem("planet", "mercury");
})

planet2.addEventListener("click", function() {
    location.href = './tour.html'
    planet = 'venus'
    localStorage.setItem("planet", "venus");
})

planet3.addEventListener("click", function() {
    location.href = './tour.html'
    planet = 'moon'
    localStorage.setItem("planet", "moon");
})

planet4.addEventListener("click", function() {
    location.href = './tour.html'
    planet = 'mars'
    localStorage.setItem("planet", "mars");
})

planet5.addEventListener("click", function() {
    location.href = './tour.html'
    planet = 'jupiter'
    localStorage.setItem("planet", "jupiter");
})

planet6.addEventListener("click", function() {
    location.href = './tour.html'
    planet = 'saturn'
    localStorage.setItem("planet", "saturn");
})

planet7.addEventListener("click", function() {
    location.href = './virtual_tour.html'
    planet = 'uranus'
    localStorage.setItem("planet", "uranus");
})

planet8.addEventListener("click", function() {
    location.href = './virtual_tour.html'
    planet = 'neptune'
    localStorage.setItem("planet", "neptune");
})

