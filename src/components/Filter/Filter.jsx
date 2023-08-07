import { useState } from 'react'
import * as S from './style.Filter'
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
               toggleDropDown={() => toggleDropDown('year')}
               
            />
            <FilterItem
                name={'жанру'}
                tracks={tracks}
                type={'genre'}
                toggleDropDown={() => toggleDropDown('genre')}
            />
        </S.Filter>
    )
}

export default Filter


