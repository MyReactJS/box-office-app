import React from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subttile }) => {
    return (
        <TitleWrapper>
            <h1> {title} </h1>
            <p> {subttile} </p>
        </TitleWrapper>
        );

}
export default Title;