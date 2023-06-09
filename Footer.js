import React from 'react';
import styled from 'styled-components'
const FooterBlock = styled.footer`
    background:#f2f2f2;
    padding:50px 0;
    margin-top:50px; 
    .row {
      span {
          &::after { content:'|' }
          &:last-child::after { display:none }
      }
    }
`;


const Footer = () => {
    return (
        <FooterBlock>
            <div className="">
                <img src="./images/icon_exclamation_mark_18x18_green.png" alt="" />
                <>반품 배송비, 반품 배송주소 등은 해당 상품 페이지 내 안내를 참고해주세요.
                아이피엑스 주식회사 1544-5921 인증 
                <img src="./images/text_report_101x23_gray.png" alt="" />
                판매자 개인정보 처리방침 판매자정보
                <img src="./images/icon_instagram_26x26_purple.cedfab80" alt="" />
                </>
            </div>
            <div className="row">
                <span>네이버 약관</span>
                <span>네이버페이 이용약관</span>
                <span>전자금융거래 이용약관</span>
                <span>개인정보처리방침</span>
                <span>책임의 한계와 법적고지</span>
                <span>청소년보호정책</span>
                <span>지식재산권신고센터</span>
                <span>안전거래 가이드</span>
                <span>쇼핑&페이 고객센터</span>
            </div>
        </FooterBlock>
    );
};

export default Footer;