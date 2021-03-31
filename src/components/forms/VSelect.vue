<template>
  <!--
  todo: vuetify의 select api를 참고하여 수정 ( ex) 다중 선택 등 )
  -->
  <div class="select-wrap" :style="{ width: width + 'px'}">
    <label :for="id">{{ label }}</label>
    <select :id="id" @input="change">
      <option v-for="(item, index) in options"
              :key="index"
              :value="item[itemValue]"
              :selected="(item[itemValue] == value)">{{ item[itemText] }}
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
    label: {
      type: String,
    },
    value: {
      type: String
    },
    width: {
      type: Number,
      default: 300
    },
  },
  data() {
    return {
      uid: null,
    }
  },
  computed: {
    id: function () {
      return 'select_' + this.uid;
    },
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
      this.$emit('select', e.target.value);
    }
  },
  mounted() {
    // 고유한 uid
    this.uid = this._uid;
  },
}
</script>

<style scoped>
.select-wrap label {
  margin-right: 5px;
}
</style>