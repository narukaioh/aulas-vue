<template lang="pug">
  #app
    form(method="post", action="#")
      .row.uniform
        div(class="6u 12u$(xsmall)")
          input(type="text", name="name", id="name", placeholder="Name")
        div(class="6u$ 12u$(xsmall)")
          input(type="password", name="password", id="password", placeholder="Password")
        div(class="12u$")
          input(type="text", name="email", id="email", placeholder="Email")
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 980px;
  margin: 60px auto;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
