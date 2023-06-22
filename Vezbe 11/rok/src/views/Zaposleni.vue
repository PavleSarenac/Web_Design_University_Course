<template>
    <div>
        <h1>Add</h1>
        <form action="">
            <table>
                <tr>
                    <td>Naziv:</td>
                    <td>
                        <input type="text" name="naziv" required v-model="naziv">
                    </td>
                </tr>
                <tr>
                    <td>Kolicina:</td>
                    <td>
                        <input type="text" name="kol" required v-model="kolicina">
                    </td>
                </tr>
                <tr>
                    <td>Cena:</td>
                    <td>
                        <input type="text" name="cena" required v-model="cena">
                    </td>
                </tr>
                <tr>
                    <td>Tip:</td>
                    <td>
                        <select name="tip" v-model="tip">
                            <option>jednogodisnja</option>
                            <option>visegodisnja</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button @click="add()">Add</button>
                    </td>
                </tr>
            </table>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Zaposleni",
        data() {
            return {
                naziv: "",
                kolicina: "",
                cena: "",
                tip: "",
                products: []
            }
        },
        methods: {
            add() {
                let product = {
                    naziv: this.naziv,
                    kolicina: parseInt(this.kolicina),
                    cena: parseInt(this.cena),
                    tip: this.tip
                };

                let found = false;
                for (let i = 0; i < this.products.length; i++) {
                    if (this.products[i].naziv == product.naziv) {
                        found = true;
                        this.products[i].kolicina += product.kolicina;
                    }
                }

                if (!found) {
                    this.products.push(product);
                }

                localStorage.setItem("products", JSON.stringify(this.products));
            }
        },
        created() {
            if (localStorage.getItem("products") == null) {
                this.products = [];
                localStorage.setItem("products", JSON.stringify(this.products));
            } else {
                this.products = JSON.parse(localStorage.getItem("products"));
            }
        }
    }
</script>
