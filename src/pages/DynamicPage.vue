<template>
  <div>
    <sub-layout>
      <div class="content">
        <h1>동적 컴포넌트</h1>
        <div>
        </div>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/Index"

export default {
  name: "DynamicPage",
  components: { SubLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>