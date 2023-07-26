import FilterDropList from './FilterDropList/FilterDropList'
import React, { useState } from 'react'
import FilterCounter from './FilterDropList/FilterCounter/FilterCounter'
import * as S from '../style/style'

const filterListByYear = ['Более новые', 'Более старые']

function FilterItem({ isDropdownsOpen, type, toggleDropDown, tracks, name }) {
    const [isOpen, setIsOpen] = useState(false)
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

    const [selectedFilter, setSelectedFilter] = useState(0)

    const riseSelectedFilterCount = (count) => {
        setSelectedFilter(count)
    }
    return (
        <S.FilterItem>
            <S.FilterButton onClick={() => toggle()}>{name}</S.FilterButton>
            {selectedFilter ? <FilterCounter count={selectedFilter} /> : null}
            {isDropdownsOpen ? (
                <FilterDropList
                    type={type}
                    riseSelectedFilterCount={riseSelectedFilterCount}
                    filterList={
                        type !== 'year'
                            ? createFilterListWithNoDuplicate(type)
                            : filterListByYear
                    }
                />
            ) : null}
        </S.FilterItem>
    )
}

export default FilterItem