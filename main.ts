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
input.onGesture(Gesture.FreeFall, function () {
    Turn_alarm_off()
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
function Turn_alarm_off () {
    while (Is_alarm_playing == true) {
        if (_1st == false) {
            _1st = true
        } else {
            if (_2nd == false) {
                _2nd = true
            } else {
                if (_3rd == false) {
                    _3rd = true
                }
            }
        }
    }
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
input.onGesture(Gesture.Shake, function () {
    Turn_alarm_off()
})
function Set_Minutes () {
    Minutes += 1
    if (Minutes >= 60) {
        Minutes = 0
    }
    Add_Oclock()
}
let _3rd = false
let _2nd = false
let _1st = false
let Time = ""
let Is_alarm_playing = false
let Change_time = false
let Pm = false
let Minutes = 0
let Hours = 0
Hours = 12
Minutes = 0
Pm = false
Change_time = false
let Temperature_Check = true
Is_alarm_playing = false
loops.everyInterval(60000, function () {
    if (Change_time == false) {
        Keep_Time()
    }
})
basic.forever(function () {
	
})
