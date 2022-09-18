import React from "react";

const SearchStatus = ({ length }) =>{
	const handleFrase = () => {
		const lastNumber = +length.toString().slice(-1)
	
		if(!(length<20 && length>10) && [2,3,4].includes(lastNumber)){
			return `${length} человека`}
				return `${length} человек`
	}
		return (<h2>{ length===0 ? <span className="badge bg-danger">Никто с тобой не тусанёт сегодня</span>:
		<span className=" badge bg-primary">{handleFrase()} тусанёт с тобой сегодня</span>
		}</h2>)
}

export default SearchStatus