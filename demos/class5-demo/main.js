// array denoted with square braces
let colorArray = ["#ddd8b8", "#B3CBB9", "#84A9C0", "#6A66A3", "#542E71"]

window.onload = () => {

    for(let i = 0; i < 50; i++){
        console.log(i)

        // create element in js for html
        let span = document.createElement('span')
        let spanText = document.createTextNode('this is element ' + i + ' ')

        // add the text to the span itself
        // chaining the structure together
        span.appendChild(spanText)

        // add classname before appending to the body
        span.classList.add('text-body')

        // set span background to rand color
        span.style.backgroundColor = randomColor(colorArray)

        // adding the span to the body of the document
        // last thing to do until the page is run
        document.body.appendChild(span)
    }

    // setInterval takes 2 parameters:
    // 1. function that will execute every specified number of ms
    // 2. number of ms
    setInterval(modifySpanBackground, 1000)
}

// helper function to be called every interval
function modifySpanBackground(){
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
    const date = new Date()

    // this gets all the elements with the class name text-body
    let allSpans = document.getElementsByClassName('text-body')
    // console.log(allSpans)

    for(let i = 0; i < allSpans.length; i++){
        // allSpans[i].textContent = date.toUTCString()
        allSpans[i].textContent = date.toLocaleTimeString()
    }
}

// helper to get a random color
function randomColor(arr){
    // Math.random() returns a decimal value between 0 - 1
    // array index cannot be a decimal
    // rounding down = floor
    // Math.floor()
    // formula to calculate the number max value
    // Math.random() * arr.length
    let index = Math.floor(Math.random()*arr.length)
    return arr[index]
}