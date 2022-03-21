import React from 'react';
import { connect } from 'react-redux';
import Grid from '../common/layout/Grid';
import Input from '../common/form/Input';
import { Field, arrayInsert, arrayRemove } from 'redux-form';
import { bindActionCreators } from 'redux';
import If from '../common/Operators/If';

class ItemList extends React.Component {
    add(index, item = {}) {
        if(!this.props.readOnly){
            this.props.arrayInsert('billingCycleForm', this.props.fields, index, item)
        }   
    }

    remove(index) {
        if(!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCycleForm', this.props.fields, index)
        }
    }

    renderRows() {
        const list = this.props.list || [];

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field 
                        component={Input}
                        name={`${this.props.fields}[${index}].name`} 
                        readOnly={this.props.readOnly}
                        placeholder={'Informe o nome'}
                    />
                </td>
                <td>
                    <Field 
                        component={Input}
                        name={`${this.props.fields}[${index}].value`} 
                        readOnly={this.props.readOnly}
                        placeholder={'Informe o valor'}
                    />
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field 
                            component={Input}
                            name={`${this.props.fields}[${index}].status`} 
                            readOnly={this.props.readOnly}
                            placeholder={'Informe o Status'}
                        />
                    </td>
                </If>
                <td>
                    <button 
                        type={'button'}
                        className={'btn btn-success'}
                        onClick={() => this.add(index + 1)}
                    >
                        <i className="fa fa-plus"></i>
                    </button>
                    <button 
                        type={'button'}
                        className={'btn btn-warning'}
                        onClick={() => this.add(index + 1, item)}
                    >
                        <i className="fa fa-clone"></i>
                    </button>
                    <button 
                        type={'button'}
                        className={'btn btn-danger'}
                        onClick={() => this.remove(index)}
                    >
                        <i className="fa fa-trash-o"></i>
                    </button>
                </td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>{ this.props.legend }</legend>
                    <table className={'table'}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className={'table-actions'}>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.renderRows() }
                        </tbody>
                    </table>
                </fieldset>
            </Grid>
        );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch);

export default connect(null, mapDispatchToProps)(ItemList);