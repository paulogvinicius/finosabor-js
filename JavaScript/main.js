import { Router } from './router.js'

const router = new Router()
router.add('/', "/pages/home.html")
router.add("/produtos", "/pages/produtos.html")


router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()