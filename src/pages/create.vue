<template>
  <div>
    <sub-layout>
      <div class="content">
        <div class="input">
          <h1>Custom Component</h1>

          <v-input type='email' id="email" name="email" label="E-mail" v-model="user.email" :rules=rules.email />
          <br/>
          <v-input type='password' label="Password" v-model="user.password" :rules=rules.password />
          <br/>
          <v-input label="이름" readonly v-model="user.name" :rules=rules.name />
          <br/>
          <v-input label="휴대폰번호" v-model="user.phone" :rules=rules.phone />
          <br/>

          <v-radio-group label="성별" name="gender" v-model="user.gender" >
              <v-radio value="1" label="남" :checked="true" />
              <v-radio value="2" label="여" />
          </v-radio-group>
          <br/>

          <v-radio-group label="연령대" type="cols" v-model="user.age" >
            <v-radio name="age" value="10" label="10대" :checked="true" />
            <v-radio name="age" value="20" label="20대" />
            <v-radio name="age" value="30" label="30대" />
            <v-radio name="age" value="40" label="40대" />
            <v-radio name="age" value="50" label="50대" />
          </v-radio-group>
          <br/>

          <v-select :items="areaItems" item-value="value" item-text="title"
                    label="지역" v-model="user.area"></v-select>
          <br/>

          <div class="input-group">
            <v-checkbox label="Html" input-value="html" v-model="user.tech" :checked="true"/>
            <v-checkbox label="CSS" input-value="css" v-model="user.tech" />
            <v-checkbox label="JavaScript" input-value="javascript" v-model="user.tech" />
            <v-checkbox label="TypeScript" input-value="typescript" v-model="user.tech" />
            <v-checkbox label="Vue" input-value="javascript" v-model="user.tech" />
          </div>

          <br/><br/>
          <v-textarea label="Info" :width="500" :backgroundColor="textareaColor" v-model="user.info" :rules=rules.info ></v-textarea>
          <v-input label="배경색" v-model="textareaColor" />

          <v-checkbox label="동의" input-value="true" v-model="user.agree" />
        </div>

        <div class="info">
          <h1>입력된 유저 정보</h1>
          이메일 : {{user.email}}<br/>
          비밀번호 : {{user.password}}<br/>
          이름 : {{user.name}}<br/>
          휴대폰번호 : {{user.phone}}<br/>
          성별 : {{ (user.gender === '1') ? '남' : '여'}}<br/>
          연령대 : {{ user.age }}대<br/>
          지역 : {{ user.area }}<br/>
          Tech : {{ user.tech }}<br/>
          정보 : {{user.info}}<br/>
          동의 : {{user.agree}}<br/>
        </div>
      </div>
    </sub-layout>
  </div>
</template>

<script>
import SubLayout from "@/components/layouts/sub/index"
import VInput from "@/components/forms/BaseTextInput"
import VTextarea from "@/components/forms/BaseTextarea"
import VRadioGroup from "@/components/forms/BaseRadioGroup";
import VRadio from "@/components/forms/BaseRadio";
import VCheckbox from "@/components/forms/BaseCheckbox";
import VSelect from "@/components/forms/BaseSelect";

export default {
  name: "Create",
  components: { SubLayout, VInput, VTextarea, VRadioGroup, VRadio, VCheckbox, VSelect },
  data: () => ({
    user: {
      name: '김경식',
      email: '',
      password: '',
      phone: '',
      gender: '1',
      info: '',
      age: '10',
      tech: ['html'],
      agree: false,
      area: '수도권',
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
    areaItems: [
      {
        value: '수도권',
        title: '수도권'
      },
      {
        value: '충청도',
        title: '충청도'
      },
      {
        value: '전라도',
        title: '전라도'
      },
      {
        value: '경상도',
        title: '경상도'
      },
      {
        value: '강원도',
        title: '강원도'
      },
      {
        value: '제주도',
        title: '제주도'
      }
    ],
    textareaColor: '#bdf7d7',
  }),
  methods: {
  }
}
</script>

<style scoped>
.content {
  margin: auto 50px;
}
.input-group {
  display: flex;
  align-items: center;
}
</style>