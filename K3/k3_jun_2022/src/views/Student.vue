<template>
    <div id="student">
        <table>
            <tr v-for="grade in myGrades" :key="grade.subject" :class="parseInt(grade.grade) == 10 ? 'green' : ''">
                <td>Predmet: {{ grade.subject }}</td>
                <td>Ocena: {{ grade.grade }}</td>
                <td><button :disabled="parseInt(grade.grade) == 10 ? true : false" 
                            @click="deleteGrade(grade.subject)"><i>Poništi</i></button></td>
            </tr>
        </table>
    </div>
</template>

<style scoped>
    #student {
        display: flex;
        justify-content: center;
    }

    .green {
        background-color: lightgreen;
    }
</style>

<script>
    export default {
        name: "Student",
        data() {
            return {
                grades: [],
                myGrades: [],
                username: ""
            }
        },
        created() {
            this.username = JSON.parse(localStorage.getItem("loggedInStudent")).username;
            if (localStorage.getItem("grades") != null) {
                this.grades = JSON.parse(localStorage.getItem("grades"));
                for (let i = 0; i < this.grades.length; i++) {
                    if (this.grades[i].username == this.username) {
                        this.myGrades.push(this.grades[i]);
                    }
                }  
            }
        },
        methods: {
            deleteGrade(subject) {
                for (let i = 0; i < this.grades.length; i++) {
                    if (this.grades[i].subject == subject && this.grades[i].username == this.username) {
                        this.grades.splice(i, 1);
                        localStorage.setItem("grades", JSON.stringify(this.grades));
                        break;
                    }
                }
                for (let i = 0; i < this.myGrades.length; i++) {
                    if (this.myGrades[i].subject == subject && this.myGrades[i].username == this.username) {
                        this.myGrades.splice(i, 1);
                        break;
                    }
                }
            }
        }
    }
</script>
