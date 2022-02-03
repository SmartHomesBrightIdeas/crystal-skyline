var speed = .75

export function sliderSpeed(v) {
  speed = v
}

export function beforeRender(delta) {
  t = 1-time(1-speed)
}

export function render(index) {

      // if (t > .6) {
      //   t = .6
      // }
      // Sunrise
      // For hue, use yellow with some small random variation
      h = 0.002 * random(wave(random(1))) + .281 - (0.02*index/pixelCount)

      s = 1

              // brightness increases with time, brightest at the bottom
      v = min(sin((t-((index-30)/pixelCount))), .8)



      hsv(h, s, v)

}

export var t, h, v, sliderSpeed;
