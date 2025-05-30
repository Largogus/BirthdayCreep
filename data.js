let current = 0
let lst = {
    "largen": 0,
    "nastilka": 0,
    "lexer": 0,
    "red": 0,
    "maks": 0,
    "artem": 0,
    "vlad": 0,
    "kitik": 0,
    "strannik": 0,
    "hardys": 0,
    'ehnenra': 0,
    'tima': 0
}

function loadQuestion(num = null) {
    fetch('info.json')
        .then(response => response.json())
        .then(data => {
            const block = document.querySelector('.block_data');
            const questionData = data[current];
            const len = Object.keys(questionData).length
            const answers = Object.keys(questionData)
                               .filter(key => key.startsWith('a'))
                               .sort();

            let buttonsHTML = answers.map((key, index) => 
                `<button class='button' id='${questionData[key]}'>${questionData[key]}</button>`
            ).join('');

            block.innerHTML = `
                <div class='block_name'>
                    <b><p>${questionData['q']}</p></b>
                </div>
                <div class='block'>
                    ${buttonsHTML}
                </div>
            `;

            setupButtonHandlers();
        })
        .catch(error => console.error('Ошибка загрузки:', error));
}

function setupButtonHandlers() {
    document.querySelectorAll('.button').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
}

function handleButtonClick() {
    const buttonId = this.id;

    if (current < 14) {
    
        if (buttonId === "Общаюсь с друзьями") {
            lst.lexer += 1;
            lst.ehnenra += 1;
            lst.red += 1;
            lst.artem += 1;
            lst.tima += 1
        }

        if (buttonId === "Учу что-то новое") {
            lst.nastilka += 1;
        }

        if (buttonId === "Творю") {
            lst.lexer += 1;
            lst.largen += 1;
            lst.strannik += 1;
            lst.hardys += 1;
        }

        if (buttonId === "Отдыхаю в одиночестве") {
            lst.vlad += 1;
            lst.kitik += 1;
            lst.hardys += 1;
        }

        if (buttonId === "Умение договариваться") {
            lst.nastilka += 1;
            lst.hardys += 1;
            lst.tima += 1;
        }

        if (buttonId === "Креативность") {
            lst.largen += 1;
            lst.ehnenra += 1;
            lst.kitik += 1;
            lst.red += 1;
        }

        if (buttonId === "Аналитическое мышление") {
            lst.vlad += 1;
            lst.artem += 1;
        }

        if (buttonId === "Практичность") {
            lst.lexer += 1;
            lst.maks += 1;
            lst.strannik += 1;
        }

        if (buttonId === "Поп или хип-хоп") {
            lst.nastilka += 1;
            lst.artem += 1;
            lst.strannik += 1;
        }

        if (buttonId === "Рок или металл") {
            lst.largen += 1;
            lst.vlad += 1;
            lst.red += 1;
        }

        if (buttonId === "Электроника или Lo-Fi") {
            lst.kitik += 1;
            lst.lexer += 1;
            lst.hardys += 1;
        }

        if (buttonId === "Классика или джаз") {
            lst.maks += 1;
            lst.ehnenra += 1;
            lst.tima += 1;
        }

        if (buttonId === "Ищу решение сразу") {
            lst.vlad += 1;
            lst.lexer += 1;
            lst.red += 1;
            lst.strannik += 1;
            lst.tima += 1;
        }

        if (buttonId === "Паникую, но потом справляюсь") {
            lst.nastilka += 1;
            lst.maks += 1;
            lst.kitik += 1;
            lst.largen += 1;
            lst.artem += 1;
        }

        if (buttonId === "Думаю несколько дней") {
            lst.ehnenra += 1
        }

        if (buttonId === "Прошу помощи") {
            lst.hardys += 1;
        }

        if (buttonId === "Вечеринки и нетворкинг") {
            lst.vlad += 1;
            lst.red += 1;
        }

        if (buttonId === "Мастер-классы и лекции") {
            lst.artem += 1;
            lst.strannik += 1;  
        }

        if (buttonId === "Мозговые штурмы") {
            lst.ehnenra += 1;
            lst.hardys += 1;
        }

        if (buttonId === "Спокойные посиделки") {
            lst.largen += 1;
            lst.kitik += 1;
            lst.tima += 1;
            lst.maks += 1;
            lst.nastilka += 1;
        }

        if (buttonId === "Читать мысли") {
            lst.largen += 1;
            lst.nastilka += 1;
        }

        if (buttonId === "Телепортация") {
            lst.artem += 1;
            lst.ehnenra += 1;
            lst.kitik += 1;
            lst.maks += 1;
            lst.red += 1;
            lst.vlad += 1;
        }

        if (buttonId === "Предвидение будущего") {
            lst.strannik += 1;
        }

        if (buttonId === "Суперсила не нужна") {
            lst.hardys += 1;
            lst.lexer += 1;
            lst.tima += 1;
        }

        if (buttonId === "Импульсивный, но эффективный") {
            lst.hardys += 1;
            lst.vlad += 1;
            lst.ehnenra += 1;
            lst.strannik += 1;
        }

        if (buttonId === "Планомерный и структурированный") {
            lst.nastilka += 1;
            lst.tima += 1;
        }

        if (buttonId === "Творческий и нестандартный") {
            lst.largen += 1;
            lst.maks += 1;
            lst.artem += 1;
        }

        if (buttonId === "Делаю всё в последний момент") {
            lst.red += 1;
            lst.lexer += 1;
            lst.kitik += 1;
        }

        if (buttonId === "Люди и атмосфера") {
            lst.artem += 1;
            lst.hardys += 1;
            lst.nastilka += 1;
            lst.vlad += 1;
            lst.kitik += 1;
            lst.ehnenra += 1;
            lst.tima += 1;
            lst.red += 1;
        }

        if (buttonId === "Возможности для роста") {
        }

        if (buttonId === "Интересные проекты") {
            lst.largen += 1;
            lst.strannik += 1;
            lst.lexer += 1;
        }

        if (buttonId === "Поддержка и вдохновение") {
            lst.maks += 1;
        }

        if (buttonId === "Комедии или романтики") {
            lst.maks += 1;
            lst.red += 1;
        }

        if (buttonId === "Фантастика или фэнтези") {
            lst.largen += 1;
            lst.artem += 1;
            lst.strannik += 1;
            lst.hardys += 1;
            lst.tima += 1;
            lst.lexer += 1;
        }

        if (buttonId === "Триллеры или детективы") {
            lst.nastilka += 1;
            lst.vlad += 1;
            lst.ehnenra += 1;
            lst.kitik += 1;
        }

        if (buttonId === "Драмы или артхаус") {
            lst.largen += 1;
        }

        if (buttonId === "Обожаю неожиданности!") {
            lst.vlad += 1;
        }

        if (buttonId === "Только если это в моих планах") {
            lst.ehnenra += 1;
            lst.red += 1;
        }

        if (buttonId === "Зависит от настроения") {
            lst.largen += 1;
            lst.lexer += 1;
            lst.tima += 1;
            lst.hardys += 1;
            lst.strannik += 1;
            lst.artem += 1
            lst.nastilka += 1;
            lst.maks += 1;
            lst.kitik += 1;
        }

        if (buttonId === "Предпочитаю стабильность") {
        }

        if (buttonId === "Ранняя пташка") {
            lst.red += 1;
            lst.maks += 1;
        }

        if (buttonId === "Сова") {
            lst.kitik += 1;
            lst.vlad += 1;
            lst.artem += 1;
            lst.lexer += 1;
        }

        if (buttonId === "Хаотичный график") {
            lst.nastilka += 1;
            lst.strannik += 1;
            lst.ehnenra += 1;
            lst.hardys += 1;
        }

        if (buttonId === "Стабильный, но гибкий") {
            lst.largen += 1;
            lst.tima += 1;
            lst.artem += 1;
        }

        if (buttonId === "Живые встречи") {
            lst.tima += 1;
            lst.largen += 1;
            lst.ehnenra += 1;
            lst.vlad += 1;
            lst.maks += 1;
            lst.red += 1;
        }

        if (buttonId === "Соцсети и мессенджеры") {
            lst.hardys += 1;
            lst.lexer += 1;
            lst.strannik += 1;
            lst.nastilka += 1;
            lst.kitik += 1;
        }

        if (buttonId === "Голосовые сообщения") {
        }

        if (buttonId === "Пишу длинные письма") {
            lst.lexer += 1;
        }

        if (buttonId === "Деньги и карьера") {
            lst.maks += 1;
            lst.vlad += 1;
            lst.artem += 1;
        }

        if (buttonId === "Признание и слава") {
            lst.red += 1;
            lst.ehnenra += 1;
            lst.hardys += 1;
        }

        if (buttonId === "Личный рост") {
            lst.kitik += 1;
            lst.nastilka += 1;
            lst.largen += 1;
            lst.tima += 1;
            lst.strannik += 1;
        }

        if (buttonId === "Помощь другим") {
            lst.lexer += 1;
        }

        if (buttonId === "Вдохновляющий") {
            lst.hardys += 1;
            lst.artem += 1;
            lst.nastilka += 1;
        }

        if (buttonId === "Стратегический") {
            lst.largen += 1;
            lst.strannik += 1;
            lst.ehnenra += 1;
            lst.kitik += 1;
        }

        if (buttonId === "Демократичный") {
            lst.tima += 1;
            lst.vlad += 1;
        }

        if (buttonId === "«Делай как я»") {
            lst.lexer += 1;
            lst.red += 1;
            lst.maks += 1;
        }

        if (buttonId === "Кофе") {
            lst.largen += 1;
            lst.kitik += 1;
            lst.nastilka += 1;
            lst.lexer += 1;
            lst.tima += 1;
            loadResult()
        }

        if (buttonId === "Чай") {
            lst.vlad += 1;
            lst.ehnenra += 1;
            lst.artem += 1;
            loadResult()
        }

        if (buttonId === "Газировка") {
            lst.strannik += 1;
            loadResult()
        }

        if (buttonId === "Вода") {
            lst.red += 1;
            lst.maks += 1;
            lst.hardys += 1;
            loadResult()
        }

        current += 1;
        console.log(current)
        loadQuestion();
    } else {
        loadResult()
    }
}

