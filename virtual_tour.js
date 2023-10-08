mercury = [
    "Mercury rotates on its axis very slowly and takes 59 Earth days for a full rotation. This might lead you to think that you would have to wait a long time to witness sunset or sunrise on Mercury. However, that is not the case. This small planet, when closest to the sun in its elliptical orbit, moves extremely fast and the morning Sun appears to rise briefly, set, and rise again from some parts of the planet's surface. You can witness this virtually from the Earth by booking a virtual tour. This tour can be booked every 59 Earth days. The exact date to witness this mesmerizing view for 2 hours from Mercury would be posted every 59 Earth days.",
    "From Mercury, the sun can be glimpsed with the closest proximity. Thus, a virtual tour can be booked to experience being close to the sun from Mercury. In fact, Mercury is the closest place to the sun from which we have availability to see the sun.",
    "Have you ever wondered what it is like to be a rover digging the surface of Mercury and strolling on its surface? Well, you have that option. Mercury is notorious for having ice on its poles. Rovers are surveilling the poles for further information. You can book a one-hour virtual controlling session of the rovers on Mercury and give the rovers a second hand. However, there are prerequisites for this virtual session so check them and join accordingly."
]

venus = [
    "One of the unique features of Venus is its pattern of sunrise and sunset. A day in Venus lasts 243 Earth days. So, sunrise and sunset from Venus are rare. The Sun also rises from the west and sets in the east. To witness this rare and unique moment, you can book a virtual tour. Tours can be booked for both sunrise and sunset. However, virtual tours are only available from places in the Cytherean valleys.",
    "When the Sun's magnetic field interacts with the electrically excited ionosphere of Venus, it creates or induces a magnetic field there. This induced magnetic field envelops the planet and is shaped like an extended teardrop, or the tail of a comet, as the solar wind blows past Venus and outward into the solar system. You can book a virtual tour to experience this online. The tour can be as long as an hour.",
    "From the sides of Venus experiencing Venusian night, stargazing is a wonderful activity. This can also be done virtually for an hour if you book a timing with Helios."
]

moon = [
    "Rovers are surveilling the poles of the Moon for further information and have cameras that allow people on Earth to experience what it is like to walk on the Moon. You can book a one-hour virtual session to be one of the rovers on the Moon and give the rovers a second hand. For control, there are prerequisites needed.",
    "In our headquarters, an environment has been simulated exactly as the Moon’s. So, you can use Virtual Reality and stimulate  yourself there to witness meteoroids hitting the Moon in cases when witnessing a real tour is risky.",
    "You can also observe the different historic sites on the Moon such as the landing of Apollo 11 in the Sea of Tranquility in 1969 AD virtually in our head-quarters."
]

mars = [
    "A virtually simulated Olympus Mons will not only allow the interested individuals to understand the volcanic sight but also understand how energy is being harvested from that site.",
    "A virtual world simulator is made for Mars where interested individuals can showcase their creative way of settling humans on Mars. In the world simulator, different possible future Mars settlement ideas can be explored.",
    "Rovers are surveilling the poles of Mars for further information and have cameras that allow people on Earth to experience what it is like to walk on Mars. You can book a one-hour virtual session to be one of the rovers on Mars and give the rovers a second hand. For control, there are prerequisites needed."
]

jupiter = [
    "Polygonal arrangements of giant cyclonic storms at both of Jupiter’s poles – eight arranged in an octagonal pattern in the north and five arranged in a pentagonal pattern in the south can be virtually witnessed from the Earth using satellites on Jupiter’s moons.",
    "The asteroid belt can be witnessed with a lot of clarity virtually using the satellites employed on the moons of Jupiter and asteroid-related activities can be witnessed by booking virtual tour.",
    "Jupiter is known for its distinctive belts and zones – white and reddish bands of clouds that wrap around the planet. Strong east-west winds moving in opposite directions separate the bands. These can be seen via virtual tours."
]

saturn = [
    "Aurorae occur when charged particles spiral into a planet's atmosphere along magnetic field lines. This happens in Saturn which can be seen virtually.",
    "Hyperion is the only object in the solar system other than Earth’s moon that’s been confirmed as having a charged surface. The different experiments happening here will be witnessed virtually.",
    "The extreme pressures and temperatures deep inside the planet would crush, melt, and vaporize any spacecraft trying to fly into the planet. Virtual simulations of different bodies interacting with Saturn are also available. Do not worry, we are not actually throwing things into Saturn for this. It is just a virtual demo to guide you through what could happen."
]

uranus = [
    "Uranus has two sets of rings. The inner system of nine rings consists mostly of narrow, dark gray rings. There are two outer rings: the innermost one is reddish like dusty rings elsewhere in the solar system, and the outer ring is blue like Saturn's E ring. These can be seen virtually and their structure can be understood.",
    "Uranus' atmosphere is mostly hydrogen and helium, with a small amount of methane and traces of water and ammonia. The methane gives Uranus its signature blue color. Plans are being made to extract the hydrogen and helium to make good use of it. The procedure and setup can also be seen virtually.",
    "Virtual observation of the rest of the solar system can be done from Uranus. using rovers that have been sent to its moons."
]

neptune= [
    "At Neptune's distance of nearly 3 billion miles, the sun appears starlike at 1/30th the diameter of the full moon. This fascinating thing can be witnessed virtually via rovers that have been sent to the moons of Neptune.",
    "Neptune has at least five main rings and four prominent ring arcs that we know of so far. Starting near the planet and moving outward, the main rings are named Galle, Leverrier, Lassell, Arago, and Adams. The rings are thought to be relatively young and short-lived. They can be seen virtually.",
    "Neptune is our solar system's windiest world. Despite its great distance and low energy input from the Sun, Neptune's winds can be three times stronger than Jupiter's and nine times stronger than Earth's. We have virtual simulations of this world that you can book."
]

planetName = localStorage.getItem('planet')
virtual1 = document.getElementById('virtual-1')
virtual2 = document.getElementById('virtual-2')
virtual3 = document.getElementById('virtual-3')

if (planetName === 'mercury') {
    virtual1.innerHTML = mercury[0]
    virtual2.innerHTML = mercury[1]
    virtual3.innerHTML = mercury[2]
} else if (planetName === 'venus') {
    virtual1.innerHTML = venus[0]
    virtual2.innerHTML = venus[1]
    virtual3.innerHTML = venus[2]
} else if (planetName === 'moon') {
    virtual1.innerHTML = moon[0]
    virtual2.innerHTML = moon[1]
    virtual3.innerHTML = moon[2]
} else if (planetName === 'mars') {
    virtual1.innerHTML = mars[0]
    virtual2.innerHTML = mars[1]
    virtual3.innerHTML = mars[2]
} else if (planetName === 'jupiter') {
    virtual1.innerHTML = jupiter[0]
    virtual2.innerHTML = jupiter[1]
    virtual3.innerHTML = jupiter[2]
} else if (planetName === 'saturn') {
    virtual1.innerHTML = saturn[0]
    virtual2.innerHTML = saturn[1]
    virtual3.innerHTML = saturn[2]
} else if (planetName === 'uranus') {
    virtual1.innerHTML = uranus[0]
    virtual2.innerHTML = uranus[1]
    virtual3.innerHTML = uranus[2]
} else if (planetName === 'neptune') {
    virtual1.innerHTML = neptune[0]
    virtual2.innerHTML = neptune[1]
    virtual3.innerHTML = neptune[2]
}