import React from 'react';
import unplash from '../api/unsplash';
import SearchBar from './SearchBar.jsx';
import ImageList from './ImageList';
class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async (term) => {
		console.log(term);

		const resp = await unplash.get('/search/photos', {
			params: { query: term }
		});

		this.setState({ images: resp.data.results });
	};
	render() {
		return (
			<div className="ui container" style={{ marginTop: '20px' }}>
				<SearchBar onEnter={this.onSearchSubmit} />
				Found: {this.state.images.length} images
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
