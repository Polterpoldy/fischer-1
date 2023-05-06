input.onSound(DetectedSound.Loud, function () {
    Zähler += 1
    basic.showNumber(Zähler)
    basic.pause(100)
    if (Zähler == 1) {
        fischertechnik.setMotorRotation(FTMotor.M1, MotorRotation.Forward)
        fischertechnik.runMotor(FTMotor.M1)
    } else if (Zähler == 2) {
        fischertechnik.stopMotor(FTMotor.M1)
    } else if (Zähler == 3) {
        fischertechnik.setMotorRotation(FTMotor.M2, MotorRotation.Backward)
        fischertechnik.runMotor(FTMotor.M2)
    } else if (Zähler == 4) {
        fischertechnik.stopMotor(FTMotor.M2)
        Zähler = 0
    }
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
let Zähler = 0
Zähler = 0
basic.forever(function () {
    if (input.lightLevel() >= 100) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else {
        music.stopAllSounds()
    }
})
