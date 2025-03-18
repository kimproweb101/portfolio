<template>
  <div class="overflow-auto">
    <table class="j-table">
      <thead>
        <tr>
          <th
            :style="{ width: column.width ? column.width : '' }"
            v-for="(column, index) in columns"
            :key="index"
          >
            {{ column.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(column, index) in columns" :key="index">
            <div v-if="column.html" v-html="formattedText(row[column.field])"></div>
            <div v-else>{{ row[column.field] }}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    default: () => [],
  },
  rows: {
    type: Array,
    default: () => [],
  },
})
const formattedText = (value) => {
  return value.replace(/,/g, '<br>')
}
</script>

<style scoped>
.j-table {
  width: 100%;
  border-collapse: collapse;
}
.j-table th,
.j-table td {
  text-align: left;
  border: 1px solid #ccc;
  padding: 20px;
}
</style>
