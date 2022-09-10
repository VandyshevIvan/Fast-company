import React, { useState } from "react";
import api from "../api";


const Users = () => {
	
	const [users, setUsers] = useState(api.users.fetchAll())
	const handleDelete = (_id) => {
		setUsers(users.filter((user)=>{
			return user._id !==_id
		}))
	}
	const declination = () => {
		const length = users.length
		const lastNumber = +length.toString().slice(-1)
	
	 if(!(length<20 && length>10) && [2,3,4].includes(lastNumber)){
		return `${length} человека`}
	 return `${length} человек`
	}
	return (
	<>
		<h2>{ users.length===0 ? <span className="badge bg-danger">Никто с тобой не тусанёт сегодня</span>:
		<span className=" badge bg-primary">{declination()} тусанёт с тобой сегодня</span>
		}</h2>
		<table className="table">
			<thead>
				<tr>
					<th scope="col">Имя</th>
					<th scope="col">Качества</th>
					<th scope="col">Профессия</th>
					<th scope="col">Встретился, раз</th>
					<th scope="col">Оценка</th>
					<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				{users.map(user => 
				<tr key={user._id}>
					<th>{ user.name }</th>
					<th>{ user.qualities.map(quality => <span className={'badge me-2 bg-' + quality.color} key={quality._id}>{ quality.name }</span>) }</th>
					<th>{ user.profession.name }</th>
					<th>{ user.completedMeetings }</th>
					<th>{ user.rate }</th>
					<th>
						<button className="btn btn-danger" onClick={()=>handleDelete(user._id)}>
							delete
						</button>
					</th>
				</tr>
				)}
			</tbody>
	</table>
	</>
	)
	}

export default Users