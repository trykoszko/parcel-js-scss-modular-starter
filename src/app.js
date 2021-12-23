/**
 * Global config - /config.json
 */
import config from '../config.json'

/**
 * Local dependencies
 */
import './app.scss'
import './module-js/*'
import './module-styles/*'

/**
 * External dependencies / Vendor
 */
import 'swiper/swiper.scss'

/**
 * Initialize scripts
 */
async function initScripts() {
    const items = config.modules ? config.modules.sort((a, b) => a > b) : []
    const list = document.querySelector('.module-list')
    if (list) {
        const mappedItems = items.map(item => `<li><a href="/${item}.html">${item}</a></li>`).join('')
        list.innerHTML = mappedItems
    }
}
initScripts()

/**
 * HMR
 */
if (module.hot) module.hot.accept(() => {
    initScripts()
})
