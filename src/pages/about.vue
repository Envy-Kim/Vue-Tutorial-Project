<template>
  <div>
    <main-layout>
      <div class="content">
        <h1>About</h1>

        <span>Vue Study 3주차 과제</span>
        <p>
          라우터 기능을 이용한 메뉴 구성<br/>
          3주차 배운 내용을 정리해볼까 했는데 CSS가 너무 어렵다...
        </p>
      </div>
    </main-layout>
  </div>
</template>

<script>
import MainLayout from "@/components/layouts/main/index"

export default {
  name: "About",
  components: { MainLayout },
}
</script>

<style scoped>
.content {
  margin: auto 50px auto 300px;
}
</style>