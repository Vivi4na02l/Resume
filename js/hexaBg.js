backgroundHexa()
window.addEventListener("resize", backgroundHexa)

/**
 * Creates the background with hexagons
 */
function backgroundHexa() {
    let W = window.innerWidth
    let H = window.innerHeight
    document.querySelector('#section1').innerHTML = ''

    document.querySelector('#section1').style.height = H * 0.5 + 'px'
    document.querySelector('#section1').style.width = W + 'px'

    let details = hexaOnScreen(W,H)
    let html = ''

    for (let i = 0; i < parseInt(details.hexaY)+2; i++) {
        if (i == 0) {
            html += `
                <div id="firstRow" class="iflex">
            `
        } else if (i % 2 != 0) {
            html += `
                <div id="oddRow" class="iflex">
            `
        } else {
            html += `
                <div id="evenRow" class="iflex">
            `
        }
        
        for (let j = 0; j < details.hexaX; j++) {
            html += `
                <div id="hexagon" class="mx2 hexagon"></div>
            `
        }

        html += `</div>`
    }


    document.querySelector('#section1').innerHTML += html

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

            return {device: 'non-pc', hexaX: '11', hexaY: '10'};
        } else {
            //if it enters this then the device is then most likely a tablet

            return {device: 'non-pc', hexaX: '12', hexaY: '9'};
        }

    } else {
        //if it enters this then the device is then most likely a pc

        return {device: 'pc', hexaX: '20', hexaY: '8'};
    }
}

/**
 * Having in mind the device being used, the function determines the width and height of each hexagon
 * @param {*} W screen's width
 * @param {*} H screen's height
 * @param {*} details object providing information on type of device and how many hexagons accordingly produced
 */
function hexasSize(W,H,details) {
    let hexaSize = W / details.hexaX

    for (const hexagon of document.querySelectorAll('#hexagon')) {
        hexagon.style.width = hexaSize + 'px'
        hexagon.style.height = hexaSize + 'px'
    }

    for (const row of document.querySelectorAll('#oddRow')) {
        row.style.marginTop = -(hexaSize*0.25) + 'px'
        row.style.marginLeft = -(hexaSize*0.5)-2 + 'px'
    }

    for (const row of document.querySelectorAll('#evenRow')) {
        row.style.marginTop = -(hexaSize*0.25) + 'px'
    }

    for (const row of document.querySelectorAll('#firstRow')) {
        row.style.marginTop = -(hexaSize*0.75) + 'px'
    }
}