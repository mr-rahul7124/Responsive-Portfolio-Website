/*===== EMAIL JS =====*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_nrso6b1','template_wlxcxsb','#contact-form','0KVTMzsdqH7N1WcpW')

    .then(() =>{
        // Show send message
        contactMessage.textContent = 'Message sent successfully'

        // Remove message after five seconds
        setTimeout(() =>{
            contactMessage.textContent = ''
        }, 5000)

        // Clear input fields
        contactForm.reset()
    }, () =>{
        // Show error message
        contactMessage.textContent = 'Message not sent (service error)'
})
}
contactForm.addEventListener('submit', sendEmail)

/*===== SHOW SCROLL UP =====*/
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    // When the scroll is higher then 350 viewport height, add the show.scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
    :scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)

/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id'),
                sectionClass = document.querySelector('.nav_list a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }
        else{
            sectionClass.classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll',scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration: 2500,
    delay: 400,
    // reset: true, //Animation repeat
})

sr.reveal(`.profile, .contact_form`)
sr.reveal(`.info`, {origin:'left', delay: 800})
sr.reveal(`.skills`, {origin:'left', delay: 1000})
sr.reveal(`.about`, {origin:'right', delay: 1200})
sr.reveal(`.projects_card, .services_card, .experience_card`, {interval: 100})