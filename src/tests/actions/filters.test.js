import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from '../../actions/filters'
import moment from 'moment';


test('should generate set starte date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})



test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
      type: 'SET_END_DATE',
      endDate: moment(0)
  })
})

//Set TEXT FILTER
test('should set text filter without params', () => {
  const action = setTextFilter();

  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  })
})


test('should set text filter with params ', () => {
    const text = 'Something'
    const action = setTextFilter(text);

    expect(action).toEqual({
      type: 'SET_TEXT_FILTER',
      text
    })
})

test('should sort by date', () => {
    expect(sortByDate()).toEqual({type:'SORT_BY_DATE'})
})
test('should sort by amount', () => {
    expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
})
