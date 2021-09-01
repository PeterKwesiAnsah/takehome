import React from 'react';
import loader from '../../../assets/loader.svg';
import './index.css';

const index = () => {
	return (
		<div className="loader">
			<img src={loader} alt="loader--svg"></img>
		</div>
	);
};

export default index;
