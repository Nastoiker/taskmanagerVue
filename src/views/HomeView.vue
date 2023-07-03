<script setup lang="ts">

import TaskList from "@/components/Task/TaskList.vue";
import CreateTask from "@/components/Task/CreateTask.vue";
import BaseInput from "@/components/InputComponent.vue"

</script>

<template>
  <main>
    <div class="task-home">
      <div>
        <CreateTask  @create="addTask" />
      </div>
      <div style="width: fit-content">
        <BaseInput :model-value="searchValue"  @update:model-value="setSearchQuery" label="Поиск задачи" />
          <task-list :tasks="sortedAndSearchedTasks" @remove="removeTodo" />
      </div>
    </div>


  </main>
</template>
<script lang="ts">
import {mapActions,mapState,mapGetters,mapMutations} from "vuex";

export default {
  data() {
    return {
      task: {},
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.tasks.tasks,
      searchValue: state => state.tasks.searchValue
    }),
    ...mapGetters({
      getTasks: 'tasks/getTasks',
      sortedAndSearchedTasks: 'tasks/sortedAndSearchedTasks'
    }),
  },
  methods: {
    ...mapMutations({
      setSearchQuery: 'tasks/setSearchQuery',
    }),
    ...mapActions({
      addTask: 'tasks/addTask',
      removeTodo: 'tasks/removeTask',
    }),
  }
};
</script>
<style>
.form-group {
  margin-bottom: 10px;
}

@media (min-width:1400px) {
  .task-home {
    display: flex;
    justify-content: space-between;
  }
}
</style>