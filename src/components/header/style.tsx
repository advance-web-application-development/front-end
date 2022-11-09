import Styled from "styled-components";

const styled = Styled.div`
    position: fixed;
    width: 100%;
    height: 111px;
    top:0px;
    left: 0px;
    background-color: #000;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 2.2em;
    z-index: 1000;
    a{
        color: #fff;
    }
    .nav-header{
        display: flex;
        flex-direction: row ;
        justify-content: space-between;
        margin-left: auto;
        text-align: right;
        width: fit-content;
        gap: 88px;
        margin-right: 20px;
    }
    .img-search {
        margin-bottom: 10px;
    }

`;
export default styled;
