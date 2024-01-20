import { makeAutoObservable, runInAction } from 'mobx';

// const getWordsApiUrl = 'http://itgirlschool.justmakeit.ru/api/words';
// const addWordApiUrl = 'http://itgirlschool.justmakeit.ru/api/words/add';
// const deleteWordApiUrl = `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`;
// const editWordApiUrl = `http://itgirlschool.justmakeit.ru/api/words/${object.id}/update`;

export default class WordStore {
    // state/состяние
    words = [];
    isLoaded = false;
    isLoading = false;
    error = null;

    // функция автоматического отслеживания всех изменений
    constructor() {
        makeAutoObservable(this);
    }

    // actions with state/действия с состояниями
    // функция запроса и обработки данных с сервера
    loadData = async () => {
        // проверка загруженных данных и параллельных загрузок, если данные уже были загружены или их уже загружает кто-то из компонентов, то ничего не делаем
        if (this.isLoaded && this.isLoading) {
            return;
        }

        // пока все синхронно - поэтому runInAction не нужен
        // включаем проверку начала загрузки данных
        this.isLoading = true;

        // тут начинается асинхронность
        // загрузка с сервера (fetch запрос, проверки на статус ответа и ошибки, конвертация ответа в формат json + так как код ниже выполняется асинхронно, то теперь, меняя данные в MobX, надо явно указать на эти изменения с помощью функции runInAction)
        // const apiRequest = await fetch... / ??? НЕ ОБЯЗАТЕЛЬНО ЖЕ В ПЕРЕМЕННУЮ ЗАКЛЮЧАТЬ ЭТОТ ЗАПРОС ??????
        await fetch('http://itgirlschool.justmakeit.ru/api/words')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error: fetch request failed');
            })
            .then((data) => {
                runInAction(() => {
                    this.words = data;
                    this.isLoading = false;
                    this.isLoaded = true;
                });
            })
            .catch((error) => console.log('Error: ' + error)); // ????? ИЛИ this.error ?????

        // ????? НУЖЕН ЛИ ЕЩЕ ОДИН runInAction, чтобы закрыть все процессы этой функции или лучшее ее вынести из .then вниз/за пределы промисов ??????
        // runInAction(() => {
        //     this.words = data;
        //     this.isLoading = false;
        //     this.isLoaded = true;
        // });
    };

    // функция удаления слова
    deleteWord = async (id) => {
        await fetch(
            `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
            {
                method: 'POST',
            }
        )
            // .then((response) => {
            //     if (response.ok) {
            //         return response.json();
            //     }
            //     throw new Error('Error: fetch request failed');
            // })
            //.then((json) => {
            //this.json.filter((data) => json.id !== id);
            //}) // ???

            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Error: fetch request failed');
            })

            // .then((response) => {
            //     if (!response.ok) {
            //         throw new Error('Error: fetch request failed');
            //     }
            //     const newData = words.filter((word) => word.id !== id);
            //     words(newData);
            // })
            .catch((error) => console.log('Error: ' + error)); // ????? ИЛИ this.error ?????

        runInAction(() => {
            this.loadData();
        });
    };

    // функция клика для кнопки/иконки Delete компонента Row
    // onDelete = (id) => {
    //     this.words.deleteWord(id);
    // };

    // функция открытия компонента Popup с формой введения данных нового слова или игры по карточкам
    // сlickPopup = () => {};
}

// _________________________
// loadData = async () => {
// if (this.isLoaded && this.isLoading) {
//     return;
// }

// isLoading = true;

// const data = await fetch('http://itgirlschool.justmakeit.ru/api/words')
//     .then((response) => response.json())
//     .then((data) => words(data))
//     .catch((error) => console.error(error));

// runInAction(() => {
//     this.words = data;
//     this.isLoading = false;
//     this.isLoaded = true;
// });

// this.words = data;
// isLoading = false;
// isLoaded = true;
// };

// loadData = async () => {
//     const data = await fetch(getWordsApiUrl)
//         .then()
//         .then()
//         .catch((error) => console.log(error));
// };

// deleteWord = (id) => {
//     this.words.;
// };

// add = (book) => {
//     this.books.push(book);
// };

// remove = (index) => {
//     this.books.splice(index, 1);
// };

// deleteWord = (id) => {
//     fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
//         method: 'POST',
//     })
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error('failed');
//             }
//             const newDictionary = [...dictionary].filter(
//                 (object) => object.id !== id
//             );
//             setDictionary(newDictionary);
//         })
//         .catch((err) => console.log(err));
// };
