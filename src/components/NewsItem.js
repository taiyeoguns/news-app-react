import React, { Component } from "react";

export default class NewsItem extends Component {
	render() {
		return (
			<div>
				<div className="card mb-4">
					<img className="card-img-top" src="" alt="" />
					<div className="card-body">
						<a href="" target="_blank">
							<h5 className="card-title">Title</h5>
						</a>
						<p className="card-text pb-6">
							<small />
						</p>
						<p href="#" className="">
							<small>By: </small>
						</p>
					</div>
					<div className="card-footer">
						<small className="text-muted" />
					</div>
				</div>
			</div>
		);
	}
}
