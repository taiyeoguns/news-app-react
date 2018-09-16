import React, { Component } from "react";

import NewsItem from "./NewsItem";

export default class NewsItemContainer extends Component {
	state = {
		title: "from state"
	};

	render() {
		return (
			<div>
				<div className="card mb-4">
					<div className="card-header">
						<p className="text-center mb-0 font-weight-bold text-uppercase" />
					</div>

					<div className="p-3">
						<NewsItem />
					</div>
				</div>
				<p className="text-muted">trying bootstrap</p>
				News Item Container - {this.state.title}, props -
				{this.props.item}, env - {process.env.REACT_APP_NEWS_API_KEY}
			</div>
		);
	}
}
