import Vue from "vue";
import Router from "vue-router";
import admin from "./views/admin/admindashboard.vue";
import updatebooks from "./views/admin/updatebooks.vue";
import updatefees from "./views/admin/updatefees.vue";
import addadmin from "./views/admin/addAdmin.vue";
import manageaccounts from "./views/admin/manageaccounts.vue";
import post from "./views/admin/adminposts.vue";
import recievecomplaints from "./views/admin/recievecomplaints.vue";
import login from "./views/student/login.vue";
import home from "./views/student/home.vue";
import listofbooks from "./views/student/List-of-books.vue";
import register from "./views/student/register.vue";
import studentprofile from "./views/student/studentprofile.vue";
import student from "./views/student/studentdashboard.vue";
import adminLayout from "@/layouts/adminlayout.vue"
import studentLayout from "@/layouts/studentlayout.vue"
import payment from "./views/student/schoolfees.vue";
import complaints from "./views/student/complaints.vue";
import info from "./views/student/info.vue";
// import store from './store'
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
      path: "/home",
      component: home
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
      path: "/register",
      component: register,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/",
      component: adminLayout,
      children: [
        {
          path: "/admin",
          component: admin
        },
        {
          path: "/addadmin",
          component: addadmin
        },
        {
          path: "/adminpost",
          component: post
        },
        {
          path: "/complaintspage",
          component: recievecomplaints
        },
        {
          path: "/updatefees",
          component: updatefees
        },
        {
          path: "/updatebooks",
          component: updatebooks
        },
        {
          path: "/manageaccounts",
          component: manageaccounts
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/",
      component: studentLayout,
      children: [
        {
          path: "/studentdashboard",
          component: student,
          meta: {
            requiresAuth: true
          },
          name: 'Student Dashboard'
        },
        {
          path: "/listofbooks",
          component: listofbooks,
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
        }
      ],
      meta: {
        requiresAuth: true
      }
    }
  ]
});
// router.beforeEach((to, from, next) => {
//   // to and from are both route objects. must call `next`.
// if(!store.state.currentUser) next("/login")
// else if(store.state.currentUser.isAdmin === true) next("/admindashboard")
// else if(store.state.currentUser.isSuperAdmin === true) next("/admindashboard")
// else if(store.state.currentUser.isStudent === true) next("/studentdashboard")
// })

export default router;
