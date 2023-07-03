<template>
  <div v-if="tasks.length > 0">
    <h3>Список задач</h3>
    <TransitionGroup name="user-list">
      <TaskComponent
          v-for="task in tasks"
          :task="task"
          :key="task.id"
          @remove="$emit('remove', task.id)"
      />
    </TransitionGroup >
  </div>
  <h2 v-else style="color: green; margin: 2rem 0;">
    Список задач пуст
  </h2>
</template>

<script lang="ts">
import TaskComponent from "@/components/Task/TaskComponent.vue";
export default {
  components: {TaskComponent},
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.user-list-move {
  transition: transform 0.4s ease;
}
</style>