<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    props: {
        iconClass: {
            type: String,
            required: true,
        },
        className: {
            type: String,
            default: '',
        },
    },
    computed: {
        iconName() {
        return `#icon-${this.iconClass}`
        },
        svgClass() {
        if (this.className) {
            return 'svg-icon ' + this.className
        } else {
            return 'svg-icon'
        }
        },
    }
})
</script>

<style>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
</style>