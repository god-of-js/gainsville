import Vue from "vue";
import Router from "vue-router";
import admindashboard from "./views/admin/admindashboard.vue";
import adminlogin from "./views/admin/Adminlogin.vue";
import adminregister from "./views/admin/adminregister.vue";
import login from "./views/student/login.vue";
import home from "./views/student/home.vue";
import listofbooks from "./views/student/List-of-books.vue";
import register from "./views/student/register.vue";
import studentprofile from "./views/student/studentprofile.vue";
import studentdashboard from "./views/student/studentdashboard.vue";
import payment from "./views/student/schoolfees.vue";
import complaints from "./views/student/complaints.vue";
import info from "./views/student/info.vue";
import { auth } from '@/plugins/firebase/firebaseinit'
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/",
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/login",
      component: login,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/admindashboard",
      component: admindashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/info",
      component: info,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/complaints",
      component: complaints,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/adminlogin",
      component: adminlogin,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/adminregister",
      component: adminregister,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/home",
      component: home,
    },
    {
      path: "/listofbooks",
      component: listofbooks,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/studentdashboard",
      component: studentdashboard,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/payment",
      component: payment,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/studentprofile",
      component: studentprofile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/register",
      component: register,
      meta: {
        requiresAuth: false
      }
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = auth.currentUser;
//   if (!requiresAuth && currentUser) {
//     next();
//   }
//   else if (requiresAuth && !currentUser) {
//     next('/login'); 
//   }
// })
// router.afterEach((to, from) => {
//   const requiresAuth = to.matched.some(x => x.meta.requiresAuth)
//   const currentUser = auth.currentUser;
//   if(requiresAuth && !currentUser){}
// })
export default router;