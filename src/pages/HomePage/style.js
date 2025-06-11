import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WarpperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 25px;
    justify-content: flex-start;
    border-bottom: 1px solid red;
    height: 44px;
`


export const WrapperButtonMore = styled(ButtonComponent)`
        &:hover{
            color: #fff;
            background: rgb(13,92,182);
            span {
                color: #fff;
            }
        },
`


export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`
