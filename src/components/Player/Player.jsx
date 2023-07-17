import PlayerControls from "./PlayerControls";
import PlayerTrack from "./PlayerTrack";

function Player() {
  return (
    <div className="bar__player player">
      <PlayerControls />
      <PlayerTrack />
    </div>
  );
}

export default Player;
