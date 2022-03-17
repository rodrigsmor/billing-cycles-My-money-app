import React, { Component } from "react";
import Content from "../common/template/Content";
import ContentHeader from '../common/template/ContentHeader';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Tabs from "../common/Tab/Tabs";
import TabsHeader from "../common/Tab/TabsHeader";
import TabsContent from "../common/Tab/TabsContent";
import TabHeader from "../common/Tab/TabHeader";
import TabContent from "../common/Tab/TabContent";
import { selectTab, showTabs } from '../common/Tab/tabs.actions';
import BillingCycleList from "./BillingCycleList";
import BillingCycleForm from "./BillingCycleForm";
import { create } from './billingCycles.action';

class BillingCycle extends Component {
    componentWillMount() {
        this.props.selectTab('tabList');
        this.props.showTabs('tabList', 'tabCreate')
    }

    render() {
        return (
            <div>
                <ContentHeader title={'Ciclos de Pagamentos'} small={'Cadastro'} />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label={'Listar'} icon={'bars'} target={'tabList'}/>
                            <TabHeader label={'Incluir'} icon={'plus'} target={'tabCreate'}/>
                            <TabHeader label={'Alterar'} icon={'pencil'} target={'tabUpdate'}/>
                            <TabHeader label={'Excluir'} icon={'trash-o'} target={'tabDelete'}/>
                        </TabsHeader>
                        <TabsContent>
                            <TabContent id={'tabList'}>
                                <BillingCycleList />
                            </TabContent>
                            <TabContent id={'tabCreate'}>
                                <BillingCycleForm onSubmit={this.props.create}/>
                            </TabContent>
                            <TabContent id={'tabUpdate'}>
                                <BillingCycleForm />
                            </TabContent>
                            <TabContent id={'tabDelete'}><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>/
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs, create }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);