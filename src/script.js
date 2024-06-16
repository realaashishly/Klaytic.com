gsap.registerPlugin(ScrollTrigger)

const container = document.querySelector('.hero__images-wrapper')
const standardBtn = document.getElementById('standardBtn')
const proBtn = document.getElementById('proBtn')
const standardPrice = document.getElementById('standard-membership')
const proPrice = document.getElementById('pro-membership')
const links = document.querySelectorAll('nav a')
const light = document.querySelector('nav .spotLight')
let currentActive = document.querySelector('nav a.active')
var x = window.matchMedia('(max-width: 700px)')

// function moveSpotlight(target) {
//     light.style.width = `${target.offsetWidth}px`
//     light.style.left = `${target.offsetLeft}px`
// }

links.forEach((link) => {
    link.addEventListener('mouseover', (e) => {
        if (currentActive) {
            currentActive.classList.remove('active')
        }
        e.target.classList.add('active')
        currentActive = e.target
        moveSpotlight(e.target)
    })
})

// if (currentActive) {
//     moveSpotlight(currentActive)
// }

function scrollHandler() {
    if (!x.matches) {
        let tl = gsap.timeline()
        tl.to(container, {
            x: '-450px',
            scrollTrigger: {
                trigger: container,
                start: 'top bottom',
                end: '+500px',
                scrub: true,
            },
        })
    }
}

x.addEventListener('scroll', function () {
    scrollHandler(x)
})



const faqRows = document.querySelectorAll('.faq__row')

faqRows.forEach((row) => {
    const rowAnswer = row.querySelector('.faq__answer')
    const rowArrow = row.querySelector('.faq__arrow')

    row.addEventListener('click', () => {
        const isAnswerVisible = rowAnswer.style.display !== 'none'

        if (isAnswerVisible) {
            rowAnswer.style.display = 'none'
            rowArrow.style.transform = 'rotate(0deg)'
        } else {
            rowAnswer.style.display = 'block'
            rowArrow.style.transform = 'rotate(180deg)'
        }
    })
})


