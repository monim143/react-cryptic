import React, { Component } from 'react'
import Axios from 'axios'
import { toast } from 'react-toastify';
import { SRLWrapper } from "simple-react-lightbox";
import Pagination from "react-js-pagination";
import './OperaHouse.scss'
import blueShape from '../../assets/images/herobanner.png'



class OperaHouse extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activePage: 1,
            per_page: 12,
            searchKey: '',
            selectedType: null,
            selectedCategory: null,
            totalHits: 0,
            operaData: []
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    loadData() {
        let searchString = this.state.searchKey.toString();
        let pageNumber = this.state.activePage;
        let perPage = this.state.per_page;
        let API_WITH_KEY = `https://pixabay.com/api/?key=20896420-a6a5c8471f498bed7fac9bfaa&q=${searchString}&image_type=all&page=${pageNumber}&per_page=${perPage}`

        // Make a request for a user with a given ID
        Axios.get(API_WITH_KEY)
            .then(response => {
                // handle success
                response.data.hits.length && this.setState({
                    operaData: response.data.hits,
                    totalHits: response.data.totalHits
                });
            })
            .catch(error => {
                // handle error
                console.log(error);
            })
    }


    handleSubmit(event) {
        event.preventDefault();
        const searchKey = this.state.searchKey;
        if (searchKey.toString().length) {
            this.loadData();
            toast.success("Oh Yea! successfully data loaded by search key", {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        } else {
            toast.error("Oops! Search keyword is required", {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }
    }

    handleChange(event) {
        this.setState({
            searchKey: event.target.value
        });
    }

    handlePageChange(pageNumber) {
        this.setState({ activePage: pageNumber }, () => {
            this.loadData();
        });
    }

    componentDidMount() {
        this.loadData();
    }

    componentWillUnmount() {
        toast.dismiss();
    }

    render() {

        return (
            <>
                <section className='opera-house is-bg-img section-padding' style={{ backgroundImage: `url(${blueShape})` }}>
                    <div className="container">
                        <div className="section-header text-center mb-3">
                            <h2 className={'display-6 fw-bold mb-3'}>Cryptic Opera House</h2>
                            <p className="fs-5 fw-normal">
                                By the search output will be appeared from
                                <a target={'_blank'} href={'https://pixabay.com/'} className={'text-primary'} rel="noreferrer"> pixabay.com</a> by API request
                            </p>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xl-8 offset-xl-2">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="form-group position-relative d-flex">
                                        <input type="search" className="form-control form-control-lg rounded-pill ps-4 py-2" value={this.state.searchKey} placeholder={'write here...'} onChange={this.handleChange} />
                                        <button type="submit" className={'btn btn-submit btn-primary rounded-pill px-5'}>Search</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <SRLWrapper>
                            <div className="row mt-5">
                                {
                                    this.state.operaData.length ?
                                        this.state.operaData.map((item, index) => {
                                            return (
                                                <div className="col-xl-4 col-md-4 col-sm-6" key={item.id}>
                                                    <div className="opera-item mb-4 rounded px-2 py-2">
                                                        <a href={item.largeImageURL}>
                                                            <img src={item.largeImageURL} alt="" className={'img-fluid opera-img'} />
                                                        </a>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        : null
                                }
                            </div>
                        </SRLWrapper>
                        <div className="pagination-wrapper mt-4 d-flex justify-content-center">
                            <Pagination
                                activePage={this.state.activePage}
                                itemsCountPerPage={12}
                                totalItemsCount={this.state.totalHits}
                                pageRangeDisplayed={10}
                                onChange={this.handlePageChange.bind(this)}
                            />
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default OperaHouse