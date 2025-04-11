import React from "react";


import rigoImage from "../../img/rigo-baby.jpg";
import SimpleCounter from "./SimpleCounter";


const Home = ({ six, five, four, three, two, one }) => {

	return (
		<div className="counter">
			<div className="clock-icom">
				<i class="fa-solid fa-clock"></i>

			</div>

			<SimpleCounter digit={six} />
			<SimpleCounter digit={five} />
			<SimpleCounter digit={four} />
			<SimpleCounter digit={three} />
			<SimpleCounter digit={two} />
			<SimpleCounter digit={one} />
		</div>
	);
};

export default Home;