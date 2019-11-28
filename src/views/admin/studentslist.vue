<template>
  <v-content color="white">
    <v-expansion-panels>
      <v-expansion-panel v-for="student in studentsCollection" :key="student.userId">
        <v-expansion-panel-header>
          <span>
            <span class="mr-4">{{ student.lname }} {{ student.fname }} {{ student.mname }}</span>
            <v-btn icon @click="deleteUser(student.userId)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Address:</span>
              <span>{{ student.address }}</span>
            </span>
            <span>
              <v-btn icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Class:</span>
              <span>{{ student.classi }}</span>
            </span>
            <span>
              <v-btn icon width="50">
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
              <span></span>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">State:</span>
              <span>{{ student.state }}</span>
            </span>
            <span>
              <v-btn icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Gender:</span>
              <span>{{ student.gender }}</span>
            </span>
            <span>
              <v-btn icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Email:</span>
              <span>{{ student.email }}</span>
            </span>
            <span>
              <v-btn icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Guardian's Name:</span>
              <span>{{ student.guardiansName }}</span>
            </span>
            <span>
              <v-btn icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Guardian's Number:</span>
              <span>{{ student.gnum }}</span>
            </span>
            <span>
              <v-btn icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Student:</span>
              <span>{{ student.isStudent }}</span>
            </span>
            <span>
              <v-btn icon>
                <v-icon>mdi-pencil-outline</v-icon>
              </v-btn>
            </span>
          </div>
          <v-divider class="mt-2 mb-2"></v-divider>
          <div class="d-flex justify-space-between">
            <span>
              <span class="mr-4">Admin:</span>
              <span>{{ student.isAdmin }}</span>
            </span>
            <span>
              <v-btn icon>
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
import { mapState } from "vuex";
import { db } from "@/plugins/firebase/firebaseinit.js";
export default {
  computed: {
    ...mapState(["studentsCollection"])
  },
  beforeMount() {
    this.$store.dispatch("getStudentCollection");
  },
  methods: {
    deleteUser(id) {
        db.collection('gainsville')
        .where('userId', '==', id)
        .get()
        .then(query => {
            query.forEach(element => {
                const student = element.data();
                let vueApp = this;
                this.$store.dispatch('deleteUser', {student, vueApp, id})
            });
        
        }).catch((e) => {
            alert(e)
        });
    }
  }
};
</script>
<style>
#personal {
  padding-left: 30px;
}
hr {
  color: hsv(0, 6%, 86%);
}
.hide {
  display: none;
}
</style>