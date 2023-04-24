<script>
import AppHeader from "./components/AppHeader.vue";
import AppFilters from "./components/AppFilters.vue";
import CardsList from "./components/CardsList.vue";

import axios from "axios";
import { store } from "./store";

export default {
  components: {
    AppHeader,
    CardsList,
    AppFilters,
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
  methods: {
    handleSearch() {
      this.store.loading = true;
      this.store.error = "";
      axios
        .get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0", {
          params: {
            num: 10,
            offset: 0,
            archetype: store.selectedArchetype,
          },
        })
        .then((resp) => {
          this.store.cards = resp.data.data;
        })
        .catch((error) => {
          this.store.error = "Selezione non disponibile";
        })
        .finally(() => {
          this.store.loading = false;
        });
    },
  },
};
</script>

<template>
  <AppHeader title="Vite Yu-Gi-Oh" />

  <AppFilters @search="handleSearch" />
  <h2 class="text-center" v-if="store.error">{{ store.error }}</h2>
  <CardsList />
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
