<template>
  <div class="list-wrapper">
    <div class="button-group">
      <button class="view-button" @click="view = 'grid'" type="button">grid</button>
      <button class="view-button" @click="view = 'row'" type="button">row</button>
    </div>
    <ul class="list" :class="listView">
      <UserItem v-for="user in users" :key="user.id" :user="user" />
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  props: ['users'],
  components: { UserItem },
  data() {
    return {
      view: 'grid',
    };
  },
  computed: {
    listView() {
      if (this.view === 'row') {
        return 'row';
      }
      return 'grid';
    },
  },
};
</script>

<style lang="scss">
.list {
  margin-top: 0px;
  margin-bottom: 30px;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.row .item {
  display: block;
  width: 100%;
}

.button-group {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  max-width: 120px;
}

.view-button {
  margin-bottom: 20px;
  padding: 8px 14px;
}

</style>
