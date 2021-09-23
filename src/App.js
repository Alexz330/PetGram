import React from 'react';

import { ListOfCategories } from './Componets/ListOFCategories';
import { GlobalStyle } from './styles/GlobalStyles';

import { ListOfPhotoCards } from './Componets/ListOfPhotoCards';
import { Logo } from './Componets/Logo';

export const App = () => {
    return (

        <div>
            <GlobalStyle />
            <Logo/>
            
            <ListOfCategories />
           
            <ListOfPhotoCards categoryId={1}/>
        </div>
    )
}