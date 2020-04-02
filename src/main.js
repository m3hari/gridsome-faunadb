import "cross-fetch/polyfill";

import DefaultLayout from "~/layouts/Default.vue";

import VueApollo from "vue-apollo";
import ApolloClient from "apollo-boost";

export default function(Vue, { router, head, isClient, appOptions }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);

  Vue.use(VueApollo);

  appOptions.apolloProvider = new VueApollo({
    defaultClient: new ApolloClient({
      uri: "https://fakeql.com/graphql/4956b6d2b5eefad5422d6ba570947f50"
    })
  });
}
