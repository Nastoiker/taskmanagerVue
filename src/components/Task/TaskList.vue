<template>
  <div class="taskList">
  <div v-if="tasks.length > 0">
    <h3>Список задач</h3>
    <TransitionGroup name="task-list">
      <TaskComponent
          v-for="task in tasks"
          :task="task"
          :key="task.id"
          @remove="$emit('remove', task.id)"
      />
    </TransitionGroup >
  </div>
  <h1 v-else style="color: green; margin: 2rem auto; ">
    Список задач пуст
  </h1>
</div>
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
.task-list-item {
  display: inline-block;
  margin-right: 10px;
}
.task-list-enter-active,
.task-list-leave-active {
  transition: all 0.4s ease;
}
.task-list-enter-from,
.task-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.task-list-move {
  transition: transform 0.4s ease;
}
.taskList {
  width: 100%;
}
@media (min-width: 1400px) {
  .taskList {
    width: 500px;
  }
}
</style>