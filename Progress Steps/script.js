const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    if (currentActive < circles.length) {
        currentActive++
    }

    update();
})

prev.addEventListener('click', () => {

    if (currentActive >= 1) {
        currentActive--
    }

    update();
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currentActive) {
            circle.classList.add('active')
        }
        else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')
    const step = `${(actives.length - 1) / (circles.length - 1) * 100}%`
    progress.style.width = step

    if (currentActive === 1) {
        prev.disabled = true
    }
    else if (currentActive === circles.length) {
        next.disabled = true
    }
    else {
        next.disabled = prev.disabled = false
    }
}