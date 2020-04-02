<template>
  <Layout>
    <div>
      <h1>Products</h1>
      <div v-if="$apollo.queries.products.loading">
        loading ...
      </div>
      <div v-else class="container">
        <div class="card" v-for="item in products" :key="item._id">
          <h3>{{ item.name }} x {{ item.quantity }}</h3>
          <div>{{ item.description }}</div>
          <div>
            Price: <span>${{ item.price }}</span>
          </div>
          <div>
            Location:<strong> {{ item.storehouse.name }} </strong>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import { gql } from "apollo-boost";
export default {
  metaInfo: {
    title: "Products list"
  },
  data() {
    return {
      products: []
    };
  },
  apollo: {
    products: {
      query: gql`
        query {
          allProducts {
            data {
              _id
              name
              description
              backordered
              quantity
              price
              storehouse {
                name
              }
            }
          }
        }
      `,
      update({ allProducts }) {
        return allProducts.data;
      }
    }
  }
};
</script>

<style>
.container {
  display: flex !important;
}
.card {
  width: 200px;
  background: gray;
  padding: 4px 16px;
  margin: 6px;
  border-radius: 8px;
}
</style>
