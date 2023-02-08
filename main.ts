/**
 * tabla
 */
basic.showLeds(`
    . . # . .
    . # . # .
    # . # . #
    . # . # .
    # . . . #
    `)
let lista = [[0, 1], [2, 3], [4, 5]]
basic.pause(500)
basic.clearScreen()
basic.showString("Hola Mundo")
basic.forever(function () {
    basic.showNumber(lista[2][1])
})
