<template>
 <v-content>
    <v-card width="500" class="mx-auto background mt-12 pb-6">
     <v-action>
     <v-tab> </v-tab>
        <v-btn @click="admin()" width="250" class="pt-4 pb-8"> Admin</v-btn> 
        <v-btn @click="superAdmin()" width="250" class="pt-4 pb-8"> Super Admin </v-btn> 
    </v-action>

    <v-container>
     <v-container id="admin" class="mt-2 pl-12 pr-12 pt-6 pb-6">
      <v-form ref="form" action="submit" @submit="admincreate">
        <v-text-field label="Name" required type="text" v-model="name"></v-text-field>
        <v-text-field label="E-mail" type="email" required v-model="email"></v-text-field>
        <v-text-field label="password" required type="password" v-model="password"></v-text-field>
        <v-flex>
          <v-btn :loading="loading" color="success" type="submit" width="400" class=" mx-auto">Add Admin</v-btn>
        </v-flex>
      </v-form>
    </v-container>
    <v-container id="superadmin" class="mt-2 pl-12 pr-12 pt-6 pb-6">
      <v-form ref="form" action="submit" @submit="superadmincreate">
        <v-text-field label="Name" required type="text" v-model="name"></v-text-field>
        <v-text-field label="E-mail" type="email" required v-model="email"></v-text-field>
        <v-text-field label="password" required type="password" v-model="password"></v-text-field>
        <v-flex>
          <v-btn  color="primary" :loading="loading" type="submit" width="400" class="mx-auto">Add Super Admin</v-btn>
        </v-flex>
      </v-form>
        </v-container>
    </v-container>
  </v-card>
 </v-content>
</template>
<style scoped>
#admin {
    display: block;
}
#superadmin{
    display: none;
}
 </style>
<script>
import { auth, db } from "@/plugins/firebase/firebaseinit.js"
export default {
    name: "add-admin",
    data: () => {
        return {
         name: null,
         email: null,
         password: null,
         isSuperAdmin: false,
         isAdmin: true,
         loading: false
        }
    },
methods:{
    admin() {
        var admin = document.getElementById("admin");
        var superAdmin = document.getElementById("superadmin");
        admin.style.display = "block"
        superAdmin.style.display ="none"
    },
     superAdmin() {
        var admin = document.getElementById("admin");
        var superAdmin = document.getElementById("superadmin");
        admin.style.display = "none"
        superAdmin.style.display ="block"
    },
    superadmincreate(e) {
        e.preventDefault()
        this.loading != this.loading
        const userData = {
            name: this.name,
            email: this.email,
            isSuperAdmin: this.isSuperAdmin
        }
        auth.createUserWithEmailAndPassword(this.email, this.password)
        db.collection("gainsville")
        .doc()
        .set(userData)
        .then(() => {
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            type: "success",
            title: "Added successfully"
          });
          Toast.fire({
            type: "success",
            title: "Admin Added Successfully"
          });
        })
        .catch((e) => {
          this.loading = !this.loading;
        })
    },
    admincreate(e) {
        e.preventDefault()
        this.loading != this.loading
        const userData = {
            name: this.name,
            email: this.email,
            isAdmin: this.isAdmin
        }
        auth.createUserWithEmailAndPassword(this.email, this.password)
        db.collection("gainsville")
        .doc()
        .set(userData)
        .then(() => {
          this.loading = !this.loading;
          const Toast = this.$swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            type: "success",
            title: "Added successfully"
          });
          Toast.fire({
            type: "success",
            title: "Admin Added Successfully"
          });
        })
        .catch((e) => {
          this.loading != this.loading
        })
    }
}
}
</script>