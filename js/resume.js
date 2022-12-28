firstSectionSize()
window.addEventListener("resize", firstSectionSize)

/**
 * Function that creates the div from both outside-game section and the game itself's dimensions
 */
function firstSectionSize() {
    let W = window.innerWidth
    let H = window.innerHeight

    document.querySelector('#firstSection').style.height = H * 0.2 + 'px'
    document.querySelector('#minigame').style.height = (H * 0.2) * 0.8 + 'px'
    document.querySelector('#minigame').style.width = W * 0.75 + 'px'

    circleDimensions(document.querySelector('#minigame').style.height.slice(0,-2) , document.querySelector('#minigame').style.width.slice(0,-2))
}

/**
 * Function that creates the circle and its position
 * @param {*} divH height of the game div
 */
function circleDimensions(divH, divW) {
    const circle = document.querySelector('#circle')

    circle.style.borderRadius = '50%'
    circle.style.width = divH * 0.2 + 'px'
    circle.style.height = circle.style.width

    circle.style.position = 'relative'

    circle.style.top = divH - parseInt(circle.style.width.slice(0,-2)) + 'px'
    circle.style.left = divW*0.2 + 'px'
}

/**
 * Event listener that executes animations upon clicking on the game div
 */
document.querySelector('#minigame').addEventListener('click', () => {
    const circle = document.querySelector('#circle')
    const divH = document.querySelector('#minigame').style.height.slice(0,-2)

    let circleTop = parseInt(circle.style.top.slice(0,-2))

    let pos = circleTop
    framesUp(pos, circleTop)
    function framesUp(pos, circleTop) {
        if ( pos <= (circleTop-(circleTop*0.6)) ) {
            framesDown(pos, circleTop)
        } else {
            pos--
            circle.style.top = pos + 'px';
            setTimeout(framesUp, 5, pos, circleTop)
        }
    }

    function framesDown(pos, circleTop) {
        if ( pos >= circleTop ) {
            console.log('nice');
        } else {
            pos++
            circle.style.top = pos + 'px';
            setTimeout(framesDown, 5, pos, circleTop)
        }
    }
});