export default function Feed() {
  return (
    <div className="feed">
      <div className="feed__stories">
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
        <Account />
      </div>

      <div className="feed__post--container">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

function Account() {
  return (
    <div className="feed__story">
      <img
        className="feed__story--img"
        src="../../images/profile.jpg"
        alt="profile"
      ></img>
      <div className="feed__story--circle"></div>
      <div className="feed__story--handle">_virgyl_</div>
    </div>
  );
}

function Post() {
  return (
    <div className="feed__post">
      <div className="feed__post--heading">
        <img
          className="feed__post--img"
          src="../../images/profile.jpg"
          alt="profile"
        ></img>
        <div className="feed__post--circle"></div>

        <div className="feed__post--info-top-container">
          <div className="feed__post--info-top">
            <div className="feed__post--account-name">_virgyl_</div>
            <div className="feed__post--time-posted">&middot; 14 h</div>
          </div>
          <div className="feed__post--info-sound"></div>
        </div>

        <svg class="feed__post--icon-top">
          <use xlinkHref="../../images/sprite.svg#icon-dots-three-horizontal"></use>
        </svg>
      </div>

      <div className="feed__post--post">
        <img
          className="feed__post--media"
          src="../../images/coffee.jpeg"
          alt="port louix"
        ></img>
      </div>

      <div className="feed__post--info-bottom">
        <div className="feed__post--icons">
          <svg class="feed__post--icon">
            <use xlinkHref="../../images/sprite.svg#icon-heart-outlined"></use>
          </svg>

          <svg class="feed__post--icon feed__post--icon-comment">
            <use xlinkHref="../../images/sprite.svg#icon-comment"></use>
          </svg>

          <svg class="feed__post--icon feed__post--icon-send">
            <use xlinkHref="../../images/sprite.svg#icon-send"></use>
          </svg>

          <svg class="feed__post--icon feed__post--icon-book">
            <use xlinkHref="../../images/sprite.svg#icon-bookmark-o"></use>
          </svg>
        </div>

        <div className="feed__post--likes">63 likes</div>

        <div className="feed__post--caption">
          <div className="feed__post--caption-account">_virgyl_</div>
          <div className="feed__post--caption-text">
            The perfect oat milk flat white
          </div>
        </div>

        <div className="feed__post--view-comments">View all 7 comments</div>

        <div className="feed__post--add-comment">
          <div>Add a comment...</div>

          <svg class="feed__post--icon-smiley">
            <use xlinkHref="../../images/sprite.svg#icon-emoji-happy"></use>
          </svg>
        </div>
      </div>
    </div>
  );
}
