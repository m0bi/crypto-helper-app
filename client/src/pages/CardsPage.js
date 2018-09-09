import React, { Component } from "react";
import CardsContainer from "../components/CardsContainer/CardsContainer";
import Card from "../components/Card/Card";
import descriptionsJSON from "../json/descriptions.json";

import API from "../utils/API";

class CardsPage extends Component {
    state = {
        cards: [],
        symbol: ""
    }

    componentDidMount() {

        (async function getCards(){

            const cards = await API.getCardData();
            this.setState({
                cards
            });

        })();
    }

    render() {
        return (
            <CardsContainer>
                {this.state.cards.map((card, i) => (
                    <Card
                        key={i}
                        id={i}
                        coin={card.coin}
                        currency={card.currency}
                        lefthandValue={Number(card.lhs).toFixed(3)}
                        righthandValue={Number(card.rhs).toFixed(3)}
                        currencyDiff={Number(card.diff).toFixed(3)}
                        leftusdValue={card.usdlhs}
                        rightusdValue={card.usdrhs}
                        usdDiff={card.usddiff}
                        lexchange={card.lexchange}
                        rexchange={card.rexchange}
                        lexchangeDescription={card.lexchangeDescription.description}
                        rexchangeDescription={card.rexchangeDescription.description}
                    >
                    </Card>
                ))}
            </CardsContainer>
        );
    }
}


export default CardsPage;