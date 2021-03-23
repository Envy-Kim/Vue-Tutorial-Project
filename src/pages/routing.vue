<template>
  <div>
    <side-layout>
      <div class="content">
        <h1>Routing</h1>
        <span>Vue Study 3주차 과제</span>
      </div>
    </side-layout>
  </div>
</template>

<script>
import SideLayout from "@/layouts/sideLayout"

export default {
  name: "Routing",
  components: { SideLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>