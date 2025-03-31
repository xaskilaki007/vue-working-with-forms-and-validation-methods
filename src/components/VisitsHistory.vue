<template>
    <div class="container text-center">
        <h1>История просмотра</h1>

        <section>
            <h2>История текущего сеанса</h2>
            <table id="sessionHistory">
                <thead>
                    <tr>
                        <th>Страница</th>
                        <th>Количество посещений</th>
                        <th>Последний визит</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(details, page) in sessionHistory" :key="page">
                        <td>{{ page }}</td>
                        <td>{{ details.visits }}</td>
                        <td>{{ details.lastVisit || '—' }}</td>
                    </tr>
                </tbody>
            </table>

            <h2>История за всё время</h2>
            <table id="allTimeHistory">
                <thead>
                    <tr>
                        <th>Страница</th>
                        <th>Количество посещений</th>
                        <th>Последний визит</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(details, page) in allTimeHistory" :key="page">
                        <td>{{ page }}</td>
                        <td>{{ details.visits }}</td>
                        <td>{{ details.lastVisit || '—' }}</td>
                    </tr>
                </tbody>
            </table>
        </section>
    </div>
</template>

<script>
export default {
    name: 'VisitHistory',
    data() {
        return {
            sessionHistory: {},
            allTimeHistory: {},
        };
    },
    mounted() {
        this.loadHistories();
        this.updateHistory();
    },
    methods: {
        loadHistories() {
            // Загружаем данные из localStorage и sessionStorage
            this.sessionHistory = JSON.parse(sessionStorage.getItem("pageHistory")) || {};
            this.allTimeHistory = JSON.parse(localStorage.getItem("pageHistory")) || {};
        },
        updateHistory() {
            const currentTime = new Date().toLocaleString();
            const pageName = location.pathname.split("/").pop() || "index.html";

            // Обновляем историю текущего сеанса
            if (!this.sessionHistory[pageName]) {
                this.sessionHistory[pageName] = { visits: 0, lastVisit: null };
            }
            this.sessionHistory[pageName].visits += 1;
            this.sessionHistory[pageName].lastVisit = currentTime;

            // Обновляем общую историю
            if (!this.allTimeHistory[pageName]) {
                this.allTimeHistory[pageName] = { visits: 0, lastVisit: null };
            }
            this.allTimeHistory[pageName].visits += 1;
            this.allTimeHistory[pageName].lastVisit = currentTime;

            // Сохраняем данные в хранилище
            sessionStorage.setItem("pageHistory", JSON.stringify(this.sessionHistory));
            localStorage.setItem("pageHistory", JSON.stringify(this.allTimeHistory));
        }
    }
}
</script>

<style scoped>
/* Добавьте ваши стили для таблиц, если необходимо */
table {
    width: 100%;
    border-collapse: collapse;
}

th, td {
    padding: 10px;
    border: 1px solid #ddd;
}

th {
    background-color: #f2f2f2;
}
</style>
