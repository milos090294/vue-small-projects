<template>
  <div>
    <h3>Order Summary</h3>
    <div class="content">
      <div v-if="orders && orders.length">
        <div class="order-data" v-for="order in orders" :key="order.title">
          <img :src="order.img_url" alt="" />
          <div>
            <p>{{ order.title }}</p>
            <p>{{ order.description }}</p>
            <b>{{ order.price }}</b>
          </div>
          <div @click="removeItem(order.title)" class="close">&times;</div>
        </div>
      </div>
      <h1 v-else>No order items</h1>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import data from "../assets/data/orders.json";

const orders = ref(data.orders);
const removeItem = (title) => {
  const index = orders.value.findIndex((item) => item.title === title);
  if (index !== -1) {
    orders.value.splice(index, 1);
  }
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 5px;
}

h3 {
  text-align: center;
}

.order-data {
  display: flex;
  justify-content: flex-start;
  position: relative;
}

.order-data img {
  margin-right: 1rem;
}

.close {
  position: absolute;
  right: 0.5rem;
  cursor: pointer;
}
</style>
