import React from "react";

import Row from '../common/layout/Row';
import Grid from "../common/layout/Grid";
import ValueBox from '../common/widget/ValueBox';

export default ({ credit, debt }) => (
    <Grid cols={'12'}>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox 
                    cols={'12 4'}
                    icon={'bank'}
                    color={'green'}
                    value={`R$ ${credit}`}
                    text={'Total de Créditos'}
                />

                <ValueBox 
                    cols={'12 4'}
                    icon={'credit-card'}
                    color={'red'}
                    value={`R$ ${debt}`}
                    text={'Total de Débitos'}
                />

                <ValueBox 
                    cols={'12 4'}
                    color={'blue'}
                    icon={'money'}
                    value={`R$ ${credit - debt}`}
                    text={'Valor consolidado'}
                />
            </Row>
        </fieldset>
    </Grid>
)