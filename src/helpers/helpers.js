

    export const countTrackTime = (duration_in_seconds) => {


        let min = " " + Math.floor(duration_in_seconds / 60);
        let sec = Math.floor(duration_in_seconds % 60);
        
        if (sec < 10) {
          sec = "0" + sec;
        }
        return `${min}:${sec}`;
        };
        

export default countTrackTime


