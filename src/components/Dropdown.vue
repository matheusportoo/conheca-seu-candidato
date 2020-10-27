<template>
  <select @change="onChange" :disabled="isFetching">
    <option value="">{{ defaultOption }}</option>
    <option
      v-for="(option, index) in options"
      :key="{ index }"
      :value="option.value"
      :selected="option.value === optionSelected"
      :data-custom="
        `${option.value}, ${optionSelected}, ${option.value === optionSelected}`
      "
    >
      {{ option.label }}
    </option>
  </select>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    options: { type: Array, default: () => [] },
    onChange: { type: Function, default: () => null },
    defaultOption: { type: String, default: "Selecione uma opção" },
    optionSelected: { type: String, default: () => "" },
    isFetching: { type: Boolean, default: () => false }
  }
};
</script>
