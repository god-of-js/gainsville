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
const store = new Vuex.Store({
  state: {
    currentUser: null,
    userProfile: null,
    studentsCollection: [],
    messages: [],
    adminMessages: [],
    field: [],
    no_of_fees_inputs: null
  },
  mutations: {
    setCurrentUser: (state, val) => {
      state.currentUser = val;
    },
    setUserProfile(state, val) {
      state.userProfile = val;
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
    set_no_of_fees(state, {numba, classiSelected}){
      state.no_of_fees_inputs = numba
    },
    setFields(state, fields) {
      state.field.push(fields)
    }
  },
  actions: {
    createUserProfile({ commit }, { vueApp, user }) {
      //the students data
      const userData = {
        name: vueApp.lname && vueApp.fname && vueApp.mname,
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
        userId: user.uid
      };
      //adding to firestore collection creating the gainsville collection
      db.collection("gainsville")
        .doc()
        .set(userData) // passing the user data to firestore
        .then(() => {
          console.log('user')
          commit("setUserProfile", userData); //commiting user data to the store
          commit("setStudentCollection", userData);
          console.log('them')
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
     const uid = state.currentUser.userId;
     console.log(uid)
      let convoRef = db.collection("messages").where('id', "==", uid);
      let convos = await convoRef.get();
      convos.forEach(doc => {
        messages.push(doc.data())
      })
      commit('setmessage', messages);
    },
    //get message from firestore
    async getAdminMessages({ commit }, uid) {
      const messages = [];
      let convoRef = db.collection("adminmessages").where('recieverId', "==", uid);
      let convos = await convoRef.get();
      convos.forEach(doc => {
        messages.push(doc.data())
      })
      commit('setAdminMessage', messages);
    },
  get_no_of_fees({commit}, { numba, vueApp, classiSelected }) {
    commit('set_no_of_fees', {numba, classiSelected});
  },
  get_no_of_books({commit}, { numba, vueApp, classiSelected }) {
    commit('set_no_of_fees', {numba, classiSelected});
  },
  getBooks({commit, state}, { obj, year, vueApp, sum }) {
    const data = {obj, year, sum };
    db.collection("schoolfees")
    .doc()
    .set(data) // passing the user data to firestore
      vueApp.$router.push('/admin')
      state.no_of_fees_inputs = null
  },
  get_results({commit}, fields) {
    // db.collection('school_fees').doc().set(fields);
    commit('setResults', { fields, vueApp });
  },
  getFees({commit, state}, { obj, year, vueApp, sum }) {
    const data = {obj, year, sum };
    db.collection("schoolfees")
    .doc()
    .set(data) // passing the user data to firestore
      vueApp.$router.push('/admin')
      state.no_of_fees_inputs = null
  }

  }
});
export default store;
