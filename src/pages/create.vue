<template>
  <div>
    <sub-layout>
      <div class="content">
        <h1>Create Vue Project</h1>
        <span>Vue Study 3주차 과제</span>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/index"

export default {
  name: "Create",
  components: {SubLayout},
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>