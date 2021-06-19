import "./closeFriend.css";
import faker from  'faker';

export default function CloseFriend({user}) {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={faker.image.avatar()} alt="" />
      <span className="sidebarFriendName">{faker.name.findName()}</span>
    </li>
  );
}