import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import About from './about/About';
import './app.scss';
import { StyledApp, StyledContent } from './App.style';
import Footer from './body/footer/Footer';
import Header from './body/header/Header';
import Characters, { ICharacter } from './characters/Characters';
import { CharactersContext } from './characters/Characters.context';
import { setCharacterList } from './characters/CharactersActions';
import CharacterDetails from './characters/details/CharacterDetails';
import useCharacters from './characters/hooks/useCharacters';
import Error from './error/Error';
import Home from './home/Home';

export interface IFetchCharactersResult {
    data: {
        results: ICharacter[];
    };
}

/**
 * Router and routes definition.
 * Fetch the characters data and provides the context for the inner components.
 * Limit set by the fetching marvel API: 100
 */
const App = () => {
    const characters = useCharacters({});
    const [inError, setInError] = useState(false);

    const fetchCharacters = async () => {
        try {
            const result = await fetch(
                `https://gateway.marvel.com/v1/public/characters?limit=100&apikey=${process.env.API_KEY_MARVEL}`
            );
            const { data }: IFetchCharactersResult = await result.json();
            characters.dispatch(setCharacterList(data.results));
        } catch (error) {
            setInError(true);
        }
    };

    useEffect(() => {
        fetchCharacters();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <CharactersContext.Provider value={characters}>
            <Router>
                <StyledApp>
                    <Header />
                    <StyledContent>
                        <Switch>
                            <Route path='/' exact>
                                <Home />
                            </Route>
                            <Route path='/characters' exact>
                                <Characters />
                            </Route>
                            <Route path='/characters/:id'>
                                <CharacterDetails />
                            </Route>
                            <Route path='/about'>
                                <About />
                            </Route>
                            <Route path='/error'>
                                <Error />
                            </Route>
                        </Switch>
                    </StyledContent>
                    <Footer />
                    {inError && <Redirect to='/error' />}
                </StyledApp>
            </Router>
        </CharactersContext.Provider>
    );
};

export default App;
