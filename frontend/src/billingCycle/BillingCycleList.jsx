import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getList, showUpdate } from './billingCycles.action';

class BillingCycleList extends React.Component {
    renderRows() {
        const list = this.props.list || [];

        return list.map((bc) => (
            <tr key={bc._id}>
                <td>{ bc.name }</td>
                <td>{ bc.month }</td>
                <td>{ bc.year }</td>
                <td>
                    <button className={'btn btn-warning'} onClick={() => this.props.showUpdate(bc)}>
                        <i className="fa fa-pencil"></i>
                    </button>
                </td>
            </tr>
        ))
    }
    
    componentWillMount() {
        this.props.getList();
    }
    
    render() {
        console.log(this.props.list);
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mẽs</th>
                            <th>Ano</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.renderRows() }
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({ list: state.billingCycle.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList, showUpdate }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);