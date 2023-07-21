function ShuffleBtn() {
    return (
      <div className="player__btn-shuffle _btn-icon">
        <svg className="player__btn-shuffle-svg" alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle"></use>
        </svg>
      </div>
    );
  }
  
  export default ShuffleBtn;