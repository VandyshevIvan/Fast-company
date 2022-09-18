import React, {useState} from "react";
import User from "./user";
import api from "../api";
import SearchStatus from "./searchStatus";
import Bookmark from "./bookmark";


const Users = () => {
	const [users, setUsers] = useState(api.users.fetchAll())
	const handleDelete = (_id) => {
		setUsers(users.filter((user)=>{
			return user._id !==_id
		}))
	}
const toggleBookmark = (id) => {
		setUsers(users.map((user)=>{
			if(user._id === id){
				user.bookmark = !user.bookmark
			}
			return user
		}))
	};
	return (
	<>
		<SearchStatus length={ users.length }/>
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Имя</th>
					<th scope="col">Качества</th>
					<th scope="col">Профессия</th>
					<th scope="col">Встретился, раз</th>
					<th scope="col">Оценка</th>
					<th scope="col">Избранное</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => 
				<User key={user._id} user={user} onDelete={handleDelete} onBookmark={toggleBookmark}/>
				)}
			</tbody>
	</table>
	</>
	)
	}

export default Users