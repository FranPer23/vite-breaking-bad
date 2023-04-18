<script>
import SingleCard from "./SingleCard.vue";
import { store } from "../store";

export default {
  name: "CardsList",
  components: {
    SingleCard,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row row-cols-4 g-4">
      <div class="col" v-for="card in store.cards" :key="card.id">
        <SingleCard :cardObj="card" />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  margin-top: 3rem;
  background-color: white;
  height: auto;
  width: 70%;
}
</style>
