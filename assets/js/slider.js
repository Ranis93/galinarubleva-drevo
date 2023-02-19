// Drag-n-Drop SLIDER without arrows-buttons but with indicators
export function dndSliderWhithoutArrInd (
  windowParent,
  window,
  slideItemsTrack,
  slideItem,
  slideIndicators,
  slidesLength
) {
  const slider = document.querySelector(windowParent)
  const sliderList = slider.querySelector(window)
  const sliderTrack = slider.querySelector(slideItemsTrack)
  const slides = slider.querySelectorAll(slideItem)
  const indicators = slider.parentNode.nextElementSibling.children
  const slideWidth = slides[0].offsetWidth
  let slideIndex = 0
  let posInit = 0
  let posX1 = 0
  let posX2 = 0
  let posY1 = 0
  let posY2 = 0
  let posFinal = 0
  let isSwipe = false
  let isScroll = false
  let allowSwipe = true
  let transition = true
  let nextTrf = 0
  let prevTrf = 0
  const lastTrf = (slidesLength - 1) * slideWidth
  const posThreshold = slides[0].offsetWidth * 0.35
  const trfRegExp = /([-0-9.]+(?=px))/
  const getEvent = function () {
    return event.type.search('touch') !== -1 ? event.touches[0] : event
  }
  const slide = function () {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s'
    }
    sliderTrack.style.transform = `translate3d(-${
      slideIndex * slideWidth
    }px, 0px, 0px)`
  }
  const swipeStart = function () {
    const evt = getEvent()

    if (allowSwipe) {
      transition = true

      nextTrf = (slideIndex + 1) * -slideWidth
      prevTrf = (slideIndex - 1) * -slideWidth

      posInit = posX1 = evt.clientX
      posY1 = evt.clientY

      sliderTrack.style.transition = ''

      document.addEventListener('touchmove', swipeAction)
      document.addEventListener('mousemove', swipeAction)
      document.addEventListener('touchend', swipeEnd)
      document.addEventListener('mouseup', swipeEnd)

      sliderList.classList.remove('grab')
      sliderList.classList.add('grabbing')
    }
  }
  const swipeAction = function () {
    const evt = getEvent()
    const style = sliderTrack.style.transform
    const transform = +style.match(trfRegExp)[0]

    posX2 = posX1 - evt.clientX
    posX1 = evt.clientX

    posY2 = posY1 - evt.clientY
    posY1 = evt.clientY

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      const posY = Math.abs(posY2)
      if (posY > 7 || posX2 === 0) {
        isScroll = true
        allowSwipe = false
      } else if (posY < 7) {
        isSwipe = true
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0)
          return
        } else {
          allowSwipe = true
        }
        indicators[slidesLength - 1].classList.add('active')
        indicators[0].classList.remove('active')
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === slidesLength - 1) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf)
          return
        } else {
          allowSwipe = true
        }
        indicators[0].classList.add('active')
        indicators[slidesLength - 1].classList.remove('active')
      }

      // запрет протаскивания дальше одного слайда
      if (
        (posInit > posX1 && transform < nextTrf) ||
        (posInit < posX1 && transform > prevTrf)
      ) {
        reachEdge()
        return
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${
        transform - posX2
      }px, 0px, 0px)`
    }
  }
  const swipeEnd = function () {
    posFinal = posInit - posX1

    isScroll = false
    isSwipe = false

    document.removeEventListener('touchmove', swipeAction)
    document.removeEventListener('mousemove', swipeAction)
    document.removeEventListener('touchend', swipeEnd)
    document.removeEventListener('mouseup', swipeEnd)

    sliderList.classList.add('grab')
    sliderList.classList.remove('grabbing')

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--
        } else if (posInit > posX1) {
          slideIndex++
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false
        slide()
      } else {
        allowSwipe = true
      }
    } else {
      allowSwipe = true
    }
  }
  const setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`
      }
    }
    allowSwipe = false
  }
  const reachEdge = function () {
    transition = false
    swipeEnd()
    allowSwipe = true
  }

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)'
  sliderList.classList.add('grab')

  sliderTrack.addEventListener('transitionend', () => (allowSwipe = true))
  slider.addEventListener('touchstart', swipeStart)
  slider.addEventListener('mousedown', swipeStart)
}
// Drag-n-Drop SLIDER without arrows-buttons
export function dndSliderWhithoutArr (
  windowParent,
  window,
  slideItemsTrack,
  slideItem,
  slidesLength
) {
  const slider = document.querySelector(windowParent)
  const sliderList = slider.querySelector(window)
  const sliderTrack = slider.querySelector(slideItemsTrack)
  const slides = slider.querySelectorAll(slideItem)
  // arrows = document.querySelector(arrowsParent),
  // prev = arrows.children[0],
  // next = arrows.children[2],
  const slideWidth = slides[0].offsetWidth
  let slideIndex = 0
  let posInit = 0
  let posX1 = 0
  let posX2 = 0
  let posY1 = 0
  let posY2 = 0
  let posFinal = 0
  let isSwipe = false
  let isScroll = false
  let allowSwipe = true
  let transition = true
  let nextTrf = 0
  let prevTrf = 0
  const lastTrf = (slidesLength - 1) * slideWidth
  const posThreshold = slides[0].offsetWidth * 0.35
  const trfRegExp = /([-0-9.]+(?=px))/
  const getEvent = function () {
    return event.type.search('touch') !== -1 ? event.touches[0] : event
  }
  const slide = function () {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s'
    }
    sliderTrack.style.transform = `translate3d(-${
        slideIndex * slideWidth
      }px, 0px, 0px)`

    // prev.classList.toggle('disabled', slideIndex === 0)
    // next.classList.toggle('disabled', slideIndex === (slidesLength-1))
  }
  const swipeStart = function () {
    const evt = getEvent()

    if (allowSwipe) {
      transition = true

      nextTrf = (slideIndex + 1) * -slideWidth
      prevTrf = (slideIndex - 1) * -slideWidth

      posInit = posX1 = evt.clientX
      posY1 = evt.clientY

      sliderTrack.style.transition = ''

      document.addEventListener('touchmove', swipeAction)
      document.addEventListener('mousemove', swipeAction)
      document.addEventListener('touchend', swipeEnd)
      document.addEventListener('mouseup', swipeEnd)

      sliderList.classList.remove('grab')
      sliderList.classList.add('grabbing')
    }
  }
  const swipeAction = function () {
    const evt = getEvent()
    const style = sliderTrack.style.transform
    const transform = +style.match(trfRegExp)[0]

    posX2 = posX1 - evt.clientX
    posX1 = evt.clientX

    posY2 = posY1 - evt.clientY
    posY1 = evt.clientY

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      const posY = Math.abs(posY2)
      if (posY > 7 || posX2 === 0) {
        isScroll = true
        allowSwipe = false
      } else if (posY < 7) {
        isSwipe = true
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0)
          return
        } else {
          allowSwipe = true
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === slidesLength - 1) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf)
          return
        } else {
          allowSwipe = true
        }
      }

      // запрет протаскивания дальше одного слайда
      if (
        (posInit > posX1 && transform < nextTrf) ||
          (posInit < posX1 && transform > prevTrf)
      ) {
        reachEdge()
        return
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${
          transform - posX2
        }px, 0px, 0px)`
    }
  }
  const swipeEnd = function () {
    posFinal = posInit - posX1

    isScroll = false
    isSwipe = false

    document.removeEventListener('touchmove', swipeAction)
    document.removeEventListener('mousemove', swipeAction)
    document.removeEventListener('touchend', swipeEnd)
    document.removeEventListener('mouseup', swipeEnd)

    sliderList.classList.add('grab')
    sliderList.classList.remove('grabbing')

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--
        } else if (posInit > posX1) {
          slideIndex++
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false
        slide()
      } else {
        allowSwipe = true
      }
    } else {
      allowSwipe = true
    }
  }
  const setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`
      }
    }
    allowSwipe = false
  }
  const reachEdge = function () {
    transition = false
    swipeEnd()
    allowSwipe = true
  }

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)'
  sliderList.classList.add('grab')

  sliderTrack.addEventListener('transitionend', () => (allowSwipe = true))
  slider.addEventListener('touchstart', swipeStart)
  slider.addEventListener('mousedown', swipeStart)

  // arrows.addEventListener('click', function() {
  // let target = event.target

  // if (target.classList.contains('next')) {
  //     slideIndex++
  // } else if (target.classList.contains('prev')) {
  //     slideIndex--
  // } else {
  //     return
  // }

  // slide()
  // })
}

