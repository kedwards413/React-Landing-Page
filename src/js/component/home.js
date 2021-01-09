import React from "react";
import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Cards } from "./cards";
//include images into your bundle

export const Home = props => {
	return (
		<div>
			<div>
				<Navbar
					title="React Landing Page"
					navHome="Home"
					navAbout="About"
					navContact="Contact"
				/>
			</div>
			<div>
				<Jumbotron
					title="A Warm Welcome!"
					description="Thank you for visiting my first website using React"
					buttonLabel="Click here to learn more about React"
					buttonURL="https://reactjs.org/"
				/>
			</div>
			<div>
				<Cards
					title="Hello!"
					cardImage="https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg"
					description="This is my first website using React. I hope you enjoy it. Thank you for stopping by!"
					buttonURL="https://en.wikipedia.org/wiki/Main_Page"
					buttonLabel="Click here"
				/>
			</div>
			<div>
				<Cards
					title="Welcome!"
					cardImage="https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg"
					description="This is my first website using React. I hope you enjoy it. Thank you for stopping by!"
					buttonURL="https://en.wikipedia.org/wiki/Main_Page"
					buttonLabel="Click here"
				/>
			</div>
			<div>
				<Cards
					title="Hello!"
					cardImage="https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg"
					description="This is my first website using React. I hope you enjoy it. Thank you for stopping by!"
					buttonURL="https://en.wikipedia.org/wiki/Main_Page"
					buttonLabel="Click here"
				/>
				<div>
					<Cards
						title="Card Header"
						cardImage="https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg"
						description="This is my first website using React. I hope you enjoy it. Thank you for stopping by!"
						buttonURL="https://en.wikipedia.org/wiki/Main_Page"
						buttonLabel="Click here"
					/>
				</div>
			</div>
		</div>
	);
};
