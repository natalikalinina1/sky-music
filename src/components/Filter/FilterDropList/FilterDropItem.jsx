import React from 'react'
import * as S from '../style.Filter'
import { useState } from 'react'
import { useEffect } from 'react'

function FilterDropItem({ id, item, riseCount, filterCountArray }) {
    const [isSelected, setIsSelected] = useState(false)
    useEffect(() => {
        if (filterCountArray.includes(String(id))) {
            setIsSelected(true)
        } else setIsSelected(false)
    }, [filterCountArray,id])
    return (
        <S.FilterDropItem
            id={id}
            onClick={(e) => riseCount(e)}
            $selected={isSelected}
        >
            {item}
        </S.FilterDropItem>
    )
}

export default FilterDropItem