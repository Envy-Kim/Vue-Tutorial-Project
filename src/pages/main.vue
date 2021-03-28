<template>
  <div>
    <main-layout>
      <div class="content">
        <h1>Vue Study - 3rd</h1>
        <ul>
          <li>Vuejs 설치</li>
          <li>Vuejs 프로젝트 생성</li>
          <li>Routing</li>
        </ul>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "@/components/layouts/main/index"

export default {
  name: "Main",
  components: { MainLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px auto 300px;
}
</style>