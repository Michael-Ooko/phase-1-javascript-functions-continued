// lab-1
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}


// Lab-2
function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;

}

// lab-3
function wrapAdjective(string="*") {
    return function(parameter="special") {
        return `You are ${string}${parameter}${string}!`
    }
}
