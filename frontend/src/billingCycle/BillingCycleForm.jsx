import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCycles.action";
import { reduxForm, Field } from 'redux-form';
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit, readOnly } = this.props;

        return (
            <form role={'form'} onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        cols={'12 4'}
                        name={'name'}
                        label={'Nome'}
                        component={labelAndInput} 
                        placeholder={'Informe o nome'}
                        readOnly={readOnly}
                    />
                    <Field 
                        cols={'12 4'}
                        label={'Mês'}
                        name={'month'}
                        type={'number'}
                        readOnly={readOnly}
                        component={labelAndInput} 
                        placeholder={'Informe o mês'}
                    />
                    <Field 
                        cols={'12 4'}
                        name={'year'}
                        label={'Ano'}
                        type={'number'}
                        readOnly={readOnly}
                        component={labelAndInput} 
                        placeholder={'Informe o ano'}
                    />
                </div>
                <div className="box-footer">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                    <button type='button' className={'btn btn-default'} onClick={this.props.init}>
                        Cancelar
                    </button>
                </div>
            </form>
        );
    }
}

BillingCycleForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BillingCycleForm);
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycleForm);