import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, employeeCreate } from '../actions';
import { Card, CardSection, Button } from './common';
import AccountForm from './AccountForm';

class AccountCreate extends Component {
    onButtonPress() {
        const { name, phone, shift } = this.props;

        this.props.accountCreate({ name, phone, shift: shift || 'Monday' });
    }

    render() {
        return (
            <Card>
                <AccountForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;

    return { name, phone, shift };
};

export default connect(mapStateToProps, {
    accountUpdate, accountCreate
})(AccountCreate);