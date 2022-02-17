import React, { Component } from "react";

import "./search-panel.css"

export default class SearchPanel extends Component {

    state = {
        searchText: ''
    }

    onSearchPanelChange = (text) => {
        this.props.onItemSearch(text);
        this.setState({searchText: text});
    };

    render()
    {
        return(
            <input type="text"
                   className="form-control search-input"
                   placeholder="type to search"
                   onChange={(e) => this.onSearchPanelChange(e.target.value)}
                   value={this.state.searchText}/>
        );
    }
}