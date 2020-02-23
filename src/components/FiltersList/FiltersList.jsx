import React from "react";
import { connect } from 'react-redux';
import { saveFiltersListAction } from '../../redux/actions/appActions';
import { saveCoctailsListAction } from '../../redux/actions/appActions';
import { refreshCoctailsListAction } from '../../redux/actions/appActions';

import Filter from '../Filter/Filter';

class FiltersList extends React.Component {
    componentDidMount = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
            .then(res => res.json())
            .then(
                (result) => {
                    let filters = [];
                    result.drinks.forEach(function (filter, key) {
                        //Делаем по умолчанию все фильтры выбранные
                        filter['checked'] = true;
                    });
                    this.props.saveFiltersListProp(result.drinks);
                },
                (error) => {
                    console.log("Error!!!");
                }
            ).then(() => {
                this.refreshCoctails();
            });
    }
    refreshCoctails = () => {
        let coctails = [];
        this.props.refreshCoctailsListProp();
        this.props.filters.forEach((filter, key) => {
            if (filter.checked === true) {
                fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=" + filter.strCategory)
                    .then(res => res.json())
                    .then(
                        (result) => {
                            this.props.saveCoctailsListProp(
                                {
                                    strCategory: filter.strCategory,
                                    drinks: result
                                }
                            );
                        },
                        (error) => {
                            console.log("Error!!!");
                        }
                    );
            }
        });
    }

    getFilters = () => {
        if (!this.props.filters) {
            return null;
        }

        return this.props.filters.map((filter, key) => {
            return (
                <Filter
                    key={key + filter}
                    name={filter.strCategory}
                    data_id={key}
                />
            )
        });
    }

    render() {
        return (
            <div className="filters-list">
                {this.getFilters()}

                <div
                    onClick={this.refreshCoctails}
                    className="add-button"
                >
                    <button id="apply-button">Apply</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.appReducer.filters,
        coctails: state.appReducer.coctails
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        saveFiltersListProp: (list) => dispatch(saveFiltersListAction(list)),
        saveCoctailsListProp: (list) => dispatch(saveCoctailsListAction(list)),
        refreshCoctailsListProp: () => dispatch(refreshCoctailsListAction()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FiltersList);