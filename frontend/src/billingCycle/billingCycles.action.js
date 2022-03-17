import Axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from 'redux-form';
import { showTabs, selectTab } from "../common/Tab/tabs.actions";

const BASE_URL = 'http://localhost:3003/api';

export function getList() {
    const request = Axios.get(`${BASE_URL}/billingCycles`);

    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
    return dispatch => {
        Axios.post(`${BASE_URL}/billingCycles`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso!')
                
                dispatch([
                    resetForm('billingCycleForm'),
                    getList(),
                    selectTab('tabList'),
                    showTabs('tabList', 'tabCreate')
                ])
            }).catch(error => {
                error.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }
}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ];
}