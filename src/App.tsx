import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './about/About';
import './app.scss';
import { StyledApp, StyledContent } from './App.style';
import Characters, { ICharacter } from './characters/Characters';
import { CharactersContext } from './characters/Characters.context';
import { setCharacterList } from './characters/CharactersActions';
import CharacterDetails from './characters/details/CharacterDetails';
import Footer from './Footer';
import Header from './Header';
import Home from './home/Home';
import useCharacters from './hooks/useCharacters';

export interface IFetchCharactersResult {
    data: {
        results: ICharacter[];
    };
}

const App = () => {
    const characters = useCharacters({});

    const fetchCharacters = async () => {
        const result = await fetch(
            `https://gateway.marvel.com/v1/public/characters?limit=100&apikey=${process.env.API_KEY_MARVEL}`
        );
        const { data }: IFetchCharactersResult = await result.json();
        characters.dispatch(setCharacterList(data.results));
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
                        </Switch>
                    </StyledContent>
                    <Footer />
                </StyledApp>
            </Router>
        </CharactersContext.Provider>
    );
};

export default App;
