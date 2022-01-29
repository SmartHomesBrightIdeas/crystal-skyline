var speed = .75

export function sliderSpeed(v) {
  speed = v
}

export function beforeRender(delta) {
  t = time(1-speed)
}

export function render(index) {

      // Sunrise
      h = 0.002 * random(wave(random(1))) + .29
      s = 1
      v = min(t-(index/pixelCount), .6)
      hsv(h, s, v)

}

export var t, h, v, sliderSpeed;
