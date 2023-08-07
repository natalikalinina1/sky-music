//import { useEffect, useState } from 'react'
import * as S from '../style.Filter'
import FilterDropItem from './FilterDropItem'


function FilterDropList({ type, filterList, riseCount, filterCountArray }) {
    return (
        <S.FilterDropList>
            <S.FilterDropListWrapper>
                <S.FilterDropListContent>
                    {type !== 'year' ? (
                        filterList.map((item, index) => {
                            return (
                                <FilterDropItem
                                    key={index}
                                    id={index}
                                    item={item}
                                    riseCount={riseCount}
                                    filterCountArray={filterCountArray}
                                />
                            )
                        })
                    ) : (
                        <S.FilterRadio>
                            {filterList.map((item, index) => {
                                return (
                                    <S.FilterRadioLabel key={index}>
                                        <S.FilterRadioInput
                                            type="radio"
                                            name="radio"
                                        />
                                        <S.FilterRadioBox></S.FilterRadioBox>
                                        <span>{item}</span>
                                    </S.FilterRadioLabel>
                                )
                            })}
                        </S.FilterRadio>
                    )}
               </S.FilterDropListContent>
            </S.FilterDropListWrapper>
        </S.FilterDropList>
    )
}

export default FilterDropList