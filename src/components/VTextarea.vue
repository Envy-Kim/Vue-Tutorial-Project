<template>
  <div>
    <label :for="id" >{{ label }}</label>
    <textarea :id="id"
              :name="name"
              :value="value"
    autofocus="" ></textarea>
  </div>
</template>

<script>
export default {
  name: "VTextarea",
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
    },
  },
}
</script>

<style scoped>

</style>