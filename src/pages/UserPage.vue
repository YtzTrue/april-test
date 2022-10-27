<template>
  <div class="container info">
    <img class="info__img" src="@/../public/img/Default_user.png" :alt="user.name">
    <h2 class="info__header">{{ user.name }}</h2>
    <p class="info__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Officia aperiam eius magnam explicabo suscipit rem. Consectetur,
        numquam iure. Voluptatibus illo, iure eos accusamus excepturi architecto facilis.
        Inventore error fuga maxime.
    </p>
    <ul class="info__list">
      <li class="info__item">email: {{ user.email }}</li>
      <li class="info__item">gender: {{ user.gender }}</li>
      <li class="info__item">status: {{ user.status }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      userData: null,
    };
  },
  computed: {
    user() {
      return this.userData ? this.userData : { name: '' };
    },
  },
  methods: {
    loadUser() {
      axios.get(`https://gorest.co.in/public/v2/users/${this.$route.params.id}`)
        // eslint-disable-next-line no-return-assign
        .then((response) => this.userData = response.data);
    },
  },
  watch: {
    '$route.params.id': {
      handler() {
        this.loadUser();
      },
      immediate: true,
    },
  },
};
</script>

<style scoped lang="scss">
.info {
  max-width: 900px;
  padding: 5%;
  border: 1px solid #333;
  border-radius: 10px;
  &__img {
    width: 225px;
    height: 225px;
  }
  &__text {
    margin-bottom: 40px;
    text-align: justify;
  }
  &__list {
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 600;
  }
  @media screen and ( max-width: 1024px ) {
    &__list {
      flex-direction: column;
    }
    &__item {
      margin-bottom: 20px;
    }
    }
}
</style>
