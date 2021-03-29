<!-- Input : text, password, email -->
<template>
  <div class="input-wrap">
    <label :for="id" :style="customStyle">{{ label }}</label>
    <input :type="type"
           :id="id"
           :name="name"
           :value="value"
           v-model="value"
           :placeholder="placeholder"
           :readonly="readonly"
           :disabled="disabled"
           :required="required"
           :class="[(isErr === true) ? 'box-error' : '']"
           @keyup="change"/>
    <div v-show="isMessage" :class="[(isErr === true) ? 'text-error' : '']" >{{ message }}</div>
  </div>
</template>

<script>

export default {
  name: "VInput",
  props: {
    type: {
      type: String,
      default: "text"
    },
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
    placeholder: {
      type: String
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
    },
    color: {
      type: String,
    },
    backgroundColor: {
      type: String,
    },
    inputClass: {
      type: String,
    },
    rules: {
      type: [String, Array],
    },
  },
  computed: {
    customStyle: function () {
      let custom = '';
      if (this.color) custom += "color:" + this.color + ";";
      if (this.backgroundColor) custom += "background-color:" + this.backgroundColor + ";";
      return custom;
    }
  },
  data: function () {
    return {
      isMessage: false,
      message: [],
      isErr: false,
    }
  },
  methods: {
    change($event) {
      this.checkValue();

      // input의 변경된 값을 부모 컴포넌트로 전달
      this.$emit('change', $event.target.value);
    },
    checkValue() {
      if (this.required) {
        if (!this.value) {
          this.isMessage = true;
          this.isErr = true;
          this.message = "필수값입니다.";
          return false;
        } else {
          this.isMessage = false;
          this.message = '';
        }
      }

      // 입력받은 rules에 맞춰서 유효성 검사
      if (this.rules) {
        let checkVal = this.value;
        let isMsg = false;
        let msg = [];

        this.rules.forEach(function (value) {
          let check = value(checkVal);
          if (check !== true) {
            isMsg = true;
            msg.push(check);
          }
        });

        this.isMessage = isMsg;
        this.isErr = isMsg;
        this.message = msg[0];
      }
    },
  }
}
</script>

<style scoped>
.input-wrap label {
  margin-right: 5px;
}

.text-error {
  color: red;
}
.box-error {
  border: solid 1px red;
}

.text-primary {
  color: #96caf5;
}
</style>