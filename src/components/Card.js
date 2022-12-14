import styled from "styled-components";

const StyledCard = styled.div`
    min-width: 30%;
    display: flex;
    flex-direction: column;
    background-color: red;
    height: 400px;
    flex:1;
    justify-content: end;
    text-align: center;
    box-shadow: 4px 4px 4px 4px rgba(255, 255, 255, 0.2);
    transition: .6s ease-in-out;
    &:hover{
        transform:scale(1.05);
    }

    h3 {
        background-color: white;
        padding: 0.5rem;
        color: black;
    }

    .buttonsContainer {
        display: flex; 
    }

    .link {
        width: 100%;
        background-color: white;
        color: black;
    } 
    & .link:hover {
        background-color: green;
    }
`
export default function Card({children}) {
    return(
        <StyledCard>
            {children}
        </StyledCard>
    )
}