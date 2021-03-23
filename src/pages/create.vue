<template>
  <div>
    <default-layout>
      <div class="content">
        <h1>Create Project</h1>
        <span>Frontend Study 3주차 과제</span>
      </div>
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from "@/layouts/defaultLayout"

export default {
  name: "Create",
  components: {DefaultLayout},
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>