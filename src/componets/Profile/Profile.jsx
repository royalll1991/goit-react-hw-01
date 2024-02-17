import css from './Profile.module.css'

const Profile = ({ name, tag, location, avatar, stats: { followers, views, likes } }) => {
      return (
      <div className={css.box}>
        <div >
          <img
            src={avatar}
            alt="User avatar"
          />
          <p className={css.name}
          >{name}</p>
          <p className={css.textProfile}>@{tag}</p>
          <p className={css.textProfile}>{location}</p>
        </div>
        <ul className={css.list}>
          <li className={css.listItem}>
            <span>Followers</span>
            <span>{followers}</span>
          </li>
          <li className = {css.listItemSecond}>
            <span>Views</span>
            <span>{views}</span>
          </li>
          <li className={css.listItem}>
            <span>Likes</span>
            <span>{likes}</span>
          </li>
        </ul>
      </div>
    );
  };
  
  export default Profile;