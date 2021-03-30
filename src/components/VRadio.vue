<template>
  <div>
    <input type="radio"
           :id="id"
           :name="name"
           :value="value"
           :checked="checked" >
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
export default {
  name: "VRadio",
  props: {
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    checked: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
  },
}
</script>

<style scoped>
</style>