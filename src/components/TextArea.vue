<template>
  <div>
        <textarea
            cols="30"
            rows="10"
            @input="$emit('update:modelValue', $event.target.value)"
            :placeholder="props.placeholder"
        ></textarea>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: "",
  },
  placeholder: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
textarea {
  border: 2px solid #f2f2f2;
  border-radius: 1rem;
  background: #f2f2f2;
  margin: 2rem auto;
  padding: 2rem;
  width: 100%;
  resize: none;
}
</style>