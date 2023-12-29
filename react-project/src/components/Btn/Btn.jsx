import React, {useContext} from 'react';
import Context from '../../context/context';
import styles from './Btn.module.css';

//кнопка. Аргументом передаются props из Context
const Btn = (props) => {
//контекст для удаления и редактирования слов в компоненте TableRow - устанавливаем хук useContext(Context) и указываем, что из Context берем значения deleteWord и editWord
    const {deleteWord, editWord} = useContext(Context);
//объявление props/что из передаваемого будем использовать
    const { type, wordId, editedWord } = props;
//функция для клика на иконку Корзина/Удалить
    const clickToDelete = () => deleteWord(wordId);
//функция для клика на иконку Карандаша/Редактировать
    const clickToChange = () => {
//Весь объект хранится в переменной editedWord, переданной из props. После передачи его пропсом в кнопку/Btn, потом передаем его в вызов функции editWord(editedWord) в методе if else
//Но тут есть особенность программы, функция вызывается каждый раз при клике на иконку Карандаша/Редактировать. И в первый раз, когда откроются инпуты, там будет undefined.
//Следовательно, можно добавить проверку в параметр для if ((editedWord !== undefined))
        if (editedWord !== undefined) {
            editWord(editedWord);
        } else {
            console.log('editedWord is undefined');
        }
    };
    return (
        <button
            onClick={type === 'delete' ? clickToDelete : clickToChange}
            className={styles.btnComponent}>{props.children}
        </button>
    )
}

export default Btn;