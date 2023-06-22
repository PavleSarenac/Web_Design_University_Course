<template>
    <div class="admin">
        <h3>Add user</h3>
        <div class="addUserTable">
            <table>
                <tr>
                    <td>Firstname:</td>
                    <td>
                        <input type="text" name="firstname" v-model="firstname">
                    </td>
                </tr>
                <tr>
                    <td>Lastname:</td>
                    <td>
                        <input type="text" name="lastname" v-model="lastname">
                    </td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td>
                        <input type="text" name="username" v-model="username">
                    </td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>
                        <input type="text" name="password" v-model="password">
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button class="btn btn-success" @click="addUser()">Add user</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<style scoped>
    .addUserTable {
        display: flex;
        justify-content: center;
    }
</style>

<script>
    export default {
        name: "Admin",
        data() {
            return {
                firstname: "",
                lastname: "",
                username: "",
                password: "",
                myUsers: []
            }
        },
        methods: {
            addUser() {
                this.myUsers.push({
                    "firstname": this.firstname,
                    "lastname": this.lastname,
                    "username": this.username,
                    "password": this.password,
                    "type": 0
                });
                localStorage.setItem("allUsers", JSON.stringify(this.myUsers));
            }
        },
        created() {
            this.myUsers = JSON.parse(localStorage.getItem("allUsers"));
        }
    }
</script>
