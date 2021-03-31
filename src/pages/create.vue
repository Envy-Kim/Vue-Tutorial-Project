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
          <br/>

          <v-radio-group label="성별" v-model="user.gender" >
              <v-radio id="gender1" name="gender" value="1" label="남" :checked="true" />
              <v-radio id="gender2" name="gender" value="2" label="여" />
          </v-radio-group>
          <br/>

          <v-radio-group label="연령대" type="cols" v-model="user.age" >
            <v-radio id="age1" name="age" value="10" label="10대" :checked="true" />
            <v-radio id="age2" name="age" value="20" label="20대" />
            <v-radio id="age3" name="age" value="30" label="30대" />
            <v-radio id="age4" name="age" value="40" label="40대" />
            <v-radio id="age5" name="age" value="50" label="50대" />
          </v-radio-group>
          <br/>

          <v-select :items="areaItems" item-value="value" item-text="title"
                    id="area" name="area" label="지역" v-model="user.area"></v-select>
          <br/>

          <div class="input-group">
            <v-checkbox label="Html" name="tech" input-value="html" v-model="user.tech" :checked="true"/>
            <v-checkbox label="CSS" name="tech" input-value="css" v-model="user.tech" />
            <v-checkbox label="JavaScript" name="tech" input-value="javascript" v-model="user.tech" />
            <v-checkbox label="TypeScript" name="tech" input-value="typescript" v-model="user.tech" />
            <v-checkbox label="Vue" name="tech" input-value="javascript" v-model="user.tech" />
          </div>

          <br/><br/>
          <v-textarea id="info" name="info" label="Info" value=""
                      :width="500" backgroundColor="#bdf7d7" v-model="user.info" :rules=rules.info ></v-textarea>

          <v-checkbox label="동의" name="agree" input-value="true" v-model="user.agree" />
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
import VInput from "@/components/forms/VInput"
import VTextarea from "@/components/forms/VTextarea"
import VRadioGroup from "@/components/forms/VRadioGroup";
import VRadio from "@/components/forms/VRadio";
import VCheckbox from "@/components/forms/VCheckbox";
import VSelect from "@/components/forms/VSelect";

export default {
  name: "Create",
  components: { SubLayout, VInput, VTextarea, VRadioGroup, VRadio, VCheckbox, VSelect },
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
      phone: '',
      gender: '1',
      info: '',
      age: '10',
      tech: ['html'],
      agree: false,
      area: '',
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
    ]
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