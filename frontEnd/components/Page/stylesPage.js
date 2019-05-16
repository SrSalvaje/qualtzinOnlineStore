import styled from 'styled-components';

const StyledMainDiv = styled.div`
    background: white;
    color: ${props => props.theme.black};
`;

const StyledInnerDiv = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

export { StyledMainDiv, StyledInnerDiv };
