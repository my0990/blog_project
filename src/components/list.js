import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    border: 2px solid #eee;
    border-radius: 10px;
    max-width: 600px;
    box-sizing: border-box;
    padding: 30px;
    text-align: start;
    margin: 10px auto;
`

const TitleWrapper = styled.div`
    margin: 10px 0;
    font-weight: bold;
    font-size: 1.4em;
    font-family:  'BMJUA'
`

const ContentWrapper = styled.div`

    
`

function List(){
    return(
        <Container>
            <TitleWrapper>
                제안서
            </TitleWrapper>
            <ContentWrapper>
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
                어디 놀러가자
            </ContentWrapper>
        </Container>
    )
}

export default List;