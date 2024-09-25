let angle = 0

window.onload = () =>{
    const rotateDiv = document.getElementById("rotate")

    setInterval( ()=>{
        angle += 1
        // let rotateString = "rotate("+angle+")deg"
        // funky syntax for strings that have variables in them
        let rotateString = `rotate(${angle}deg)`
        rotateDiv.style.transform = rotateString
    }, 10)
}