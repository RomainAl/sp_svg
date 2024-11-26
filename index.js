let sp_logo = document.getElementById("sp")
let sp_cout = document.getElementById("sp_cout")
let sp_line = document.getElementById("sp_line")

sp_logo.ontouchmove = (e) => {
    let x = Math.min(Math.max((e.touches[0].clientX-sp_logo.offsetLeft)/sp_logo.offsetWidth,0),1)
    sp_cout.style.transform = `rotate(${180-255*x}deg)`
    sp_cout.style.strokeDashoffset = 400-340*x
    sp_line.style.transform = `rotate(${180-255*x}deg)`
}