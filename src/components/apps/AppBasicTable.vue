<template>
  <table class="j-table">
    <thead>
      <tr>
        <th v-for="(column, index) in columns" :key="index">{{ column.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="(column, index) in columns" :key="index">{{ row[column.field] }}</td>
      </tr>
    </tbody>
  </table>
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
.j-table td:nth-child(1) {
  width: 130px;
}
</style>
