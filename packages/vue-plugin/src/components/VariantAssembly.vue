<script setup lang="ts">
import type { Principle } from '@relativistic-ui/gravity-core/types'
import { usePrinciple } from '@/composables/usePrinciple.js'
import { tokenName } from '@relativistic-ui/gravity-core'
import { computed } from 'vue'

const props = defineProps<{
  principle: Principle
}>()

const { first } = usePrinciple(props.principle)

const slotName = computed(() => tokenName(first.value))
</script>

<template>
  <slot :name="slotName" :attrs="$attrs" />
</template>
