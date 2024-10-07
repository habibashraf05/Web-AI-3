function getperc() {
    let name = prompt("Enter your name")
    let obtmarks = document.getElementById("obt1"). value ;
    let tmmarks = document.getElementById("tm1"). value ;

    res = obtmarks /tmmarks * 100
    alert("dear"+name + "you have got it" + res + "%")
    document.write("dear"+name + "you have got it" + res + "%")
    console.log("dear"+name + "you have got it" + res + "%")
    
}
