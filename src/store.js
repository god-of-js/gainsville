import Vue from "vue";
import Vuex from "vuex";
import { auth, db } from "@/plugins/firebase/firebaseinit";
Vue.use(Vuex);
auth.onAuthStateChanged(user => {
  //if user exists commit setscurrentstudent else  null
  user ? (async () => {
    store.commit('setCurrentStudent', user)
    store.dispatch('getStudentProfile', user.uid)
  })() : null
})
const store = new Vuex.Store({
  state: {
    currentStudent: null,
    studentProfile: null
  },
  mutations: {
    setCurrentStudent: (state, val) => {
      state.currentStudent = val;
    },
    setStudentProfile(state, val) {
      state.studentProfile = val;
    },
  },
  actions: {
    createStudentProfile({ commit }, { vueApp, user }) {
      //the students data
      const userData = {
        name: vueApp.name,
        classi: vueApp.classi,
        fathersName: vueApp.fathersName,
        mothersName: vueApp.mothersName,
        state: vueApp.selectedState,
        gender: vueApp.selectedGender,
        email: vueApp.email,
        userId: user.uid
      }
        //adding to firestore collection creating the gainsville collection
      db.collection("gainsville")
        .doc()
        .set(userData) // passing the user data to firestore 
        .then(() => {
          commit('setStudentProfile', userData) //commiting user data to the store
          vueApp.$router.push('/studentdashboard')
        })
    },
    getStudentProfile({ commit }, uid) {
      db.collection("gainsville") 
        .where("userId", "==", uid) // checking if the userid is equal to the user id in firestore
        .get()
        .then(query => {
          query.forEach(doc => {
            commit('setCurrentStudent', doc.data())
          })
        })
    }
  }
});
export default store;