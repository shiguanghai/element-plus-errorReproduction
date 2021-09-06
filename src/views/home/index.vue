<style lang="scss" scoped></style>
<template>
  <div class="home">首页</div>
</template>

<script>
import { test } from '../../services/user'

const getData = async () => {
  const params = {
    boundaryId: 0,
    num: 10,
    queryText: '',
    sortType: 'priceDesc',
    tab: 'unSubscribe'
  }
  const { data } = await test(params)
  if (!data || data.errno !== 0) throw data
  console.log(data.data)
}

export default {
  name: 'HomeIndex',
  setup() {
    getData()
  }
}
</script>
