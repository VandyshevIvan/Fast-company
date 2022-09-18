import React from "react";

const Bookmark = ({ onBookmark, isBookmark, id }) => {
	return (
		<button style={{margin:"0 0 0 30px"}} onClick={()=>onBookmark(id)}>
		 	<i className={"bi bi-bookmark" + (isBookmark ? "-fill" : "") }></i>
		</button>
		)
}

export default Bookmark