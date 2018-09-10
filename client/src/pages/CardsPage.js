import React, { Component } from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Card from "../components/Card/Card";
//import descriptionsJSON from "../json/descriptions.json";

import API from "../utils/API";

class CardsPage extends Component {
    state = {
        cards: [],
        symbol: ""
    }

    componentDidMount() {

    
            API.getCardData().then((res)=>{
                let cards = res.data;
                this.setState({
                    cards
                });    
            });
            
    }

    render() {
        return (
            <CardsContainer>
                {this.state.cards.map((card, i) => (
                    <Card
                        key={i}
                        id={i}
                        coin={card.leftDisplayName}
                        coinValue={card.leftPrice}
                        coinChange={card.left24hrChange}
                        currency={card.rightDisplayName}
                        currencyValue={card.rightPrice}
                        currencyChange={card.right24hrChange}
                        leftHandValue={card.low[2]}
                        rightHandValue={card.high[2]}
                        currencyDiff={card.high[2] - card.low[2]}
                        leftUsdValue={card.low[2] * card.rightPrice}
                        rightUsdValue={card.high[2] * card.rightPrice}
                        usdDiff={(card.low[2] * card.rightPrice) - (card.high[2] * card.rightPrice)}
                        leftExchange={card.low[0]}
                        rightExchange={card.high[0]}
                    >
                    </Card>
                ))}
            </CardsContainer>
        );
    }
}


export default CardsPage;