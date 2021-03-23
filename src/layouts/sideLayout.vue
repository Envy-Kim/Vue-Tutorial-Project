<template>
  <div>
    <side-nav />
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import SideNav from "@/components/sideNav";

export default {
  name: "VLayout",
  components: {SideNav}
}
</script>

<style scoped>
.container {
  margin-left: 300px;
}
</style>