<template>
    <div class="overlay">
        <div class="popup-success">
            <h1>
                <h1>{{title}}</h1>
                <button v-on:click="callback">Закрыть окно</button>
            </h1>
        </div>
    </div>
</template>






<script>
export default {
    props: {
        title: String,
        callback: Function,
    },
}
</script>










<style lang="scss">
    .overlay {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        background: rgba(0, 0, 0, .5);
        display: none;
        .popup-success {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            position: absolute;
            width: 60%;
            height: 30%;
            background: #fff;
            left: 50%;
            top: 50vh;
            transform: translate(-50%, -50%);
            border-radius: 0.8rem;
            h1 {
                font-size: 2.5rem;
            }
        }
    }
</style>