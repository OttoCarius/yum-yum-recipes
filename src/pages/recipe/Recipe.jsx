import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {DetailWrap, Btn, Info, ImgWrap, ImgTitle } from './Recipe.styled'

function Recipe() {
let params = useParams()
const [details, setDetails] = useState({})
const [activeTab, setActiveTab] = useState('instructions')

const fetchDetails = async ()=> {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=2a9ca303b605432f9405626327808970`)
    const detailData = await data.json()
    setDetails(detailData)
}

useEffect(()=> {
    fetchDetails(params.name)// eslint-disable-next-line
},[params.name])


  return (
    <DetailWrap>
      <ImgWrap>
        <ImgTitle>{details.title}</ImgTitle>
        <img src={details.image} alt={details.title} />
        </ImgWrap>
        <Info>
            <Btn className={activeTab === 'instructions' ? 'active': ''} onClick={()=>setActiveTab('instructions')}>Instructions</Btn>
            <Btn className={activeTab === 'ingredients' ? 'active': ''} onClick={()=>setActiveTab('ingredients')}>Ingredients</Btn>
            {activeTab === 'instructions' && ( <div>
                <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
                <h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
            </div>)}
           {activeTab === 'ingredients' && ( <ul>
                {details.extendedIngredients?.map((ingredient)=> 
                <li key={ingredient.id}>{ingredient.original}</li>
                )}
            </ul>)}
           
        </Info>
    </DetailWrap>
  )
}

export default Recipe
