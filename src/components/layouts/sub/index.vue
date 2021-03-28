<template>
  <div>
    <sub-header/>
    <sub-navigator/>
    <slot/>
    <sub-footer/>
  </div>
</template>


<script>
import SubHeader from "@/components/layouts/sub/header"
import SubNavigator from "@/components/layouts/sub/navigator"
import SubFooter from "@/components/layouts/sub/footer"

export default {
  name: "SubLayout",
  components: {
    SubHeader, SubNavigator, SubFooter
  }
}
</script>

<style scoped>

</style>