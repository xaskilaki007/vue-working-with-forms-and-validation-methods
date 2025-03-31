import { createRouter, createWebHistory } from 'vue-router';
import { store } from './store';

import NotFound from './components/NotFound.vue';
import HomePage from './components/HomePage.vue';
import AboutMe from './components/AboutMe.vue';
import EducationPage from './components/EducationPage.vue';
import VisitsHistory from './components/VisitsHistory.vue';
import PhotoAlbum from './components/PhotoAlbum.vue';
import ContactWithMe from './components/ContactWithMe.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
            meta: {
                title: 'Главная'
            }
        },
        {
            path: '/about',
            component: AboutMe,
            meta: {
                title: 'Обо мне'
            }
        },
        {
            path: '/education',
            component: EducationPage,
            meta: {
                title: 'Учеба'
            }
        },
        {
            path: '/history',
            component: VisitsHistory,
            meta: {
                title: 'История'
            }
        },
        {
            path: '/photo',
            component: PhotoAlbum,
            meta: {
                title: 'Фотоальбом'
            }
        },
        {
            path: '/contact',
            component: ContactWithMe,
            meta: {
                title: 'Контакт'
            }
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFound,
            meta: {
                title: '404'
            }
        }
    ]
});

router.beforeEach(to => {
    document.title = `${to.meta?.title ?? 'Page'} - Шпаков Пётр`
});
router.afterEach(to => {
    store.commit('addVisit', to.path);
});

export { router };
