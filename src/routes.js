import MyAccount from './components/MyAccount.vue'
import Twitter from './components/Twitter.vue'
import About from './components/About.vue'

const routes = {
  '/my-account': MyAccount,
  '/twitter': Twitter,
  '/': About,
}

export default routes;