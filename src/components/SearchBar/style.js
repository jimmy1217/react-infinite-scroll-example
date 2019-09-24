import styled from "styled-components";

export const SearchBarStyle = styled.div`
padding:20px;
input {
    width:100%;
    height:30px;
    line-height:30px;
    border:none;
    border-bottom:1px solid #ddd;
    &:focus {
        outline:none;
    }
}
`