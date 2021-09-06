<style lang="scss" scoped></style>

<template>
  <div class="user">
    <user-list />
  </div>
</template>

<script>
import UserList from './components/List.vue'

export default {
  name: 'UserIndex',
  components: {
    UserList
  }
}
</script>
