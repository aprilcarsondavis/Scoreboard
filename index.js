let homeCount = 0
let guestCount = 0
let hmSum = document.getElementById("home-score")
let gstSum = document.getElementById("guest-score")

function hm1(){
    homeCount += 1
    hmSum.textContent = homeCount 
}
function hm2(){
    homeCount += 2
    hmSum.textContent = homeCount
}
function hm3(){
    homeCount += 3
    hmSum.textContent = homeCount
}
function hmClear(){
    homeCount = 0
    hmSum.textContent = homeCount
}
function gst1(){
    guestCount += 1
    gstSum.textContent = guestCount
}
function gst2(){
    guestCount += 2
    gstSum.textContent = guestCount
}
function gst3(){
    guestCount += 3
    gstSum.textContent = guestCount
}
function gstClear(){
    guestCount = 0
    gstSum.textContent = guestCount
}