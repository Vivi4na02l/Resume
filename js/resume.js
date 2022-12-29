section1Size()
window.addEventListener("resize", section1Size)

/**
 * Function that creates the div from both outside-game section and the game itself's dimensions
 */
function section1Size() {
    let W = window.innerWidth
    let H = window.innerHeight
    let hexaDivH = document.querySelector('#section1').style.height.slice(0, -2)

    document.querySelector('#section1').innerHTML += `
        <span id="section1Content" class="hidden dflex fdc jcc aic">
            <h2 id="title" class="visible pWhite">"Doing what I love</h2>
            <h2 id="title2" class="visible pWhite">and loving what I do."</h2>

            <div id="minigame" class="visible bgMg">
                <div id="circle" class="bgBlack"></div>
            </div>  
        </span>
    `
    document.querySelector('#section1Content').style.height = hexaDivH + 'px'
    document.querySelector('#section1Content').style.width = W + 'px' 

    document.querySelector('#minigame').style.height = hexaDivH * 0.4 + 'px'
    document.querySelector('#minigame').style.width = W * 0.8 + 'px'

    document.querySelector('#section1Content').style.position = 'absolute'
    document.querySelector('#section1Content').style.top = 0 + 'px'

    circleDimensions(document.querySelector('#minigame').style.height.slice(0,-2) , document.querySelector('#minigame').style.width.slice(0,-2))
    section2(W,H)
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

function section2(W,H) {
    // document.querySelector('#whoAmI2').style.position = 'absolute'
    // document.querySelector('#whoAmI2').style.top = document.querySelector('#whoAmI').offsetTop + 'px'
    // console.log(document.querySelector('#whoAmI').offsetTop);

    for (const whoAmI of document.querySelectorAll('#whoAmI')) {
        whoAmI.style.paddingRight = W * 0.1 + 'px'   
    }
}