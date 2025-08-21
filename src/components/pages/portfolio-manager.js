import React, { Component } from 'react';
import PortfolioItem from '../portfolio/portfolio-item';
import axios from 'axios';

import PortfolioSidebarList from '../portfolio/portfolio-sidebar-list';
import PortfolioForm from '../portfolio/portfolio-form';



export default class PortfolioManager extends Component {

    constructor() {
        super();

        this.state = {
            PortfolioItems: [],
            portfolioToEdit: {}
        };

        this.handleNewFormSubmission = this.handleNewFormSubmission.bind(this);
        this.handleEditFormSubmission = this.handleEditFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.handleEditClick = this.handleEditClick.bind(this);
        this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);

    }

    clearPortfolioToEdit() {
        this.setState({
            portfolioToEdit: {}
        });
    }

    handleEditClick(PortfolioItem) {
        this.setState({
            portfolioToEdit: PortfolioItem
        });
    }

    handleDeleteClick(PortfolioItem) {
        axios.delete(
            `https://api.devcamp.space/portfolio/portfolio_items/${PortfolioItem.id}`, 
            { withCredentials: true }
        )
        .then(response => {
            this.setState({
                PortfolioItems: this.state.PortfolioItems.filter(item => {
                    return item.id !== PortfolioItem.id;
                })
            });

            return response.data;
        })
        .catch(error => {
            console.log("handleDeleteClick error", error);
        });

    }

    handleEditFormSubmission() {
        this.getPortfolioItems();
    }

    handleNewFormSubmission(PortfolioItem) {
        //TODO: update the PortfolioItems state & add the portfolioItem to the list.
        this.setState({
            PortfolioItems: [PortfolioItem].concat(this.state.PortfolioItems)
            
        });

    }

    handleFormSubmissionError(error) {
        console.log('handleSubmissionError error', error);
    }

    getPortfolioItems() {
        axios.get("https://kokomora.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc", { 
            withCredentials: true 
        }).then(response => {

            //console.log("get function", response);
            this.setState({
                PortfolioItems: [...response.data.portfolio_items]
            });
        }).catch(error => {
            console.log("error in getPortfolioItems", error);
        });
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {

        return (

            <div className='portfolio-manager-wrapper'>

                <div className='left-column'>
                    <PortfolioForm 
                        handleNewFormSubmission={this.handleNewFormSubmission}
                        handleEditFormSubmission={this.handleEditFormSubmission}
                        handleFormSubmissionError={this.handleFormSubmissionError}
                        clearPortfolioToEdit={this.clearPortfolioToEdit}
                        portfolioToEdit={this.state.portfolioToEdit}
                    />
                </div>

                <div className='right-column'>
                    <PortfolioSidebarList
                    handleDeleteClick={this.handleDeleteClick}
                    data={this.state.PortfolioItems}
                    handleEditClick={this.handleEditClick} />
                </div>

            </div>

        );
    }
}