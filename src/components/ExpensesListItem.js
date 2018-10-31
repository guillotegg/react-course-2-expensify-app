import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export const ExpensesListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>{description}</h3>
        </Link>
        <div>{amount} - {createdAt}</div>
    </div>
);

export default connect()(ExpensesListItem);