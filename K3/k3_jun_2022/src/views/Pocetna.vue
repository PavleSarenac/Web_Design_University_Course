<template>
    <div id="pocetna">
        <table>
            <tr>
                <td>
                    <input required type="text" v-model="username" placeholder="Unesite korisnicko ime...">
                </td>
            </tr>
            <tr>
                <td>
                    <input required type="password" v-model="password" placeholder="Unesite lozinku...">
                </td>
            </tr>
            <tr>
                <td>
                    <select required v-model="type">
                        <option>nastavnik</option>
                        <option>student</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td colspan="2">
                    <button @click="login()">Login</button>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error"> {{ somethingMissingError }} </span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error"> {{ usernameError }} </span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error"> {{ passwordError }} </span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error"> {{ typeError }} </span>
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    #pocetna {
        display: flex;
        justify-content: center;
    }

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
                type: "",
                users: [],
                usernameError: "",
                passwordError: "",
                typeError: "",
                somethingMissingError: ""
            }
        },
        methods: {
            login() {
                this.usernameError = "";
                this.passwordError = "";
                this.typeError = "";
                this.somethingMissingError = "";
                if (this.username == "" || this.password == "" || this.type == "") {
                    this.somethingMissingError = "Morate uneti sve podatke.";
                    return;
                }
                let usernameFound = false;
                let passwordFound = false;
                for (let i = 0; i < this.users.length; i++) {
                    if (this.username == this.users[i].username) {
                        usernameFound = true;
                        if (this.password == this.users[i].password) {
                            passwordFound = true;
                            if (this.type == this.users[i].type) {
                                if (this.type == "student") {
                                    localStorage.setItem("loggedInStudent", JSON.stringify({
                                        username: this.username
                                    }));
                                    this.$router.push("/student");
                                } else {
                                    this.$router.push("/nastavnik");
                                }
                            }
                        }
                    }
                }
                if (!usernameFound) {
                    this.usernameError = "Korisnicko ime ne postoji u bazi.";
                } else if (!passwordFound) {
                    this.passwordError = "Uneli ste pogresnu lozinku.";
                } else {
                    this.typeError = "Uneli ste pogresan tip korisnika.";
                }
            }
        },
        created() {
            localStorage.removeItem("loggedInStudent");
            if (localStorage.getItem("users") == null) {
                this.users = [
                    {
                        username: "maki",
                        password: "maki123",
                        type: "nastavnik"
                    },
                    {
                        username: "aki",
                        password: "aki123",
                        type: "student"
                    },
                    {
                        username: "jelica",
                        password: "jelica123",
                        type: "student"
                    }
                ];
                localStorage.setItem("users", JSON.stringify(this.users));
            } else {
                this.users = JSON.parse(localStorage.getItem("users"));
            }
        }
    }
</script>
