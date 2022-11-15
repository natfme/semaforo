input.onButtonPressed(Button.A, function () {
    Tiempo = Tiempo + 100
    basic.showNumber(Tiempo)
    basic.pause(100)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    Tiempo = Tiempo - 100
    basic.showNumber(Tiempo)
    basic.pause(100)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    if (Tiempo >= 0) {
        basic.showIcon(IconNames.Yes)
        music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P2, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P2, 0)
        basic.pause(100)
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
        basic.showIcon(IconNames.Heart)
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(100)
        music.startMelody(music.builtInMelody(Melodies.PowerDown), MelodyOptions.Once)
        basic.showIcon(IconNames.No)
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(100)
        basic.clearScreen()
    }
})
let Tiempo = 0
basic.showString("Hello!")
Tiempo = 100
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
