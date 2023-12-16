import styled from 'styled-components';

const StyledDiv = styled.div`
    color: purple;
    font-size: 22px;
`;

const MyComponent = () => {
    return (
        <StyledDiv>
            Hello, World!
        </StyledDiv>
    );
};

export default MyComponent;
