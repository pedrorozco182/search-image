import React from 'react';

class SearchBar extends React.Component {
	state = { term: '' };

	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onEnter(this.state.term);
	};
	render() {
		return (
			<div className="ui segment">
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<label className="label"> Image Search:</label>
					<div className="field">
						<input
							type="text"
							value={this.state.term}
							onChange={(e) => this.setState({ term: e.target.value })}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
