import React from 'react';
import { observer, inject } from 'mobx-react';
import Downloading from './Downloading';
import DownloadingError from './DownloadingError';

const DownloadingFromApi = ({wordStore, isLoaded, children }) => {

    // проверка -  если данные уже были загружены - вернет их
    if (isLoaded) {
        return;
    }

    // пока дынные загружаются - показывать компонент Загрузка 
    if (wordStore.isLoading) {
        return (
            <Downloading />
        );
    }

    // если ошибка при загрузке данных - показывать компонент Ошибка загрузки 
    if (wordStore.error) {
        return (
            <DownloadingError />
        );
    }

    return (
        <div className='downloadingContainer'>
            {children}
        </div>
    );
}

export default inject(['wordStore'])(observer(DownloadingFromApi));