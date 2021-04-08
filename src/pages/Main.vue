<template>
  <div>
    <sub-layout>
      <div class="content">
        <h1>Vue Study</h1>
        <ul>
          <li>Vuejs 설치 및 프로젝트 생성</li>
          <li>Vue Route</li>
          <li>Custom Input Component</li>
          <li>Dynamic Component</li>
        </ul>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/Index"

export default {
  name: "Main",
  components: { SubLayout },
}
</script>

<style scoped>
</style>