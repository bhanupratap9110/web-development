document.getElementById("redbox").addEventListener("mouseover", fillRedColor)
document.getElementById("redbox").addEventListener("mouseout", fillRedColor)

document.getElementById("greenbox").addEventListener("mouseover", fillgreenColor)
document.getElementById("greenbox").addEventListener("mouseout", fillgreenColor)


document.getElementById("bluebox").addEventListener("mouseover", fillblueColor)
document.getElementById("bluebox").addEventListener("mouseout", fillblueColor)

function fillRedColor(){
    document.getElementById("bulb1").style.background = "red";
}

function fillgreenColor(){
    document.getElementById("bulb1").style.background = "green";
}

function fillblueColor(){
    document.getElementById("bulb1").style.background = "blue";
}

function fillBaseColor(){
    document.getElementById("bulb1").style.backgroundColor = "blue";
}
