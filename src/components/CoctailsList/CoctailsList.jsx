import React from "react";
import { connect } from 'react-redux';
import { saveCoctailsListAction } from '../../redux/actions/appActions';

import Coctail from "../Coctail/Coctail";

class CoctailsList extends React.Component {

    printCoctails = (drinks) => {
        return drinks.map((drink, key) => {
            return (
                <div key={drink.idDrink} className="coctail" data-id={key}> 
                    <Coctail
                        name={drink.strDrink}
                        img={drink.strDrinkThumb}
                        id={drink.idDrink}
                    />
                </div>
            )
        });
    }

    getCoctails = () => {
        return this.props.coctails.map((element) => {
            return (
                <div key={element.strCategory} className="cocktail-in-category">
                    <span className="cocktail-category-name">{element.strCategory}</span>
                    <div className="cocktails-category">
                        {this.printCoctails(element.drinks.drinks)}
                    </div>
                </div>
            );
        });

    }

    render() {
        return (
            <div className="coctails-list">
                {this.getCoctails()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        coctails: state.appReducer.coctails,
        filters: state.appReducer.filters
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveCoctailsListProp: (list) => dispatch(saveCoctailsListAction(list))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CoctailsList);