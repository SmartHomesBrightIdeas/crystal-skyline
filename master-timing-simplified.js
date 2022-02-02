var h,s,v,h1,m,c1,c2,c3,canSpark,isSpark,isFire;
var t1, t2, t3, t4, t5, t6,hl,hw,speed,legs;

// Night 0:00 - 0:15
function beforeRender1() {

}
function render1() {
  // 0:00 - 0:15 -- Night
  h = random(1)
  s = random(100) < 90 // color
  // s = 0 // white
  v = random(1) > .9989
  hsv(h, s, v)
}

// Sunrise 0:15 - 0:45
function beforeRender2() {

  // custom time function
  mode = 2
  if (second == 15 && t != 0) {
    t = 0
  } else {
    t += (.00075/2)
  }
  if (t >= 1) {
    t = 0;
  }
  // only for sunrise
}
function render2(index) {
  h = max(index/pixelCount/12 + .20, .21)
  s = 1
  v = .2 + t-(index/pixelCount)
  hsv(h, s, v)
}

// Firework Dust
function beforeRender3() {
  mode = 3
}
function render3(index) {
  h = random(1)
  s = random(100) < 90
  v = random(1) > .995
  hsv(h, s, v)
}

// Block Reflections
function beforeRender4() {
  // slot 2
  mode = 4
  t2 = time(0.1) * PI2
  t1 = time(.1)
  t3 = time(.5)
  t4 = time(0.2) * PI2
}
function render4(index) {
  // slot 2
  h = sin(t2)
  m = (.3 + triangle(t1) * .2)
  h = h + (((index - pixelCount / 2) / pixelCount * ( triangle(t3) * 10 + 4 * sin(t4)) % m))
  s = 1;
  v = ((abs(h) + abs(m) + t1) % 1);
  v = v * v
  hsv(h, s, v)
}

// Rainbow Rocket Sparks
function beforeRender5() {
  // slot 3
  mode = 5
  t1 = time(0.04)
}
function render5(index) {
  // slot 3
  canSpark = square(index / pixelCount + t1, 0.15)
  isSpark = canSpark && random(1) > 0.95
  isFire = square(index / pixelCount + t1 + 0.05, 0.08)
  h = (index / (pixelCount / 8)) % 1
  hsv(h, isFire, isFire || isSpark)
}

// Sierpinski Rainbow
function beforeRender6() {
  // slot 4
  mode = 6
  hl = pixelCount/2
  hw = sqrt(pixelCount)
  t1 =  time(.1)
  t2 = time(0.13)
}
function render6(index) {
  // slot 4
  c1 = 1-abs(index - hl)/hl
  c2 = wave(c1)
  c3 = wave(c2 + t1)
  v = wave(c3 + t1)
  v = v*v
  hsv(c1 + t2,1,v)
}

// Color Bands
function beforeRender7() {
  // slot 5
  mode = 7
  t1 = time(.25)
  t2 = time(.15)
}
function render7(index) {
  // slot 5
  h = index / (pixelCount / 2) // Notice how each hue appears twice
  s = wave(-index / 3 + t1)
  s = 1 - s * s * s * s
  v = wave(index / 2 + t2) * wave(index / 5 - t2) + wave(index / 7 + t2)
  v = v * v * v * v
  hsv(h, s, v)
}

// Color Fade Pulse
function beforeRender8() {
  mode = 8
  t1 = time(.01) // For hue movement
  t2 = time(.02) // For pulse movement
  t3 = time(.1)  // White / desaturation movement
}
function render8(index) {

}

// Color Twinkle Bounce
function beforeRender9() {
  mode = 9
  t1 = time(.05) * PI2
}
function render9(index) {
  h = 1 + sin(index / 2 + 5 * sin(t1))
  h += time(.1)
  v = (1 + sin(index / 2 + 5 * sin(t1))) / 2
  v = v * v * v * v // Gamma correction
  hsv(h, 1, v)
}

// Color Twinkle
function beforeRender10() {
  mode = 10
  t1 = time(.50) * PI2
  t2 = time(.15) * PI2 // 3.33 times faster than t1
}
function render10(index) {

}

// Firework Nova
function beforeRender11() {
  mode = 11
  t1 = time(.02)
  t2 = time(.1)
}
function render11(index) {

}

// Glitch Bands
function beforeRender12() {
  mode = 12
  t1 = time(.1) * PI2 // Notice we go from 0..2*Pi for timers fed to sin()
  t2 = time(.1)       // And 0..1 for timers fed to traingle()
  t3 = time(.5)
  t4 = time(.2) * PI2
  t5 = time(.05)
  t6 = time(.02)
}
function render12(index) {

}