// Drag-n-Drop SLIDER  with arrows-buttons
export function dragDropSlider (
  windowParent,
  window,
  slideItemsTrack,
  slideItem,
  arrowsParent,
  slidesLength
) {
  const slider = document.querySelector(windowParent)
  const sliderList = slider.querySelector(window)
  const sliderTrack = slider.querySelector(slideItemsTrack)
  const slides = slider.querySelectorAll(slideItem)
  const arrows = document.querySelector(arrowsParent)
  const prev = arrows.children[0]
  const next = arrows.children[2]
  const slideWidth = slides[0].offsetWidth
  let slideIndex = 0
  let posInit = 0
  let posX1 = 0
  let posX2 = 0
  let posY1 = 0
  let posY2 = 0
  let posFinal = 0
  let isSwipe = false
  let isScroll = false
  let allowSwipe = true
  let transition = true
  let nextTrf = 0
  let prevTrf = 0
  const lastTrf = (slidesLength - 1) * slideWidth
  const posThreshold = slides[0].offsetWidth * 0.35
  const trfRegExp = /([-0-9.]+(?=px))/
  const getEvent = function () {
    return event.type.search('touch') !== -1 ? event.touches[0] : event
  }
  const slide = function () {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s'
    }
    sliderTrack.style.transform = `translate3d(-${
        slideIndex * slideWidth
      }px, 0px, 0px)`

    prev.classList.toggle('disabled', slideIndex === 0)
    next.classList.toggle('disabled', slideIndex === slidesLength - 1)
  }
  const swipeStart = function () {
    const evt = getEvent()

    if (allowSwipe) {
      transition = true

      nextTrf = (slideIndex + 1) * -slideWidth
      prevTrf = (slideIndex - 1) * -slideWidth

      posInit = posX1 = evt.clientX
      posY1 = evt.clientY

      sliderTrack.style.transition = ''

      document.addEventListener('touchmove', swipeAction)
      document.addEventListener('mousemove', swipeAction)
      document.addEventListener('touchend', swipeEnd)
      document.addEventListener('mouseup', swipeEnd)

      sliderList.classList.remove('grab')
      sliderList.classList.add('grabbing')
    }
  }
  const swipeAction = function () {
    const evt = getEvent()
    const style = sliderTrack.style.transform
    const transform = +style.match(trfRegExp)[0]

    posX2 = posX1 - evt.clientX
    posX1 = evt.clientX

    posY2 = posY1 - evt.clientY
    posY1 = evt.clientY

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      const posY = Math.abs(posY2)
      if (posY > 7 || posX2 === 0) {
        isScroll = true
        allowSwipe = false
      } else if (posY < 7) {
        isSwipe = true
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0)
          return
        } else {
          allowSwipe = true
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === slidesLength - 1) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf)
          return
        } else {
          allowSwipe = true
        }
      }

      // запрет протаскивания дальше одного слайда
      if (
        (posInit > posX1 && transform < nextTrf) ||
          (posInit < posX1 && transform > prevTrf)
      ) {
        reachEdge()
        return
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${
          transform - posX2
        }px, 0px, 0px)`
    }
  }
  const swipeEnd = function () {
    posFinal = posInit - posX1

    isScroll = false
    isSwipe = false

    document.removeEventListener('touchmove', swipeAction)
    document.removeEventListener('mousemove', swipeAction)
    document.removeEventListener('touchend', swipeEnd)
    document.removeEventListener('mouseup', swipeEnd)

    sliderList.classList.add('grab')
    sliderList.classList.remove('grabbing')

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        if (posInit < posX1) {
          slideIndex--
        } else if (posInit > posX1) {
          slideIndex++
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false
        slide()
      } else {
        allowSwipe = true
      }
    } else {
      allowSwipe = true
    }
  }
  const setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`
      }
    }
    allowSwipe = false
  }
  const reachEdge = function () {
    transition = false
    swipeEnd()
    allowSwipe = true
  }

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)'
  sliderList.classList.add('grab')

  sliderTrack.addEventListener('transitionend', () => (allowSwipe = true))
  slider.addEventListener('touchstart', swipeStart)
  slider.addEventListener('mousedown', swipeStart)

  arrows.addEventListener('click', function () {
    const target = event.target

    if (target.classList.contains('next')) {
      slideIndex++
    } else if (target.classList.contains('prev')) {
      slideIndex--
    } else {
      return
    }
    slide()
  })
}

