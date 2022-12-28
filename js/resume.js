firstSectionSize()
window.addEventListener("resize", firstSectionSize)

function firstSectionSize() {
    let W = window.innerWidth
    let H = window.innerHeight

    document.querySelector('#firstSection').style.height = H * 0.2 + 'px'
    document.querySelector('#minigame').style.height = (H * 0.2) * 0.8 + 'px'

    // let divW = divCanvas.style.width
    // let widthSize = divW.split('')

    // divW = divW.slice(0, (widthSize.length-2))

    // // alert(Math.floor(window.innerWidth/divW))
    // let multiply = Math.floor(window.innerWidth/divW)

    // divCanvas.style.width = divW * (multiply/2) + 'px'
    // divCanvas.style.height = divCanvas.style.width/2

    triangleDimensions(document.querySelector('#minigame').style.height.slice(0,-2))
}

function triangleDimensions(divH) {
    const triangle = document.querySelector('#triangle')
    const border = divH * 0.25

    triangle.style.width = '0px'
    triangle.style.height = '0px'

    triangle.style.borderLeft = `${border}px solid transparent`
    triangle.style.borderRight = `${border}px solid transparent`

    triangle.style.borderBottom = `${border*2 - border*0.1}px solid black`

    triangle.style.position = 'relative'
    triangle.style.top = divH + 'px'
}

// height: 0px;   
//     border-left: 30px solid transparent;
//     border-right: 30px solid transparent;

//     border-bottom: 50px solid black;