import React from "react";
import { reduxForm, Field } from 'redux-form';
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit } = this.props;

        return (
            <form role={'form'} onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        cols={'12 4'}
                        name={'name'}
                        label={'Nome'}
                        component={labelAndInput} 
                        placeholder={'Informe o nome'}
                    />
                    <Field 
                        cols={'12 4'}
                        label={'Mês'}
                        name={'month'}
                        type={'number'}
                        component={labelAndInput} 
                        placeholder={'Informe o mês'}
                    />
                    <Field 
                        cols={'12 4'}
                        name={'year'}
                        label={'Ano'}
                        type={'number'}
                        component={labelAndInput} 
                        placeholder={'Informe o ano'}
                    />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        );
    }
}

export default reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);