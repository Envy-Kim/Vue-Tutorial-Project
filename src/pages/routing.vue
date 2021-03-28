<template>
  <div>
    <main-layout>
      <div class="content">
        <h1>Routing</h1>
        <span>Vue Study 3주차 과제</span>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "@/components/layouts/main/index"

export default {
  name: "Routing",
  components: { MainLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px auto 300px;
}
</style>