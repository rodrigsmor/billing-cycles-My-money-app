import React, { Component } from "react";
import Content from "../common/template/Content";
import ContentHeader from '../common/template/ContentHeader';

import Tabs from "../common/Tab/Tabs";
import TabsHeader from "../common/Tab/TabsHeader";
import TabsContent from "../common/Tab/TabsContent";
import TabHeader from "../common/Tab/TabHeader";

class BillingCycle extends Component {
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

                        </TabsContent>
                    </Tabs>
                </Content>/
            </div>
        )
    }
}

export default BillingCycle;