import React, { Component } from "react";
import tail from "./images/tail.png";
import head from "./images/head.png";
import "./Coin.css";

export default class Coin extends Component {
	render() {
		return (
			<div>
				<img
					src={this.props.face === "head" ? head : tail}
					alt={this.props.face}
					className={`Coin-image ${this.props.wobble && "wobble"}`}
				></img>
			</div>
		);
	}
}
