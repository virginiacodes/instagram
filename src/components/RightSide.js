import { useState } from "react";

export default function RightSide() {
  return (
    <div className="rightside">
      <div className="rightside__account">
        <img
          className="rightside__account--img rightside__img"
          src="../../images/profile.jpg"
          alt="profile"
        ></img>
        <div className="rightside__account--details">
          <div className="rightside__account--handle">_virgyl_</div>
          <div className="rightside__account--name">· ◇ VIRGYL ◇ ·</div>
        </div>
        <div className="rightside__account--switch rightside__blue-btn">
          Switch
        </div>
      </div>

      <div className="rightside__suggestions">
        <div className="rightside__suggestions--heading">
          <div className="rightside__suggestions--heading-title">
            Suggested for you
          </div>
          <div className="rightside__suggestions--heading-btn">See all</div>
        </div>

        <div className="rightside__suggestions--container">
          <UserAccount />
          <UserAccount />
          <UserAccount />
          <UserAccount />
          <UserAccount />
        </div>
      </div>

      <div className="rightside__footer">
        <div className="rightside__footer--link-list">
          <a className="rightside__footer--link" href="/">
            About
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Help
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Press
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            API
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Jobs
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Privacy
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Terms
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Locations
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Language
          </a>

          <p>&middot;</p>

          <a className="rightside__footer--link" href="/">
            Meta Verified
          </a>
        </div>
        <div className="rightside__footer--copyright">
          &copy; 2024 INSTAGRAM FROM META
        </div>
      </div>
    </div>
  );
}

function UserAccount() {
  const [isPhotoHovered, setIsPhotoHovered] = useState(false);

  function handleHoverPhoto() {
    setIsPhotoHovered(!isPhotoHovered);
  }

  function handleHoverPopup() {
    setIsPhotoHovered(true);
  }

  function handleLeavePopup() {
    setIsPhotoHovered(false);
  }

  return (
    <div className="rightside__suggestions--item">
      <img
        className="rightside__suggestions--img rightside__img"
        src="../../images/profile.jpg"
        alt="profile"
        onMouseEnter={handleHoverPhoto}
        onMouseLeave={handleHoverPhoto}
      ></img>

      {isPhotoHovered === true && (
        <div
          className="rightside__popup"
          onMouseEnter={handleHoverPopup}
          onMouseLeave={handleLeavePopup}
        >
          <div className="rightside__popup--top">
            <img
              className="rightside__popup--img rightside__img"
              src="../../images/profile.jpg"
              alt="profile"
            ></img>
            <div className="rightside__account--details">
              <div className="rightside__account--handle">_virgyl_</div>
              <div className="rightside__account--name">· ◇ VIRGYL ◇ ·</div>
            </div>
          </div>

          <div className="rightside__popup--stats-box">
            <div className="rightside__popup--stats">
              <div className="rightside__popup--number">15</div>
              <div className="rightside__popup--stats-name">posts</div>
            </div>

            <div className="rightside__popup--stats">
              <div className="rightside__popup--number">387</div>
              <div className="rightside__popup--stats-name">followers</div>
            </div>

            <div className="rightside__popup--stats">
              <div className="rightside__popup--number">568</div>
              <div className="rightside__popup--stats-name">following</div>
            </div>
          </div>

          <div className="rightside__popup--photos">
            <img src="../../images/band.JPG" alt="port louix"></img>
            <img
              src="../../images/sofy.jpeg"
              alt="a bengal cat and a woman"
            ></img>
            <img
              src="../../images/coffee.jpeg"
              alt="flat white with flowers"
            ></img>
          </div>

          <div className="rightside__popup--btn-box">
            <div className="rightside__popup--btn">
              <svg class="rightside__popup--icon">
                <use xlinkHref="../../images/sprite.svg#icon-follow"></use>
              </svg>
              <div className="rightside__popup--btn-text">Follow</div>
            </div>
          </div>
        </div>
      )}

      <div className="rightside__suggestions--details">
        <div className="rightside__suggestions--handle">_virgyl_</div>

        <div className="rightside__suggestions--text">Suggested for you</div>
      </div>
      <div className="rightside__suggestions--follow rightside__blue-btn">
        Follow
      </div>
    </div>
  );
}
