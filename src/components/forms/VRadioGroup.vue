<template>
  <div class='radio-group' :class="type" @input="setVal">
    <legend>{{label}}</legend>
    <slot/>
  </div>
</template>

<script>
export default {
  name: "VRadioGroup",
  props: {
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    type: {
      type: String,
      default: 'rows'
    },
  },
  methods: {
    setVal($event) {
      this.$emit('input', $event.target.value)
    },
  },
}
</script>

<style scoped>
 .radio-group.rows {
   display: flex;
   align-items: center;
 }
</style>