import React from 'react';
import { Field } from 'redux-form';
import Grid from '../common/layout/Grid';
import Input from '../common/form/Input';

class CreditList extends React.Component {
    renderRows() {
        const list = this.props.list || [];

        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field 
                        component={Input}
                        name={`credits[${index}].name`} 
                        readOnly={this.props.readOnly}
                        placeholder={'Informe o nome'}
                    />
                </td>
                <td>
                    <Field 
                        component={Input}
                        name={`credits[${index}].value`} 
                        readOnly={this.props.readOnly}
                        placeholder={'Informe o valor'}
                    />
                </td>
                <td></td>
            </tr>
        ));
    }

    render() {
        return (
            <Grid cols={this.props.cols}>
                <fieldset>
                    <legend>Créditos</legend>
                    <table className={'table'}>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <th>Ações</th>
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

export default CreditList;