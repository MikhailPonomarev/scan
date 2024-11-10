import styled from 'styled-components';

export const StyledLink = styled.a<{ $fontColor: string; $fontSize: string; $textDecoration: any }>`
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$fontColor};
    text-decoration: ${(props) => props.$textDecoration || 'none'};
    cursor: pointer;
`;
