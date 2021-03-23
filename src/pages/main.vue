<template>
  <div>
    <side-layout>
      <div class="content">
        <h1>Vue Study - 3rd</h1>
        <ul>
          <li>Vuejs 설치</li>
          <li>Vuejs 프로젝트 생성</li>
          <li>Routing</li>
        </ul>
      </div>
    </side-layout>
  </div>
</template>

<script>
import SideLayout from "@/layouts/sideLayout"

export default {
  name: "Main",
  components: { SideLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>