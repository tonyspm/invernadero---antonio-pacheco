basic.forever(function () {
    basic.showNumber(input.temperature())
    if (input.temperature() >= 8 && input.temperature() <= 30) {
        basic.showIcon(IconNames.Happy)
    } else if (input.temperature() > 30) {
        basic.showString("Caliente")
    } else {
        basic.showString("Frio")
    }
})
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P0))
    if (pins.digitalReadPin(DigitalPin.P0) >= 200 && pins.digitalReadPin(DigitalPin.P0) <= 600) {
        basic.showString("Hum")
        basic.showIcon(IconNames.Yes)
    } else if (pins.digitalReadPin(DigitalPin.P0) > 600) {
        basic.showString("Alta")
    } else {
        basic.showString("Baja")
    }
})
