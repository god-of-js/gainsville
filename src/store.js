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
      store.dispatch('selectClassResults')
    })()
    : null;
});
let user = window.localStorage.getItem('currentUser') // getting item from local storage
const store = new Vuex.Store({
  state: {
    user: user ? JSON.parse(user) : [], //local storage current user 
    currentUser: null,
    studentsCollection: [],
    adminCollection: [],
    messages: [],
    adminMessages: [],
    field: [],
    noOfFeesInputs: null,
    noOfResultsInputs: null,
    noOfBooksInputs: null,
    schoolFees: null,
    schoolBooks: null,
    selectedClass: [],
    resultRecieverId: null,
    noOfResultFields: null
  },
  mutations: {
    setCurrentUser: (state, val) => {
      state.currentUser = val;
    },
    setStudentsCollection(state, val) {
      state.studentsCollection = val;
    },
    setAdminCollection(state, val) {
      state.adminCollection = val;
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
    setClassResults(state, { studentCollection, fields }) {
      state.selectedClass = studentCollection;
      state.noOfResultFields = fields
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
    },
    setStudentIdForResult(state, id) {
      state.resultRecieverId = id
    }
  },
  actions: {
    //create user
    createUserProfile({ commit }, { vueApp, user }) {
      //the students data
      const userData = {
        fname: vueApp.fname,
        mname: vueApp.mname,
        lname: vueApp.lname,
        email: vueApp.email,
        userId: user.uid,
        state: null,
        classi: null,
        gender: null,
        gnum: null,
        guardiansName: null,
        isStudent: true,
        isAdmin: false,
        deleted: false
      };
      //adding to firestore collection creating the gainsville collection

      db.collection("gainsville")
        .doc(userData.userId)
        .set(userData) // passing the user data to firestore
        .then(() => {
          window.localStorage.setItem('currentUser', JSON.stringify(userData))
          user = window.localStorage.getItem('currentUser')
          const userStore = JSON.parse(user);
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
    // user info update
    updateInfo({ state }, { userData, userDb, vueApp }) {

      userDb.state = userData.state;
      userDb.classi = userData.classi;
      userDb.gender = userData.gender;
      userDb.gnum = userData.gnum;
      userDb.guardiansName = userData.guardiansName

      db.collection("gainsville")
        .doc(state.currentUser.userId)
        .set(userDb)
        .then(() => {
          vueApp.$router.push("/studentdashboard");
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
        })
    },
    //delete user from admin
    deleteUser({ commit }, { student, vueApp, id }) {
      if (student.deleted === false) {
        student.deleted = true;
        student.isAdmin = false;
        student.isStudent = false
        db.collection('gainsville').doc(id).set(student)
        const Toast = vueApp.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          type: "success",
          title: "Deleted student from Database"
        });
        Toast.fire({
          type: "success",
          title: "Student successfully deleted"
        });
      } else if (student.deleted === true) {
        student.deleted = false;
        student.isAdmin = false;
        student.isStudent = true
        db.collection('gainsville').doc(id).set(student)
        const Toast = vueApp.$swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          type: "success",
          title: "Deleted student from Database"
        });
        Toast.fire({
          type: "success",
          title: "Student successfully restored"
        });

      }

    },
    //login to ckeck if the person is an admin or user or has been deleted
    adminCheck({ commit, state }, { vueApp, user }) {
      db.collection("gainsville")
        .where("userId", "==", user.uid)
        .get()
        .then(query => {
          query.forEach(doc => {
            window.localStorage.setItem('currentUser', JSON.stringify(doc.data()))
            const user = window.localStorage.getItem('currentUser');
            const userStore = JSON.parse(user);
            commit('setLocalStorageUser', userStore)
            if (state.user.deleted == true) {
              vueApp.$router.push('/login')
              alert('This student has been deleted from the school database contact the school for further info')
            } else {
              if (state.user.isAdmin === true) {
                commit("setAdmin", doc.data());
                vueApp.$router.push("/admin");
                const Toast = vueApp.$swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  type: 'success',
                  title: 'Signed in successfully'
                })
                Toast.fire({
                  type: "success",
                  title: "Successfully logged in"
                })

              } else if (state.user.isStudent === true) {
                commit("setCurrentUser", doc.data());
                vueApp.$router.push("/studentdashboard");
                const Toast = vueApp.$swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  type: 'success',
                  title: 'Signed in successfully'
                })
                Toast.fire({
                  type: "success",
                  title: "Successfully logged in"
                })
              } else vueApp.$router.push("/login");

            }
          });
        });
    },
    //to get user profile from database 
    getUserProfile({ commit }, uid) {
      db.collection("gainsville")
        .where("userId", "==", uid) //checking if the userid is equal to the user id in firestore
        .get()
        .then(query => {
          query.forEach(doc => {
            window.localStorage.setItem('currentUser', JSON.stringify(doc.data()))
            commit("setCurrentUser", doc.data());
          });
        });
    },
    // to make an admin from admin
    makeAdmin({ commit }, { userData, vueApp }) {
      if (userData.isAdmin === false) {
        userData.isStudent = false;
        userData.isAdmin = true
        db.collection('gainsville')
          .doc(userData.userId)
          .set(userData).then(() => {
            const Toast = vueApp.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              type: "success",
              title: "Deleted student from Database"
            });
            Toast.fire({
              type: "success",
              title: "Student successfully turned Admin"
            });
          })
      } else if (userData.isAdmin === true) {
        userData.isStudent = true;
        userData.isAdmin = false;
        db.collection('gainsville')
          .doc(userData.userId)
          .set(userData).then(() => {
            const Toast = vueApp.$swal.mixin({
              toast: true,
              position: "top-end",
              showConfirmButton: false,
              timer: 3000,
              type: "success",
              title: "Deleted student from Database"
            });
            Toast.fire({
              type: "success",
              title: "Admin successfully turned student"
            });
          })

      }
    },
    // to get the list of all students in the database
    getStudentCollection({ commit }) {
      const studentArr = [];
      db.collection("gainsville")
        .where('isAdmin', '==', false)
        .get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            studentArr.push(doc.data())
            commit("setStudentsCollection", studentArr)
          })
        })
    },
    //getting admin collection where admin equals true
    getAdminCollection({ commit, state }) {
      const adminArr = [];
      db.collection("gainsville")
        .where('isAdmin', '==', true)
        .get()
        .then((snapshot) => {
          snapshot.forEach(doc => {
            adminArr.push(doc.data())
            commit("setAdminCollection", adminArr)
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
    // to get number of fees to input
    getNoOfFees({ commit }, { numba, classiSelected }) {
      commit('setNoOfFees', { numba, classiSelected });
    },
    // to get number of books 
    getNoOfBooks({ commit }, { numba, classiSelected }) {
      commit('setNoOfBooks', { numba, classiSelected });
    },

    getBooks({ state }, { obj, year, vueApp, sum }) {
      const inputs = Number(state.noOfBooksInputs)
      const data = { obj, year, sum, inputs };
      db.collection("schoolBooks")
        .doc()
        .set(data) // passing the user data to firestore
      vueApp.$router.push('/admin')
      state.noOfBooksInputs = null
    },
    //to select the class to upload their school fees
    selectClassResults({ commit }, { vueApp, student, fields }) {
      console.log(vueApp)
      const studentCollection = [];
      studentCollection.push(student)
      commit('setClassResults', { studentCollection, fields })
      vueApp.$router.push('/inputresults')
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
