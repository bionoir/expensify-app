import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ( { id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>amount: {amount}, created at: {moment(createdAt).format('DD-MM-YYYY')}</p>
    </div>
);


export default ExpenseListItem;