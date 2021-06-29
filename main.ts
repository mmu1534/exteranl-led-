input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4000; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        control.waitMicros(100000)
        pins.digitalWritePin(DigitalPin.P0, 0)
        control.waitMicros(100000)
        pins.digitalWritePin(DigitalPin.P0, 1)
        control.waitMicros(100000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
})
basic.showString("")
basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (input.lightLevel() < 50) {
    	
    }
})
