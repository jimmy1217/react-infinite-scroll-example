import styled from "styled-components";

export const ListStyle = styled.div`
    padding:70px 20px 0 20px;
    color:#666;
    overflow:hidden;
    .listItem {
        height:5rem;
        display:flex;
        align-items:center;
        transition: all .2s ease-in;
        transform:scale(1);
        will-change: transform, opacity, padding;
        @media (max-width: 769px) {
            display:block;
            padding:10px 0 0 0;
            line-height:20px;
        }
        &:hover {
            transform:scale(1.05);
            box-shadow:0 1px 3px 0px #ddd;
            padding:0 0 0 10px;
            .lang{
                opacity:1;
                transform:translate3d(0,0,0);
            }
        }
        a {
            text-decoration:none;
            color:#6a8ea7;
        }
    }

    .lang {
        margin-left:20px;
        transition: all .3s ease;
        color:#ff9e9e;
        font-weight:900;
        flex:1;
        transform:translate3d(20px,0,0);
        opacity:0;
        @media (max-width: 769px) {
            margin-left:0;
        }
    }
`