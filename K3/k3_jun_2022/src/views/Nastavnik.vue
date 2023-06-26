<template>
    <div id="nastavnik">
        <table>
            <tr>
                <td>
                    <input v-model="username" type="text" placeholder="Unesite korisnicko ime studenta...">
                </td>
            </tr>
            <tr>
                <td>
                    <input v-model="subject" type="text" placeholder="Unesite ime predmeta...">
                </td>
            </tr>
            <tr>
                <td>
                    <input v-model="grade" type="text" placeholder="Unesite ocenu...">
                </td>
            </tr>
            <tr>
                <td>
                    <button @click="unesi()">Potvrdi</button>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error">{{ studentNonExistent }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error">{{ studentAlreadyGraded }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error">{{ invalidGrade }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="error">{{ somethingMissingError }}</span>
                </td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    #nastavnik {
        display: flex;
        justify-content: center;
    }

    .error {
        color: red;
    }
</style>

<script>
    export default {
        name: "Nastavnik",
        data() {
            return {
                grade: "",
                username: "",
                subject: "",
                students: [],
                grades: [],
                studentNonExistent: "",
                studentAlreadyGraded: "",
                invalidGrade: "",
                somethingMissingError: ""
            }
        },
        created() {
            let users = JSON.parse(localStorage.getItem("users"));
            for (let i = 0; i < users.length; i++) {
                if (users[i].type == "student") {
                    this.students.push(users[i]);
                }
            }
            if (localStorage.getItem("grades") == null) {
                localStorage.setItem("grades", JSON.stringify(this.grades));
            } else {
                this.grades = JSON.parse(localStorage.getItem("grades"));
            }
        },
        methods: {
            unesi() {
                this.studentNonExistent = "";
                this.studentAlreadyGraded = "";
                this.invalidGrade = "";
                this.somethingMissingError = "";
                if (this.username == "" || this.subject == "" || this.grade == "") {
                    this.somethingMissingError = "Morate uneti sve podatke";
                    return;
                }
                if (parseInt(this.grade) < 6 || parseInt(this.grade) > 10) {
                    this.invalidGrade = "Ocena mora biti u opsegu od 6 do 10.";
                    return;
                }

                let usernameFound = false;
                let alreadyGradedForSubject = false;

                firstLoop:
                for (let i = 0; i < this.students.length; i++) {
                    if (this.username == this.students[i].username) {
                        usernameFound = true;
                        for (let j = 0; j < this.grades.length; j++) {
                            if (this.username == this.grades[j].username && this.subject == this.grades[j].subject) {
                                alreadyGradedForSubject = true;
                                break firstLoop;
                            }
                        }
                        this.grades.push({
                            username: this.username,
                            subject: this.subject,
                            grade: this.grade
                        });
                        localStorage.setItem("grades", JSON.stringify(this.grades));
                    }   
                }

                if (!usernameFound) {
                    this.studentNonExistent = "Student ne postoji u bazi.";
                } else if (alreadyGradedForSubject) {
                    this.studentAlreadyGraded = "Student vec ima ocenu iz unetog predmeta.";
                }
            }
        }
    }
</script>
