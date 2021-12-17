
import React, {useEffect, useState} from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Box from '@mui/material/Box';
import { display } from '@mui/system';

const ExpandMore = styled((props) => {
	const { expand, ...other } = props;
	return <IconButton {...other} />;
  })(({ theme, expand }) => ({
	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
	marginLeft: 'auto',
	transition: theme.transitions.create('transform', {
	  duration: theme.transitions.duration.shortest,
	}),
  }));

export const Articles = () => {
//  const apiKey = "ced2ef19151942fb940c489b0737a663" 
const [expanded, setExpanded] = React.useState(false);
const handleExpandClick = () => {
    setExpanded(!expanded);
  };
const [articles, setArticles] = useState(null)
const [error, setError] = useState(null)

	useEffect(() => {
		fetch('https://newsapi.org/v2/everything?q=apple&from=2021-12-16&to=2021-12-16&sortBy=popularity&apiKey=ced2ef19151942fb940c489b0737a663')
		.then((response) => response.json())
		.then(setArticles)
		.catch(setError)
	}, [])
	console.log(articles)

	return (
		<>
		<h1>Articles</h1>
 		 <Box sx={{ display: 'grid', gap:2, gridTemplateColumns: 'repeat(4, 2fr)', p:5 }}>
		  
		{articles&&articles.articles.map((article)=>(
			<Card  >
			{/* <CardContent> */}
				
						<CardMedia
						component="img"
						height="194"
						image={article.urlToImage}
						alt="Paella dish"
						/>
						<CardContent>
						<Typography variant="body2" color="text.secondary">
						{article.title}
						</Typography>
						</CardContent>
						<CardActions disableSpacing>
						<IconButton aria-label="add to favorites">
							<FavoriteIcon />
						</IconButton>
						<IconButton aria-label="share">
							<ShareIcon />
						</IconButton>
						<ExpandMore
							expand={expanded}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
						>
							<ExpandMoreIcon />
						</ExpandMore>
						</CardActions>
						<Collapse in={expanded} timeout="auto" unmountOnExit>
						<CardContent>
							<Typography paragraph>{article.author}</Typography>
							<Typography paragraph>
							{article.description}
							</Typography>
							
						</CardContent>
						</Collapse>
			   {/* </CardContent> */}
			   </Card> 
		   ))}
		
		  </Box>
		
		</>
	);
}