// Drag-n-Drop SLIDER  with arrows-buttons and selected item
export const dragDropSliderWI = (windowParent, window, slideItemsTrack, slideItem, arrowsParent, slidesLength, currentSlide, this1) => {
  const slider = document.querySelector(windowParent)
  const sliderList = slider.querySelector(window)
  const sliderTrack = slider.querySelector(slideItemsTrack)
  const slides = slider.querySelectorAll(slideItem)
  const arrows = document.querySelector(arrowsParent)
  const prev = arrows.children[0]
  const next = arrows.children[2]
  const slideWidth = slides[0].offsetWidth
  let slideIndex = currentSlide.Num
  let posInit = 0 /// /Координата касания (курсора) по оси X (статичная)
  let posX1 = 0 // Координата касания (курсора) по оси X (в дальнейшем будет меняться)
  let posX2 = 0
  let posY1 = 0
  let posY2 = 0
  let posFinal = 0
  let isSwipe = false
  let isScroll = false
  let allowSwipe = true
  let transition = true
  let nextTrf = 0
  let prevTrf = 0
  let counter = 0
  const lastTrf = (slidesLength - 1) * slideWidth
  const posThreshold = slides[0].offsetWidth * 0.35 // значение 'порога' сдвига слайда, который определим заранее
  const trfRegExp = /([-0-9.]+(?=px))/
  const getEvent = function () {
    return (event.type.search('touch') !== -1) ? event.touches[0] : event
  }
  const slide = function () {
    if (transition) {
      sliderTrack.style.transition = 'transform .5s'
    }
    sliderTrack.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`

    prev.classList.toggle('disabled', slideIndex === 0)
    next.classList.toggle('disabled', slideIndex === (slidesLength - 1))
    this1.$store.commit('gallery/setCurrentSlide', { Num: slideIndex })
    this1.$store.commit('gallery/setZoomState', { value: false })
  }
  const swipeStart = function () {
    const evt = getEvent()

    if (allowSwipe) {
      transition = true

      nextTrf = (slideIndex + 1) * -slideWidth
      prevTrf = (slideIndex - 1) * -slideWidth

      posInit = posX1 = evt.clientX
      posY1 = evt.clientY

      sliderTrack.style.transition = ''

      document.addEventListener('touchmove', swipeAction)
      document.addEventListener('mousemove', swipeAction)
      document.addEventListener('touchend', swipeEnd)
      document.addEventListener('mouseup', swipeEnd)

      sliderList.classList.remove('grab')
      sliderList.classList.add('grabbing')
    }
  }
  const swipeAction = function () {
    const evt = getEvent()
    const style = sliderTrack.style.transform
    const transform = +style.match(trfRegExp)[0]

    posX2 = posX1 - evt.clientX // При движении курсора, вычитаем текущие координаты из posX1, записывая результат в переменную posX2
    posX1 = evt.clientX // текущие координаты курсора event.clientX

    posY2 = posY1 - evt.clientY
    posY1 = evt.clientY

    // определение действия свайп или скролл
    if (!isSwipe && !isScroll) {
      const posY = Math.abs(posY2)
      if (posY > 7 || posX2 === 0) {
        isScroll = true
        allowSwipe = false
      } else if (posY < 7) {
        isSwipe = true
      }
    }

    if (isSwipe) {
      // запрет ухода влево на первом слайде
      if (slideIndex === 0) {
        if (posInit < posX1) {
          setTransform(transform, 0)
          return
        } else {
          allowSwipe = true
        }
      }

      // запрет ухода вправо на последнем слайде
      if (slideIndex === (slidesLength - 1)) {
        if (posInit > posX1) {
          setTransform(transform, lastTrf)
          return
        } else {
          allowSwipe = true
        }
      }

      // запрет протаскивания дальше одного слайда
      // eslint-disable-next-line no-mixed-operators
      if (posInit > posX1 && transform < nextTrf || posInit < posX1 && transform > prevTrf) {
        reachEdge()
        return
      }

      // двигаем слайд
      sliderTrack.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`
    }
  }
  const swipeEnd = function () {
    posFinal = posInit - posX1

    isScroll = false
    isSwipe = false

    document.removeEventListener('touchmove', swipeAction)
    document.removeEventListener('mousemove', swipeAction)
    document.removeEventListener('touchend', swipeEnd)
    document.removeEventListener('mouseup', swipeEnd)

    sliderList.classList.add('grab')
    sliderList.classList.remove('grabbing')

    if (allowSwipe) {
      if (Math.abs(posFinal) > posThreshold) {
        // При прекращении свайпа, сравниваем полученное значение (posFinal) со значением 'порога' сдвига слайда (posThreshold). Если 'мы свайпнули больше ~30% нирины слайда', то переключаем слайд. Иначе возвращаем в начальное положение.
        if (posInit < posX1) {
          slideIndex--
        } else if (posInit > posX1) {
          slideIndex++
        }
      }

      if (posInit !== posX1) {
        allowSwipe = false
        slide()
      } else {
        allowSwipe = true
      }
    } else {
      allowSwipe = true
    }
  }
  const setTransform = function (transform, comapreTransform) {
    if (transform >= comapreTransform) {
      if (transform > comapreTransform) {
        sliderTrack.style.transform = `translate3d(${comapreTransform}px, 0px, 0px)`
      }
    }
    allowSwipe = false
  }
  const reachEdge = function () {
    transition = false
    swipeEnd()
    allowSwipe = true
  }

  sliderTrack.style.transform = 'translate3d(0px, 0px, 0px)'
  sliderList.classList.add('grab')

  // eslint-disable-next-line no-return-assign
  sliderTrack.addEventListener('transitionend', () => allowSwipe = true)
  slider.addEventListener('touchstart', swipeStart)
  slider.addEventListener('mousedown', swipeStart)

  arrows.addEventListener('click', function () {
    const target = event.target

    if (target.classList.contains('next')) {
      slideIndex++
    } else if (target.classList.contains('prev')) {
      slideIndex--
    } else {
      return
    }
    slide()
  })
  if (counter === 0) { // Чтобы запустить единожды при старте функции
    slide()
    counter++
  }
}
