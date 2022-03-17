import React from "react";
import ItemList from "./ItemList";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { init } from "./billingCycles.action";
import { reduxForm, Field, formValueSelector } from 'redux-form';
import labelAndInput from "../common/form/labelAndInput";

class BillingCycleForm extends React.Component {
    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props;

        return (
            <form role={'form'} onSubmit={handleSubmit}>
                <div className="box-body">
                    <Field 
                        cols={'12 4'}
                        name={'name'}
                        label={'Nome'}
                        readOnly={readOnly}
                        component={labelAndInput} 
                        placeholder={'Informe o nome'}
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
                    <ItemList legend={'Créditos'} fields={'credits'} cols={'12 6'} list={credits} readOnly={readOnly} />
                    <ItemList legend={'Débitos'} fields={'debts'} cols={'12 6'} list={debts} readOnly={readOnly} showStatus={true}/>
                </div>
                <div className="box-footer">
                    <button type="submit" className={`btn btn-${this.props.submitClass}`}>
                        { this.props.submitLabel }
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
const selector = formValueSelector('billingCycleForm');

const mapStateToProps = state => ({ 
    credits: selector(state, 'credits'), 
    debts: selector(state, 'debts') 
})

const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);