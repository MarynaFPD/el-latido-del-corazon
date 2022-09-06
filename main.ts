input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Sad)
    led.setBrightness(255)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    led.setBrightness(255)
    basic.showIcon(IconNames.Heart)
    led.setBrightness(100)
    basic.showIcon(IconNames.Heart)
    led.setBrightness(10)
})
