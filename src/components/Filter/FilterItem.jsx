import FilterDropList from './FilterDropList/FilterDropList'
import React, { useState } from 'react'
import FilterCounter from './FilterDropList/FilterCounter/FilterCounter'
import * as S from './style.Filter'


const filterListByYear = ['Более новые', 'Более старые']

function FilterItem({ isDropdownsOpen, type, toggleDropDown, tracks, name }) {
    const [isOpen, setIsOpen] = useState(false)
    const [filterCountArray, setFilterCountArray] = useState([])
    const riseCount = (e) => {
        if (filterCountArray.includes(e.target.id)) {
            setFilterCountArray((filterCountArray) =>
                filterCountArray.filter((i) => i !== e.target.id)
            )
        } else {
            setFilterCountArray([...filterCountArray, e.target.id])
        }
    }
    const createFilterListWithNoDuplicate = (type) => {
        const filterList = tracks.map((item) => item[`${type}`])
        const filterListWithNoDuplicate = filterList.filter(
            (type, i) => filterList.indexOf(type) === i
        )
        return filterListWithNoDuplicate
    }

    const toggle = () => {
        setIsOpen(!isOpen)
        toggleDropDown(type)
    }

    return (
        <S.FilterItem>
            <S.FilterButton onClick={() => toggle()}>{name}</S.FilterButton>
            {filterCountArray.length ? (
                <FilterCounter count={filterCountArray.length} />
            ) : null}
            {isDropdownsOpen ? (
                <FilterDropList
                    type={type}
                    filterList={
                        type !== 'year'
                            ? createFilterListWithNoDuplicate(type)
                            : filterListByYear
                    }
                    riseCount={riseCount}
                    filterCountArray={filterCountArray}
                />
            ) : null}
        </S.FilterItem>
    )
}

export default FilterItem