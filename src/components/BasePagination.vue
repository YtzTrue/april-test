<template>
  <ul class="pagination">
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--arrow"
        :class="{ 'pagination__link--disabled': page === 1 }"
        aria-label="Предыдущая страница" @click.prevent="onPreviousPage(page)">
        previous
      </a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link">
        {{ page}}
      </a>
    </li>
    <li class="pagination__item">
      <a href="#" class="pagination__link pagination__link--arrow"
        aria-label="Следующая страница"
        @click.prevent="onNextPage(page)">
        next
      </a>
    </li>
  </ul>
</template>

<script>

export default {
  model: {
    prop: 'page',
    event: 'paginate',
  },
  props: ['page', 'count', 'perPage'],
  methods: {
    paginate(page) {
      this.$emit('paginate', page);
    },
    onPreviousPage(page) {
      if (page <= 1) {
        this.paginate(1);
      } else {
        this.paginate(page - 1);
      }
    },
    onNextPage(page) {
      this.paginate(page + 1);
    },
  },
};
</script>

<style scoped>
.pagination {
  margin: 0;
  margin-top: auto;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center
}

.pagination__item:first-child {
  margin-right: 25px
}

.pagination__item:last-child {
  margin-left: 25px
}

.pagination__link {
  display: block;
  padding: 13px 5px;
  width: 60px;
  font-size: 16px;
  line-height: 1;
  color: #333;
  text-align: center;
  text-decoration: none;
}

.pagination__link[href]:not(:disabled):focus,
.pagination__link[href]:not(:disabled):hover {
  opacity: .6
}

.pagination__link--disabled {
  opacity: .6;
  cursor: not-allowed
}
</style>
