<script>
export default {
  name: "Card",
  props: {
    card: Object,
  },
};
</script>

<template>
  <div class="text-center">
    <img class="" :src="card.image" alt="" />
    <h3 class="mb-3">{{ card.name }}</h3>
  </div>
</template>
