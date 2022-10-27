<template>
  <div class="container">
    <UserFilter :gender.sync="filterGender" :status.sync="filterStatus" :name.sync="filterName"/>
    <UserList :users="users" />
    <BasePagination v-model="page"/>
  </div>
</template>

<script>
import UserList from '@/components/UserList.vue';
import BasePagination from '@/components/BasePagination.vue';
import UserFilter from '@/components/UserFilter.vue';
import axios from 'axios';

export default {
  components: {
    UserList,
    BasePagination,
    UserFilter,
  },
  data() {
    return {
      page: 1,
      per_page: 12,
      usersData: null,
      filterGender: null,
      filterStatus: null,
      filterName: null,
    };
  },
  computed: {
    users() {
      return this.usersData;
    },
  },
  methods: {
    loadUsers() {
      axios.get('https://gorest.co.in/public/v2/users/', {
        params: {
          page: this.page,
          per_page: this.per_page,
          gender: this.filterGender,
          status: this.filterStatus,
          name: this.filterName,
        },
      })
        // eslint-disable-next-line no-return-assign
        .then((response) => this.usersData = response.data);
    },
  },
  watch: {
    page() {
      this.loadUsers();
    },
    filterGender() {
      this.loadUsers();
    },
    filterStatus() {
      this.loadUsers();
    },
    filterName() {
      this.loadUsers();
    },
  },
  created() {
    this.loadUsers();
  },
};
</script>

<style>
.container {
    max-width: 90%;
    margin: 0 auto;
}
</style>
