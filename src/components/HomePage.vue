<template>
    <div>        
        <div class="container">
            <div class="content">
                <h1 align='center'>Аннотация</h1><br>
                <div class="annotation-content">
                    <p>
                        Применение нейронных сетей в искусстве поднимает множество этических вопросов. В частности, обсуждаются проблемы авторства и авторских прав, а также парадокс обучения нейросети, при котором она может усиливать негативные стереотипы, такие как расовые или гендерные, заложенные в её модель.<br><br>
                    </p>
                    <!-- Изображение с описанием -->
                    <div class="image-tooltip-container">
                        <img src="images/Я.jpg" alt="Пример изображения" class="tooltip-image">
                        <p class="tooltip-text">Шпаков П.Н. студент 3 курса СевГУ специальности Прикладная Информатика</p>
                    </div>
                </div>
                <div class="table-image-container">
                    <!-- Таблица -->
                    <table>
                        <caption>Личные данные</caption>
                        <tr class="table-001">
                            <td>ФИО:</td>
                            <td>Шпаков Пётр Николаевич</td>
                        </tr>
                        <tr>
                            <td>Группа:</td>
                            <td>ПИ/б-22-2-о</td>
                        </tr>
                        <tr>
                            <td>Лабораторная №6-7:</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage',
    data() {
        return {
            currentTime: new Date().toLocaleTimeString()
        };
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
            const pageName = this.$route.name || "HomePage";
            
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
.navbar {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #0e0042;
}

.navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    position: relative;
    z-index: 1;
    transition: background-color 0.5s ease, transform 0.3s ease;
}

.navbar a:hover, .navbar a .dropdown:hover .dropbtn {
    background-color: rgb(180, 0, 0);
    transform: scale(1.1);
    z-index: 10;
    border-radius: 10px;
    transition: transform 0.2s ease-in-out;
}

.dropdown .dropbtn {
    font-size: 16px;
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    margin: 0;
    transition: background-color 0.5s ease, transform 0.3s ease;
}

.dropdown .dropdown-content {
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: opacity 1s ease, transform 1s ease, visibility 1s ease;
}

.dropdown .dropdown-content:hover {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

/* Стили для аннотации */
.annotation-content {
    display: flex;
    align-items: flex-start; /* Выравнивание по верхнему краю */
}

.annotation-content p {
    flex: 1; /* Текст занимает оставшееся место */
    margin-right: 20px; /* Отступ справа от текста */
}

.image-tooltip-container {
    max-width: 250px; /* Ограничение размера изображения */
}

.avatar {
    max-width: 250px;
    max-height: 250px;
}
</style>
