<template>
  <div>
    <sub-layout>
      <div class="content">
        <h1>동적 컴포넌트</h1>
        <component :is="viewComponent" :tdata="testData"></component>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/Index"
import VueListItem from "@/components/bbs/VueListItem";
import VueCard from "@/components/bbs/VueCard";

export default {
  name: "DynamicPage",
  components: { SubLayout, VueListItem, VueCard },
  data() {
    return {
      viewComponent: VueListItem,
      testData: {
        name: 'test1',
        subject: '제목제목',
        content: '내용내용내용',
      }
    }
  }
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>