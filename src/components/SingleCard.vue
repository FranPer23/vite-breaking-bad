<script>
export default {
  name: "SingleCard",
  props: {
    cardObj: Object,
  },
};
</script>

<template>
  <div class="card">
    <img
      class="card-img-top"
      :src="cardObj.card_images[0].image_url_cropped"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ cardObj.name }}</h5>
      <p class="card-text">{{ cardObj.archetype }}</p>
    </div>
  </div>
</template>
