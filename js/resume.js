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
    // document.querySelector('#section2Title').style.marginTop = H * 0.03 + 'px'
    // document.querySelector('#section2Title').style.marginBottom = H * 0.1 + 'px'
    
    for (const whoAmI of document.querySelectorAll('#whoAmI')) {
        whoAmI.style.paddingRight = W * 0.1 + 'px'   
    }

    if (W > H*1.9) {
        document.querySelector('#section2Content').className = 'dflex fdr jcc aic'
        document.querySelector('#section2Content').style.marginLeft = W*0.1+'px'
        document.querySelector('#section2Content').style.marginRight = W*0.1+'px'

        document.querySelector('#imageOfMe').className = 'w100'
        
        document.querySelector('#nonPcHr').innerHTML = ''
        document.querySelector('#pcHr').innerHTML = `
            <hr id="hr" class="w100 hrHue">

            <span class="dflex jcsb">
                <image id="svg" class="svgExperiences" src="assets/images/experiences.svg">
                <image id="svg" class="svgAboutMe" src="assets/images/aboutme.svg">
                <image id="svg" class="svgCoding" src="assets/images/coding.svg">
            </span>
        `
        
        document.querySelector('#pcHr').style.marginTop = H * 0.1 + 'px'
        document.querySelector('#pcHr').style.marginBottom = H * 0.1 + 'px'
        document.querySelector('#pcHr').style.position = 'relative'
        document.querySelector('#pcHr').style.left = document.querySelector('#section2Content').offsetLeft + 'px'
    } else {
        document.querySelector('#section2Content').className = 'dflex fdc jcc aic'
        
        document.querySelector('#imageOfMe').className = 'w70'

        document.querySelector('#pcHr').innerHTML = ''
        document.querySelector('#nonPcHr').innerHTML = `
            <hr id="hr" class="hrHue">

            <span class="dflex jcsb">
                <image id="svg" class="svgExperiences" src="assets/images/experiences.svg">
                <image id="svg" class="svgAboutMe" src="assets/images/aboutme.svg">
                <image id="svg" class="svgCoding" src="assets/images/coding.svg">
            </span>
        `
        
        document.querySelector('#nonPcHr').style.marginTop = H * 0.05 + 'px'
        document.querySelector('#nonPcHr').style.marginBottom = H * 0.1 + 'px'
    }

    for (const svg of document.querySelectorAll('#svg')) {
        svg.style.height = H * 0.05 + 'px'
    }

    document.querySelector('.svgExperiences').addEventListener('click', () => {
        document.querySelector('#information').innerHTML = `
            <span class="pWhite">
                <span id="helloWorld">
                    <p class="txtHue p20px my2 p0">&ltp></p>
                    <p class="pCenter p20px my2 p0">Hello World, these are my experiences.</p>
                    <p class="txtHue p20px my2 p0">&lt/p></p>
                </span>
                <span id="pUniversity" class="pCenter p20px">
                    <p>I'm an almost graduated student in 
                        <a href="https://www.esmad.ipp.pt/cursos/licenciatura/663">
                            <i class="txtHue p20px">TSIW at ESMAD's faculty</i>
                        </a>
                        and since I've been a student for about 11 years straight, I haven't experienced any extent amount of opportunities yet.
                    </p>
                    <p>
                        However, I was an
                        <span class="txtHue">Erasmus student</span>
                        for a full semester in Barcelona, Spain.
                        In addition to strengthening my connections
                        with people around the world, this experience
                        also opened up my mind to the point that I
                        am willing to cross seas if that's what it
                        takes to find my future settling passion.
                    </p>
                </span>
            </span>
        `
    })

    document.querySelector('.svgAboutMe').addEventListener('click', () => {
        document.querySelector('#information').innerHTML = `
            <span class="pWhite">
                <span id="helloWorld">
                    <p class="txtHue p20px my2 p0">&ltp></p>
                    <p class="pCenter p20px my2 p0">Hello World, my name is Viviana and I'm 20y old.</p>
                    <p class="txtHue p20px my2 p0">&lt/p></p>
                </span>
                <span id="pUniversity" class="pCenter p20px">
                    <p>
                        I was born and raised in
                        <span class="txtHue">Portugal</span>, where I currently reside. I am very sociable
                        and am known for being approachable and open, which enhances my teamwork skills.
                        My current hobbies include
                        <span class="txtHue">listening to music</span>
                        whenever I can, <span class="txtHue">skating</span>, and,
                        surprisingly enough, <span class="txtHue">coding</span>.
                    </p>
                </span>
            </span>
        `
    })

    document.querySelector('.svgCoding').addEventListener('click', () => {
        document.querySelector('#information').innerHTML = `
            <span class="pWhite">
                <span id="helloWorld">
                    <p class="txtHue p20px my2 p0">&ltp></p>
                    <p class="pCenter p20px my2 p0">Hello World, this is my relationship with coding.</p>
                    <p class="txtHue p20px my2 p0">&lt/p></p>
                </span>
                <span id="pUniversity" class="pCenter p20px">
                    <p>
                        My passion for coding was quickly discovered as soon as I started college, and
                        it has only grown stronger since then. I consider myself enthusiastic about
                        <span class="txtHue">front-end </span>
                        development and the logic that goes along with it. Since I have grown
                        up surrounded by video games, my mind is filled with the numerous possibilities
                        that the gaming industry offers for game developers. Despite my strong affinity
                        for
                        <span class="txtHue">game development</span>, my love for
                        <span class="txtHue">web development</span> is also significant, and I
                        aspire to excel in both areas.
                    </p>
                </span>
            </span>
        `
    })

    // let img = document.querySelector('#imageOfMe')
    // let imgFrame = document.querySelector('#imageFrame')
    // imgFrame.style.width = img.clientHeight + 'px'
    // imgFrame.style.height = img.clientHeight + 'px'

    // imgFrame.style.position = "absolute"
    // imgFrame.style.top = img.style.top + 'px'
}