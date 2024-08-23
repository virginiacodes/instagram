export default function SideNav() {
  return (
    <div className="sidenav-container">
      <div className="sidenav">
        <div className="sidenav__logo-box">
          <div className="sidenav__logo-text">CopyCat</div>
          <svg class="sidenav__logo">
            <use xlinkHref="../../images/sprite.svg#icon-ig"></use>
          </svg>
        </div>

        <div className="sidenav__list">
          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-home"></use>
            </svg>

            <div className="sidenav__title">Home</div>
          </div>

          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-search"></use>
            </svg>

            <div className="sidenav__title">Search</div>
          </div>

          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-compass"></use>
            </svg>

            <div className="sidenav__title">Explore</div>
          </div>

          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-reels"></use>
            </svg>

            <div className="sidenav__title">Reels</div>
          </div>

          <div className="sidenav__list-item">
            <div className="sidenav__message-box">
              <svg class="sidenav__icon">
                <use xlinkHref="../../images/sprite.svg#icon-send"></use>
              </svg>
              <div className="sidenav__messages">3</div>
            </div>

            <div className="sidenav__title">Messages</div>
          </div>

          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-heart-outlined"></use>
            </svg>

            <div className="sidenav__title">Notifications</div>
          </div>

          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-post"></use>
            </svg>

            <div className="sidenav__title">Create</div>
          </div>

          <div className="sidenav__list-item">
            <img
              className="sidenav__profile-img"
              src="../../images/profile.jpg"
              alt="profile"
            ></img>

            <div className="sidenav__title">Profile</div>
          </div>
        </div>

        <div className="sidenav__bottom-links">
          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-threads"></use>
            </svg>

            <div className="sidenav__title">Threads</div>
          </div>

          <div className="sidenav__list-item">
            <svg class="sidenav__icon">
              <use xlinkHref="../../images/sprite.svg#icon-menu"></use>
            </svg>

            <div className="sidenav__title">More</div>
          </div>
        </div>
      </div>
    </div>
  );
}
