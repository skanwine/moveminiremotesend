input.onGesture(Gesture.TiltLeft, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    radio.sendString("L")
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.clearScreen()
    radio.sendString("E")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("AB")
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
input.onGesture(Gesture.TiltRight, function () {
    basic.showLeds(`
        . . # . .
        . . . # .
        # # # # #
        . . . # .
        . . # . .
        `)
    radio.sendString("R")
})
basic.showIcon(IconNames.Heart)
radio.setGroup(18)
basic.forever(function () {
	
})
