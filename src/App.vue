<script>
import AppHeader from "./components/AppHeader.vue";
import CardsList from "./components/CardsList.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    CardsList,
  },
  data() {
    return {
      store,
    };
  },
  mounted() {
    axios
      .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
      .then((resp) => {
        this.store.cards = resp.data.data;
      });
  },
};
</script>

<template>
  <AppHeader title="Vite Yu-Gi-Oh" />
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
