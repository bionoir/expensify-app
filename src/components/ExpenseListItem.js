import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/fr-ch';

numeral.locale('fr-ch');

const ExpenseListItem = ( { id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}>{description}</Link>
        <p>
            {numeral(amount / 100).format('$0,0.00')}
            -
            {moment(createdAt).format('DD-MM-YYYY')}
        </p>
    </div>
);


export default ExpenseListItem;