export const countTrackTime = (secDuraction) => {
    const min = Math.floor(secDuraction/60);

    const sec = secDuraction - min*60;

    return `${min}:${sec} `}