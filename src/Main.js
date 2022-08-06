import React, {useState} from "react"

export default function Main(props) {
    const [state, setState] = useState({
        word:'',
        padezh: 'Imenitelniy',
        place: 'Слово' 
    })
    const [newWord, setNewWord] = useState('')

    function wordState(event){
        const {name, value} = event.target
        setState(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }
    function changeWord(event){
        event.preventDefault()
        let reg = /[а-я]+$/ui;
        let oldWord = state.word.toLowerCase()
        if(!oldWord.match(reg)){
           return setState(prev => {
               return {
                   ...prev,
                   word: '',
                   place: 'Введите слово на русском языке без пробелов!'
               }
           })
        } else{
            setState(prev => {
                return {
                    ...prev,
                    place: 'Слово'
                }
            })
        }
        let exceptions = ['какао', 'манго', 'кино', 'метро', 'бюро', 'домино', 'трюмо', 'пальто', 'танго', 
            'бунгало', 'вето', 'авокадо', 'дело', 'сабо', 'бордо', 'евро', 'эсперанто', 'кашпо', 'депо', 'пианино', 
            'кенгуру', 'шоу', 'рагу', 'какаду', 'зебу', 'фрау', 'конферансье', 'шимпанзе', 'колье', 'резюме', 'кашне', 
            'атташе', 'пенсне', 'протеже', 'суфле', 'драже', 'шоссе', 'пюре', 'купе', 'фойе', 'коммюнике', 'кофе', 'кафе', 'жалюзи', 
            'шасси', 'такси', 'алиби', 'киви', 'конфетти', 'жюри', 'иваси', 'пенальти', 'рефери', 'регби', 'кольраби', 'спагетти', 
            'бренди', 'виски', 'травести', 'пони', 'каноэ', 'алоэ', 'нэцкэ', 'каратэ', 'каланхоэ', 'меню', 'авеню', 'дежавю',
            'инженю', 'барбекю', 'парвеню', 'интервью', 'боа', 'бра', 'фейхоа', 'буржуа', 'амплуа', 'мисс', 'миссис', 'фрейлен']//массив заимствованных слов
        let arr = ['ш', 'ж', 'щ', 'ц', 'ч'] //шипящие и 'ц'
            if(exceptions.indexOf(oldWord)>=0){
            return setNewWord(oldWord) //если слово заимствованное, то оно не склоняется, а возвращается как есть
        }
        let declension;
        let hardConsonant;
        let excepWords = ['г', 'к', 'ш', 'ж', 'ч', 'щ', 'х'] 
        if((oldWord[oldWord.length - 1] === 'а') || (oldWord[oldWord.length - 1] === 'я')){
            declension = 1; // 1 склонение
            hardConsonant = oldWord[oldWord.length - 1] === 'а' ? true : false
        } else if(oldWord[oldWord.length - 1] === 'ь'){
            declension = 3; // 3 склонение
        } else{
            declension = 2; // 2 склонение
            }
        switch(state.padezh){
            case 'Imenitelniy':
                setNewWord(oldWord)
                break;
            case 'Roditenliy':
                if(declension === 1){
                    if(hardConsonant && excepWords.indexOf(oldWord[oldWord.length-2])<0){ 
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'ы')
                    }else{
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'и')
                    }
                } else if(declension === 3){
                    setNewWord(oldWord.slice(0, oldWord.length - 1) + 'и')
                } else{
                        if((oldWord[oldWord.length - 1] === 'е') || (oldWord[oldWord.length - 1] === 'й')){
                            setNewWord(oldWord.slice(0, oldWord.length - 1) + 'я')
                        }else if(oldWord[oldWord.length - 1] === 'о'){
                            setNewWord(oldWord.slice(0, oldWord.length - 1) + 'а')
                        }else{
                        setNewWord(oldWord + 'а')
                        }
                }
                break;
            case 'Datelniy':
                if(declension === 1){
                    console.log('1 склонение')
                    setNewWord(oldWord.slice(0, oldWord.length - 1) + 'е')
                } else if(declension === 3){
                    setNewWord(oldWord.slice(0, oldWord.length - 1) + 'и')
                } else{
                    if((oldWord[oldWord.length - 1] === 'е') || (oldWord[oldWord.length - 1] === 'й')){
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'ю')
                    }else if(oldWord[oldWord.length - 1] === 'о'){
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'у')
                    }else{
                    setNewWord(oldWord + 'у')
                    }
                }
                break;
            case 'Vinitelniy':
                if(declension === 1){
                    if(hardConsonant){
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'у')
                    }else{
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'ю')
                    }
                } else if(declension === 3){
                    setNewWord(oldWord)
                } else{
                    setNewWord(oldWord)
                }
                break;        
            case 'Tvoritelniy':
                if(declension === 1){
                    if(hardConsonant && (arr.indexOf(oldWord[oldWord.length-2])<0)){
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'ой')
                    }else{
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'ей')
                    }
                } else if(declension === 3){
                    setNewWord(oldWord + 'ю')
                } else{
                    if((oldWord[oldWord.length - 1] === 'е') || (oldWord[oldWord.length - 1] === 'й')){
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'ем')
                    }else if(oldWord[oldWord.length - 1] === 'о'){
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'ом')
                    }else{
                    setNewWord(oldWord + 'ом')
                    }
                }
                break;
            case 'Predlozhniy':
                if(declension === 1){
                    setNewWord(oldWord.slice(0, oldWord.length - 1) + 'е')
                } else if(declension === 3){
                    setNewWord(oldWord.slice(0, oldWord.length - 1) + 'и')
                } else{
                    if((oldWord[oldWord.length - 1] === 'о') || (oldWord[oldWord.length - 1] === 'е') || (oldWord[oldWord.length - 1] === 'й')){
                        setNewWord(oldWord.slice(0, oldWord.length - 1) + 'е')
                    }else{
                        setNewWord(oldWord + 'е')
                    }
                }
                break;

            }
    }

    return (
        <main className='main'>
            <form className={props.darkMode ? "form form--dark": "form"}>
                <label htmlFor="word">Введите существительное в единственном <br />числе и именительном падеже</label>
                <input 
                    type="text"
                    name='word'
                    value={state.word}
                    placeholder={state.place}
                    className="form--input"
                    id='word'
                    onChange={wordState}
                />
                <label htmlFor="padezh">Выберите падеж, в который хотите <br />преобразовать ваше слово</label>
                    <select 
                        id="padezh" 
                        name='padezh'
                        value={state.padezh}
                        className="form--input"
                        onChange={wordState}
                    >
                        <option value="Imenitelniy">Именительный</option>
                        <option value="Roditenliy">Родительный</option>
                        <option value="Datelniy">Дательный</option>
                        <option value="Vinitelniy">Винительный</option>
                        <option value="Tvoritelniy">Творительный</option>
                        <option value="Predlozhniy">Предложный</option>
                    </select>
                <button 
                    className={props.darkMode ? "form--button form--button--dark": "form--button"}
                    onClick={changeWord}
                >
                    Преобразовать слово
                </button>
            </form>
            <div className={props.darkMode ? "newWord newWord--dark": "newWord"}>
                <p>'{newWord}'</p>
            </div>
        </main>
    )
}

