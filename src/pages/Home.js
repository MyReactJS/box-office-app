import React, { useState } from 'react';
import ActorGrid from '../components/actor/ActorGrid';
import CustomRadio from '../components/CustomRadio';
import MainPageLayout from '../components/MainPageLayout';
import ShowGrid from '../components/show/ShowGrid';
import { apiGet } from '../misc/config';
import { useLastQuery } from '../misc/custom-hooks';
import { RadioInputsWrapper, SearchButtonWrapper, SearchInput } from './Home.styled';

const Home = () => {

    const [input, setInput] = useLastQuery();
    const [results, setResult] = useState(null);
    const [searchOption, setSearchOption] = useState('shows');
    const isShowsSearch = searchOption === 'shows';
    const onSearch = () => {

        apiGet(`/search/${searchOption}?q=${input}`)
           
            .then(res => {
                setResult(res);
            });
    };
    const onInputChange = (event) => {
        setInput(event.target.value);
    };
    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSearch();
        }
    };
    const renderResults = () => {
        if (results && results.length === 0) {
            return <div> No Results </div>;
        }
        if (results && results.length > 0) {
            return results[0].show ?
                <ShowGrid data={results} />
                :
                <ActorGrid data={results} />

        }
        return null;
    };

    const onRadioChange = (event) => {
        setSearchOption(event.target.value);
    }
    return (
        <MainPageLayout>
            <SearchInput type="text" value={input} onChange={onInputChange} onKeyDown={onKeyDown} placeholder='Search for something' />
            <RadioInputsWrapper>
                <div>
                <CustomRadio 
                    label='Shows'
                    id='shows-search' checked={isShowsSearch} value='shows' onChange={onRadioChange}
                    />
                </div>
                <div>

                <CustomRadio 
                    label='Actors'
                    id='actors-search' checked={!isShowsSearch} value='people' onChange={onRadioChange}
                    />
         </div>
            </RadioInputsWrapper>
            <SearchButtonWrapper>
            <button type="button" onClick={onSearch}>Search </button>
            {
                renderResults()
                }
            </SearchButtonWrapper>
        </MainPageLayout>
        )


}
export default Home;