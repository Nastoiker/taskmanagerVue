<template>
  <div class="post">
    <div>
      <div>{{ task.id }}</div>
      <div><strong>Название:</strong> {{ task.title }}</div>
      <div><strong>Описание:</strong> {{ task.description }}</div>
      <div><strong>Дата:</strong><div>
        {{ new Date(task.date).toString() }}
      </div>  </div>
    </div>
    <div class="post__btns">

      <button
          @click="$emit('remove', task)"
          style="color: red; background: transparent; border: none"
      >
        Удалить
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      date: '',
    }
  },
  props: {
    task: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin-top: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>