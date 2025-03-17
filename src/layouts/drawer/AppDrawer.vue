<!-- src/components/Drawer.vue -->
<template>
  <q-drawer side="right" overlay behavior="mobile">
    <q-list>
      <q-item
        v-for="menu in menus"
        :key="menu.id"
        clickable
        :class="{ active: activeSection === menu.id }"
        @click="handleDrawerClick(menu.id)"
      >
        <q-item-section>{{ menu.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<script setup>
import { useMenuStore } from 'stores/menuStore'
import { storeToRefs } from 'pinia'

const menuStore = useMenuStore()
const { menus, activeSection } = storeToRefs(menuStore)
const { setActiveSection } = menuStore

const emit = defineEmits(['drawer-click'])

defineProps({
  drawer: {
    type: Boolean,
    required: true,
  },
})

const handleDrawerClick = (sectionId) => {
  setActiveSection(sectionId)
  emit('drawer-click', sectionId)
}
</script>
