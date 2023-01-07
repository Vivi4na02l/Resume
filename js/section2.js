section2()
window.addEventListener("resize", section2)

function section2() {
    let W = window.innerWidth
    let H = window.innerHeight

    let section2 = document.querySelector('#section2')
    section2.style.height = H + 'px'

    section2.style.position = 'absolute'
    section2.style.top = '0px'
    section2.style.left = '0px'

    
}