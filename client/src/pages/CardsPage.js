import React, {
    Component
} from "react";
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

        API.getCardData().then((res) => {
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
                    key = {
                        i
                    }
                    id = {
                        i
                    }
                    coin = {
                        card.LID
                    }
                    coinValue = {
                        card.leftPrice
                    }
                    coinChange = {
                        card.left24hrChange
                    }
                    currency = {
                        card.RID
                    }
                    currencyValue = {
                        card.rightPrice
                    }
                    currencyChange = {
                        card.right24hrChange
                    }
                    leftHandValue = {
                        card.low[2]
                    }
                    leftHandBid = {
                        card.low[3]
                    }
                    leftHandAsk = {
                        card.low[4]
                    }
                    leftHandSpread = {
                        card.low[4] - card.low[3]
                    }
                    rightHandValue = {
                        card.high[2]
                    }
                    rightHandBid = {
                        card.high[3]
                    }
                    rightHandAsk = {
                        card.high[4]
                    }
                    rightHandSpread = {
                        card.high[4] - card.high[3]
                    }
                    currencyDiff = {
                        card.high[2] - card.low[2]
                    }
                    leftUsdValue = {
                        card.low[2] * card.rightPrice
                    }
                    rightUsdValue = {
                        card.high[2] * card.rightPrice
                    }
                    usdDiff = {
                        (card.high[2] * card.rightPrice) - (card.low[2] * card.rightPrice)
                    }
                    leftExchange = {
                        card.low[0]
                    }
                    rightExchange = {
                        card.high[0]
                    } >
                    </Card> 
                ))
            } 
            </CardsContainer>
        );
    }
}


export default CardsPage;