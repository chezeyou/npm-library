/**
 * title useSearchValue
 * use
 * const [searchValue, setSearchValue] = useSearchValue(initialValue, ()=> {dispatch({type: 'namespace/data'}, payload: {refresh: 'search})})
 * setSearchValue({name:'zy'}, false)
 */
import { useEffect, useState, useCallback } from 'react';
import omit from 'omit.js';

const generateId = (() => {
    let i = 0;
    return (prefix = '') => {
        i += 1;
        return `${prefix}${i}`;
    };
})();

const useSearchValue = (initialValue, refresh) => {
    const [values, setValues] = useState(initialValue);
    const { secId } = values;
    useEffect(() => {
        if (!secId || !values?.autoFresh || !refresh) return;
        refresh();
    }, [secId]);

    const setSearchValue = useCallback((searchValue = {}, autoFresh = true) => {
        setValues((prevState) => ({
            ...prevState,
            ...searchValue,
            autoFresh,
            secId: generateId('secSearch'),
        }));
    }, []);

    return [omit(values, ['secId', 'autoFresh']), setSearchValue];
};

export default useSearchValue;
