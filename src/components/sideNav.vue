<template>
  <div class="side-nav" role="banner">
    <h1 class="logo">
      <v-link href="/">Vue Study <span>Route</span></v-link>
    </h1>
    <div class="nav-wrap">
      <nav class="main-nav" role="navigation">
        <ul class="unstyled list-hover-slide">
          <li><v-link href="/">Home</v-link></li>
          <li><v-link href="/about">About</v-link></li>
          <li><v-link href="/install">Install</v-link></li>
          <li><v-link href="/create">Create Project</v-link></li>
          <li><v-link href="/routing">Routing</v-link></li>
        </ul>
      </nav>
      <!--
      <ul class="social-links list-inline unstyled list-hover-slide">
        <li><v-link href="#">Twitter</v-link></li>
        <li><v-link href="#">Google+</v-link></li>
        <li><v-link href="#">GitHub</v-link></li>
        <li><v-link href="#">CodePen</v-link></li>
      </ul>
      -->
    </div>
  </div>
</template>

<script>
import VLink from "@/components/VLink"

export default {
  name: "SideNav",
  components: {VLink},
}
</script>

<style scoped>
*, :before, :after {
  box-sizing: border-box;
}

.unstyled {
  list-style: none;
  padding: 0;
  margin: 0;
}

.unstyled a {
  text-decoration: none;
}

.list-inline {
  overflow: hidden;
}

.list-inline li {
  float: left;
}

.side-nav {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 300px;
  background: #35302D;
}

.logo {
  font: 300 2em "Source Sans Pro", Helvetica, Arial, sans-serif;
  text-align: center;
  padding: 0;
  margin: 0;
}

.logo a {
  display: block;
  padding: 1em 0;
  color: #DFDBD9;
  text-decoration: none;
  transition: .15s linear color;
}

.logo a:hover {
  color: #fff;
}

.logo a:hover span {
  color: #DF4500;
}

.logo span {
  font-weight: 700;
  transition: .15s linear color;
}

.main-nav ul {
  border-top: solid 1px #3C3735;
}

.main-nav li {
  border-bottom: solid 1px #3C3735;
}

.main-nav a {
  padding: 1.1em 0;
  color: #DFDBD9;
  font: 400 1.125em "Source Sans Pro", Helvetica, Arial, sans-serif;
  text-align: center;
}

.main-nav a:hover {
  color: #fff;
}

.social-links {
  border-bottom: solid 1px #3C3735;
}

.social-links li {
  width: 25%;
  border-left: solid 1px #3C3735;
}

.social-links li:first-child {
  border: none;
}

.social-links a {
  display: block;
  height: 5.5em;
  text-align: center;
  color: #3C3735;
  font: 0.75em/5.5em "Source Sans Pro", Helvetica, Arial, sans-serif;
}

.social-links a:hover {
  color: #DFDBD9;
}

.list-hover-slide li {
  position: relative;
  overflow: hidden;
}

.list-hover-slide a {
  display: block;
  position: relative;
  z-index: 1;
  transition: .35s ease color;
}

.list-hover-slide a:before {
  content: '';
  display: block;
  z-index: -1;
  position: absolute;
  left: -100%;
  top: 0;
  width: 100%;
  height: 100%;
  border-right: solid 5px #DF4500;
  background: #3C3735;
  transition: .35s ease left;
}

.list-hover-slide a.active {
  content: '';
  display: block;
  z-index: -1;
  top: 0;
  width: 100%;
  height: 100%;
  border-right: solid 5px #DF4500;
  background: #3C3735;
}

.list-hover-slide a.is-current:before, .list-hover-slide a:hover:before {
  left: 0;
}
</style>