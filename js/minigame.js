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