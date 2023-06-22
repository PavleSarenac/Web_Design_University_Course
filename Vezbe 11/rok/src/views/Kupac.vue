<template>
    <div>
        <table>
            <tr>
                <th>Naziv</th>
                <th>Kolicina</th>
                <th>Tip</th>
                <th>Action</th>
            </tr>
            <tr v-for="product of products" :key="product.naziv" :class="product.tip == 'visegodisnja' ? 'boja' : ''">
                <td>{{ product.naziv }}</td>
                <td>{{ product.kolicina }}</td>
                <td>{{ product.tip }}</td>
                <td>
                    <button @click="method(product)">Action</button>
                </td>
            </tr>
        </table>
        <button @click="logout()">Logout</button>
    </div>
</template>

<style scoped>
    .boja {
        color: orange;
    }
</style>

<script>
    export default {
        name: "Kupac",
        data() {
            return {
                products: []
            }
        },
        created() {
            if (localStorage.getItem("products") == null) {
                this.products = [];
            } else {
                this.products = JSON.parse(localStorage.getItem("products"));
            }
        },
        methods: {
            method(product) {
                let index = this.products.indexOf(product);
                this.products.splice(index, 1);
            },
            logout() {
                localStorage.removeItem("loggedInBuyer");
                this.$router.push("/");
            }
        }
    }
</script>
