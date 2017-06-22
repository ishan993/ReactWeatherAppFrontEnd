import moment from 'moment';
const REQUEST_SEARCH_HISTORY = 'REQUEST_SEARCH_HISTORY';

export const saveSearchHistory = (searchObj, shouldDelete) => {
    if (!searchObj)
        return;

    let searchHistory = localStorage.getItem('searchHistory');

    if (!searchHistory)
        searchHistory = [];
    else
        searchHistory = JSON.parse(searchHistory);

    const { lat, lng } = searchObj;
    const id = lat+''+lng;
    searchObj.id = id;
    searchObj.time =  moment();

    searchHistory = removeIfPresent(searchHistory, searchObj.id);
    if (!shouldDelete){
        searchHistory.push(searchObj);
    }
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    return (dispatch) => {
        dispatch(fetchHistory);
    };
};

const removeIfPresent = (searchHistory, id) => {
    for ( let i=0; i<searchHistory.length; i++){
        if (searchHistory[i].id === id){
            searchHistory.splice(i, 1);
            console.log('splicing!');
        }
    }
    return searchHistory;
};

export const fetchHistory = () => {
    console.log('Dispatched');
    const history = JSON.parse(localStorage.getItem('searchHistory', ''));
    if (!history)
        return ({ type: REQUEST_SEARCH_HISTORY, searchHistory: []});

    history.sort(function(a,b){
        return new Date(b.time) - new Date(a.time);
    });
    return ({ type: REQUEST_SEARCH_HISTORY, searchHistory: history });
};