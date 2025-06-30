import { createRouter, createWebHistory } from 'vue-router'
import NoteList from '../components/NoteList.vue' 
import NoteDetail from '../components/NoteDetail.vue'

const routes = [
  {
    path: '/',
    name: 'notes',
    component: NoteList 
  },
  
  {
    path: '/notes/:id',
    name: 'note-detail',
    component: NoteDetail
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router