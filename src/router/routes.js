import HomeTable from '@/views/HomeTable.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeTable,
    title: 'Relação de Operadoras Ativas ANS',
    meta: { requiredAuth: false}
  }
]

const router = new VueRouter({
  routes
})