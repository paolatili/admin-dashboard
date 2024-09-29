<script setup>
import { useLayout } from '@/layout/composables/layout.js'
import Button from 'primevue/button'

const { onMenuToggle } = useLayout()
</script>

<template>
  <div class="layout-topbar">
    <div>
      <Button class="layout-menu-button layout-topbar-action" @click="onMenuToggle" severity="contrast" text rounded>
        <i class="pi pi-bars"></i>
      </Button>
    </div>
    <div class="layout-topbar-actions">
      <div class="layout-topbar-menu lg:block">
        <div class="layout-topbar-menu-content">
          <Button class="layout-topbar-action" severity="contrast" text rounded>
            <i class="pi pi-bell">
              <span> Notifications </span>
            </i>
          </Button>
          <Button type="button"  class="layout-topbar-action" severity="contrast" text rounded  >
            <i class="pi pi-flag">
              <span> English </span>
            </i>
          </Button>
          <Button type="button" class="layout-topbar-action" severity="contrast" text rounded>
            <i class="pi pi-user"></i>
            <span>Profile</span>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
