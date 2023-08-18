

export const countTrackTime = (secDuraction) => {
    const min = Math.floor(secDuraction / 60)

    const sec = Math.floor(secDuraction - min * 60)

    return `${min}:${sec} `
}
export default countTrackTime