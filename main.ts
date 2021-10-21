function Keep_Time () {
    Minutes += 1
    if (Minutes >= 60) {
        Minutes = 0
        Hours += 1
    }
    if (Hours > 12) {
        if (Pm == false) {
            Pm = true
            Hours = 1
        } else {
            Pm = false
            Hours = 1
        }
    }
    Add_Oclock()
}
input.onButtonPressed(Button.A, function () {
    if (Change_time == false) {
        basic.showString(Time)
    } else {
        Set_Hours()
        basic.showString("" + (Hours))
    }
})
function Set_Hours () {
    Hours += 1
    if (Hours > 12) {
        if (Pm == false) {
            Pm = true
            Hours = 1
        } else {
            Pm = false
            Hours = 1
        }
    }
    Add_Oclock()
}
input.onButtonPressed(Button.AB, function () {
    if (Change_time == false) {
        Change_time = true
    } else {
        Change_time = false
    }
})
function Add_Oclock () {
    if (Minutes < 10) {
        if (Pm == false) {
            Time = "" + Hours + ":" + "0" + Minutes + "AM"
        } else {
            Time = "" + Hours + ":" + "0" + Minutes + "PM"
        }
    } else {
        if (Pm == false) {
            Time = "" + Hours + ":" + Minutes + "AM"
        } else {
            Time = "" + Hours + ":" + Minutes + "PM"
        }
    }
}
input.onButtonPressed(Button.B, function () {
    if (Change_time == false) {
        basic.showString(Time)
    } else {
        Set_Minutes()
        basic.showString("" + (Minutes))
    }
})
function Set_Minutes () {
    Minutes += 1
    if (Minutes >= 60) {
        Minutes = 0
    }
    Add_Oclock()
}
let Time = ""
let Change_time = false
let Pm = false
let Minutes = 0
let Hours = 0
Hours = 12
Minutes = 0
Pm = false
Change_time = false
let Temperature_Check = true
loops.everyInterval(60000, function () {
    if (Change_time == false) {
        Keep_Time()
    }
})
basic.forever(function () {
	
})
