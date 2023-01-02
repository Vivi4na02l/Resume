document.querySelector('#cornerDownRight').style.position = 'absolute'
document.querySelector('#cornerDownRight').style.bottom = 0 + 'px'
document.querySelector('#cornerDownRight').style.right = 10 + 'px'

document.querySelector('#cornerUpLeft').style.position = 'absolute'
document.querySelector('#cornerUpLeft').style.top = 0 + 'px'
document.querySelector('#cornerUpLeft').style.left = 10 + 'px'

document.querySelector('.toggle').addEventListener('click', () => {
    document.querySelector('#cornerUpRight').classList.toggle('active')
    document.querySelector('.toggle').classList.toggle('active')

    for (const svgs of document.querySelectorAll("#svgs")) {
        svgs.classList.toggle('active')
    }

    for (const btnPages of document.querySelectorAll('.btnPages')) {
        btnPages.classList.toggle('appear')
    }
})

for (const btnPages of document.querySelectorAll('.btnPages')) {
    btnPages.addEventListener('click', () => {
        btnPages.classList.add('active')

        if (btnPages.id == "experiences") {
            document.querySelector('#aboutMe').classList.remove('active')
            document.querySelector('#coding').classList.remove('active')
        } else if (btnPages.id == "aboutMe") {
            document.querySelector('#experiences').classList.remove('active')
            document.querySelector('#coding').classList.remove('active')
        } else {
            document.querySelector('#aboutMe').classList.remove('active')
            document.querySelector('#experiences').classList.remove('active')
        }
    })
}

menu()
window.addEventListener("resize", menu)
function menu() {
    let W = window.innerWidth
    let H = window.innerHeight
    checkScreenSize()
    document.querySelector('#cornerUpRight').style.position = 'absolute'
    document.querySelector('#cornerUpRight').style.top = 0 + 'px'
    document.querySelector('#cornerUpRight').style.right = 10 + 'px'
}

function checkScreenSize() {
    let W = window.innerWidth
    let H = window.innerHeight

    if (W > H*1.9) {
        //if it enters this "if" then the device is most likely a pc

        document.querySelector('#cornerUpRight').style.width = W * 0.1 + 'px'
        document.querySelector('#cornerUpRight').style.height = W * 0.1 + 'px'

        document.querySelector('#menuBtn').style.width = W * 0.1 * 0.2 + 'px'
        document.querySelector('#menuBtn').style.height = document.querySelector('#menuBtn').style.width

    } else {
        //if the dimensions are within this "if" then it's most likely a non-pc device

        if (H >= (W*2)*0.8) {
            //if it enters this then the device is then most likely a phone
        
            document.querySelector('#cornerUpRight').style.width = W * 0.4 + 'px'
            document.querySelector('#cornerUpRight').style.height = W * 0.4 + 'px'

            document.querySelector('#menuBtn').style.width = W * 0.4 * 0.2 + 'px'
            document.querySelector('#menuBtn').style.height = document.querySelector('#menuBtn').style.width
        } else {
            //if it enters this then the device is then most likely a tablet

            document.querySelector('#cornerUpRight').style.width = W * 0.3 + 'px'
            document.querySelector('#cornerUpRight').style.height = W * 0.3 + 'px'

            document.querySelector('#menuBtn').style.width = W * 0.3 * 0.15 + 'px'
            document.querySelector('#menuBtn').style.height = document.querySelector('#menuBtn').style.width
        }
    }

    document.querySelector('#divBtnPages').style.height = document.querySelector('#cornerUpRight').style.height

    for (const btnPages of document.querySelectorAll('.btnPages')) {
        btnPages.style.width = document.querySelector('#menuBtn').style.width.slice(0, -2) * 0.8 + 'px'
        btnPages.style.height = document.querySelector('.btnPages').style.width
    }

    document.querySelector('#aboutMe').style.marginRight = document.querySelector('#aboutMe').style.width
}