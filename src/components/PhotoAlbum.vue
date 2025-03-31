<template>
    <div class="container" id="photo-album">
        <h1>Фотоальбом</h1>
        <div class="row row-cols-5 mt-2" v-for="n in 3" :key="n">
            <div class="col" v-for="(item, index) in items[n - 1]" :key="index">
                <div class="card">
                    <img :src="item.src" :alt="item.title" class="card-img-top">
                    <div class="card-body text-center">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PhotoAlbum',
    data() {
        return {
            items: [
                [
                    {"src":"/images/image1.jpg","title":"1"},
                    {"src":"/images/image2.jpg","title":"2"},
                    {"src":"/images/image3.jpg","title":"3"},
                    {"src":"/images/image4.jpg","title":"4"},
                    {"src":"/images/image5.jpg","title":"5"}
                ],
                [
                    {"src":"/images/image6.jpg","title":"6"},
                    {"src":"/images/image7.jpg","title":"7"},
                    {"src":"/images/image8.jpg","title":"8"},
                    {"src":"/images/image9.jpg","title":"9"},
                    {"src":"/images/image10.jpg","title":"10"}
                ],
                [
                    {"src":"/images/image11.jpg","title":"11"},
                    {"src":"/images/image12.jpg","title":"12"},
                    {"src":"/images/image13.jpg","title":"13"},
                    {"src":"/images/image14.jpg","title":"14"},
                    {"src":"/images/image15.jpg","title":"15"}
                ]
            ]
        }
    },
    mounted() {
        this.updateHistory();
        setInterval(() => {
            this.currentTime = new Date().toLocaleTimeString();
        }, 1000);
    },
    methods: {
        updateHistory() {
            const currentTime = new Date().toLocaleString();
            const pageName = this.$route.name || "PhotoAlbum";

            // Обновляем историю текущего сеанса
            const sessionHistory = JSON.parse(sessionStorage.getItem("pageHistory")) || {};
            if (!sessionHistory[pageName]) {
                sessionHistory[pageName] = { visits: 0, lastVisit: null };
            }
            sessionHistory[pageName].visits += 1;
            sessionHistory[pageName].lastVisit = currentTime;
            sessionStorage.setItem("pageHistory", JSON.stringify(sessionHistory));

            // Обновляем общую историю
            const allTimeHistory = JSON.parse(localStorage.getItem("pageHistory")) || {};
            if (!allTimeHistory[pageName]) {
                allTimeHistory[pageName] = { visits: 0, lastVisit: null };
            }
            allTimeHistory[pageName].visits += 1;
            allTimeHistory[pageName].lastVisit = currentTime;
            localStorage.setItem("pageHistory", JSON.stringify(allTimeHistory));
        }
    }
}
</script>

<style>
#photo-album .card-img-top {
    height: 250px;
}
</style>
