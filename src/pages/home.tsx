
import React from 'react';
// components
import HeaderComponent from '../components/header';
import FooterComponent from '../components/footer';
import FormAction from '../components/form';

const HomePage: React.FC = () => {
	return (
	<div className='page'>
		<HeaderComponent />
		<main>
			<section>
				<FormAction />
			</section>
		</main>
		<FooterComponent />	
	</div>
	)
}

export default HomePage;
