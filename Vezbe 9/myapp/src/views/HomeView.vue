<template>
  <div class="home">
    <h1 :class="h1class">Welcome to our online bookstore {{bookStoreName}}</h1>
    <br>
    <button class="btn btn-success" @click="openLoginModal()">Sign in</button>
    <hr>
    <ShowBooks></ShowBooks>
    <VueFinalModal v-model="showModal" name="loginModal" classes="modal-container" content-class="modal-content">
      <button class="modal__close" @click="showModal = false">X</button>
      <span class="modal__title">Login Modal</span>
      <table>
        <tr>
          <td>Username:</td>
          <td>
            <input type="text" name="username" v-model="username">
          </td>
        </tr>
        <tr>
          <td>Password:</td>
          <td>
            <input type="password" name="password" v-model="password">
          </td>
        </tr>
        <tr>
          <td colspan="2">
            <button @click="confirm()" class="btn btn-success">Confirm</button>
          </td>
        </tr>
      </table>
    </VueFinalModal>
  </div>
</template>

<style scoped>
  .extraClass {
    color: darkgreen;
  }
  ::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
  }
  ::v-deep .modal-content {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
    padding: 1rem;
    border: 1px solid #e2e8f0;
    border-radius: 0.25rem;
    background: #fff;
    width: initial;
  }
  .modal__title {
    margin: 0 2rem 0 0;
    font-size: 1.5rem;
    font-weight: 700;
  }
  .dark-mode div::v-deep .modal-content {
    border-color: #2d3748;
    background-color: #1a202c;
  }
  .modal__close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  }
</style>

<script>
  import ShowBooks from "@/components/ShowBooks.vue"
  import { $vfm, VueFinalModal, ModalsContainer } from "vue-final-modal"
  import allUsers from "../data/users.js"

  export default {
    name: "HomeView",
    components: {
      ShowBooks,
      VueFinalModal,
      ModalsContainer
    },
    data() {
      return {
        bookStoreName: "Vulkan",
        h1class: "extraClass",
        showModal: false,
        username: "",
        password: ""
      }
    },
    methods: {
      hello(name) {
        alert(name);
      },
      openLoginModal() {
        $vfm.show("loginModal");
      },
      confirm() {
        let user = allUsers.find(user => user.username == this.username && user.password == this.password);
        if (user) {
          alert(user.firstname);
        } else {
          alert("Username is not in the database.");
        }
      }
    }
  }
</script>
