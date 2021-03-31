<template>
  <div class="select-wrap" :style="{ width: width + 'px'}">
    <label :for="id">{{ label }}</label>
    <select :id="id" :name="name" @input="change">
      <option v-for="(item, index) in options"
              :key="index"
              :value="item[itemValue]">{{ item[itemText] }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "VSelect",
  props: {
    items: {
      type: Array,
      required: true,
    },
    itemValue: {
      type: String,
      default: 'value',
    },
    itemText: {
      type: String,
      default: 'text',
    },
    id: {
      type: String,
    },
    name: {
      type: String,
    },
    label: {
      type: String,
    },
    width: {
      type: Number,
      default: 300
    },
  },
  computed: {
    options: function () {
      let newOpt = new Object();
      newOpt[this.itemText] = '선택하세요.';
      newOpt[this.itemValue] = '';

      const optArr = [newOpt, ...this.items];

      return optArr;
    }
  },
  methods: {
    change(e) {
      this.$emit('input', e.target.value);
    }
  }
}
</script>

<style scoped>
.select-wrap label {
  margin-right: 5px;
}
</style>