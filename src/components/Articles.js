
import React, { useState, useEffect } from 'react';

export const Articles = () => {
	const [articles, setArticles ] = useState(window && window.preloadedArticles);

	useEffect(() => {
		if (window && !window.preloadedArticles){
			console.log("no preloaded articles found, loading from server")
			fetch("api/articles")
			.then(response => response.json())
			.then(data => setArticles(data));
		}
		
	}, [])

	return (
		<>
		<h1>Articles</h1>
		{ articles&&articles.map(article => (
			<div key={article.title}>
				<h2>{article.title}</h2>
				<p>by {article.author}</p>
			</div>
			
		))}
		</>
	);
}