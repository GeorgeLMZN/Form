<template>
    <div class="addBtn">
          <button type='submit'>{{title}}</button>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    }
}
</script>