<template>
    <v-content>
          <v-expansion-panels>
      <v-expansion-panel v-for="admin in adminCollection" :key="admin.userId">
        <v-expansion-panel-header>
          <span>
            <span class="mr-4">{{ admin.lname }} {{ admin.fname }} {{ admin.mname }}</span>
            <v-btn icon @click="deleteUser(student.userId)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Address:</span>
              <span>{{ admin.address }}</span>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Email:</span>
              <span>{{ admin.email }}</span>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Deleted:</span>
              <span>{{ admin.deleted }}</span>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Admin:</span>
              <span>{{ admin.isAdmin }}</span>
            </span>
            <span>
              <v-btn icon @click="admin(admin.userId)">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-content>
</template>
<script>
import { mapState } from 'vuex'
export default {
    beforeMount() {
    this.$store.dispatch("getStudentCollection");
  },
    computed:{
        ...mapState(['adminCollection'])
    }
}
</script>