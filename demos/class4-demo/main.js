window.onload = () => {
    console.log('page has loaded')
    // alert('page has loaded!')

    let myPara = document.getElementById('important-paragraph')
    console.log(myPara)
    myPara.innerHTML = 'waow i changed this with javascript'
    myPara.style.color = 'blue'
    myPara.style.backgroundColor = 'lightgreen'
}