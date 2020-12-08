<template>
    <div>
        <div class="article-head"></div>
        <ThisArticle />
    </div>
</template>


<script>
import ThisArticle from '../components/article';

export default {
    name: 'oneArticle',
    components: {
        ThisArticle,
    }
}
</script>

<style scoped>
</style>