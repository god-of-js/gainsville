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
        <v-text-field label="Name" required type="text" v-model="adminname"></v-text-field>
        <v-text-field label="E-mail" type="email" required v-model="adminemail"></v-text-field>
        <v-text-field label="password" required type="password" v-model="adminpassword"></v-text-field>
        <v-flex>
          <v-btn :loading="loading" color="success" type="submit" width="400" class=" mx-auto">Add Admin</v-btn>
        </v-flex>
      </v-form>
    </v-container>
    <v-container id="superadmin" class="mt-2 pl-12 pr-12 pt-6 pb-6">
      <v-form ref="form" action="submit" @submit="superadmincreate">
        <v-text-field label="Name" required type="text" v-model="superadminname"></v-text-field>
        <v-text-field label="E-mail" type="email" required v-model="superadminemail"></v-text-field>
        <v-text-field label="password" required type="password" v-model="superadminpassword"></v-text-field>
        <v-flex>
          <v-btn :loading="loading" color="primary" type="submit" width="400" class="mx-auto">Add Super Admin</v-btn>
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
    data: () => {
        return {
        adminname: null,
        adminemail: null,
        isSuperAdmin: true,
        isAdmin: true,
        adminpassword: null,
        superadminemail: null,
        superadminpassword: null,
        superadminname: null,
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
        this.loading = !this.loading;
        const userData = {
            name: this.superadminname,
            email: this.superadminemail,
            isSuperAdmin: this.isSuperAdmin
        }
        auth.createUserWithEmailAndPassword(this.superadminemail, this.superadminpassword)
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
            title: "Super Admin Added successfully"
          });
          Toast.fire({
            type: "success",
            title: "Added Successfully"
          });
        })
        .catch((e) => {
            console.log(e)
        })
    },
    admincreate(e) {
        e.preventDefault()
        this.loading = !this.loading;
        const userData = {
            name: this.adminname,
            email: this.adminemail,
            isAdmin: this.isAdmin
        }
        auth.createUserWithEmailAndPassword(this.adminemail, this.adminpassword)
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
            console.log(e)
        })
    }
}
}
</script>