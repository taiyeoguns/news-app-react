import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";

import NewsItem from "./NewsItem";

export default class NewsItemContainer extends Component {
	state = {
		articles: []
	};

	componentDidMount() {
		axios
			.get(
				"https://newsapi.org/v2/top-headlines?sources=" +
					this.props.source.id +
					"&apiKey=" +
					process.env.REACT_APP_NEWS_API_KEY
			)
			.then(res =>
				this.setState({ articles: _.sampleSize(res.data.articles, 5) })
			);
	}

	render() {
		const containerStyle = {
			width: "23rem"
		};
		return (
			<div>
				<div className="card mb-4" style={containerStyle}>
					<div className="card-header">
						<p className="text-center mb-0 font-weight-bold text-uppercase">
							{this.props.source.name}
						</p>
					</div>

					<div className="p-3">
						{this.state.articles.map((article, index) => (
							<NewsItem item={article} key={index} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