//let endings = ['а', 'о', 'е', 'у', 'ы', 'и', 'ю', 'я', 'ой', 'ей', 'ь', 'ью', 'ом', 'ем', '' ]
//let words = ['земля', 'стена', 'папа', 'коля', 'стол', 'конь', 'село', 'поле', 'степь', 'ель']
//let sogl =['б', 'в', 'г', 'д', 'ж', 'з', 'й', 'к', 'л', 'м', 'н', 'п', 'р', 'с', 'т', 'ф', 'х', 'ц', 'ч', 'ш', 'щ'] 
//let glasnie=['а', 'и', 'о', 'е', 'ё','у', 'ы', 'э', 'ю', 'я']
//function parentPadezh(x){
//    if((x[x.length-1] === 'а') || (x[x.length-1] === 'я')){
//        console.log('1 склонение')
//    } else if(x[x.length-1] === 'ь'){
//        // Если слово мужского рода
//        console.log('2 склонение')
//        // Если слово женского рода
//        console.log('3 склонение')
//    } else{
//        console.log('2 склонение')
//    }
//    // С помощью цикла надо узнать последнюю согласную в слове и основываясь на ней определять окончание 
//    // Добавить окончания в зависимости от падежа и последней согласной
//    return x
//}
//
//console.log(words.map(y=>parentPadezh(y)))