backgroundHexa()
window.addEventListener("resize", backgroundHexa)

/**
 * Creates the background with hexagons
 */
function backgroundHexa() {
    let W = window.innerWidth
    let H = window.innerHeight
    document.querySelector('#background').innerHTML = ''

    document.querySelector('#background').style.height = H * 0.2 + 'px'
    document.querySelector('#background').style.width = W + 'px'

    let details = hexaOnScreen(W,H)
    let html = ''

    for (let i = 0; i < details.hexaY; i++) {
        if (i == 0) {
            html += `
                <div class="iflex">
            `
        } else {
            html += `
                <div class="my-13 iflex">
            `
        }
        

        if (i%2 == 0) {
            for (let j = 0; j < details.hexaX; j++) {
                html += `
                    <div id="hexagon" class="mx2 hexagon"></div>
                `
            } 
        } else {
            for (let j = 0; j < details.hexaX; j++) {
                if (j == 0) {
                    html += `
                        <div id="halfHexa" class="mr2 halfHexa"></div>
                    ` 
                } else {
                    html += `
                        <div id="hexagon" class="mx2 hexagon"></div>
                    ` 
                }
                
            }
        }

        html += `</div>`
    }


    document.querySelector('#background').innerHTML += html

    hexasSize(W,H,details)
}

/**
 * With both the width and height from the screen, the function will determine which device is being used
 * @param {*} W screen's width
 * @param {*} H screen's height
 * @returns an object providing the information necessary to know what device is using the website
 */
function hexaOnScreen(W,H) {
    if (H > W) {
        //if the dimensions are within this if then it's most likely a non-pc device

        if (H >= (W*2)*0.8) {
            //if it enters this then the device is then most likely a phone

            return {device: 'non-pc', hexaX: '7', hexaY: '4'};
        } else {
            //if it enters this then the device is then most likely a tablet

            return {device: 'non-pc', hexaX: '10', hexaY: '4'};
        }

    } else {
        //if it enters this then the device is then most likely a pc

        return {device: 'pc', hexaX: '15', hexaY: '3'};
    }
}

/**
 * Having in mind the device being used, the function determines the width and height of each hexagon
 * @param {*} W screen's width
 * @param {*} H screen's height
 * @param {*} details object providing information on type of device and how many hexagons accordingly produced
 */
function hexasSize(W,H,details) {
    for (const hexagon of document.querySelectorAll('#hexagon')) {
        hexagon.style.width = W / details.hexaX + 'px'
        hexagon.style.height = hexagon.style.width
    }

    for (const hexagon of document.querySelectorAll('#halfHexa')) {
        hexagon.style.width = (W / details.hexaX)/2 + 'px'
        hexagon.style.height = hexagon.style.width.slice(0,-2) * 2 + 'px'
    }
}