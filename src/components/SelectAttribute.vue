<template>
    <label>{{title}}
        <select 
        :value="value"
        v-on:change="$emit('input', $event.target.value)">
            <slot></slot>
        </select>
        <small v-if="condition">{{text}}</small>
    </label>
</template>
<script>
export default {
    props: {
        title: String,
        value: {
                type: String,
                required: true
           },
        condition: Boolean,
        text: String
    },
}
</script>

<style lang="scss">
    select {
    height: 2rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #000;
    &:focus {
        outline: none;
    }
    }
</style>