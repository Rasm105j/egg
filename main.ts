input.onButtonPressed(Button.A, function () {
    if (size == 0) {
        basic.showString("small")
    }
    size += 1
    _type += 1
    if (size == 3) {
        _type += 2
        size += 2
    }
})
input.onButtonPressed(Button.B, function () {
    if (size == 0) {
        basic.showString("Large")
    }
    _type += 3
    size += 3
})
let timer = 0
let size = 0
let _type = 0
size = 0
basic.forever(function () {
    if (size == 1 && _type == 1) {
        basic.showString("SOFT-A HARD-B")
    }
    if (size == 2 && _type == 2) {
        basic.showString("Small soft timer")
        timer = 10
        while (timer > 10) {
            timer += -1
            basic.pause(1000)
        }
    }
    if (size == 3 && _type == 3) {
        basic.showString("SOFT-A HARD-B")
    }
    if (size == 6 && _type == 6) {
        basic.showString("large hard timer")
        timer = 10
        while (timer > 10) {
            timer += -1
            basic.pause(1000)
        }
    }
    if (size == 4 && _type == 4) {
        basic.showString("small hard timer")
        timer = 10
        while (timer > 10) {
            timer += -1
            basic.pause(1000)
        }
    }
    if (size == 5 && _type == 5) {
        basic.showString("large soft timer")
        timer = 10
        while (timer > 10) {
            timer += -1
            basic.pause(1000)
        }
    }
})
