<template>
    <div class="container text-center mt-4">
        <h2 class="mb-4">Севастопольский государственный университет</h2>
        <h2 class="mb-4">Кафедра «Информационные системы»</h2>
        <table class="table table-disc" id="education-table">
            <thead>
                <tr>
                    <th colspan="9">ПЛАН УЧЕБНОГО ПРОЦЕССА</th>
                </tr>
                <tr>
                    <th rowspan="2">№</th>
                    <th rowspan="2">Дисциплина</th>
                    <th rowspan="2">Кафедра</th>
                    <th colspan="6">Всего часов</th>
                </tr>
                <tr>
                    <th>Всего</th>
                    <th>Ауд</th>
                    <th>Лк</th>
                    <th>Лб</th>
                    <th>Пр</th>
                    <th>СРС</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td class="text-left">Экология</td>
                    <td>БЖ</td>
                    <td>54</td>
                    <td>27</td>
                    <td>18</td>
                    <td>0</td>
                    <td>9</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td class="text-left">Высшая математика</td>
                    <td>ВМ</td>
                    <td>540</td>
                    <td>282</td>
                    <td>141</td>
                    <td>0</td>
                    <td>141</td>
                    <td>258</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td class="text-left">Русский язык и культура речи</td>
                    <td>НГиГ</td>
                    <td>108</td>
                    <td>54</td>
                    <td>18</td>
                    <td>0</td>
                    <td>36</td>
                    <td>54</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td class="text-left">Основы дискретной математики</td>
                    <td>ИС</td>
                    <td>216</td>
                    <td>139</td>
                    <td>87</td>
                    <td>0</td>
                    <td>52</td>
                    <td>77</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td class="text-left">Основы программирования и алгоритмические языки</td>
                    <td>ИС</td>
                    <td>405</td>
                    <td>210</td>
                    <td>105</td>
                    <td>87</td>
                    <td>18</td>
                    <td>195</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td class="text-left">Основы экологии</td>
                    <td>ПЭОП</td>
                    <td>54</td>
                    <td>27</td>
                    <td>18</td>
                    <td>0</td>
                    <td>9</td>
                    <td>27</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td class="text-left">Теория вероятностей и математическая статистика</td>
                    <td>ИС</td>
                    <td>162</td>
                    <td>72</td>
                    <td>54</td>
                    <td>18</td>
                    <td>0</td>
                    <td>90</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td class="text-left">Физика</td>
                    <td>Физики</td>
                    <td>324</td>
                    <td>194</td>
                    <td>106</td>
                    <td>88</td>
                    <td>0</td>
                    <td>130</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td class="text-left">Основы электротехники и электроники</td>
                    <td>ИС</td>
                    <td>108</td>
                    <td>72</td>
                    <td>36</td>
                    <td>18</td>
                    <td>18</td>
                    <td>36</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td class="text-left">Численные методы в информатике</td>
                    <td>ИС</td>
                    <td>189</td>
                    <td>89</td>
                    <td>36</td>
                    <td>36</td>
                    <td>17</td>
                    <td>100</td>
                </tr>
                <tr>
                    <td>11</td>
                    <td class="text-left">Методы исследования операций</td>
                    <td>ИС</td>
                    <td>216</td>
                    <td>104</td>
                    <td>52</td>
                    <td>35</td>
                    <td>17</td>
                    <td>112</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
#education-table {
    border-radius: 12px; /* Скругление углов */
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); /* Тень для таблицы */
    margin: 20px 0;
    width: 100%; 
    overflow: hidden;
}

.table-disc {
    background-color: #ffffff; /* Белый фон для таблицы */
    border: 1px solid #e0e0e0; /* Светло-серый бордер */
    border-collapse: collapse;
}
.table-disc th, .table-disc td {
    border: 2px solid rgb(70, 70, 70); /* Темный бордер для ячеек */
    padding: 10px;
    text-align: left;
}

.table-disc th {
    background-color: #2c3e50; /* Цвет фона для заголовков */
    color: #ffffff; /* Белый текст */
    font-weight: bold;
    font-size: 1.1em; /* Увеличение размера шрифта заголовков */
    text-align: center; /* Центрирование текста */
}

.table-disc tbody tr {
    transition: background-color 0.3s; /* Анимация цвета фона при наведении */
}

.table-disc tbody tr:hover {
    background-color: #f1f1f1; /* Светлый цвет фона при наведении */
}

.table-disc td {
    vertical-align: middle; /* Центрирование содержимого в ячейках */
}

.table-disc td.text-left {
    text-align: left; /* Выравнивание по левому краю */
}

.table-disc td a {
    color: #007bff; /* Цвет ссылки */
    text-decoration: none; /* Убрать подчеркивание */
}

.table-disc td a:hover {
    text-decoration: underline; /* Подчеркивание при наведении */
}
</style>

<script>
export default {
    name: 'EducationPage',
    mounted() {
        this.updateHistory();
    },
    methods: {
        updateHistory() {
            const currentTime = new Date().toLocaleString();
            const pageName = this.$route.name || "EducationPage";
            
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

