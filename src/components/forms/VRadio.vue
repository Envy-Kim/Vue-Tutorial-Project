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
  data() {
    return {
      uid: null,
    }
  },
  computed: {
    id: function () {
      return 'radio_' + this.uid;
    },
  },
  methods: {
  },
  mounted() {
    // 고유한 uid
    this.uid = this._uid;
  },
}
</script>

<style scoped>
</style>