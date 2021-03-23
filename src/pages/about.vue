<template>
  <div>
    <side-layout>
      <div class="content">
        <h1>About</h1>
        <span>Frontend Study 3주차 과제</span>
      </div>
    </side-layout>
  </div>
</template>

<script>
import SideLayout from "@/layouts/sideLayout"

export default {
  name: "About",
  components: { SideLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>