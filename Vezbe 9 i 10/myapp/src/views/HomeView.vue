<template>
  <div class="home">
    <h1 :class="h1class">
      Welcome to our online bookstore {{ bookStoreName }}
    </h1>
    <br />
    <button class="btn btn-success" @click="openLoginModal()">Sign in</button>
    <hr />
    <show-books></show-books>
    <div>
      <vue-final-modal v-model="showModal" name="loginModal" classes="modal-container" content-class="modal-content">
        <table width="100%" class="close">
          <tr>
            <td style="text-align: right">
              <button @click="showModal = false">X</button>
            </td>
          </tr>
        </table>
        <table>
          <tr>
            <td>Username:</td>
            <td>
              <input type="text" name="username" id="user" v-model="username"/>
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type="password" name="password" id="pass" v-model="password" />
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <button @click="confirm()">Confirm</button>
            </td>
          </tr>
        </table>
      </vue-final-modal>
    </div>
  </div>
</template>

<style scoped>
.close {
  background-color: gray;
}
.extraClass {
  color: darkgreen;
}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border: 1px solid #e2e8f0;
  border-radius: 0.25rem;
  background: #fff;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>

<script>
import ShowBooks from "../components/ShowBooks.vue";
import { VueFinalModal, $vfm } from "vue-final-modal";
import allUsers from '../data/users.js'
export default {
  components: { ShowBooks, VueFinalModal },
  name: "Home",
  data() {
    return {
      bookStoreName: "Booka",
      h1class: "extraClass",
      showModal: false,
      username: "",
      password: ""
    };
  },
  methods: {
    hello(name) {
      alert(name);
    },
    openLoginModal() {
      this.showModal = true;
      //$vfm.show("loginModal"); // ovo je ona na vezbama uradila, ne radi mi ovako
    },
    confirm() {
      var user = allUsers.find(user => user.username == this.username && user.password == this.password);
      if (user) {
        alert(user.firstname);
      } else {
        alert("error");
      }
    }
  },
};
</script>
