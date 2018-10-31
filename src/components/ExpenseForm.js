import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import { timingSafeEqual } from 'crypto';
import { throws } from 'assert';

const now = moment();

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);       
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: ''
        };
    };

    OnDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    OnNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d*((\.|,)\d{0,2})?$/ )) {
            this.setState(() => ({ amount }));
        }        
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({ calendarFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount){
            this.setState(() => ({ error: 'Please provide description and amount'}));
        } else {
            this.setState(() => ( { error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf()
            });
        }        
    };
    render() {
        return (
            <div>
            {this.state.error && <div>{this.state.error}</div>}
            <form onSubmit={this.onSubmit}>
                    <input 
                        type="text" 
                        placeholder="Description" 
                        autoFocus 
                        value={this.state.description} 
                        onChange={this.OnDescriptionChange} 
                    />
                    <input 
                        type="number" 
                        placeholder="Amount" 
                        value={this.state.amount} 
                        onChange={this.onAmountChange} 
                    />
                    <SingleDatePicker 
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.calendarFocused} 
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />                    
                    <textarea 
                        placeholder="Add a note for your expense" 
                        value={this.state.note} 
                        onChange={this.OnNoteChange} 
                    />
                    <button>Add Expense</button> 
                </form>
            </div>
        )
    }
}