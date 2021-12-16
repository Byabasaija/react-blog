
import React, {useEffect, useState} from 'react';

export const Articles = () => {
 const apiKey = "ced2ef19151942fb940c489b0737a663" 
const [articles, setArticles] = useState([])
	useEffect(() => {
		async function fetchRecents() {
			const response = await fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-11-16&sortBy=publishedAt&apiKey=ced2ef19151942fb940c489b0737a663') 
			const fetchedArticles = await response.json(response.data);
			console.log(response);
			setArticles(fetchedArticles);
		}
		fetchRecents();
	}, [])
	return (
		<>
		<h1>Articles</h1>
{/* 		 
		 { articles && articles.map(article => <div>{article.}</div>} */}
		
		</>
	);
}