#!/usr/bin/env node
import { differenceInSeconds } from "date-fns";
//function for count down second
function* countdownTimer(second) {
    while (second > 0) {
        yield second;
        second--;
    }
}
//counter inilization
let timerIterator = countdownTimer(25);
//fumction to create a count down timer
function displayCountdown() {
    //value below 10
    let result = timerIterator.next();
    if (!result.done) {
        //current date and time call
        const now = new Date();
        //calculate minutes in time
        const countdownTimer = new Date(now.getTime() + (result.value * 1000));
        //calculate remaining second in time
        const remainingSeconds = differenceInSeconds(countdownTimer, now);
        console.log(`Remaining Seconds: ${remainingSeconds}`);
        setTimeout(displayCountdown, 1000); // 1 second is equal to 1000 ms
    }
    else {
        //display result count down complete
        console.log("Countdown Complete!");
    }
}
//invoke
displayCountdown();
