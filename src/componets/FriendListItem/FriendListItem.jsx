import clsx from "clsx"
import css from './FriendListItem.module.css'

const FriendListItem = ({avatar, name, isOnline}) => {
  const ColorText = clsx(isOnline ? css.textOn : css.textOff)
    return (<div className={css.box}>
        <img className={css.img} src={avatar} alt="Avatar" width="48" />
        <p className={css.name}>{name}</p>
        <p className={ColorText}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    );
};

export default FriendListItem;