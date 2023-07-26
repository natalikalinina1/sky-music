import { useState } from 'react'
import * as S from '../style/style'
import FilterItem from './FilterItem.jsx'

function Filter({ tracks }) {
    const [isDropdownsOpen, setIsDropdownsOpen] = useState(null)
    const toggleDropDown = (type) => {
        if (type === isDropdownsOpen) {
            setIsDropdownsOpen(null)
            return
        }
        setIsDropdownsOpen(type)
    }
    return (
        <S.Filter>
            <S.FilterTitle>Искать по:</S.FilterTitle>
            <FilterItem
                name={'исполнителю'}
                tracks={tracks}
                type={'author'}
                isDropdownsOpen={isDropdownsOpen === 'author'}
                toggleDropDown={toggleDropDown}
                setIsDropdownsOpen={setIsDropdownsOpen}
            />
            <FilterItem
                name={'году выпуска'}
                tracks={tracks}
                type={'year'}
                isDropdownsOpen={isDropdownsOpen === 'year'}
                toggleDropDown={toggleDropDown}
            />
            <FilterItem
                name={'жанру'}
                tracks={tracks}
                type={'genre'}
                isDropdownsOpen={isDropdownsOpen === 'genre'}
                toggleDropDown={toggleDropDown}
            />
        </S.Filter>
    )
}

export default Filter