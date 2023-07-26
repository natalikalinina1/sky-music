import { useEffect, useState } from 'react'
import * as S from '../../style/style'

function FilterDropList({ type, filterList, riseSelectedFilterCount }) {
    const [filterCount, setFilterCount] = useState(0)
    useEffect(() => {
        riseSelectedFilterCount(filterCount)
    }, [filterCount,riseSelectedFilterCount])

    return (
        <S.FilterDropList>
            <S.FilterDropListWrapper>
                <S.FilterDropListContent>
                    {type !== 'year' ? (
                        filterList.map((item, index) => {
                            return (
                                <S.FilterDropListItem
                                    key={index}
                                    onClick={() =>
                                        setFilterCount(filterCount + 1)
                                    }
                                >
                                    {item}
                                </S.FilterDropListItem>
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


