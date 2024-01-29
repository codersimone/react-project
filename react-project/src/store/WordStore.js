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
            console.error('Error:', error);
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
                throw new Error('Error: Network response was not ok');
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
            console.error('Error:', error);
        }
    };

    // функция редактирования слова
    editWord = async (object) => {
        this.isLoading = true;

        try {
            const responseToEdit = await fetch(
                `http://itgirlschool.justmakeit.ru/api/words/${object.id}/update`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(object),
                }
            );
            if (!responseToEdit.ok) {
                throw new Error('Error: Network response was not ok');
            }

            runInAction(() => {
                // ищем индекс слова в массиве, у которого id совпадает с id объекта. Функция findIndex возвращает индекс первого элемента в массиве, который подходит условию. Если элемент не найден, возвращает -1.
                const index = this.words.findIndex(
                    (word) => word.id === object.id
                );
                // если findIndex вернул -1 - значит элемент с таким id не найден. А если не равен, то найден
                if (index !== -1) {
                    // обновляем массив
                    this.words[index] = { ...this.words[index], ...object };
                }
                // вызов функции loadData для обновления состояния после асинхронной операции
                this.loadData();
                this.isLoading = false;
            });
        } catch (error) {
            runInAction(() => {
                this.error = error;
                this.isLoading = false;
            });
            console.error('Error:', error);
        }
    };

    // функция добавления нового слова
    addWord = async (word) => {
        this.isLoading = true;

        try {
            const responseToAdd = await fetch(
                'http://itgirlschool.justmakeit.ru/api/words/add',
                {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(word),
                }
            );
            if (!responseToAdd.ok) {
                throw new Error('Error: Network response was not ok');
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
            console.error('Error:', error);
        }
    };

    // функция отмены внесенных изменений в инпутах редактируемого слова/сброс нововведенной информации до той, что была до редактирования
}
