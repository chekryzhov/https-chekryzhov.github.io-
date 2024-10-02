const modal = document.querySelector('.modal');

const today = document.querySelector('#today');
let date = new Date();
let output = String(date.getDate()).padStart(2, '0') + '.' + String(date.getMonth() + 1).padStart(2, '0') + '.' + date.getFullYear();
today.textContent = output;

const fadeIn = (el, timeout, display) => {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
        el.style.opacity = 1;
    }, 10);
};

const fadeOut = (el, timeout) => {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() => {
        el.style.display = 'none';
    }, timeout);
};

function questionnaireSubmit() {

    if (document.querySelector('#pd').checked) {
        if (document.querySelector('input[name="employment"]:checked') == null || document.querySelector('input[name="sex"]:checked') == null || document.querySelector('input[name="known_vpch"]:checked') == null || document.querySelector('input[name="calendar_vaccination"]:checked') == null || document.querySelector('input[name="vaccination"]:checked') == null || document.querySelector('input[name="sources"]:checked') == null || document.querySelector('input[name="effective_vaccination"]:checked') == null || document.querySelector('input[name="safe_vaccination"]:checked') == null || document.querySelector('input[name="vpch_m_w"]:checked') == null || document.querySelector('input[name="vpch_risk"]:checked') == null || document.querySelector('input[name="infection"]:checked') == null || document.querySelector('input[name="diseases"]:checked') == null || document.querySelector('input[name="vpch"]:checked') == null || document.querySelector('input[name="activity"]:checked') == null || document.querySelector('#region').value == '' || document.querySelector('#country').value == '' || document.querySelector('#age').value == '') {
            let TitleModal = document.getElementById("exampleModalLongTitle");
            TitleModal.innerText = "Предупреждение";
        
            let resultModal = document.getElementById("modal__body");
            resultModal.innerHTML = "<div class='modal__title'>Заполните все обязательные поля!</div>";
        } else {
            let TitleModal = document.getElementById("exampleModalLongTitle");
            TitleModal.innerText = "Результат";
        
            let resultModal = document.getElementById("modal__body");
            resultModal.innerHTML = "<div class='modal__title'>Спасибо за ответы, анкета отправлена!</div>";
        }
        
    } else {
        let TitleModal = document.getElementById("exampleModalLongTitle");
        TitleModal.innerText = "Предупреждение";
    
        let resultModal = document.getElementById("modal__body");
        resultModal.innerHTML = "<div class='modal__title'>Вы не согласились с политикой обработки персональных данных!</div>";
    }

    fadeIn(modal,500);
}

document.querySelector("#employment_ans_2").addEventListener('change', function () {
    if(this.checked) {
        document.querySelector(".q_5").classList.remove("dn");
    } else {
        document.querySelector(".q_5").classList.add("dn");
    }
});

document.querySelector("#employment_ans_3").addEventListener('change', function () {
    if(this.checked) {
        document.querySelector(".q_5").classList.remove("dn");
    } else {
        document.querySelector(".q_5").classList.add("dn");
    }
});

document.querySelector("#employment_ans_4").addEventListener('change', function () {
    if(this.checked) {
        document.querySelector(".q_5").classList.remove("dn");
    } else {
        document.querySelector(".q_5").classList.add("dn");
    }
});

document.querySelector("#employment_ans_5").addEventListener('change', function () {
    if(this.checked) {
        document.querySelector(".q_5").classList.remove("dn");
    } else {
        document.querySelector(".q_5").classList.add("dn");
    }
});

document.querySelector("#employment_ans_1").addEventListener('change', function () {
    if(this.checked) {
        document.querySelector(".q_5").classList.add("dn");
    } else {
        document.querySelector(".q_5").classList.remove("dn");
    }
});

document.querySelector("#known_vpch_ans_1").addEventListener('change', function () {
    if(this.checked) {
        document.querySelector(".q_13").classList.remove("dn");
    } else {
        document.querySelector(".q_13").classList.add("dn");
    }
});

document.querySelector("#known_vpch_ans_2").addEventListener('change', function () {
    if(this.checked) {
        document.querySelector(".q_13").classList.add("dn");
    } else {
        document.querySelector(".q_13").classList.remove("dn");
    }
});

document
    .querySelector(".modal__btn-close")
    .addEventListener("click", () => fadeOut(modal,500));
document
    .querySelector(".close")
    .addEventListener("click", () => fadeOut(modal,500));

document
    .querySelector(".pd_modal")
    .addEventListener("click", function () {
        let TitleModal = document.getElementById("exampleModalLongTitle");
        TitleModal.innerText = "Информированное добровольное согласие участника исследования";

        let resultModal = document.getElementById("modal__body");
        resultModal.innerHTML = "<div class='text'>Исследовательская группа ФБУН ЦНИИ Эпидемиологии Роспотребнадзора приглашает Вас принять участие в социологическом исследовании, целью которого является изучение уровня информированности населения Российской Федерации о роли вируса папилломы человека в развитии злокачественных новообразований и необходимости проведения вакцинации.<p>Прежде чем Вы примете решение об участии в этом исследовании, мы бы хотели предоставить Вам информацию об этом исследовании, о том, что ожидает Вас, и о возможных рисках.</p><p><b>Добровольность участия</b></p><p>Ваше участие в исследовании должно быть исключительно добровольным. Данное согласие не должно даваться под влиянием обмана, психического или физического насилия, или в условиях несвободы. Ваше согласие не должно быть вынуждено стечением тяжелых жизненных обстоятельств (недостатком материальных средств) и/или не обусловлено какой-либо зависимостью от экспериментатора (-ов). Вы можете принять решение не участвовать в исследовании сейчас или отказаться продолжать участвовать на любом этапе без каких-либо негативных последствий.</p><p><b>Конфиденциальность</b></p><p>В данном исследовании мы не собираем никакие персональные данные участников. Все результаты будут представляться только в общем массиве, а не индивидуально. Все данные, собранные в ходе исследования, будут доступны только исследовательской группе. По результатам исследования мы планируем опубликовать результаты в научных журналах.</p><p><b>Риски</b></p><p>Данное исследование не предполагает возникновения рисков.</p><p><b>Выгоды</b></p><p>Своим участием Вы сможете внести вклад в научное исследование, предоставив сведения о информированности о вирусе папилломы человека, папилломавирусной инфекции, профилактической вакцинации. В целом эти данные позволят совершенствовать оказываемую медико-профилактическую помощь.</p><p><b>Этическое одобрение</b></p><p>Данное исследование рассмотрено и одобрено Локальным Этическим Комитетом ФБУН ЦНИИ Эпидемиологии Роспотребнадзора (выписка из протокола №140 заседания ЛЭК 27.02.2024 г.).</p><p><b>ПОДТВЕРЖДЕНИЕ ИНФОРМИРОВАННОГО СОГЛАСИЯ НА УЧАСТИЕ В ИССЛЕДОВАНИИ</b></p><p>Продолжая заполнение онлайн-опроса, я подтверждаю, что прочитал(а) и понял(а) цели, процедуру, методы и возможные неудобства участия в исследовании. Данное согласие дается не под влиянием обмана, психического или физического насилия, или в условиях несвободы. Мое согласие не вынуждено стечением тяжелых жизненных обстоятельств (недостатком материальных средств) и/или не обусловлено какой-либо зависимостью от экспериментатора (-ов). Я даю свое согласие на участие в исследовании.</p></div>";
        fadeIn(modal,500);
    });
