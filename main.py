a = 0
sh = 0
b = 0
shb = 0

def on_button_pressed_a():
    global a
    sha = 0
    if sha == 0:
        a = 1
        basic.show_leds("""
            . . . . .
                        . . # # #
                        . . . . #
                        . . . . #
                        . . . . .
        """)
        basic.show_leds("""
            . . . # .
                        . . . # #
                        . . . . #
                        . . . . #
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . . . . #
                        . . . . #
                        . . . . #
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . . . . #
                        . . . . #
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . . . . #
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . . . # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . # .
                        . . . # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . # .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        a = 0
    else:
        pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global b, shb
    if sh == 0:
        b = 1
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . . .
                        . . . # .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . . .
                        . . . . #
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . . .
                        . . . . #
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . . .
                        . . . # .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . # # .
                        . # . # .
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . # . . .
                        . . # # .
                        . . . # .
                        . . . # .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . # .
        """)
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
        b = 0
    else:
        shb = 1
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . . # . .
                        . # # # .
                        . . # . .
        """)
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . # # # .
                        . . # . .
                        . . . . .
        """)
        basic.show_leds("""
            . . # . .
                        . . . # .
                        . . # # #
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . # .
                        . . . # .
                        . . # # #
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . . . # .
                        . . # # #
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . #
                        . . . . #
                        . . . # #
                        . . . . #
                        . . . . .
        """)
        basic.show_leds("""
            . . . # .
                        . . . # .
                        . . # # #
                        . . . # .
                        . . . . .
        """)
        basic.show_leds("""
            . . # . .
                        . . # . .
                        . # # # .
                        . . # . .
                        . . . . .
        """)
        basic.show_leds("""
            . . . . .
                        . . # . .
                        . . # . .
                        . # # # .
                        . . # . .
        """)
        shb = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    global sh
    sh = 1
    basic.show_leds("""
        . . . . .
                . . # . .
                . . # . .
                . # # # .
                . . # . .
    """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_forever():
    if a == 0 and b == 0 and sh == 0:
        basic.show_leds("""
            . . . . .
                        . # # # .
                        . . . # .
                        . . . # .
                        . . . . .
        """)
basic.forever(on_forever)
