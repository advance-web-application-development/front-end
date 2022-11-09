import Styled from "styled-components";

const styled = Styled.div`

font-family: 'Roboto';
width: 100%;
    .homepage{
       margin-top: 111px;
    }
    
    .info {
        margin-top: 100px;
    }
    .text-oran {
        color: var(--fpt-color);
    }
    .mb-18 {
        margin-bottom: 18px;
    }
    .info-header {
        max-width: 442px;
        margin: 0 auto;
    }
    .info-header div:nth-child(1) {
        font-weight: 400;
        font-size: 1em;
    }
    .info-header div:nth-child(2) {
        margin-bottom: 53px;
        font-size: 3em;
        line-height: 56px;
        
        color: #000000;
        font-weight: 400;

    }
    .nav-header {
        @media screen and 
    }
    .info-header p{
        text-align: center;
        font-weight: 400;
        font-size: 1em;
    
    }
    .info-number {
        margin-right : 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 3.2em;
        color: var(--fpt-color);

    }
    .small{
        font-size: 1em;
    }
    .info-unit {
        color:#000;
    }
    .info-body .item-container {
        margin-top: 50px;
        width: fit-content;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        gap: 60px;
    }
    .info-body .item{
        position: relative;
        width: fit-content;
    }
    .info-bg {
        position: absolute;
        top: -60px;
        left: 31px;

        background: #f5f5f5;
        border-radius: 50px;
        width: 60px;
        height: 180px;
        transform: rotate(-135deg);
        z-index: -1;
        
    }
    .intro {
        margin: 140px auto 0 auto;
        text-align: left;
    
    }
    .intro .item {
        max-width: 452px;
        padding:20px;
        display: flex;
    flex-direction: column;
    justify-content: space-around;
    }
    .intro .item div:nth-child(1) {
        font-weight: 700;
            font-size: 1em;
    }
    .intro .item div:nth-child(2){
        margin-top: 6px;
        font-weight: 700;
        font-size: 3em;
    }
    .intro p {
        margin-top: 27px;
        font-weight: 400;
        font-size: 1em;
    }
    .intro .item-container {
        margin-left: auto;
        margin-right: auto;
        width:fit-content;
        display: flex;
        gap: 20px;
    }
    }
    .bg-gray{
        background: var(--gray);
    }
    .intro-img{
        width: 30px;
        height: 30px;
        background-size: cover;
    }
    .item.bg-gray .text-header {
        font-size: 1.25em !important;

    }
    .demo {
        margin-top: 20px;
        width: 70%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 40px;
    }
    .black {
        background-color: black;
        width: 100px;
        height: 100px;
    }
    .demo-img{
        width: 100%;
        height: auto;
        background-size: contain;
    }
    .demo-header {
        background-color: #fff;
        width:100%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        text-align: left;
    }
    .demo-header div:nth-child(1) {
        color: var(--fpt-color);
        font-weight: 400;
        font-size: 1em;
    }
    .demo-header div:nth-child(2)
    {
        font-weight: 400;
        font-size: 1.2em;
    }
    .demo-header div:nth-child(3)
    {
        border: 1px solid var(--fpt-color);
        text-align: center;
        height: 25%;
        text-align: center;
        font-weight: 400;
        font-size: 1.8em;
        width: 233px;
        color: var(--fpt-color);
        display: flex;
        align-items:center;
        justify-content: center;
    }
    .customer-header div:nth-child(1) {
        margin-bottom: 5px;
        font-weight: 400;
font-size: 1em;
    }
    .customer-header div:nth-child(2) {
        margin-bottom: 27px;
        font-weight: 700;
font-size: 3em;
    }
    .customer-header p{
        margin-bottom: 60px;
        font-weight: 400;
font-size: 1em;
    }
    .customer .item {
        background-color: #f6f6f6;
        border-radius: 5px;
        padding: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

    }

    }
    .customer-img {
        background-size: contain;
        width: auto;
        overflow: hidden;
        max-width: 100%;
    }
    .clear {
        clear: both;
    }
    .customer-icon-container{
        margin: 0 100px;
        margin-bottom: 30px;
    }
    .contact-button {
        width: fit-content;
        margin: 0 auto;
        max-width: 180px;
        height: 50px;
        padding: 0px 34px;
        text-align: center;
        background-color: var(--fpt-color);
        color: #fff;
        font-size: 18px;
        line-height: 50px;

    }
    .customer {
        margin-bottom: 35px;
    }
    .footer-contact{
        height: 370px;       
        background-color:#f6f6f6;
        width: 100%;
    }
    .footer-left{
        margin-top: auto;
        max-width: 442px;
    }
    .footer-left p {
        font-size: 1em;
        font-weight:400;
        margin-bottom: 5px;
    }
    .about-col div:nth-child(1){
        font-size: 1em;
        font-weight: bold;
    }
    .about-col div:nth-child(2){
        width: 100%;
        height: 1px;
        background-color: #ddd;
        margin: 5px 0px;
    }
    .about-col div:nth-child(3){
        font-size: 1em;
        font-weight:400;

    }
    .relative {
        poition: relative;
    }
    .footer-left{
        position: absolute;
        right: 0px;
        bottom: 30px;
    }
    .footer-location div {
        display: flex;
        gap: 1em;
    }
    .footer-right {
        position: absolute;
        left: 0px;
        bottom: 18px;
        margin-left: 27px;
    }
    .footer-text {
        font-size: 1em;
        font-weight: 400;
        font-family: 'Tahoma';
        max-width: 320px;
    }
    .contact-container div {
        display: flex;
        gap: 15px;
    }
    .contact-container div:nth-child(1) {
        font-size:16px;
        margin-bottom:30px;
        font-weight: 700;
    }
    [class^="footer"]
    {
        font-family: 'Tahoma';
    }
    .footer-social {
        height: 80px;
        width: 100%;
        background-color: var(--fpt-color);
        text-align: center;
        position: relative;
    }
    .footer-icon-container {
        display: flex;
        gap: 9px;
    }
    .footer-social-container {
        display: flex;
        height: 100%;
        text-align: center;
        position: absolute;
        right: 100px;
        top: 50%;
        transform: translateY(-24%);
    }
    .footer-social-container span {
        margin-right: 30px;
        font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 1em;
color: #fff;
text-transform: uppercase;
margin-top: 10px;
    }



`;
export default styled;
