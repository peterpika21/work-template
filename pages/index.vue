<template>
  <div>
    <FontAwesomeIcon :icon="['fab', 'acquisitions-incorporated']"></FontAwesomeIcon>
    <div class="tw-container tw-mx-auto">{{ demo }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'

export default defineComponent({
  setup() {
    const state = reactive({
      demo: 123
    })

    return state
  },
})
</script>
