<script setup lang="ts">

import TextArea from "@/components/TextArea.vue";
import BaseInput from "@/components/InputComponent.vue"
</script>

<template>
  <div>
    <h2>Создание задачи</h2>
    <form class="form-group" @submit.prevent>

      <BaseInput label="Заголовок" v-model="task.title" placeholder="Введите заголовок задачи"/>
      <TextArea placeholder="введите задачу" v-model="task.description" />
      <button class="button" @click="createTask">Создать задачу</button>
    </form>
  </div>

</template>

<script lang="ts">
export default {
  data() {
    return {
      task: {
        title: '',
        description: ''
      }
    }
  },
  methods: {
    createTask() {
      this.$emit('create', this.task)
      this.task = {
        title: '',
        description: ''
      }
    }
  },
}
</script>

<style scoped>
.button {
  background: #06d6a0;
  padding: 20px;
  border-radius: 1rem;
  color:white;
}

form {
  display: flex;
  border: 2px solid #52a152;
  margin-top: 2rem;
  padding:1rem;
  flex-direction: column;
}
</style>