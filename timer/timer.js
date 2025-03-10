let intervalID;


function getTime() {
    let hour = Number(document.getElementById("hours").value);
    let minute = Number(document.getElementById("minutes").value);
    let second = Number(document.getElementById("seconds").value);

    hour = hour * 60 * 60;
    minute = minute * 60;
    let totalTime = hour + minute + second;

    if (intervalID) clearInterval(intervalID);
    console.log(totalTime) 

    function countdown() {
        if(totalTime <= 0) {
            clearInterval(intervalID);
            intervalID = null;
        }

        totalTime --;

        let newHour = Math.floor(totalTime/3600);
        let newMinute = Math.floor((totalTime % 3600) / 60);
        let newSecond = totalTime % 60;
        document.querySelector(".time-p").innerHTML = `${newHour}:${newMinute}:${newSecond}`;
        console.log(`Time Left: ${newHour}:${newMinute}:${newSecond}`);
    }

    intervalID = setInterval(countdown, 1000);

}

document.getElementById("button").addEventListener("click", pauseButtonToggle);
document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      pauseButtonToggle();
    }
});


function pauseButtonToggle() {
    let btn = document.getElementById("button")
    let buttonState = document.getElementById("button").innerHTML;
    if(buttonState === "Start") {
        document.getElementById("button").innerHTML = "Pause";
        getTime();
    }
    else {
        document.getElementById("button").innerHTML = "Start";
        clearInterval(intervalID);
    }
}



