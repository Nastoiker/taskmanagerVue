<template>
  <div class="text-start">
    <label :for="label">{{ label }}</label>
    <input
        :id="label"
        type="text" :="$attrs" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
</template>
<script setup lang="ts">
defineProps(
    {
      label: {
        type: String,
        default: "",
      },
      modelValue: {
        type: [String],
        default: "",
      },
    }
)
</script>
<style scoped>
input {
  border: none;
  background: transparent;
  outline: none;
  color:white;
  display: block;
  width: 100%;
  padding: 10px;
  border-bottom: 2px solid white;
}

input::placeholder,
input::-moz-placeholder,
input:-moz-placeholder
{
  font-size: 1rem;
  font-weight: bold;
  margin: 5px;
}

</style>