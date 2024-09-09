import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../components/general/Header';
import NewPost from '../components/posts/NewPost';
import PostSection from '../components/posts/PostsSection';
import { signUpAction } from "../../src/actions";

function Main() {
	const navigate = useNavigate();
	const { payload } = useSelector(signUpAction);

	React.useEffect(() => {
		const userExists = !!payload.user.username

		if (!userExists) {
			navigate('/');
		}
	}, []);

	return (
		<>
			<Header />
			<NewPost />
			<PostSection />
		</>
	);
}

export default Main;
