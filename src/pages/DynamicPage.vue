<template>
  <sub-layout>
    <div class="container">
      <h1>동적 컴포넌트</h1>

      <div class="mb-3">
        <button type="button" class="btn btn-primary" @click="setListType('list')">List</button>
        <button type="button" class="btn btn-success" @click="setListType('gallery')">Gallery</button>
        <button type="button" class="btn btn-danger" @click="setListType('webzine')">Webzine</button>
      </div>

      <vue-board :columns="listColumns"
                 :items="listItems"
                 :bbs-type="listType"
                 :mode="1"
                 v-model="selectedItem"
                 @click="modalShow = true"></vue-board>

      <base-modal :show="modalShow" @close="modalShow = false">
        <h5 slot="modal-title">{{ selectedItem.subject }}</h5>

        <div class="modal-info mb-5">
          <span>조회수 : {{ selectedItem.hit }}</span>
          <span class="float-right">{{ selectedItem.created_at }}</span><br/>
          <span class="float-right">글쓴이 : {{ selectedItem.author }}</span>
        </div>

        <img :src="selectedItem.image" class="img-fluid w-100 mb-3">
        <p>{{ selectedItem.content }}</p>
      </base-modal>
    </div>
  </sub-layout>
</template>

<script>
import SubLayout from '@/components/layouts/sub/Index'
import VueBoard from '@/components/board/Index'
import BaseModal from '@/components/BaseModal'
import {mapState, mapGetters} from 'vuex'

export default {
  name: "DynamicPage",
  components: { SubLayout, VueBoard, BaseModal },
  data() {
    return {
      modalShow: false,
      selectedItem: {},
    }
  },
  computed: {
    listType: {
      get() {
        return this.$store.state.board.listType
      },
      set(newType) {
        console.log(newType)
        this.$store.dispatch('setListType', newType)
      }
    },
    ...mapState({
      listColumns: state => state.board.listColumns
    }),
    ...mapGetters({
      listItems: 'getListItems'
    }),
  },
  methods: {
    setListType(type) {
      this.listType = type

      // 변경된 게시판 타입을 localStorage에 저장
      localStorage.setItem('listType', type)
    },
  },
  // 화면이 랜더링 되기전에 설정하기 위하여 created 사용
  created() {
    let localListType = localStorage.getItem('listType')

    if(localListType) {
      this.listType = localListType
    }
  },
  watch: {
    // todo: 현재 watch로 구현된 조회수를 store를 이용하여 수정.
    selectedItem: function(item) {
      console.log('change selectedItem')
      ++item.hit
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  margin-right: 5px;
}

.float-right {
  &::after {
    display: block;
    content: '';
    clear: both;
  }
}
</style>