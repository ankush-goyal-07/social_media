import "./online.css";
import faker from  'faker';


export default function Online({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightbarProfileImg" src={faker.image.avatar()} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUsername">{faker.name.findName()}</span>
    </li>
  );
}