<template>
  <li class="item">
    <h3 class="item__title">
      <router-link :to="{name: 'user', params: {id: user.id}}">
        {{ user.name }}
      </router-link>
    </h3>
    <span class="item__text">{{ user.email }}</span>
    <div class="item__props">
      <div class="item__prop item__status"
      :class="{ 'item__status_active': user.status === 'active',
      'item__status_inactive': user.status === 'inactive' }">
      </div>
      <div class="item__prop item__gender"
      :class="{ 'item__gender_male': user.gender === 'male',
      'item__gender_female': user.gender === 'female' }">
      </div>
    </div>
  </li>
</template>

<script>

export default {
  props: ['user'],
};
</script>

<style scoped lang="scss">
.item {
  width: 22%;
  margin-bottom: 10px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #333;
  border-radius: 10px;
  overflow-wrap: break-word;

  &__text {
    margin-bottom: 10px;
    overflow-wrap: break-word;
  }

  &__props {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__status {
    height: 20px;
    width: 20px;
    border: 1px solid #333;
    border-radius: 100%;
    overflow: hidden;

    &_active {
      background-color: green;
    }

    &_inactive {
      background-color: red;
    }
  }

  &__gender {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;

    &_male {
      border-top: 20px solid #333;
    }
    &_female {
      border-bottom: 20px solid #333;
    }
  }

  @media screen and ( max-width: 1200px ) {
   width: 29%;
  }
  @media screen and ( max-width: 1024px ) {
   width: 42%;
  }
  @media screen and ( max-width: 640px ) {
   width: 100%;
  }
}

</style>
