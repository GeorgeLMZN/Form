<template>
    <label>{{title}}
        <input 
        :placeholder="placeholder"
        :type="type"
        :value="value"
        v-on:input="$emit('input', $event.target.value)"
        :class="inputcls"
        >
        <small v-if="condition">{{text}}</small>
        <small v-if="condition2">{{text2}}</small>
    </label>
</template>

<script>
export default {
    props: {
     title: String,
     text: String,
     text2: String,
     placeholder: String,
     type: String,
     value: String,
     condition: Boolean,
     condition2: Boolean,
     inputcls: Object
    }
}
</script>
<style lang="scss">
    small {
        color: red;
    }
    input {
    height: 2rem;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #000;
    &:focus {
        outline: none;
    }
    }
    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>