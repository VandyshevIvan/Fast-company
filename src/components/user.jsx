import React from "react";
import Qualitie from "./qualitie";
import Bookmark from "./bookmark";

const User = ({ user, onDelete, ...rest }) => {
  return (
    <tr>
      <th>{user.name}</th>
      <th>
        {user.qualities.map((quality) => {
          return (
            <Qualitie
              key={quality._id}
              name={quality.name}
              color={quality.color}
            />
          );
        })}
      </th>
      <th>{user.profession.name}</th>
      <th>{user.completedMeetings}</th>
      <th>{user.rate}</th>
      <th>
			<Bookmark {...rest} isBookmark={user.bookmark} id={user._id}/>
      </th>
      <th>
        <button className="btn btn-danger" onClick={() => onDelete(user._id)}>
         	delete
        </button>
      </th>
    </tr>
  );
};
export default User;
