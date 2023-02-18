import { Search2Icon } from '@chakra-ui/icons'
import { useDisclosure, useOutsideClick } from '@chakra-ui/react'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useThrottle } from 'use-throttle'
import { getSearchResults } from '../../redux/products/product.action'

const SearchBar = () => {
    const [suggestions, setSuggestions] = useState([]);
    const [input, setInput] = useState("")
    const [activeOption, setActiveOption] = useState(0)
    const scrollDiv = useRef()
    const ref = useRef()
    const [isModalOpen, setIsModalOpen] = useState(false)
    useOutsideClick({
      ref: ref,
      handler: () => setIsModalOpen(false),
    })
    

    const handleActiveSuggestion = (e) => {
        switch (e.keyCode) {
            case 38:
                if(activeOption ===1) {
                    scrollDiv.current.scrollTop =suggestions.length*41;
                    setActiveOption(suggestions.length);
                }else if(activeOption <=suggestions.length -3){
                 scrollDiv.current.scrollTop -= 41;   
                }
                if(activeOption >1){
                    setActiveOption((prev) => prev - 1);
                }
                break;
            case 40:
                if(activeOption ===suggestions.length) {
                    scrollDiv.current.scrollTop =0;
                    setActiveOption(0);
                }
                else if(activeOption >=4){
                    scrollDiv.current.scrollTop += 41;
                }
                setActiveOption((prev) => prev + 1);
                break;
            default:
                return;
        }

    }

   const throttleText = useThrottle(input,1000)
    useEffect(() => {
        if(throttleText.length>0){
            getSearchResults({q:throttleText}).then(res=>{
                setSuggestions(res.data)
            })
        }else{
            setSuggestions([])
        }
    }, [throttleText])

    const handelInputChange=(e)=>{
        setInput(e.target.value)
        if( input.length>0){
            setIsModalOpen(true)
        }
                    
    }
    const handleRedirectLink=()=>{
        setIsModalOpen(false)
        console.log(suggestions[0])
        setInput(suggestions[0]?.sub_type||"")
    }
    return (
        <Wrapper ref={ref} onKeyUp={handleActiveSuggestion}>
            <SearchBarWrapper>
            <Search2Icon color='gray' mt='1' mr='2' />
                <Input value={input} placeholder='Search for products, brands and more' onChange={ handelInputChange } />
            </SearchBarWrapper>
            {isModalOpen&& <SuggestionBox limit={5}
                suggestionLength={suggestions.length}
                active={activeOption}
                ref={scrollDiv}
            >
                {
                    suggestions?.map((item, index) => {
                        return <div onClick={ handleRedirectLink}  key={index} onMouseOver={() => setActiveOption(index + 1)}>
                            <Link to={`/${item.category}/${item._id}`}>
                            {item.title}
                            </Link>
                            </div>
                    })
                }
            </SuggestionBox>
            }
        </Wrapper>
    )
}

export default SearchBar

const SuggestionBox = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
max-height:${({ limit }) => `${limit * 39}px`};
border-top-color:${({ limit }) => limit ? "transparent" : "black"};
border-bottom-color:${({ suggestionLength }) => suggestionLength ? "black" : "transparent"};
overflow:auto;
& *{
    padding:10px;
    text-align:left;
    padding-left:20px;
};
& :nth-child(${({ active }) => active}) {
    background:rgba(0,0,0,0.09);
    cursor:pointer;
};
`

const SearchBarWrapper = styled.div`
display:flex;
// border-bottom:1px solid gray;
`

const Input = styled.input`
flex:1;
border:none;
outline:none;
`

const Wrapper = styled.div`
width:500px;
margin:auto;
background-color:white;
padding:7px;
border-radius:3px;
`;
