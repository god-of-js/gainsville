import Vue from "vue";
import Router from "vue-router";
import admin from "./views/admin/admindashboard.vue";
import updatebooks from "./views/admin/updatebooks.vue";
import uploadresults from "./views/admin/uploadresults.vue";
import confirmfees from "./views/admin/confirmfees.vue";
import feesrecords from "./views/admin/feesrecords.vue";
import studentslist from "./views/admin/studentslist.vue";
import updatefees from "./views/admin/updatefees.vue";
import parentchat from "./views/admin/parentchat.vue";
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
import homeLayout from "@/layouts/homelayout.vue"
import hello from "@/components/HelloWorld.vue"
import studentLayout from "@/layouts/studentlayout.vue"
import payment from "./views/student/schoolfees.vue";
import complaints from "./views/student/complaints.vue";
import info from "./views/student/info.vue";
import publicinfo from "./views/student/publicinfo.vue";
import activities from "./views/student/activities.vue";
import about from "./views/student/about.vue";
import location from "./views/student/location.vue";
import staff from "./views/student/staff.vue";
import store from './store'
import { auth } from './plugins/firebase/firebaseinit'
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "*",
      redirect: "/",
    },
    {
      path: "/hello",
      redirect: "/hello",
      component: hello
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
      path: '/',
      component: homeLayout,
      children: [
        {
          path: "/",
          component: home
        },
        {
          path: "/publicinfo",
          component: publicinfo
        },
        {
          path: "/activities",
          component: activities
        },
        {
          path: "/location",
          component: location
        },
        {
          path: "/staff",
          component: staff
        },
        {
          path: "/about",
          component: about
        },
      ],
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
          path: "/confirmfees",
          component: confirmfees
        },
        {
          path: "/parentchat",
          component: parentchat
        },
        {
          path: "/studentslist",
          component: studentslist
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
          path: "/uploadresults",
          component: uploadresults
        },
        {
          path: "/feesrecords",
          component: feesrecords
        },
        {
          path: "/manageaccounts",
          component: manageaccounts
        }
      ],
      meta: {
        requiresAuth: true
      },
      beforeEnter: ((to, from, next) => {
        if (store.state.user.isAdmin === false || store.state.user.deleted === true) {
          next('/login');
        }
        else if (store.state.user.isAdmin === true || store.state.user.deleted === false) {
          next();
        } else next('/login')

      })
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
      },
      beforeEnter: ((to, from, next) => {
        if (store.state.user.isStudent === true ||   store.state.user.deleted === false) {
          next();
        } else { next('/login') }

      })
    }
  ]
});


export default router;
