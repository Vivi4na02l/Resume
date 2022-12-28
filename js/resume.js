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

    // let divW = divCanvas.style.width
    // let widthSize = divW.split('')

    // divW = divW.slice(0, (widthSize.length-2))

    // // alert(Math.floor(window.innerWidth/divW))
    // let multiply = Math.floor(window.innerWidth/divW)

    // divCanvas.style.width = divW * (multiply/2) + 'px'
    // divCanvas.style.height = divCanvas.style.width/2

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

    // let border = divH * 0.20
    // circle.style.width = '0px'
    // circle.style.height = '0px'
    // circle.style.borderLeft = `${border}px solid transparent`
    // circle.style.borderRight = `${border}px solid transparent`

    // circle.style.borderBottom = `${border*2 - border*0.1}px solid black`

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

    // const circJump = [{transform: `translateY(-${divH/2}px)`}, {transformOrigin: `center center`}]
    // const circJumpTime = {duration: 250, iterations: 1}
    // circle.animate(circJump, circJumpTime);
    // let circleH = circle.offsetTop + circle.offsetHeight;

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