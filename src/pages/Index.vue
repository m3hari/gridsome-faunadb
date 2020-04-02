<template>
  <Layout>
    <div>
      <h1>Posts</h1>
      <div v-if="$apollo.queries.posts.loading">
        loading ...
      </div>
      <ul v-else>
        <li v-for="item in posts" :key="item.id">
          {{ item.title }}
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
import { gql } from "apollo-boost";
export default {
  metaInfo: {
    title: "Posts list"
  },
  data() {
    return {
      posts: []
    };
  },
  apollo: {
    posts: {
      query: gql`
        query {
          posts {
            id
            title
          }
        }
      `
    }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
