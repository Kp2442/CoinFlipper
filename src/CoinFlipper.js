import React, { Component } from "react";
import Coin from "./Coin";
import "./CoinFlipper.css";

export default class CoinFlipper extends Component {
	state = {
		face: "head",
		totalFlips: 0,
		heads: 0,
		tails: 0,
		wobble: false,
	};
	static defaultProps = {
		faces: ["head", "tail"],
	};
	flip = () => {
		let faces = [...this.props.faces];
		let idx = Math.floor(Math.random() * 2);
		this.setState({ face: faces[idx], wobble: true });
		this.setState(prevState => {
			return { totalFlips: prevState.totalFlips + 1 };
		});
		if (faces[idx] === "head") {
			this.setState(prevState => {
				return { heads: prevState.heads + 1 };
			});
		} else {
			this.setState(st => {
				return { tails: st.tails + 1 };
			});
		}
		setTimeout(() => {
			this.setState({ wobble: false });
		}, 1000);
	};
	render() {
		return (
			<div>
				<h1 className="CoinFlipper-heading">Coin Flipper</h1>
				<Coin face={this.state.face} wobble={this.state.wobble} />
				<button className="CoinFlipper-button" onClick={this.flip}>
					Flip Coin!
				</button>
				<p className="CoinFlipper-paragraph">
					Out of{" "}
					<strong style={{ color: "#1f37ad" }}>{this.state.totalFlips}</strong>{" "}
					flips, there have been{" "}
					<strong style={{ color: "#1f37ad" }}>{this.state.heads}</strong> heads
					and <strong style={{ color: "#1f37ad" }}>{this.state.tails}</strong>{" "}
					tails
				</p>
			</div>
		);
	}
}
