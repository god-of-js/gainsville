import Vue from "vue";
import Vuex from "vuex";
import { auth, db } from "@/plugins/firebase/firebaseinit";
Vue.use(Vuex);
auth.onAuthStateChanged(user => {
  //if user exists commit setscurrentUser else  null
  user
    ? (async () => {
        store.commit("setCurrentUser", user);
        store.dispatch("getUserProfile", user.uid);

      })()
    : null;
});
const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: null,
    isAdmin: false,
    isSuperAdmin: false,
    studentsCollection: []
  },
  mutations: {
    setCurrentUser: (state, val) => {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
    },
    setAdmin(state, val) {
      state.isAdmin = val;
    },
    setSuperAdmin(state, val) {
      state.isSuperAdmin = val;
    },
    setStudentsCollection(state, val) {
      state.studentsCollection = val;
    }
  },
  actions: {
    createUserProfile({ commit }, { vueApp, user }) {
      //the students data
      const userData = {
        fname: vueApp.fname,
        mname: vueApp.mname,
        lname: vueApp.lname,
        mnum: vueApp.mnum,
        dnum: vueApp.dnum,
        address: vueApp.address,
        classi: vueApp.classi,
        fathersName: vueApp.fathersName,
        mothersName: vueApp.mothersName,
        state: vueApp.selectedState,
        gender: vueApp.selectedGender,
        email: vueApp.email,
        userId: user.uid
      };
      //adding to firestore collection creating the gainsville collection
      db.collection("gainsville")
        .doc()
        .set(userData) // passing the user data to firestore
        .then(() => {
          commit("setUserProfile", userData); //commiting user data to the store
          commit("setStudentCollection", userData);
          vueApp.$router.push("/studentdashboard");
        })
        .then(() => {
          const Toast = vueApp.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            type: "success",
            title: "Signed in successfully"
          });
          Toast.fire({
            type: "success",
            title: "Successfully logged in"
          });
        });
    },
    adminCheck({ commit }, { vueApp, user }) {
      db.collection("gainsville")
        .where("userId", "==", user.uid)
        .get()
        .then(query => {
          query.forEach(doc => {
            if (doc.data().isAdmin == true) {
              commit("setAdmin", doc.data());
              vueApp.$router.push("/admin");
            } else if (doc.data().isSuperAdmin == true) {
              commit("setSuperAdmin", doc.data());
              vueApp.$router.push("/admin");
            } else vueApp.$router.push("/studentdashboard");
          });
        });
    },
    getUserProfile({ commit }, uid) {
      db.collection("gainsville")
        .where("userId", "==", uid) //checking if the userid is equal to the user id in firestore
        .get()
        .then(query => {
          query.forEach(doc => {
            commit("setCurrentUser", doc.data());
          });
        });
    },
    getStudentCollection({commit} ) {
      const studentArr = [];
      db.collection("gainsville").get()
      .then((snapshot) => {
        snapshot.forEach(doc => {
          studentArr.push(doc.data())
          commit("setStudentsCollection", studentArr)
        })
      })
    }
  }
});
export default store;
