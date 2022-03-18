import React from 'react';
import If from '../Operators/If';

export default props => (
    <If test={!props.hide}>
        <div className="form-group has-feedback">
            <input 
                type={props.type} 
                { ...props.input }
                className='form-control'
                readOnly={props.readOnly}
                placeholder={props.placeholder}
            />

            <span 
                className={`glyphicon glyphicon-${props.icon} form-control-feedback`}
            >

            </span>
        </div>
    </If>
);