function loadResult() {
    const maxValue = Math.max(...Object.values(lst));
    const keyWithMaxValue = Object.keys(lst).find(key => lst[key] === maxValue);

    const block = document.querySelector('.block_data');
    const text = document.querySelector('.h');
    const img = document.querySelector('#ico');

    console.log(lst)

    if (keyWithMaxValue == 'ehnenra') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Эненра!</h1>'
        block.innerHTML = '<p class="block_name"><b>Такой же весёлый и креативный</b></p>'
        img.src = 'ehnenra.jpg';
    }

    if (keyWithMaxValue == 'lexer') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Лекс!</h1>'
        block.innerHTML = '<p class="block_name"><b>Поспать это главное, сон - это жизнь</b></p>'   
        img.src = 'lexer.jpg';
    }

    if (keyWithMaxValue == 'vlad') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Влад!</h1>'
        block.innerHTML = '<p class="block_name"><b>Не позволяй душе лениться! Чтоб в ступе воду не толочь</b></p>'
            img.src = 'vlad.jpg';
    }

    if (keyWithMaxValue == 'hardys') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Хардис!</h1>'
        block.innerHTML = '<p class="block_name"><b>Напоминаю кстати, они открыты!</b></p>'
            img.src = 'hardys.jpg';
    }

    if (keyWithMaxValue == 'red') { 
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Красный Кровать!</h1>'
        block.innerHTML = '<p class="block_name"><b>Урааа подарки!!!</b></p>'
        img.src = 'red.jpg';
    }

    if (keyWithMaxValue == 'maks') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Макс!</h1>'
        block.innerHTML = '<p class="block_name"><b>"Приключение на 5 минут, вошли и вышли"</b></p>'
        img.src = 'maks.jpg';
    }

    if (keyWithMaxValue == 'tima') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Тима!</h1>'
        block.innerHTML = '<p class="block_name"><b>🦅🦅🦅</b></p>'
        img.src = 'tima.jpg';
    }

    if (keyWithMaxValue == 'kitik') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Китик!</h1>'
        block.innerHTML = '<p class="block_name"><b>Супер дупер добри котик <3 (неважно что меня называют 40-летним маньяком)</b></p>'
        img.src = 'kitik.jpg';
    }

    if (keyWithMaxValue == 'largen') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Ларген!</h1>'
        block.innerHTML = '<p class="block_name"><b>Кофе, ночь и код - всё, что нужно для счастья</b></p>'
        img.src = 'largen.jpg';
    }

    if (keyWithMaxValue == 'strannik') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Ларген!</h1>'
        block.innerHTML = '<p class="block_name"><b>Кофе, ночь и код - всё, что нужно для счастья</b></p>'
        img.src = 'largen.jpg';
    }

    if (keyWithMaxValue == 'artem') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Артём!</h1>'
        block.innerHTML = '<p class="block_name"><b>Лучше поздно чем никогда</b></p>'
        img.src = 'artem.jpg';
    }

    if (keyWithMaxValue == 'nastilka') {
        text.innerHTML = '<h1 style="font-size: 1em; text-align: justify;">Вы Настилка!</h1>'
        block.innerHTML = '<p class="block_name"><b>Наша компания может и небольшая, но все здесь с психическими отклонениями</b></p>'
        img.src = 'nastilka.jpg';
    }
}

const image = document.getElementById('ico');

function kan() {
    const kanistra = document.getElementById('kanistra');
    kanistra.addEventListener('click', function() {
            const block = document.querySelector('.block_data');
            const text = document.querySelector('.h');
            const img = document.querySelector('#ico');

            text.innerHTML = '<h1 style="font-size: 1em; text-align: justufy;">ТОЛЬКО НЕ КАНИСТРА!</h1>'
            block.innerHTML = '<p class="block_name" id="kanistra"><b>КАНИСТРА ПОШЁЛ НАХУЙ!</b></p>'
    })
}

image.addEventListener('click', function() {
    const block = document.querySelector('.block_data');
    const text = document.querySelector('.h');
    const img = document.querySelector('#ico');

    text.innerHTML = '<h1 style="font-size: 1em; text-align: justufy;">Вы наше любимое Сообщетсво!</h1>'
    block.innerHTML = '<p class="block_name" id="kanistra"><b>Такое же комфортное и любимое</b></p>'
    img.src = 'UCC_IMAGE.webp';

    kan()
    })


loadQuestion();