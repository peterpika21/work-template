<template>
  <div>
    <FontAwesomeIcon :icon="['fab', 'acquisitions-incorporated']"></FontAwesomeIcon>
    <div class="tw-container tw-mx-auto">{{ demo }} {{ demo1 }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from '@vue/composition-api'
import IndexPage from '~/store/demo'

export default defineComponent({
  setup() {
    const state = reactive({
      demo: 123,
      demo1: IndexPage.name,
    })

    return state
  },
})
</script>
