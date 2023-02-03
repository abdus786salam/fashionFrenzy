import { Search2Icon } from '@chakra-ui/icons'
import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useThrottle } from 'use-throttle'

const SearchBar = ({ queryHandler, suggestions }) => {
    const [input, setInput] = useState("")
    const [activeOption, setActiveOption] = useState(0)
    const scrollDiv = useRef()

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
        queryHandler(throttleText)
    }, [throttleText, queryHandler])
    console.log(throttleText)
    return (
        <Wrapper onKeyUp={handleActiveSuggestion}>
            <SearchBarWrapper>
            <Search2Icon color='gray' mt='1' mr='2' />
                <Input value={input} placeholder='Search for products, brands and more' onChange={(e) => setInput(e.target.value)} />
            </SearchBarWrapper>
            <SuggestionBox limit={5}
                suggestionLength={suggestions.length}
                active={activeOption}
                ref={scrollDiv}
            >
                {
                    suggestions.map((item, index) => {
                        return <div key={index} onMouseOver={() => setActiveOption(index + 1)}>{item}</div>
                    })
                }
            </SuggestionBox>
        </Wrapper>
    )
}

export default SearchBar

const SuggestionBox = styled.div`
// border:1px solid black;
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
