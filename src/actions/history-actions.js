import moment from 'moment';
const REQUEST_SEARCH_HISTORY = 'REQUEST_SEARCH_HISTORY';


// This function is used to save as well as delete a history item
export const saveSearchHistory = (searchObj, shouldDelete) => {
    if (!searchObj)
        return;

    let searchHistory = localStorage.getItem('searchHistory');
    // if it's the first time loading the page, there won't be any searchHistory
    // inside localStorage. Init to empty array
    if (!searchHistory)
        searchHistory = [];
    else
        searchHistory = JSON.parse(searchHistory);

    const { lat, lng } = searchObj;
    const id = lat+''+lng;
    searchObj.id = id;
    searchObj.time =  moment();

    // searches for duplicates & removes them
    // pushing in the new item with an updated time stamp
    searchHistory = removeIfPresent(searchHistory, searchObj.id);
    if (!shouldDelete){
        searchHistory.push(searchObj);
    }
    // should add a check here to limit the number of history items saved
    // don't want the number to be in the hundreds
    localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
};

// Removes duplicates
const removeIfPresent = (searchHistory, id) => {
    for ( let i=0; i<searchHistory.length; i++){
        if (searchHistory[i].id === id){
            searchHistory.splice(i, 1);
            console.log('splicing!');
        }
    }
    return searchHistory;
};

// Action creator that fetches all the available history items from localStorage
// Passes it on to a reducer to populate and render history items
export const fetchHistory = () => {
    console.log('Dispatched');
    const history = JSON.parse(localStorage.getItem('searchHistory', ''));
    if (!history)
        return ({ type: REQUEST_SEARCH_HISTORY, searchHistory: []});

    // sorts the entire search history by time
    history.sort(function(a,b){
        return new Date(b.time) - new Date(a.time);
    });

    return ({ type: REQUEST_SEARCH_HISTORY, searchHistory: history });
};