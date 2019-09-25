
import styled, { css } from "styled-components";
function createCSS() {
    let styles = '';
  
    for (let i = 0; i <= 10; i ++) {
       styles += `
        .lt-${i}0 {
           left: ${i * 10}%;
         }
       `
    }
    return css`${styles}`;
  }

export const PlaceholderBarStyle = styled.div`
    @keyframes placeHolderShimmer {
        0% {
            background-position: -300px 0
        }
        100% {
            background-position: 300px 0
        }
    }
    width:100%;
    .mask-wrapper {
        background: #fff;
        .animated-background {
            animation-duration: 1s;
            animation-fill-mode: forwards;
            animation-iteration-count: infinite;
            animation-name: placeHolderShimmer;
            animation-timing-function: linear;
            background: #eee;
            background: linear-gradient(to right, #eee 8%, #dddddd 18%, #eee 33%);
            position: relative;
        }
    }
    ${createCSS()}
    .background-masker {
        background: #fff;
        position: absolute;
        &.w-10 {
            width: 10%;
            height: 100%;
        }
    }
`
