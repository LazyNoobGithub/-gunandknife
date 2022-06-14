input.onButtonPressed(Button.A, function () {
    if (sh == 0) {
        a = 1
        basic.showLeds(`
            . . . . .
            . . # # #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        a = 0
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # # #
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # #
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            # # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . . # .
            . # # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . . . # #
            . . # # .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    shaken = 0
    sh = 0
})
input.onButtonPressed(Button.B, function () {
    if (sh == 0) {
        b = 1
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . . .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . . .
            . . . . #
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . . .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # # .
            . # . # .
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . # # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . # .
            . . . # .
            `)
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
        b = 0
    } else {
        shb = 1
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . # #
            . . . . #
            . . . . .
            `)
        basic.showLeds(`
            . . . # .
            . . . # .
            . . # # #
            . . . # .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # . .
            . # # # .
            . . # . .
            `)
        shb = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    shaken = 1
    sh = 1
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
})
let shb = 0
let b = 0
let shaken = 0
let a = 0
let sh = 0
basic.showString("Loading...")
basic.forever(function () {
    if (a == 0 && b == 0 && sh == 0 && shaken == 0) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . . . # .
            . . . # .
            . . . . .
            `)
    }
})
