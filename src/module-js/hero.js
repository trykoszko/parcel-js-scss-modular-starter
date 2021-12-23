const moduleName = 'hero'
const selector = `.${moduleName}`
const el = document.querySelectorAll(selector)

import Swiper from 'swiper'

if (el) {
    Array.from(el).forEach(element => {

        console.log(`${moduleName} script initialized`, element)

        const swiper = new Swiper(element, {
            loop: true,
        })

    })
}
