import { createRouter, createWebHistory } from 'vue-router'
import isAuthenticatedGuard from './auth-guard'


const routes = [
  {
    path: '/',
    redirect: '/pokemon'
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import( '@/modules/pokemon/layouts/PokemonLayout' ),
    children: [
      { 
        path: 'home', 
        name: 'pokemon-home',
        component: () => import( /* webpackChunkName: 'ListPage' */ '@/modules/pokemon/pages/ListPage.vue' )
      },
      { 
        path: 'about',
        name: 'pokemon-about', 
        component: () => import( /* webpackChunkName: 'AboutPage' */ '@/modules/pokemon/pages/AboutPage.vue' ) 
      },
      { 
        path: 'pokemonid/:id',
        name: 'pockemon-id',
        component: () => import( /* webpackChunkName: 'PokemonPage' */ '@/modules/pokemon/pages/PokemonPage.vue' ),
        props: ( route ) => {
          const id = Number( route.params.id )
          return isNaN( id ) ? { id: 1 } : { id }
        }
      },
      {
        path: '',
        redirect: { name: 'pokemon-about'}
      },
    ]
  },

  //! Rutas hijas DBZ
  {
    path: '/dbz',
    name: 'dbz',
    beforeEnter: [ isAuthenticatedGuard ],
    component: () => import( '@/modules/dbz/layout/DragonBallLayout' ),
    children: [
      {
        path: 'about',
        name: 'dbz-about',
        component: () => import( '@/modules/dbz/pages/About' )
      },
      {
        path: 'characters',
        name: 'dbz-characters',
        component: () => import( '@/modules/dbz/pages/Characters' )
      },
      {
        path: '',
        redirect: { name: 'dbz-about'}
      },
    ]
  },

  // PageNotFound
  {
    path: '/:pathMatch(.*)*',
    // component: () => import( /* webpackChunkName: 'Page404' */ '@/shared/errorPages/Page404.vue' )
    redirect: '/pokemon'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


//! Guard global - sincrono
// router.beforeEach( ( to, from, next ) => {
//   //console.log({ to, from, next })
// 
//   next()
// })

//! Guard global - asincrono
// const canAccsess = () => {
//   return new Promise( resolve => {
// 
//     const random = Math.random() * 100
// 
//     if ( random > 50 ) {
//       console.log('Autenticado - canAccess')
//       resolve( true )
//     } else {
//       console.log('No Autenticado - canAccess')
//       resolve( false )
//     }
// 
//   })
// }
// 
// router.beforeEach( async ( to, from, next ) => {
// 
//   const authorized = await canAccsess()
// 
//   authorized
//     ? next()
//     : next({ name: 'pokemon-home' })
// 
// })

export default router