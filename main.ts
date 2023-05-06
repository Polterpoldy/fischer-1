input.onGesture(Gesture.TiltRight, function () {
    fischertechnik.setMotorRotation(FTMotor.M2, MotorRotation.Forward)
    fischertechnik.runMotor(FTMotor.M2)
    basic.pause(1000)
    fischertechnik.stopMotor(FTMotor.M2)
})
input.onSound(DetectedSound.Loud, function () {
    Zähler += 1
    basic.showNumber(Zähler)
    if (Zähler == 1) {
        fischertechnik.setMotorRotation(FTMotor.M1, MotorRotation.Forward)
        fischertechnik.runMotor(FTMotor.M1)
    } else if (Zähler == 2) {
        fischertechnik.stopMotor(FTMotor.M1)
    } else if (Zähler == 3) {
        fischertechnik.setMotorRotation(FTMotor.M1, MotorRotation.Backward)
        fischertechnik.runMotor(FTMotor.M1)
    } else if (Zähler == 4) {
        fischertechnik.stopMotor(FTMotor.M1)
        Zähler = 0
    }
})
input.onButtonPressed(Button.A, function () {
    fischertechnik.setMotorRotation(FTMotor.M2, MotorRotation.Backward)
    fischertechnik.runMotor(FTMotor.M2)
    basic.pause(1000)
    fischertechnik.stopMotor(FTMotor.M2)
})
input.onGesture(Gesture.TiltLeft, function () {
    fischertechnik.setMotorRotation(FTMotor.M2, MotorRotation.Backward)
    fischertechnik.runMotor(FTMotor.M2)
    basic.pause(1000)
    fischertechnik.stopMotor(FTMotor.M2)
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
    basic.showIcon(IconNames.StickFigure)
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(Zähler)
})
input.onButtonPressed(Button.B, function () {
    fischertechnik.setMotorRotation(FTMotor.M2, MotorRotation.Forward)
    fischertechnik.runMotor(FTMotor.M2)
    basic.pause(1000)
    fischertechnik.stopMotor(FTMotor.M2)
})
let Zähler = 0
Zähler = 0
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P2, 1)
basic.forever(function () {
    if (input.lightLevel() >= 130) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else {
        music.stopAllSounds()
    }
    if (pins.digitalReadPin(DigitalPin.P0) < 1) {
        led.plot(0, 0)
        fischertechnik.runMotor(FTMotor.M2)
        basic.pause(1000)
        led.unplot(0, 0)
        fischertechnik.stopMotor(FTMotor.M2)
    }
    if (pins.digitalReadPin(DigitalPin.P2) < 1) {
        led.plot(4, 0)
        fischertechnik.runMotor(FTMotor.M2)
        basic.pause(100)
        led.unplot(4, 0)
        fischertechnik.stopMotor(FTMotor.M2)
    }
})
