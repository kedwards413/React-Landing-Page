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
					title="Welcome!"
					description="Thank you for visiting my first website using React"
					buttonLabel="Click here for my Linkedin!"
					buttonURL="https://www.linkedin.com/in/kaela-edwards-a265a160/"
				/>
			</div>
			<div className="d-flex justify-content-center">
				<div>
					<Cards
						title="About Me"
						cardImage="https://i.pinimg.com/736x/ae/c4/53/aec453161b2f33ffc6219d8a758307a9.jpg"
						description="Hi! My name is Kaela. I am enrolled at 4Geeks Academy to become a full-stack developer."
						buttonURL="https://4geeksacademy.co/"
						buttonLabel="Visit 4Geeks"
					/>
				</div>
				<div>
					<Cards
						title="Where Am I?"
						cardImage="https://media.timeout.com/images/105695117/630/472/image.jpg"
						description="I currently live in Miami, FL. If you know of any Junior Web Developer job openings in the area, please contact me ASAP!"
						buttonURL="#"
						buttonLabel="Click here to contact me"
					/>
				</div>
				<div>
					<Cards
						title="Learning React"
						cardImage="https://blog.addthiscdn.com/wp-content/uploads/2014/11/addthis-react-flux-javascript-scaling.png"
						description="We are working with React and Javascript right now. It is challenging but I am taking it day by day with lots of practice."
						buttonURL="https://reactjs.org/"
						buttonLabel="More About React Here"
					/>
				</div>
				<div>
					<Cards
						title="Thank you"
						cardImage="https://thumbs.dreamstime.com/b/white-stone-words-thank-you-smile-face-color-glitter-boke-background-117350639.jpg"
						description="Thanks for stopping by my site. Have a great day!"
						buttonURL="#"
						buttonLabel="Leave Feedback Here"
					/>
				</div>
			</div>
		</div>
	);
};
