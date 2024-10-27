import styled from 'styled-components';

export const StyledLink = styled.a<{ fontColor: string, opacity?: string }>`
    color: ${(props) => props.fontColor};
    text-decoration: none;
    opacity: ${(props) => props.opacity || '100%'};
    cursor: pointer;
`;
