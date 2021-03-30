<template>
  <div>
    <sub-layout>
      <div class="content">
        <div class="input">
          <h1>Custom Component</h1>

          <v-input id="email" name="email" type='email' label="E-mail" v-model="user.email" :rules=rules.email />
          <br/>
          <v-input id="password" name="password" type='password' label="Password" v-model="user.password" :rules=rules.password />
          <br/>
          <v-input id="name" name="name" label="이름" v-model="user.name" :rules=rules.name />
          <br/>
          <v-input id="phone" name="phone" label="휴대폰번호" v-model="user.phone" :rules=rules.phone />
          <br/><br/>
          <v-textarea id="info" name="info" label="Info" value=""
                      :width="500" backgroundColor="#bdf7d7" v-model="user.info" :rules=rules.info ></v-textarea>
        </div>

        <div class="info">
          <h1>입력된 유저 정보</h1>
          이메일 : {{user.email}}<br/>
          비밀번호 : {{user.password}}<br/>
          이름 : {{user.name}}<br/>
          휴대폰번호 : {{user.phone}}<br/>
          성별 : {{user.gender}}<br/>
          정보 : {{user.info}}<br/>
        </div>
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
      gender: '',
      info: '',
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
      ],
      info: [
        value => !!value || '필수값입니다.',
        value => (value).length >= 20 || '20자 이상으로 입력해주세요.',
      ]
    },
  }),
  methods: {
  }
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
</style>