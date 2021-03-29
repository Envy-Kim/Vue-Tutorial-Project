<template>
  <div>
    <sub-layout>
      <div class="content">
        <h1>Custom Input Component</h1>
        <span>Text, Email, Password</span>
        <br/><br/>

        <v-input id="email" name="email" type='email' label="E-mail" v-model="user.email" :rules=rules.email
                 @change="setEmail" />
        <br/>
        <v-input id="password" name="password" type='password' label="Password" v-model="user.password" :rules=rules.password @change="setPassword"
        />
        <br/>
        <v-input id="name" name="name" label="이름" v-model="user.name" :rules=rules.name @change="setName"
        />
        <br/>
        <v-input id="phone" name="phone" label="휴대폰번호" v-model="user.phone" :rules=rules.phone @change="setPhone"
        />
        <br/>

        <h1>Custom Selectbox Component</h1>
        <br/><br/>

        <h1>Custom TextArea Component</h1>
        <br/><br/>
        <v-textarea :value="testMsg" ></v-textarea>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/index"
import VInput from "@/components/VInput"
import VTextarea from "@/components/VTextarea"

export default {
  name: "Create",
  components: {SubLayout, VInput, VTextarea},
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    rules: {
      email: [
        value => !!value || '필수값입니다.',
        value => (value).length >= 5 || '5자 이상으로 입력해주세요.',
        value => (value).length <= 20 || '20자 이하로 입력해주세요.',
        value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '유효하지 않은 이메일입니다.'
        },
      ],
      password: [
        value => !!value || '필수값입니다.',
        value => (value).length >= 8 || '8자 이상으로 입력해주세요.',
        value => (value).length <= 20 || '20자 이하로 입력해주세요.',
      ],
      name: [
        value => !!value || '필수값입니다.',
        value => (value).length >= 2 || '2자 이상으로 입력해주세요.',
        value => (value).length <= 10 || '10자 이하로 입력해주세요.',
      ],
      phone: [
        value => !!value || '필수값입니다.',
      ]
    },
    testMsg: 'test',
  }),
  methods: {
    setEmail(val) {
      this.user.email = val;
    },
    setPassword(val) {
      this.user.password = val;
    },
    setName(val) {
      this.user.name = val;
    },
    setPhone(val) {
      this.user.phone = val;
    },
  }
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>