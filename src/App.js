import React from 'react';

import { ListOfCategories } from './Componets/ListOFCategories';
import { GlobalStyle } from './styles/GlobalStyles';

import { ListOfPhotosCards } from './Componets/ListOfPhotoCards';
import { Logo } from './Componets/Logo';

const App = () => {
    return (

        <div>
            <GlobalStyle />
            <Logo/>
            
            <ListOfCategories />
           
            <ListOfPhotosCards/>
        </div>
    )
}

export default App
