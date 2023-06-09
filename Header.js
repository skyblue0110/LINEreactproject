import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaUserCircle } from 'react-icons/fa'
import styled from 'styled-components'
import cn from 'classnames'
import { AirContext } from '../context/AirContext'

const HeaderBlock = styled.header`
    padding:70px 0; 
    position:fixed; width:100%; top:0; left:0; z-index:99999; 
    .row { display:flex; justify-content:space-between; align-items:center; 
        nav { 
            @media ${props=>props.theme.tabletS}{
                display:none;
            }
            .depth1 {
            }
            .depth2 {
                >li {
                    h1 {
                        img{
                            font-size:16px; text-align:center;
                        }
                    }
                }
            }
            .depth3 { display:flex;
              >li { margin:0 17px; font-size:13px; position:relative; 
                    padding:10px 0; 
                  .depth4 { display:none; z-index:99999;
                    position:absolute; top:100%; left:50%; 
                    transform:translateX(-50%);
                    width:150px;
                    background:#fff; color:#000; border:1px solid #000;
                    padding:20px 0; border-radius:10px;
                    li { padding:5px 0; font-size:16px; text-align:center }
                  }
                  &:hover > .depth4 { display:block }
              }
            } 
        }
        .mobNav { position:relative; color:#000;
            
        }
    }
`
const Header = () => {

    // const [open, setOpen] = useState(false)

    const {setActive} = useContext(AirContext)

    const onSelect = (id)=>{
        setActive(id)
    }

    const [scy, setScy] = useState(0)
    const onScroll = ()=>{
        setScy(window.scrollY)
    }
    useEffect(()=>{
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])


    return (
        <HeaderBlock style={{ background: scy ? '#fff' : 'transparent', color:scy ? '#000' : '#fff'}}>
                <div className="row">
                    
                    <nav>
                        <ul className="depth1">
                            <li>
                                <img src="../images/text_naver_46x8_white.png" alt=""></img>
                                <img src="../images/text_shopping_66x15_white.png" alt=""></img>
                            </li>
                        </ul>
                        <ul className="depth2">
                            <li>
                                <button>
                                    <img src="../images/icon_bell_plus_20x20_white.png" alt="" >알림받기</img>
                                </button>
                                <p>관심고객수 282,953</p>
                                <h1>
                                    <Link to="/">
                                        <img src="../images/라인프렌즈 (1).png" alt=""></img>
                                    </Link>
                                </h1>
                                <button>검색어를 입력해보세요.<img src="icon_search_16x16_white.png" alt=""></img></button>
                            </li>
                        </ul>
                        <ul className="depth3">
                            <li><Link to="/best">BEST</Link></li>
                            <li><Link to="/catalog">재입고상품</Link></li>
                            <li><Link to="/new">NEW</Link></li>
                            <li><Link to="/catalog">월간선물</Link></li>
                            <li><Link to="/sale">SALE</Link></li>
                            <li><Link to="/character" onClick={ ()=>onSelect(0) }>캐릭터</Link>
                                <ul className="depth4">
                                    <li><Link to="/character" onClick={ ()=>onSelect(0) }>라인프렌즈</Link></li>
                                    <li><Link to="/character" onClick={ ()=>onSelect(1) }>BT21</Link></li>
                                    <li><Link to="/character" onClick={ ()=>onSelect(2) }>브롤스타즈</Link></li>
                                    <li><Link to="/character" onClick={ ()=>onSelect(3) }>TRUZ</Link></li>
                                    <li><Link to="/character" onClick={ ()=>onSelect(4) }>minini</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/brand" onClick={ ()=>onSelect(0) }>브랜드</Link>
                                <ul className="depth4">
                                    <li><Link to="/brand" onClick={ ()=>onSelect(0) }>COLLER</Link></li>
                                    <li><Link to="/brand" onClick={ ()=>onSelect(1) }>MINIONS</Link></li>
                                    <li><Link to="/brand" onClick={ ()=>onSelect(2) }>IPX ART COLLECT...</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/catalog" onClick={ ()=>onSelect(0) }>카테고리</Link>
                                <ul className="depth4">
                                    <li><Link to="/catalog" onClick={ ()=>onSelect(0) }>토이</Link></li>
                                    <li><Link to="/catalog" onClick={ ()=>onSelect(1) }>문구</Link></li>
                                    <li><Link to="/catalog" onClick={ ()=>onSelect(2) }>디지털</Link></li>
                                    <li><Link to="/catalog" onClick={ ()=>onSelect(3) }>의류</Link></li>
                                    <li><Link to="/catalog" onClick={ ()=>onSelect(4) }>패션잡화</Link></li>
                                    <li><Link to="/catalog" onClick={ ()=>onSelect(5) }>리빙&레저</Link></li>
                                    <li><Link to="/catalog" onClick={ ()=>onSelect(6) }>키즈</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/product">전체상품</Link></li>
                            <li><Link to="/qna">묻고답하기</Link></li>
                            <li><Link to="/notice">공지사항</Link></li>
                            <li><Link to="/review">리뷰이벤트</Link></li>
                            <li><Link to="/about">더보기</Link></li>
                        </ul>
                    </nav>
                    <div className="mobNav">
                        
                    </div>
                </div>
        </HeaderBlock>
    );
};

export default Header;