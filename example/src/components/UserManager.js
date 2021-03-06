/**
 * Created by roderickWang on 8/13/15.
 */
import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import binding from 'redux-2way-binding'

let bindingMixin = binding.bindingMixin;

@bindingMixin
export default class UserManager extends Component {
    constructor(props) {
        super(props);
        this.setBinding('users', props.users, props.dispatch);
    }

    static proTypes = {};

    render() {
        const {users}=this.props;

        return (
            <div>
                <div>
                    <p>Name:<input type='text' valueLink={this.binding('name')}/></p>
                    <p>Age:<input type='number' valueLink={this.binding('age')}/></p>
                    <p>Sex:
                        <select valueLink={this.binding('sex')}>
                            <option value='male'>male</option>
                            <option value='female'>female</option>
                        </select>
                    </p>
                </div>

                <div>
                    <p> Name:{users.get('name')}</p>
                    <p> Age:{users.get('age')}</p>
                    <p> Sex:{users.get('sex')}</p>
                    <p><button type='button' onClick={this.changeName.bind(this)}>changeName:John</button></p>
                    <p><button type='button' onClick={this.addAge.bind(this)}>AddAge</button></p>
                </div>
            </div>
        )
    }

    changeName(){
        this.manualChange('name','John');
    }

    addAge(){
        this.manualChange('age',function(age){
            return ++age;
        })
    }

}