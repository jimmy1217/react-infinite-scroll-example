import styled from "styled-components";

export const SearchBarStyle = styled.div`
padding:20px;
height:30px;
position:fixed;
width: calc(100% - 40px);
background-color: #6a8ea7;
top:0;
z-index:1;
input {
    background-color:transparent;
    color:#fff;
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