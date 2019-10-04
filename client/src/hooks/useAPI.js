import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const useAPI = (url) => {
	const [data, setData] = useState([]);
	useEffect(() => {
		axios.get(`http://localhost:5000/api${url}`)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => console.error(error))
		return () => { };
	}, [url])
	return data;
}

export const withAPIHook = (Component, url) => {
	return (props) => {
		const data = useAPI(url);
		return <Component players={data} {...props} />;
	};
};