// Green Ripple
function beforeRender13() {
  mode = 13
  t1 = time(.1) * PI2 // Notice we go from 0..2*Pi for timers fed to sin()
  t2 = time(.1)       // And 0..1 for timers fed to traingle()
  t3 = time(.5)
  t4 = time(.2) * PI2
  t5 = time(.05)
  t6 = time(.02)
}
function render13(index) {

}

// Firework Rocket
function beforeRender14() {
  mode = 14
  t1 = time(0.04)

}
function render14(index) {

}

// Marching Rainbow
function beforeRender15() {
  mode = 15
  t1 = time(.1)
  t2 = time(.05)
}
function render15(index) {

}

// Millipede
function beforeRender16() {
  mode = 16
  speed = 20 // I moved these into before render
  legs = 10
  t1 = time(1 / speed)
  t2 = time(2 / speed)
}
function render16(index) {

}

// Opposites
function beforeRender17() {
  mode = 17
  t1 = time(6 / 65.536)  // Wave one every 6 seconds
  t2 = time(12 / 65.536) // Wave two every 12 seconds
}
function render17(index) {

}

// Blink Fade
function beforeRender18(delta) {
  mode = 18
  // values = array(pixelCount) //I moved these variables into before render
  // hues = array(pixelCount) //
  // for (i = 0; i < pixelCount; i++) {
  //   values[i] -= .005 * delta * .1
  //   if (values[i] <= 0) {
  //     values[i] = random(1)
  //     hues[i] = time(4.6 / 65.536) + 0.2 * triangle(i / pixelCount)
  //   }
  // }
}
function render18(index) {

}

// Edgeburst
function beforeRender19() {
  mode = 19
  t1 = triangle(time(.1))  // Mirror time (bounce)
}
function render19(index) {

}

// COMPLETELY IGNORE ME
// UNLESS YOU WANT TO MAKE TIMING CHANGES
export function beforeRender(delta) {
  second = clockSecond()
  minute = clockMinute()

  if (minute % 5 == 0 && second >= 15 && second <= 45) {
    beforeRender2()
  } else {
    if (minute % 5 == 0) {
      if (second < 15) {
        beforeRender1()
      } else {
        beforeRender3()
      }
    } else if (minute % 5 == 1) {
      if (second < 15) {
        beforeRender4()
      } else if (second < 30) {
        beforeRender5()
      } else if (second < 45) {
        beforeRender6()
      } else {
        beforeRender7()
      }
    } else if (minute % 5 == 2) {
      if (second < 15) {
        beforeRender8()
      } else if (second < 30) {
        beforeRender9()
      } else if (second < 45) {
        beforeRender10()
      } else {
        beforeRender11()
      }
    } else if (minute % 5 == 3) {
      if (second < 15) {
        beforeRender12()
      } else if (second < 30) {
        beforeRender13()
      } else if (second < 45) {
        beforeRender14()
      } else {
        beforeRender15()
      }
    } else {
      if (second < 15) {
        beforeRender16()
      } else if (second < 30) {
        beforeRender17()
      } else if (second < 45) {
        beforeRender18(delta)
      } else {
        beforeRender19()
      }
    }
  }
}

// COMPLETELY IGNORE ME
// UNLESS YOU WANT TO MAKE TIMING CHANGES
export function render(index) {
  if (minute % 5 == 0 && second >= 15 && second <= 45) {
    render2(index)
  } else {
    if (minute % 5 == 0) {
      if (second < 15) {
        render1(index)
      } else {
        render3(index)
      }
    } else if (minute % 5 == 1) {
      if (second < 15) {
        render4(index)
      } else if (second < 30) {
        render5(index)
      } else if (second < 45) {
        render6(index)
      } else {
        render7(index)
      }
    } else if (minute % 5 == 2) {
      if (second < 15) {
        render8(index)
      } else if (second < 30) {
        render9(index)
      } else if (second < 45) {
        render10(index)
      } else {
        render11(index)
      }
    } else if (minute % 5 == 3) {
      if (second < 15) {
        render12(index)
      } else if (second < 30) {
        render13(index)
      } else if (second < 45) {
        render14(index)
      } else {
        render15(index)
      }
    } else {
      if (second < 15) {
        render16(index)
      } else if (second < 30) {
        render17(index)
      } else if (second < 45) {
        render18(index)
      } else {
        render19(index)
      }
    }
  }
}

export var second, minute, mode, t, h, v;