const moduleName = 'hero'
const selector = `.${moduleName}`
const el = document.querySelectorAll(selector)

if (el) {
    Array.from(el).forEach(element => {

        console.log(`${moduleName} script initialized`, element)

    })
}
