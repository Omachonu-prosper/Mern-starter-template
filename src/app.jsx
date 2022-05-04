class ImageContainer extends React.Component {
	render() {
		return (
			<div className='image-container'>
				<img className='mern-image' src='/images/mern.png' />
			</div>
		)
	}
}

const element = <ImageContainer />
ReactDOM.render(element, document.getElementById('root'));