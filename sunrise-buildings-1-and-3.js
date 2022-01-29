var speed = .75

export function sliderSpeed(v) {
  speed = v
}

export function beforeRender(delta) {
  t = time(1-speed)
}

export function render(index) {

      // Sunrise
      // For hue, use yellow with some small random variation
      h = 0.002 * random(wave(random(1))) + .28

      s = 1

      // brightness increases with time, brightest at the bottom
      v = min(t, .6)
      hsv(h, s, v)

}

export var t, h, v, sliderSpeed;
