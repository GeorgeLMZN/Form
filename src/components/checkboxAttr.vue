<template>
    <label class="cls">{{title}}
        <input
        type="checkbox"
        v-bind:checked="checked"
        v-on:change="$emit('change', $event.target.checked)"
        >
    </label>
</template>

<script>
    export default {
    model: {
    prop: '',
    event: 'change'
  },
  props: {
    checked: Boolean,
    title: String,
    cls: String
  }
    }
</script>
