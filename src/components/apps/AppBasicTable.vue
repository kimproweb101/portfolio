<template>
  <div class="q-pa-sm">
    <template v-if="!$q.screen.xs">
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
    </template>
    <template v-else>
      <table class="j-table">
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <td>
              <div v-for="(column, index) in columns" :key="index">
                <div class="flex relative-position q-pl-lg">
                  <span class="absolute-top">{{ column.label }}:</span
                  ><span class="q-pl-lg">{{ row[column.field] }}</span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </template>
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
/* .j-table td:nth-child(2) {
  width: 105px;
} */
</style>
