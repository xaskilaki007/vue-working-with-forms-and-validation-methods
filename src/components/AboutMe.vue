<template>
    <div class="container">
        <div class="content">
            <h1 align='center'>Автобиография</h1><br>
            <div class="text-biography">
                <img src="images/shadowfight.jpg" alt="" id="game" class="tooltip-image float-left">
                <p>
                    Меня зовут Пётр, я родился в городе Симферополе где-то в районе ул. Пушкина. С рождения я увлекался программированием, когда папа купил ноутбук я поставил на него Shadow Fight в играх ВКонтакте и был очень счастлив<br><br>
                </p>
            </div>
            <div class="biography">
                <div class="text-biography" id="lampa">
                    <p>
                        Я с ранних лет очень любил люстры и не упускал возможностей сфотографироваться с невероятными творениями людей.
                    </p>
                </div>
                <div class="image-tooltip-container">
                    <img src="images/Я-003.jpg" alt="Пример изображения" class="tooltip-image float-left">
                    <p class="tooltip-text">Шпаков П.Н. студент 3 курса СевГУ специальности Прикладная Информатика возле люстры в театре им. Луначарского</p>
                    <p class="just-text">Шпаков П.Н. в театре</p>
                </div>
            </div>
            <div class="biography">
                <div class="text-biography" id="history">
                    <p>
                        Я всегда немного был заинтересован историей великих людей, меня волновало не то что они сделали, а как добились своих высот, как они сделали то что не удавалось другим?
                        Что ими двигало когда все были против них? Отличный пример дедушка Ленин, который перевернул страну с головы на ноги!
                    </p>
                </div>
                <div class="image-tooltip-container">
                    <img src="images/Я-002.jpg" alt="Пример изображения" class="tooltip-image float-left">
                    <p class="tooltip-text">Шпаков П.Н. студент 3 курса СевГУ специальности Прикладная Информатика возле памятника Владимира Ильича Ленина</p>
                    <p class="just-text">Шпаков П.Н. возле <br> университета имени Курчатова</p>
                </div>
                <div id="Бетховен">
                    <img src="images/Бетховен.webp" alt="Бетховен" class="tooltip-image float-left">
                    <p class="tooltip-text">Понимаю твою страсть! Бетховен – это что-то особенное. Его музыка пробуждает самые глубокие чувства и образы. Когда я слышу его мелодии, я словно переношусь в другой мир, где каждая нота имеет своё значение и передаёт неизведанные эмоции. Его симфонии как будто проникают в самую душу и рассказывают истории без слов. Я чувствую себя будто на волне звуков, которые то стремительно уносят меня вперёд, то мягко обнимают тишиной.</p>
                    <p class="just-text">Бетховен умел передавать через музыку то, что невозможно выразить словами. Его композиции наполнены таким богатством и глубиной, что каждый раз находишь что-то новое, слушая их. В его произведениях сочетаются ярость и нежность, радость и печаль, что делает их поистине универсальными и вечными. Он словно поэт, который рисует свои картины звуками, и каждый может найти в его музыке что-то своё, что отзовётся в сердце и останется там надолго.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    beforeRouteEnter(to, from, next) {
        // Вызов метода для обновления истории переходов
        const visitHistoryComponent = {
            methods: {
                updateHistory() {
                    const currentTime = new Date().toLocaleString();
                    const pageName = to.path.split("/").pop();

                    // Пример простого обновления истории в sessionStorage
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
        };

        visitHistoryComponent.methods.updateHistory();
        next();
    }
}
</script>


<style>
.float-left {
    float: left; /* Обтекание текста слева */
    margin: 0 15px 15px 0; /* Отступы для лучшего внешнего вида */
    width: 30%; /* Уменьшенный размер изображения */
}

/* Дополнительные стили ничего не меняем */
.tooltip-image {
    max-width: 100%; /* Поддержка адаптивности изображений */
    height: auto;
}
</style>
