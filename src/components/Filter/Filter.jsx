import React from "react";
import { connect } from 'react-redux';
import { deleteFilterAction } from '../../redux/actions/appActions';
import { addFilterAction } from '../../redux/actions/appActions';

class Filter extends React.Component {
    constructor() {
        super();
        this.state = { checked: true };
    }
    handleFilterChange = (e) => {
        // console.log(this.props.filters);

        const { data_id } = this.props;
        if (this.state.checked) {
            //Метод удаляющий фильтр
            this.props.deleteFilter(data_id);
        } else {
            //Метод добавляющий фильтр
            this.props.addFilter(data_id);
        }
        this.setState({ checked: !this.state.checked });
    }
    render() {
        const { key, name } = this.props;
        return (
            <div key={key} className="filter-row">
                <input
                    type="checkbox"
                    name={name}
                    checked={this.state.checked}
                    onChange={this.handleFilterChange}
                />
                <span className="filter-name">{name}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.appReducer.filters,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        deleteFilter: (id) => dispatch(deleteFilterAction(id)),
        addFilter: (id) => dispatch(addFilterAction(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);