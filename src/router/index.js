import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToDoList from '@/views/ToDoList.vue'
import IssueList from '@/views/IssueList.vue'
import TodosIssues from '@/views/TodosIssues.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   // '/todos'パス追加
   {
    path: '/todo-list',
    name: 'TodoList',
    component: ToDoList
  },
  {
    path: '/issue-list',
    name: 'IssueList',
    component: IssueList
  },
  {
    path: '/todoissues',
    name: 'TodoIssues',
    component: TodosIssues
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
