<!-- eslint-disable vuejs-accessibility/label-has-for -->
<template>
  <form class="form" action="#" method="get" @submit.prevent="submit">

    <fieldset class="form__block">
      <legend class="form__legend">Name</legend>
      <label class="form__label" for="name">
        <input type="text" name="name" v-model="currentName">
      </label>
    </fieldset>

    <fieldset class="form__block">
      <legend class="form__legend">Gender</legend>
      <label class="form__label" for="gender">
        <select class="form__select" type="text" name="gender"
        v-model="currentGender">
          <option value="null">all</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
      </label>
    </fieldset>

    <fieldset class="form__block">
      <legend class="form__legend">Status</legend>
      <label class="form__label" for="status">
        <select class="form__select" type="text" name="status"
        v-model="currentStatus">
          <option value="null">all</option>
          <option value="active">active</option>
          <option value="inactive">inactive</option>
        </select>
      </label>
    </fieldset>

    <button class="form__submit button" type="submit">
      submit
    </button>
    <button class="form__reset button" type="button" @click.prevent="reset">
      reset
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      currentGender: null,
      currentStatus: null,
      currentName: null,
    };
  },
  props: ['gender', 'status', 'name'],
  watch: {
    gender(value) {
      this.currentGender = value;
    },
    status(value) {
      this.currentStatus = value;
    },
    name(value) {
      this.currentName = value;
    },
  },
  methods: {
    submit() {
      this.$emit('update:gender', this.currentGender);
      this.$emit('update:status', this.currentStatus);
      this.$emit('update:name', this.currentName);
    },
    reset() {
      this.$emit('update:gender', null);
      this.$emit('update:status', null);
      this.$emit('update:name', null);
      this.currentGender = null;
      this.currentStatus = null;
      this.currentName = null;
    },
  },
};
</script>

<style scoped lang="scss">

.form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
  width: 100%;
  &__block {
    margin-right: 15px;
  }
}

.button {
  padding: 6px 12px;
}
</style>
