import moment from 'moment';
import { 
        setStartDate, 
        setEndDate, 
        setTextFilter, 
        sortByAmount, 
        sortByDate 
    } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});


test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate set text action object with defined value', () =>{
    const action = setTextFilter('Billings');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'Billings'
    });
});

test('should generate set text action object with DEFAULT value', () =>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    });
});

test('should generate sort by date action object with defined value', () =>{
    expect(sortByDate()).toEqual({ type: 'SORT_BY_DATE' });
});

test('should generate sort by amount action object with defined value', () =>{
    expect(sortByAmount()).toEqual({ type: 'SORT_BY_AMOUNT' });
});