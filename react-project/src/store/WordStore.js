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

    //функция асинхронной загрузки слов с сервера и проверки на ошибки
    loadData = async () => {
        if (this.isLoaded && this.isLoading) {
            return;
        }

        this.isLoading = true;

        try {
            const response = await fetch(
                'http://itgirlschool.justmakeit.ru/api/words'
            );
            const data = await response.json();

            runInAction(() => {
                this.words = data;
                this.isLoading = false;
                this.isLoaded = true;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.isLoading = false;
                this.isLoaded = true;
            });
        }
    };

    // функция удаления слова
    deleteWord = async (id) => {
        this.isLoading = true;

        try {
            const responseToDelete = await fetch(
                `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
                {
                    method: 'POST',
                }
            );
            if (!responseToDelete.ok) {
                throw new Error('Error: fetch request failed');
            }

            runInAction(() => {
                // вызов функции loadData для обновления состояния после асинхронной операции
                this.loadData();
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.isLoading = false;
            });
        }
    };

    // функция редактирования слова
    editWord = async (id, object) => {
        this.isLoading = true;

        try {
            const responseToEdit = await fetch(
                `http://itgirlschool.justmakeit.ru/api/words/${object.id}/update`,
                {
                    method: 'POST',
                }
            );
            if (!responseToEdit.ok) {
                throw new Error('Error: fetch request failed');
            }

            runInAction(() => {
                this.loadData();
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.isLoading = false;
            });
        }
    };

    // ____________________________
    // функция открытия компонента Popup с формой введения данных нового слова или игры по карточкам
    // сlickPopup = () => {};
}
