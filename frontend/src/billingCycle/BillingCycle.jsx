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
                            <TabContent id={'tabList'}><h1>Listar</h1></TabContent>
                            <TabContent id={'tabCreate'}><h1>Incluir</h1></TabContent>
                            <TabContent id={'tabUpdate'}><h1>Alterar</h1></TabContent>
                            <TabContent id={'tabDelete'}><h1>Excluir</h1></TabContent>
                        </TabsContent>
                    </Tabs>
                </Content>/
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab, showTabs }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);