/*/*טעינת הJS אחרי הHTML וקביעת משתנה לכל תיבות הסימון*/
document.addEventListener('DOMContentLoaded', function () {
    var checkboxes = document.querySelectorAll('input[type="checkbox"][name="tastePG"]');
    checkboxes.forEach(function (checkbox) {
        checkbox.checked = false;
    });
    var images = {  /*קביעת משתנה לתמונות וקישור כל תיבת סימון לתמונה שלו*/
        'milkP': 'milkPG',
        'darkP': 'darkPG',
        'whiteP': 'whitePG',
        'blondeP': 'blondePG',
        'rubiP': 'rubiPG'
    };

        //בדיקת שינויים בתיבות הסימון והכנסת התמונה ותיבת הסימון הרלוונטית למערך
    checkboxes.forEach(function (checkbox) {
        checkbox.addEventListener('change', function () {
            var correspondingImageId = images[this.id];
            var image = document.getElementById(correspondingImageId);

            if (this.checked) {
                image.classList.remove('hidden');
                image.classList.add('visible');
            } else {
                image.classList.remove('visible');
                image.classList.add('hidden');
            }
        });
    });
});

/*קביעת משתנים קבועים עבור 'מתוק ו-'מלוח' והאלמנטים שבתוך הסלסלה*/
document.addEventListener('DOMContentLoaded', function () {
    const sweetRadio = document.getElementById('sweet');
    const saltyRadio = document.getElementById('salty');
    const inBetweenRadio = document.getElementById('inBet');

    const elements = {
        cookies: document.getElementById('cookies'),
        muffin: document.getElementById('muffin'),
        chips: document.getElementById('chips'),
        prtzel: document.getElementById('prtzel')
    };

        //שינויים בהופעת האלמנטים בסל לפי התיבה שסומנה
    function updateVisibility() {
        if (sweetRadio.checked) {
            elements.cookies.style.display = 'block';
            elements.muffin.style.display = 'block';
            elements.chips.style.display = 'none';
            elements.prtzel.style.display = 'none';
        } else if (saltyRadio.checked) {
            elements.cookies.style.display = 'none';
            elements.muffin.style.display = 'none';
            elements.chips.style.display = 'block';
            elements.prtzel.style.display = 'block';
        } else if (inBetweenRadio.checked) {
            elements.cookies.style.display = 'block';
            elements.muffin.style.display = 'block';
            elements.chips.style.display = 'block';
            elements.prtzel.style.display = 'block';
        }
    }

    /*בדיקה ועדכון של הנראות*/
    updateVisibility();

    /*הוספת מאזיני-אירועים*/
    sweetRadio.addEventListener('change', updateVisibility);
    saltyRadio.addEventListener('change', updateVisibility);
    inBetweenRadio.addEventListener('change', updateVisibility);
});

//קביעת משתנים לתיבת הטקסט
document.addEventListener('DOMContentLoaded', function () {
    const textBox = document.getElementById('partnername');
    const memoParagraph = document.querySelector('#Ans');

    textBox.addEventListener('input', function () {
        memoParagraph.textContent = textBox.value;
    });
});

/*קביעת משתנים לכפתורי הרדיו 'זכר' 'נקבה'*/
document.addEventListener('DOMContentLoaded', function () {
    const maleRadio = document.getElementById('malePG');
    const femaleRadio = document.getElementById('femalePG');

    const maleAns = document.getElementById('maleAns');
    const femaleAns = document.getElementById('femaleAns');

    /*מעדכנת את המשפט בפתק לפי הבחירה*/
    function updateGenderMessage() {
        if (maleRadio.checked) {
            maleAns.classList.add('shown');
            maleAns.classList.remove('invisible');
            femaleAns.classList.add('invisible');
            femaleAns.classList.remove('shown');
        } else if (femaleRadio.checked) {
            femaleAns.classList.add('shown');
            femaleAns.classList.remove('invisible');
            maleAns.classList.add('invisible');
            maleAns.classList.remove('shown');
        }
    }

    /*בדיקה והרצה חוזרת*/
    updateGenderMessage();

    /*הוספת מאזיני-אירועים*/
    maleRadio.addEventListener('change', updateGenderMessage);
    femaleRadio.addEventListener('change', updateGenderMessage);
});

/*יצירת פונקציה של כפתור סיכום הנתונים*/
document.getElementById('buttonP').addEventListener('click', function () {
    const partnerName = document.getElementById('partnername').value;
    const tastes = Array.from(document.querySelectorAll('input[name="tastePG"]:checked')).map(cb => cb.value);
    const sweetType = document.querySelector('input[name="sweetPG"]:checked')?.value;

    /*יצירת הפתק, לפי התגובות לטופס*/
    if (partnerName && tastes.length > 0 && sweetType) {
        let resultText = `המארז המושלם ל${partnerName} יכלול: <br><br><br>`;
        let resultText2 = ` טעמי השוקולד: ${tastes.join(', ')}<br>`;
        resultText2 += ` מתוק או מלוח: ${sweetType}`;

        document.getElementById('resultText').innerHTML = resultText;
        document.getElementById('resultText2').innerHTML = resultText2;
        document.getElementById('showresult').style.display = 'block';
    } else {
        alert("מלא את כל השדות בטופס");
    }
});

/*כפתור הסגירה של הסיכום*/
function closeResult() {
    document.getElementById('showresult').style.display = 'none';
}
