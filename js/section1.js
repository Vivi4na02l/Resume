backgroundHexa()
window.addEventListener("resize", backgroundHexa)

/**
 * Creates the background with hexagons
 */
function backgroundHexa() {
    let W = window.innerWidth
    let H = window.innerHeight

    document.querySelector('#s1Bg').style.height = H + 'px'

    let details = hexaOnScreen(W,H)

    let html = ''

    for (let i = 0; i < Math.floor(details.hexaY); i++) {
        if (i == 0) {
            html += `
                <div id="firstRow" class="hideOutside iflex">
            `
        } else if (i % 2 != 0) {
            html += `
                <div id="oddRow" class="hideOutside iflex">
            `
        } else {
            html += `
                <div id="evenRow" class="hideOutside iflex">
            `
        }
        
        for (let j = 0; j < details.hexaX; j++) {
            html += `
                <div id="hexagon" class="hideOutside mx2 hexagon"></div>
            `
        }

        html += `</div>`
    }

    document.querySelector('#s1Bg').innerHTML = html
    hexasSize(W,H,details)
    hexasPositions(W,H,details)
    s1Content(W,H)
}

/**
 * With both the width and height from the screen, the function will determine which device is being used
 * @param {*} W screen's width
 * @param {*} H screen's height
 * @returns an object providing the information necessary to know what device is using the website
 */
function hexaOnScreen(W,H) {
    let nbrHexa, hexaSize, nbrRows

    if (W > H*1.9) {
        //if it enters this "if" then the device is most likely a pc

        nbrHexa = 20
        hexaSize = W / nbrHexa
        nbrRows = H / (hexaSize*0.75) + 2

        return {device: 'pc', hexaX: nbrHexa, hexaY: nbrRows};

    } else {
        //if the dimensions are within this "if" then it's most likely a non-pc device

        if (H >= (W*2)*0.8) {
            //if it enters this then the device is then most likely a phone

            nbrHexa = 8
            hexaSize = W / nbrHexa
            nbrRows = H / (hexaSize*0.75) + 2

            return {device: 'non-pc', hexaX: nbrHexa, hexaY: nbrRows};
        } else {
            //if it enters this then the device is then most likely a tablet

            nbrHexa = 10
            hexaSize = W / nbrHexa
            nbrRows = H / (hexaSize*0.75) + 2

            return {device: 'non-pc', hexaX: nbrHexa, hexaY: nbrRows};
        }
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
}

function hexasPositions(W,H,details) {
    let hexaSize = W / details.hexaX

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

function s1Content(W,H) {
    document.querySelector('#s1Content').style.height = H + 'px'
    document.querySelector('#s1Content').style.position = 'absolute'
    document.querySelector('#s1Content').style.top = 0 + 'px'
    document.querySelector('#s1Content').style.left = 0 + 'px'
}