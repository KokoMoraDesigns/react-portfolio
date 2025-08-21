import React, { Component } from "react";
import axios from 'axios';

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
    // State  and Lifecycle hooks only work with class based components; if we only want to render out some content, we can choose functional components<3

    constructor() {
        super();

        this.state = {
            pageTitle: "bienvenide a mi portfolio",
            isLoading: false,
            data: []
                
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this);
        
        this.handleFilter = this.handleFilter.bind(this);

    


    }



    handleFilter(filter) {

        if (filter === 'CLEAR_FILTERS') {
            this.getPortfolioItems();
        }   else {
            this.getPortfolioItems(filter);
        }

       

    }

    getPortfolioItems(filter = null){
        // Make a request for a user with a given ID
          axios
            .get('https://kokomora.devcamp.space/portfolio/portfolio_items')
            .then(response =>  {

                if (filter) {
                    // handle success
                    this.setState({
                        data: response.data.portfolio_items.filter(item => {
                            return item.category === filter;
                        })
                    });

                } else {
                    // handle success
                    this.setState({
                        data: response.data.portfolio_items
                    });

                }
            
            })
            .catch(error => {
            // handle error
              console.log(error);
            });
        
        }

    portfolioItems() {

        // data that necesitaremos:
        // -background image: thumb_image_url
        // -logo
        // -description: description
        // -id: id

        return this.state.data.map(item => {
            // debugger;
            // console.log("portfolio item", item);
            
            
            // return <h1>{item}</h1>;
            return (
                <PortfolioItem 
                    key={item.id} 
                    item={item}

                    
                   // title={item.name} 
                  //  url={item.url} 
                   // slug={item.id} 
                />
            );
        });

    }



    componentDidMount() {
        this.getPortfolioItems();
    }



    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Otra Maravillosa Cosita Mía"
        });
    }


    render() {

        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }


        return (

            <div className="homepage-wrapper">

                <div className="filter-links">

                    <button className="btn" onClick={() => this.handleFilter('eCommerce')}>ecommerce</button>
                    <button className="btn" onClick={() => this.handleFilter('Scheduling')}>scheduling</button>
                    <button className="btn" onClick={() => this.handleFilter('Enterprise')}>enterprise</button>
                    <button className="btn" onClick={() => this.handleFilter('CLEAR_FILTERS')}>all</button>

                </div>

                <div className="portfolio-items-wrapper">

                    {this.portfolioItems()}

                </div>


            </div>

           

        );
    }
}