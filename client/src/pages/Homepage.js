import React, { Component } from "react";

import Jumbotron from "../components/Jumbotron/Jumbotron";
import Overview from "../components/Overview/Overview";
import About from "../components/About/About";
//import Subscriptions from "../components/Subscriptions/Subscriptions";
import NewsfeedContainer from "../components/NewsfeedContainer/NewsfeedContainer";
import Newsfeed from "../components/Newsfeed/Newsfeed";
import Footer from "../components/Footer/Footer";

import API from "../utils/API";


class Homepage extends Component {
    state = {
        newsfeed: []
    }

    componentDidMount() {
            API.getNewsData().then((res) => {
                let newsfeed = res.data;
                this.setState({
                    newsfeed
                });
            });
    }

    render() {
        return (
            <div className="homepage-container">
                <Jumbotron />
                <Overview />
                <About />
                {/* <Subscriptions /> */}
                <NewsfeedContainer>
                    {this.state.newsfeed.map((news, i) => (
                        <Newsfeed
                            key={i}
                            title={news.title}
                            url={news.url}
                            date={news.pub_data}
                        />
                    ))}
                </NewsfeedContainer>
                <Footer />
            </div>
        )
    }
}

export default Homepage;