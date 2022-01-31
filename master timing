export function beforeRender(delta) {
  second = clockSecond()
  minute = clockMinute()

  if (minute % 5 == 0 && second >= 15 && second <= 45) {

    // 0:15 - 0:45 Sunrise
    mode = 2
    if (second == 15 && t != 0) {
      t = 0
    } else {
      t += (.00075/2)
    }
    if (t > 1) {
      t = 0;
    }

  } else {
    if (minute % 5 == 0) {

      if (second < 15) {

        // 0:00 - 0:15 -- Night

        mode = 1
        h = random(1)
        // s = random(100) < 90
        s = 0

        v = random(1) > .9989
        hsv(h, s, v)

      } else {

        // slot 1 before render
        // I put "Edgeburst" here as an example
        mode = 3
        t1 = triangle(time(.1))  // Mirror time (bounce)

      }
    } else if (minute % 5 == 1) {

      if (second < 15) {

        // slot 2
        mode = 4
        // paste before render code here for slot 2
          t2 = time(0.1) * PI2
          t1 = time(.1)
          t3 = time(.5)
          t4 = time(0.2) * PI2

      } else if (second < 30) {

        // slot 3
        mode = 5
        // paste before render code here for slot 3

      } else if (second < 45) {

        // slot 4
        mode = 6
        // paste before render code here for slot 4

      } else {

        // slot 5
        mode = 7
        // paste before render code here for slot 5

      }
    } else if (minute % 5 == 2) {

      if (second < 15) {

        // slot 6
        mode = 8
        // paste before render code here for slot 6

      } else if (second < 30) {

        // slot 7
        mode = 9
        // paste before render code here for slot 7

      } else if (second < 45) {

        // slot 8
        mode = 10
        // paste before render code here for slot 8

      } else {

        // slot 9
        mode = 11
        // paste before render code here for slot 9

      }
    } else if (minute % 5 == 3) {

      if (second < 15) {

        // slot 10
        mode = 12
        // paste before render code here for slot 10

      } else if (second < 30) {

        // slot 11
        mode = 13
        // paste before render code here for slot 11

      } else if (second < 45) {

        // slot 12
        mode = 14
        // paste before render code here for slot 12

      } else {

        // slot 13
        mode = 15
        // paste before render code here for slot 13

      }
    } else {

      if (second < 15) {

        //slot 14
        mode = 16
        // paste before render code here for slot 14

      } else if (second < 30) {

        // slot 15
        mode = 17
        // paste before render code here for slot 15

      } else if (second < 45) {

        // slot 16
        mode = 18
        // paste before render code here for slot 16

      } else {

        // slot 17
        mode = 19
        // paste before render code here for slot 17

      }
    }
  }
}

export function render(index) {
  if (minute % 5 == 0) {

    if (second < 15) {

      // 0:00 - 0:15 -- Night

      mode = 1
      h = random(1)
      s = random(100) < 90
      // s = 0
      v = random(1) > .9989
      hsv(h, s, v)

    } else if (second < 45) {

      // 0:15 - 0:30 -- Sunrise

      mode = 2
      h = max(index/pixelCount/12 + .20, .21)
      s = 1
      v = .2 + t-(index/pixelCount)
      hsv(h, s, v)

    } else {

      // slot 1 render
      // I put "Edgeburst" here as an example
      pct = index / pixelCount
      edge = clamp(triangle(pct) + t1 * 4 - 2, 0, 1)  // Mirror space
      h = edge * edge - .2  // Expand violets
      v = triangle(edge)    // Doubles the frequency
      hsv(h, 1, v)


    }
  } else if (minute % 5 == 1) {

    if (second < 15) {

      // slot 2
      // paste render code here for slot 2
        h = sin(t2)
        m = (.3 + triangle(t1) * .2)
        h = h + (((index - pixelCount / 2) / pixelCount * ( triangle(t3) * 10 + 4 * sin(t4)) % m))
        s = 1;
        v = ((abs(h) + abs(m) + t1) % 1);
        v = v * v
        hsv(h, s, v)

    } else if (second < 30) {

      // slot 3
      // paste render code here for slot 3

    } else if (second < 45) {

      // slot 4
      // paste render code here for slot 4

    } else {

      // slot 5
      // paste render code here for slot 5

    }
  } else if (minute % 5 == 2) {

    if (second < 15) {

      // slot 6
      // paste render code here for slot 6

    } else if (second < 30) {

      // slot 7
      // paste render code here for slot 7

    } else if (second < 45) {

      // slot 8
      // paste render code here for slot 8

    } else {

      // slot 9
      // paste render code here for slot 9

    }
  } else if (minute % 5 == 3) {

    if (second < 15) {

      // slot 10
      // paste render code here for slot 10

    } else if (second < 30) {

      // slot 11
      // paste render code here for slot 11

    } else if (second < 45) {

      // slot 12
      // paste render code here for slot 12

    } else {

      // slot 13
      // paste render code here for slot 13

    }
  } else {

    if (second < 15) {

      //slot 14
      // paste render code here for slot 14

    } else if (second < 30) {

      // slot 15
      // paste render code here for slot 15

    } else if (second < 45) {

      // slot 16
      // paste render code here for slot 16

    } else {

      // slot 17
      // paste render code here for slot 17
      // NOTE: if you want to put sunset here, it will need a custom time function like sunrise does

    }
  }
}

export var second, minute, mode, t, h, v;
