<template>
  <nav class="nav navbar-expand-lg navbar-light bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul :class="type" class="navbar-nav">
        <li v-for="(item, index) in router" :key="index" class="nav-item">
          <router-link :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import routes from '@/router'

export default {
  name: "navigator",
  props: {
    type: {
      type: String,
      default: 'horizontal',
    }
  },
  computed: {
    router: function() {
      return routes
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-nav {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;

  .nav-item {
    float: left;

    a {
      display: inline-block;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }
  }

  &.horizontal {
    background-color: #343a40;

    .nav-item {
      a {
        color: white;

        &:hover:not(.router-link-exact-active) {
          background-color: #000;
        }

        &.router-link-exact-active {
          background-color: #4CAF50;
        }
      }
    }
  }

  &.horizontal2 {
    border: 1px solid #e7e7e7;
    background-color: #f3f3f3;

    .nav-item {
      a {
        color: #666;

        &:hover:not(.router-link-exact-active) {
          background-color: #ddd;
        }

        &.router-link-exact-active {
          color: white;
          background-color: #4CAF50;
        }
      }
    }
  }
}

.width94 {
  width:94%;
}

.rightli {
  float:right;
}

@media screen and (max-width: 600px) {
  .width94 {
    width: 100%;
  }
}

@media screen and (max-width: 408px) {
  .rightli {
    display:none;
  }
}

</style>