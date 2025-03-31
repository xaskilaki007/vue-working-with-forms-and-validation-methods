<template>
    <nav class="navbar navbar-expand-lg mb-3">
        <div class="container-fluid">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <RouterLink to="/" class="nav-link" activeClass="active">Главная</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/about" class="nav-link" activeClass="active">Обо мне</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/education" class="nav-link" activeClass="active">Учеба</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/photo" class="nav-link" activeClass="active">Фотоальбом</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink to="/contact" class="nav-link" activeClass="active">Контакт</RouterLink>
                </li>
            </ul>
            <div class="d-flex flex-column">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <RouterLink to="/history" class="nav-link" activeClass="active">История</RouterLink>
                    </li>
                </ul>
                <div class="text-center" id="current-date">{{ currentDate }}</div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            currentDate: ''
        }
    },
    mounted() {
        const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
        const lz = e => e < 10 ? `0${e}` : e.toString();

        function getCurrentDate() {
            const currentDate = new Date();

            const h = lz(currentDate.getHours());
            const m = lz(currentDate.getMinutes());
            const s = lz(currentDate.getSeconds());
            const day = lz(currentDate.getDate());
            const month = months[currentDate.getMonth()];
            const year = currentDate.getFullYear().toString().substring(2);

            return `${h}:${m}:${s} ${day} ${month} ${year}`;
        }

        this.$data.currentDate = getCurrentDate();
        setInterval(() => {
            this.$data.currentDate = getCurrentDate();
        }, 1000);
    }
}
</script>

<style>
nav {
    background-color: #4682B4; /* Синий цвет */
}

.nav-link {
    color: white !important; /* Обязательный белый цвет для текста ссылки */
}

.nav-link:hover {
    color: rgba(255, 255, 255, 0.8); /* Немного прозрачности при наведении */
}

/* Стиль для активной вкладки */
.nav-link.active {
    background-color: rgba(255, 255, 255, 0.1); /* Светлый цвет для активной вкладки */
    color: white !important; /* Убедитесь, что текст все равно белый */
}

#current-date {
    color: white; /* Белый цвет для текущей даты */
}
</style>
