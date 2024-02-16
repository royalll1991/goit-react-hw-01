import css from "../Profile/Profile.module.css"
import clsx from "clsx"

const Profile = ({ name, tag, location, image, stats: { followers, views, likes } }) => {
  const Border = clsx(css.listItem, css.listItemSecond);
      return (
      <div className={css.box}>
        <div >
          <img
            src={image}
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
          <li className = {Border}>
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