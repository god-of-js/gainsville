import Vue from "vue";
import Vuex from "vuex";
import { auth, db } from "@/plugins/firebase/firebaseinit";
Vue.use(Vuex);
auth.onAuthStateChanged(user => {
  
  //if user exists commit setscurrentUser else  null
  user
    ? (async () => {
      store.dispatch("getUserProfile", user.uid);
      store.dispatch("getMessages", user.uid);
    })()
    : null;
});
let user = window.localStorage.getItem('currentUser')
const store = new Vuex.Store({
  state: {
    user: user ? JSON.parse(user) : [], //local storage current user 
    currentUser: null,
    studentsCollection: [],
    messages: [],
    adminMessages: [],
    field: [],
    noOfFeesInputs: null,
    noOfResultsInputs: null,
    noOfBooksInputs: null,
    schoolFees: null,
    schoolBooks: null
  },
  mutations: {
    setCurrentUser: (state, val) => {
      state.currentUser = val;
    },
    setStudentsCollection(state, val) {
      state.studentsCollection = val;
    },
    setmessage(state, messages) {
      state.messages = messages
    },
    setAdminMessage(state, messages) {
      state.adminMessages = messages
    },
    setNoOfFees(state, { numba }) {
      state.noOfFeesInputs = numba
    },
    setNoOfResults(state, { numba }) {
      state.noOfResultsInputs = numba
    },
    setNoOfBooks(state, { numba }) {
      state.noOfBooksInputs = numba
    },
    setSchoolFees(state, val) {
      state.schoolFees = val;

    },
    setSchoolBooks(state, val) {
      state.schoolBooks = val;
    },
    setLocalStorageUser(state, userStore) {
      state.user = userStore;
    }
  },
  actions: {
    createUserProfile({ commit, state }, { vueApp, user }) {
      //the students data
      const userData = {
        fname: vueApp.fname,
        mname: vueApp.mname,
        lname: vueApp.lname,
        mnum: vueApp.mnum,
        dnum: vueApp.dnum,
        address: vueApp.address,
        classi: vueApp.selectedClass,
        fathersName: vueApp.fathersName,
        mothersName: vueApp.mothersName,
        state: vueApp.selectedState,
        gender: vueApp.selectedGender,
        email: vueApp.email,
        userId: user.uid,
        isStudent: true,
        isAdmin: false
      };
      
      //adding to firestore collection creating the gainsville collection
      
      db.collection("gainsville")
      .doc()
      .set(userData) // passing the user data to firestore
      .then(() => {
        window.localStorage.setItem('currentUser',JSON.stringify(userData))
        user = window.localStorage.getItem('currentUser')
        const userStore = JSON.parse(user);
        console.log(userStore)
        commit('setLocalStorageUser', userStore)
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
            window.localStorage.setItem('currentUser',JSON.stringify(doc.data()))
            commit("setCurrentUser", doc.data());
          });
        });
    },
    getStudentCollection({ commit }) {
      const studentArr = [];
      db.collection("gainsville").get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            studentArr.push(doc.data())
            commit("setStudentsCollection", studentArr)
          })
        })
    },
    //get message from firestore
    async getMessages({ commit, state }) {
      const messages = [];
      const uid = state.user.userId;
      let convoRef = db.collection("messages").where('id', "==", uid);
      let convos = await convoRef.get();
      convos.forEach(doc => {
        messages.push(doc.data())
      })
      commit('setmessage', messages);
    },
    //get message from firestore
    async getAdminMessages({ commit }) {
      const messages = [];
      let convoRef = db.collection("adminmessages").where('recieverId', "==");
      let convos = await convoRef.get();
      convos.forEach(doc => {
        messages.push(doc.data())
      })
      commit('setAdminMessage', messages);
    },
    getNoOfFees({ commit }, { numba, classiSelected }) {
      commit('setNoOfFees', { numba, classiSelected });
    },
    getNoOfResults({ commit }, { numba, classiSelected }) {
      commit('setNoOfResults', { numba, classiSelected });
    },
    getNoOfBooks({ commit }, { numba, classiSelected }) {
      commit('setNoOfBooks', { numba, classiSelected });
    },
    getBooks({ state }, { obj, year, vueApp, sum }) {
      const inputs = Number(state.noOfBooksInputs)
      const data = { obj, year, sum , inputs};
      db.collection("schoolBooks")
        .doc()
        .set(data) // passing the user data to firestore
      vueApp.$router.push('/admin')
      state.noOfBooksInputs = null
    },
    getResults({ state }, { obj, year, vueApp, sum }) {
      const data = { obj, year, sum };
      db.collection("schoolresults")
        .doc()
        .set(data) // passing the user data to firestore
      vueApp.$router.push('/admin')
      state.no_of_fees_inputs = null
    },
    getFees({ state }, { obj, year, vueApp, sum }) {
     const inputs = Number(state.noOfFeesInputs)
      const data = { obj, year, sum, inputs };
      db.collection("schoolfees")
        .doc()
        .set(data) // passing the user data to firestore
      vueApp.$router.push('/admin')
      state.noOfFeesInputs = null
    },
    getFeesFromDb({ commit, state }) {
      db.collection("schoolfees")
        .where('year', '==', state.user.classi)
        .get()
        .then(query => {
          query.forEach(doc => {
            commit("setSchoolFees", doc.data());
          });
        });
    },
    getBooksFromDb({ commit, state }) {
      db.collection("schoolBooks")
        .where('year', '==', state.user.classi)
        .get()
        .then(query => {
          query.forEach(doc => {
            commit("setSchoolBooks", doc.data());
          });
        });
    }

  }
});
export default store;
