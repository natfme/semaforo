function actividad2_tiempo () {
    music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    i = 0
    while (i >= Tiempo * 5) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Heart)
        basic.pause(5000)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        i += -1
    }
}
function actividad1_tiempo () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    i = Tiempo * 5
    while (i >= 0) {
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(100)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . # # # .
            . # . # .
            . # # # .
            . . . . .
            `)
        basic.pause(5000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        i += -1
    }
}
input.onButtonPressed(Button.A, function () {
    Tiempo = Tiempo + 1
    basic.showNumber(Tiempo)
    basic.pause(100)
    basic.clearScreen()
})
function actividad3_tiempo () {
    music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
    i = 0
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P0, 0)
    while (i >= Tiempo * 2) {
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
        i += -1
    }
}
input.onButtonPressed(Button.B, function () {
    Tiempo = Tiempo - 1
    basic.showNumber(Tiempo)
    basic.pause(100)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Tiempo >= 0) {
        actividad1_tiempo()
        actividad2_tiempo()
        actividad3_tiempo()
        basic.showIcon(IconNames.No)
        basic.pause(100)
        basic.clearScreen()
    }
})
let i = 0
let Tiempo = 0
basic.showString("Hello!")
Tiempo = 1
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
