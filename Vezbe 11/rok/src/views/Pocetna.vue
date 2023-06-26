<template>
    <div>
        <h1>Login</h1>
        <table>
            <tr>
                <td>Username:</td>
                <td>
                    <input type="text" name="username" v-model="username">
                </td>
            </tr>
            <tr>
                <td>Password:</td>
                <td><input type="password" name="password" v-model="password"></td>
            </tr>
            <tr>
                <td colspan="2">
                    <button class="btn btn-success" @click="login()">Login</button>
                </td>
            </tr>
            <tr>
                <td colspan="2" class="error">
                    {{error}}
                </td>
            </tr>
        </table>
        <hr>
        <h1>Registracija</h1>
        <form action="">
            <table>
                <tr>
                    <td>Firstname:</td>
                    <td>
                        <input required type="text" name="firstnameR" v-model="firstnameR">
                    </td>
                </tr>
                <tr>
                    <td>Lastname:</td>
                    <td>
                        <input required type="text" name="lastnameR" v-model="lastnameR">
                    </td>
                </tr>
                <tr>
                    <td>Username:</td>
                    <td>
                        <input required type="text" name="usernameR" v-model="usernameR">
                    </td>
                </tr>
                <tr>
                    <td>Password:</td>
                    <td>
                        <input required type="text" name="passwordR" v-model="passwordR">
                    </td>
                </tr>
                <tr>
                    <td>Type:</td>
                    <td>
                        <select required name="typeR" v-model="typeR">
                            <option value="b">Kupac</option>
                            <option value="w">Zaposleni </option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button @click="register()">
                            Register
                        </button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<style scoped>
    .error {
        color: red;
    }
</style>

<script>
    export default {
        name: "Pocetna",
        data() {
            return {
                username: "",
                password: "",
                error: "",
                allUsers: [],
                firstnameR: "",
                lastnameR: "",
                usernameR: "",
                passwordR: "",
                typeR: ""
            }
        },
        methods: {
            login() {
                let found = false;
                for (let i = 0; i < this.allUsers.length; i++) {
                    if (this.allUsers[i].username == this.username && this.allUsers[i].password == this.password) {
                        found = true;
                        if (this.allUsers[i].type == "b") {
                            localStorage.setItem("loggedInBuyer", this.allUsers[i].username);
                            this.$router.push("kupac");
                        } else {
                            this.$router.push("zaposleni");
                        }
                    }
                }
                if (this.username == "") {
                    this.error = "Username is necessary.";
                } 
                if (this.password == "") {
                    this.error += "Password is necessary.";
                }
                if (!found && this.username != "" && this.password != "") {
                    this.error += "No users in the database.";
                }
            },
            register() {
                let user = {
                    firstname: this.firstnameR,
                    lastname: this.lastnameR,
                    username: this.usernameR,
                    password: this.passwordR,
                    type: this.typeR
                };
                this.allUsers.push(user);
                localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
            }
        },
        created() {
            if (localStorage.getItem("allUsers") == null) {
                this.allUsers = [
                    {
                        firstname: "pera",
                        lastname: "peric",
                        username: "pera",
                        password: "pera123",
                        type: "b"
                    },
                    {
                        firstname: "zika",
                        lastname: "zikic",
                        username: "zika",
                        password: "zika123",
                        type: "b"
                    },
                    {
                        firstname: "admin",
                        lastname: "admin",
                        username: "admin",
                        password: "admin123",
                        type: "w"
                    }
                ];
                localStorage.setItem("allUsers", JSON.stringify(this.allUsers));
            } else {
                this.allUsers = JSON.parse(localStorage.getItem("allUsers"));
            }
        }
    }
</script>
