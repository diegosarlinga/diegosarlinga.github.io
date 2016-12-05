import React from 'react';
// TODO: include materialize as webpack module
// import $ from 'jquery';

export default class MaterializeSelect extends React.Component {
	constructor(props) {
		super(props);
		this.selectElement = null;
	}
	componentDidMount() {
		$(this.selectElement).material_select();
	}
	render() {
		return (
		    <select ref={ dom => this.selectElement = dom }>
		    	{this.props.children}
		    </select>
		);
	}
}