<template>
  <div>
    <v-nav type="horizontal"/>
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import VNav from "@/components/VNavigation";

export default {
  name: "VLayout",
  components: {VNav}
}
</script>

<style scoped>

</style>