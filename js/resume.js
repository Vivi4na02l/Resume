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

    let experiences = `<defs><style>.stroke{stroke-linecap:round;stroke-linejoin:round;stroke-width:7px;}</style></defs><title>experiences</title><path class="stroke" d="M411.58,112.77V300.05A11.93,11.93,0,0,1,399.65,312H26.44A11.94,11.94,0,0,1,14.5,300.05V114.18"/><path class="stroke" d="M176.31,33.07V30.4a24,24,0,0,1,24-24h24a24,24,0,0,1,24,24v2.67"/><path class="stroke" d="M7,106.92a5.62,5.62,0,0,0,3.11,5l199,99.84a5.61,5.61,0,0,0,5,0L413.2,112a5.64,5.64,0,0,0,3.11-5V38.71a5.64,5.64,0,0,0-5.64-5.64h-398A5.63,5.63,0,0,0,7,38.71v68.21"/>`
    let experiencesFilled = `<defs><style>.stroke{stroke-linecap:round;stroke-linejoin:round;stroke-width:4px;}.fill</style></defs><title>experiences_filled</title><path class="stroke" d="M173,36.91V34.24a24,24,0,0,1,24-24h24a24,24,0,0,1,24,24v2.67"/><path class="fill" d="M413,42.55v68.21a5.64,5.64,0,0,1-3.11,5l-199,99.84a5.63,5.63,0,0,1-5.06,0L6.81,115.8a5.62,5.62,0,0,1-3.11-5V42.55a5.63,5.63,0,0,1,5.64-5.64h398A5.65,5.65,0,0,1,413,42.55Z"/><path class="fill" d="M408.3,121.75V303.89a11.93,11.93,0,0,1-11.93,11.93H23.16a11.94,11.94,0,0,1-11.94-11.93V123.15l194.61,97.62a5.63,5.63,0,0,0,5.06,0Z"/>`

    let aboutMe = `<defs><style>.stroke{stroke-linecap:round;stroke-linejoin:round;stroke-width:7px;}</style></defs><title>aboutme</title><path class="stroke" d="M155.58,92.94a73,73,0,0,1,.38,7.44c0,31.39-19.89,56.84-44.43,56.84s-44.42-25.45-44.42-56.84a74.27,74.27,0,0,1,.49-8.51"/><path class="stroke" d="M67.6,91.87a57.45,57.45,0,0,0,12.66,1.39c17.5,0,32.36-7.66,37.7-18.31"/><path class="stroke" d="M155.58,92.7a37.59,37.59,0,0,1-6.5.56c-13.93,0-25.89-7.53-31.12-18.31"/><path class="stroke" d="M120.94,156V175a9.4,9.4,0,0,0,7.68,9.23L192.09,196c15.44,2.82,26.79,17.72,26.79,35.21V312H4.9V231.17c0-17.49,11.34-32.39,26.78-35.21l62.78-11.72a9.39,9.39,0,0,0,7.67-9.23V156"/><path class="stroke" d="M22.91,199.06a72.28,72.28,0,0,1,5.18-10.45c14.85-25.68,0-22.31,0-22.31s-16,.42,0-16.42,0-21.64,0-21.64-14.07-4.12,0-19.61,0-20.63,0-20.63-14.07-9.68,0-20.63,0-23.57,0-23.57c-6.2-6,4.22-17.69,28.21-33.26h0s13.42-10.28,29.87,0c17.36,10.84,38.51,0,38.51,0s14.93-6.75,24,0,25.15,0,25.15,0S191.26,6.34,197.27,27s0,19.37,0,19.37-8,13.89,0,17.26,0,17.67,0,17.67-9.54,15.16,0,16,0,14.31,0,14.31-7.58,13.55,0,16.67,0,17.85,0,17.85-8,19.78,0,19.78,0,15.58,0,15.58-5.71,8.48-.17,12.36c.55.38,1.09,2.17,1.55,4.17"/>`
    let aboutMeFilled = `<defs><style>.fill</style></defs><title>aboutme_filled</title><path class="fill" d="M155.92,97.21a73,73,0,0,1,.38,7.45c0,31.39-19.89,56.83-44.43,56.83s-44.42-25.44-44.42-56.83a74.44,74.44,0,0,1,.49-8.52,56.84,56.84,0,0,0,12.66,1.4A53.16,53.16,0,0,0,104,92.37c6.57-3.24,11.62-7.82,14.29-13.15,5.23,10.78,17.19,18.32,31.12,18.32a39.32,39.32,0,0,0,6.47-.55Z"/><path class="fill" d="M219.22,235.44v80.81H5.24V235.44C5.24,218,16.58,203.05,32,200.23l62.79-11.72a9.39,9.39,0,0,0,7.66-9.23V162.83a37.76,37.76,0,0,0,18.81,0v16.44A9.4,9.4,0,0,0,129,188.5l63.47,11.73C207.87,203.05,219.22,218,219.22,235.44Z"/><path class="fill" d="M197.61,103.09c9.54.86,0,14.56,0,14.56s-7.58,13.78,0,16.95,0,18.16,0,18.16-8,20.12,0,20.12,0,15.84,0,15.84-3.61,5.46-2.3,9.68c-.51-.12-1-.24-1.56-.34L131,186.13a9.48,9.48,0,0,1-7.59-9.39V162.2c20.27-6.49,35.27-29.65,35.27-57.22,0-1.11-.08-3-.2-4.92s-.28-4-.41-5.56a67,67,0,0,1-8.69.84c-13.93,0-25.89-10.32-31.12-21.1C113,84.89,98.1,95.34,80.6,95.34a69,69,0,0,1-7.6-.51c-2.66-.32-5.26-.74-7.25-1.19C65.42,96.78,65,102.25,65,105a69,69,0,0,0,10,36.38c6.23,10,15,17.45,25,20.75v14.64a9.47,9.47,0,0,1-7.53,9.39L30.77,198.06a27.86,27.86,0,0,0-4.08,1.1c.53-1,1.11-2,1.74-3.16,14.85-26.12,0-22.69,0-22.69s-16,.43,0-16.7,0-22,0-22-14.07-4.19,0-19.95,0-21,0-21-14.07-9.84,0-21,0-24,0-24a5.55,5.55,0,0,1-1.75-4.1c0-6.68,10.52-16.9,30-29.73,0,0,13.42-10.45,29.87,0,17.36,11,38.51,0,38.51,0S140,8,149,14.89s25.15,0,25.15,0,17.46-4.28,23.47,16.7,0,19.7,0,19.7-8,14.13,0,17.55,0,18,0,18S188.07,102.24,197.61,103.09Z"/>`
    
    let coding = `<defs><style>.stroke{fill:none;stroke:#1d1d1b;stroke-linecap:round;stroke-linejoin:round;stroke-width:7px;}</style></defs><title>coding</title><path class="stroke" d="M130.24,285.9,64.57,222.44,9.44,169.16a14.15,14.15,0,0,1,0-20.36L64.57,95.51l65.67-63.46"/><path class="stroke" d="M276.57,285.9l65.67-63.46,55.13-53.28a14.15,14.15,0,0,0,0-20.36L342.24,95.51,276.57,32.05"/><line class="stroke" x1="239.87" y1="5.97" x2="166.94" y2="311.98"/>`

    if (W > H*1.9) {
        document.querySelector('#section2Content').className = 'dflex fdr jcc aic'
        document.querySelector('#section2Content').style.marginLeft = W*0.1+'px'
        document.querySelector('#section2Content').style.marginRight = W*0.1+'px'

        document.querySelector('#imageOfMe').className = 'w100'
        
        document.querySelector('#nonPcHr').innerHTML = ''
        document.querySelector('#pcHr').innerHTML = `
            <hr id="hr" class="w100 hrHue">

            <span id="svgDiv" class="w100 dflex jcsb">
                <svg class="svg notfilled experiences" id="experiences" data-name="experiences" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.1 321.71">
                    ${experiences}
                </svg>
                <svg class="svg notfilled aboutMe" id="aboutMe" data-name="aboutMe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.29 317.76">
                    ${aboutMe}
                </svg>
                <svg class="svg notfilled coding" id="coding" data-name="coding" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.9 317.76">
                    ${coding}
                </svg>
            </span>

            <span id="svgFilledDiv" class="w100 dflex jcsb">
                <svg class="svg filled experiences" id="experiencesFilled" data-name="experiencesFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.1 321.71">
                    ${experiencesFilled}
                </svg>
                <svg class="svg filled aboutMe" id="aboutMeFilled" data-name="aboutMeFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.29 317.76">
                    ${aboutMeFilled}
                </svg>
                <svg class="svg filled coding" id="codingFilled" data-name="codingFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.9 317.76">
                    ${coding}
                </svg>
            </span>
        `
        
        document.querySelector('#experiences').style.visibility = 'hidden'
        document.querySelector('#experiencesFilled').style.visibility = 'visible'

        document.querySelector('#pcHr').style.marginTop = H * 0.1 + 'px'
        document.querySelector('#pcHr').style.marginBottom = H * 0.1 + 'px'
        document.querySelector('#pcHr').style.position = 'relative'
        document.querySelector('#pcHr').style.left = document.querySelector('#section2Content').offsetLeft + 'px'
    } else {
        document.querySelector('#section2Content').className = 'dflex fdc jcc aic'
        
        document.querySelector('#imageOfMe').className = 'w70'

        document.querySelector('#pcHr').innerHTML = ''
        document.querySelector('#nonPcHr').innerHTML = `
            <hr id="hr" class="w100 hrHue">

            <span id="svgDiv" class="w100 dflex jcsb">
                <svg class="svg notfilled experiences" id="experiences" data-name="experiences" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.1 321.71">
                    ${experiences}
                </svg>
                <svg class="svg notfilled aboutMe" id="aboutMe" data-name="aboutMe" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.29 317.76">
                    ${aboutMe}
                </svg>
                <svg class="svg notfilled coding" id="coding" data-name="coding" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.9 317.76">
                    ${coding}
                </svg>
            </span>

            <span id="svgFilledDiv" class="w100 dflex jcsb">
                <svg class="svg filled experiences" id="experiencesFilled" data-name="experiencesFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 415.1 321.71">
                    ${experiencesFilled}
                </svg>
                <svg class="svg filled aboutMe" id="aboutMeFilled" data-name="aboutMeFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 224.29 317.76">
                    ${aboutMeFilled}
                </svg>
                <svg class="svg filled coding" id="codingFilled" data-name="codingFilled" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 407.9 317.76">
                    ${coding}
                </svg>
            </span>
        `
        
        document.querySelector('#experiences').style.visibility = 'hidden'
        document.querySelector('#experiencesFilled').style.visibility = 'visible'

        
        document.querySelector('#nonPcHr').style.marginTop = H * 0.05 + 'px'
        document.querySelector('#nonPcHr').style.marginBottom = H * 0.1 + 'px'
        document.querySelector('#nonPcHr').style.position = 'relative'
        document.querySelector('#nonPcHr').style.left = document.querySelector('#section2Content').offsetLeft + 'px'
    }

    document.querySelector('#experiences').addEventListener('click', () => {
        document.querySelector('#aboutMe').style.visibility = 'visible'
        document.querySelector('#aboutMeFilled').style.visibility = 'hidden'

        document.querySelector('#experiences').style.visibility = 'hidden'
        document.querySelector('#experiencesFilled').style.visibility = 'visible'

        document.querySelector('#coding').style.visibility = 'visible'
        document.querySelector('#codingFilled').style.visibility = 'hidden'

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

        for (const svg of document.querySelectorAll('.svg')) {
            svg.style.height = H * 0.05 + 'px'
        }
    })


    document.querySelector('#aboutMe').addEventListener('click', (e) => {
        document.querySelector('#aboutMe').style.visibility = 'hidden'
        document.querySelector('#aboutMeFilled').style.visibility = 'visible'

        document.querySelector('#experiences').style.visibility = 'visible'
        document.querySelector('#experiencesFilled').style.visibility = 'hidden'

        document.querySelector('#coding').style.visibility = 'visible'
        document.querySelector('#codingFilled').style.visibility = 'hidden'

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
                        whenever I can, <span class="txtHue">skating</span>, 
                        <span class="txtHue">travelling around the world</span> and,
                        surprisingly enough, <span class="txtHue">coding</span>.
                    </p>
                    <p>
                        I'm fluent in 
                        <span class="txtHue">portuguese</span>,
                        <span class="txtHue">spanish</span> and
                        <span class="txtHue">english</span>.
                    </p>
                </span>
            </span>
        `

        for (const svg of document.querySelectorAll('.svg')) {
            svg.style.height = H * 0.05 + 'px'
        }
    })

    document.querySelector('.coding').addEventListener('click', () => {
        document.querySelector('#aboutMe').style.visibility = 'visible'
        document.querySelector('#aboutMeFilled').style.visibility = 'hidden'

        document.querySelector('#experiences').style.visibility = 'visible'
        document.querySelector('#experiencesFilled').style.visibility = 'hidden'

        document.querySelector('#coding').style.visibility = 'hidden'
        document.querySelector('#codingFilled').style.visibility = 'visible'

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
                        it has only grown stronger since then.
                    </p>
                    <p>
                        I consider myself enthusiastic about
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

        for (const svg of document.querySelectorAll('.svg')) {
            svg.style.height = H * 0.05 + 'px'
        }
    })

    for (const svg of document.querySelectorAll('.svg')) {
        svg.style.height = H * 0.05 + 'px'
    }

    
    document.querySelector('#svgFilledDiv').style.position = 'absolute'
    document.querySelector('#svgFilledDiv').style.top = document.querySelector('#svgDiv').offsetTop + 'px'
    // document.querySelector('#svgFilledDiv').style.left = document.querySelector('#svgDiv').offsetLeft + 'px'
}