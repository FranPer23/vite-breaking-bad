<script>
export default {
    name: "AppHeader",
    props: {
        title: String
    }
}
</script>

<template>

    <header class="header">
        <div class="title flex">
            <img src="../assets/img/logo.png" alt="">
            <h2 class="">{{ title }}</h2>
        </div>
        
    </header>
    
</template>

<style scoped lang="scss">
.header {
    height: 100px;
    background-color: white;

    img {
        width: 200px;
        height: 100px;
    }

}

h2 {
    font-weight: 900;
}

.flex {
    display: flex;
    align-content: center;
    align-items: center;
    
}
</style>