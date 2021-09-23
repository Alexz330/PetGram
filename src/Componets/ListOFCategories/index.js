import React, { Fragment, useEffect, useState } from 'react';
import { Spinner } from '../SniperLoading/styles';
import { Category } from '../Category'
import { List, Item } from './styles'

const useCategoriesData= () =>{
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false)

  
  useEffect(function () {
   

    setLoading(true)
    fetch('https://petgram-server-24iykciv5.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response);
        setLoading(false)
      })
  }, [])

  return {categories, loading};
}
export const ListOfCategories = () => {
  
  const [showFixed, setshowFixed] = useState(false);
 

  const {categories, loading} = useCategoriesData();


  useEffect(()=>{
    const onScroll = e =>{
      const newAShowFixed = window.scrollY > 200

      showFixed !== newAShowFixed && setshowFixed(newAShowFixed)
    }

    document.addEventListener('scroll',onScroll)
    
    return () => document.removeEventListener('scroll',onScroll)
  })


  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        categories.map(category => <Item key={category.id}><Category {...category} /></Item>)
      }

    </List>
  )

  if(loading){
    return (<Spinner/>);
  }
  return (
    <Fragment >
      {renderList()}
      {showFixed && renderList(showFixed)}
    </Fragment>

  );

};
