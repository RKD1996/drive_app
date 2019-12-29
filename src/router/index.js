import Vue from 'vue'
import VueRouter from 'vue-router'
import AI from '@/components/AllItems.vue'
import VF from '@/components/ViewFiles.vue'

Vue.use(VueRouter)

const routes = [
{
  path: '/',
  component: AI
},
{
  path: '/:id',
  name: 'viewfile',
  component: VF,
  props: {id: true}
}

]

const router = new VueRouter({
  routes
})

export default router
