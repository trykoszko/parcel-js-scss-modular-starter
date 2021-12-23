const moduleName = 'teaser'
const selector = `.${moduleName}`
const el = document.querySelectorAll(selector)

if (el) {
    Array.from(el).forEach(element => {

        console.log(`${moduleName} script initialized`, element)

        setInterval(() => {
            element.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16)
        }, 500)

    })
}
