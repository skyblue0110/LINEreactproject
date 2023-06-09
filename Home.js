import React, { useEffect } from 'react';
import styled from 'styled-components'
import Slider from 'react-slick'           // npm i react-slick
import 'slick-carousel/slick/slick.css'    // npm i -D slick-carousel 
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io';
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomeSectionBlock = styled.div`
    .article1 { position:relative;
        .slide {
            height:40vw; position:relative; 
            background-size:cover;
            background-position:center;
            &.slide1 { background-image:url('./images/main_pc_28629.jpg') };
            &.slide2 { background-image:url('./images/main_pc_28729.jpg') };
            &.slide3 { background-image:url('./images/PROMOTION_PC_01.jpg') };
            &.slide4 { background-image:url('./images/main_pc_28429.jpg') };
            &.slide5 { background-image:url('./images/main_pc_28329.jpg') };
            &.slide6 { background-image:url('./images/main_pc_28529.jpg') };
            &.slide7 { background-image:url('./images/main_pc_28129.jpg') };
            &.slide8 { background-image:url('./images/main_pc.jpg') };
            &.slide9 { background-image:url('./images/main_pc_28129 (1).jpg') };
            &.slide10 { background-image:url('./images/main_pc (1).jpg') };
            .text {
                position:absolute; top:40%; left:17%;
                // transform:translate(-50%, -50%);
                font-size:30px; color:#fff; 
                text-align:center;
            }
        }

        .slick-arrow {
            position:absolute; top:50%; transform:translateY(-50%); font-size:50px; color:#f00; 
            &.slick-prev { left:50px; z-index:9999 }
            &.slick-next { right:50px } 
         }
   
        .slick-dots { position:absolute; bottom:30px; left:50%; 
            transform:translate(-50%);
           li { display:inline-block; padding:0 5px; 
                button { width:15px; height:15px; border-radius:50%; background:#fff; text-indent:-9999px; overflow:hidden }
             &.slick-active { button { background:${props=>props.theme.btnBgColor} } }
           }
         }
    }

    // article2 시작
    .article2 { margin-bottom:50px;
        h2 { font-size:20px; margin:20px 0; }
        ul { display:flex; justify-content:space-between; 
            li { width: 32%; }
        }
        button {}
    }
    .article3 { margin-bottom:50px; 
        h2 { font-size:20px; margin:20px 0;  }
        ul { display:flex; justify-content:space-between; 
          li { width:32%; }
        }
    }
    .article4 { margin-bottom:50px; 
        h2 { font-size:20px; margin:20px 0;  }
        ul { display:flex; justify-content:space-between; 
          li { width:32%; }
        }
    }
    .article5 {
        background:#000; padding:100px 0; color:#fff; 
        .row { display:flex; justify-content:space-between; 
            img { border-radius:40px 40px 0 0 }
            p { background:#999; border-radius:0 0 40px 40px; padding:20px }
            .left { width:51% }
            .right { width:47%; 
                display:flex; flex-direction:column; justify-content:space-between;
                >div { height:49%; }
                .rrow1 { display:flex; justify-content:space-between; 
                    >div { width:48% }
                }
            }
        }
    }
    .article6 { margin-bottom:50px; 
        h2 { font-size:20px; margin:20px 0;  }
        ul { display:flex; justify-content:space-between; 
          li { width:32%; }
        }
    }
    .article7 { margin-bottom:50px; 
        h2 { font-size:20px; margin:20px 0;  }
        ul { display:flex; justify-content:space-between; 
          li { width:32%; }
        }
    }
    .article8 { margin-bottom:50px; 
        h2 { font-size:20px; margin:20px 0;  }
        ul { display:flex; justify-content:space-between; 
          li { width:32%; }
        }
    }
    .article9 { margin-bottom:50px; 
        h2 { font-size:20px; margin:20px 0;  }
        ul { display:flex; justify-content:space-between; 
          li { width:32%; }
        }
    }
    .article10 {
        height:40vw; position:relative;
        background-size:cover;
        background-position:center;
        backgroun-image:url('./images/bg_p.png')
        background:#000; padding:100px 0; color:#fff; 
        img { display:flex; justify-content:space-between; }
        ul {
            li {
                p {]}
            }
            p {}
        }
        button {
            img {}
        }
    }
`

const Home = () => {

    const settings = {
        dots : true,
        autoplay : true,
        autoplaySpeed : 3000,
        slidesToShow : 1,
        slidesToScroll : 1,
        prevArrow : <IoIosArrowDropleftCircle />,
        nextArrow : <IoIosArrowDroprightCircle />
    }

    useEffect(()=>{
        AOS.init({duration:500})
    }, [])

    return (
        <HomeSectionBlock>
            <div className="article1">
                <Slider {...settings}>
                    <div className="slide slide1">
                        <div className="text">
                            <p>늘 똑같은 공간도<br />
                                새로워질<br />
                                남다른 나의 하루!<br />
                                LINE FRIENDS Space Ware<br />
                                LHiDS & Cafflano
                            </p>
                        </div>
                    </div>
                    <div className="slide slide2">
                        <div className="text">
                            <p>No Limits,<br />
                                All Drift!<br />
                                KARTRIDER: DRIFT<br />
                                X LINE FRIENDS
                            </p>
                        </div>
                    </div>
                    <div className="slide slide3">
                    </div>
                    <div className="slide slide4">
                        <div className="text">
                            <p>레니니와<br />
                                떠나요<br />
                                lenini adventure
                            </p>
                        </div>
                    </div>
                    <div className="slide slide5">
                        <div className="text">
                            <p>이 행복을<br />
                                캔버스에<br />
                                LINE FRIENDS meets<br />
                                DRWING MARY
                            </p>
                        </div>
                    </div>
                    <div className="slide slide6">
                        <div className="text">
                            <p>미니니의<br />
                                나이트 루틴<br />
                                minini costume plush<br />
                                & pajama
                            </p>
                        </div>
                    </div>
                    <div className="slide slide7">
                        <div className="text">
                            <p>룸메이트<br />
                                공개 모집!<br />
                                mini minini's room
                            </p>
                        </div>
                    </div>
                    <div className="slide slide8">
                        <div className="text">
                            <p>모두의 꿈을 한 조각,<br />
                                한 조각씩<br />
                                TRUZ minini dream
                            </p>
                        </div>
                    </div>
                    <div className="slide slide9">
                        <div className="text">
                            <p>오늘 하루도<br />
                                운동 완료<br />
                                BT21 Sports club costume plush<br />
                                & Fashion
                            </p>
                        </div>
                    </div>
                    <div className="slide slide10">
                        <div className="text">
                            <p>또르르 레니니가<br />
                                눈을 뜹니다.<br />
                            </p>
                        </div>
                    </div>
                </Slider>
            </div>
            <div className="article2 row">
                <h2>주목할만한 소식</h2>
                <ul>
                    <li>
                        <img src="./images/01_img_eco.jpg" alt="" />
                        <strong>LINE FRIENDS ECO PROJECT</strong>
                        <p>지구를 위한 작은 발걸음, 라인프렌즈와 함께 시작해요!자연 그대로의 아름
                            다움을 추구하는 지속 가능한 라이프스타일 제품을 만나보세요.EVENT - 
                            온라인 스토어 : 6월 5일부터 6월 11일까지 전 상품 장바구니 할인 쿠폰 2..
                        </p>
                    </li>
                    <li>
                        <img src="./images/21.jpg" alt="" />
                        <strong>LINE FRIENDS Space Ware</strong>
                        <p>LINE FRIENDS Space Ware LHiDS & Cafflano 늘 똑같은 공간도 새로워
                            질 남다른 나의 하루!책상과 선반, 화장대 위 흩어진 물건들의 자리를 찾아
                            주고 산뜻한 커피 한 잔으로 시작하는 정돈된 일상을 경험해 보세요. 나를..
                        </p>
                    </li>
                    <li>
                        <img src="./images/37.jpg" alt="" />
                        <strong>KARTRIDER: DRIFT X LINE FRIENDS</strong>
                        <p>No Limits, Drift! KARTRIDER: DRIFT X LINE FRIENDS Special Edit
                            ion 손 끝에서 시작되는 우리의 레이스 현실 세계에서 만나는 레이서들의 압
                            도적인 존재감! 시선을 사로잡는 대형 인형부터 다양한 패션 아이템, 카트..
                        </p>
                    </li>
                </ul>
                <button>쇼핑 스토리 전체보기</button>
            </div>
            <div className="article3 row">
                <h2>새로 나왔어요</h2>
                <ul>
                    <li>
                        <img src="./images/라인프렌즈 카플라노 브라운 고브루 핸드드립 텀블러 (500ml).jpg" alt="" />
                        <strong>39,000원</strong>
                        <p>라인프렌즈 카프라노 브라운 고브루 핸드드립 텀블러 (500ml)</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 카트라이더 드리프트 바나나 대형 인형.jpg" alt="" />
                        <strong>79,000원</strong>
                        <p>라인프렌즈 카트라이더 드리프트 바나나 대형 인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 카트라이더 드리프트 배찌 대형 인형.jpg" alt="" />
                        <strong>79,000원</strong>
                        <p>라인프렌즈 카트라이더 드리프트 배찌 대형 인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 카트라이더 드리프트 다오 미니니 백참 인형.jpg" alt="" />
                        <strong>17,000원</strong>
                        <p>라인프렌즈 카트라이더 드리프트 다오 미니니 백참 인형</p>
                    </li>
                </ul>
                {/* slick-dot */}
            </div>
            <div className="article4 row">
                <h2>선물하기 좋은 제품</h2>
                <ul>
                    <li>
                        <img src="./images/아이폰 14 14PRO 라인프렌즈 브라운앤샐리 드로잉메리 투명 아이폰 케이스.jpg" alt="" />
                        <strong>17,000원</strong>
                        <p>아이폰 14/14PRO 라인프렌즈 브라운앤샐리 드로잉메리 투
                            명 아이폰 케이스
                        </p>
                    </li>
                    <li>
                        <img src="./images/아이폰 13 13PRO 라인프렌즈 브라운앤샐리 드로잉메리 옐로우 아이폰 케이스.jpg" alt="" />
                        <strong>18,000원</strong>
                        <p>아이폰 13/13PRO 라인프렌즈 브라운앤샐리 드로잉메리 옐
                            로우 아이폰 케이스
                        </p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 레니니 어드벤처 빅사이즈 마그넷 인형 미니니.jpg" alt="" />
                        <strong>20,000원</strong>
                        <p>라인프렌즈 레니니 어드벤처 빅사이즈 마그넷 인형 미니니</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 레니니 스탠딩 인형.jpg" alt="" />
                        <strong>17,000원</strong>
                        <p>라인프렌즈 미니니 레니니 스탠딩 인형</p>
                    </li>
                </ul>
                {/* slick-dot */}
            </div>
            <div className="article5">
                <div className="row">
                    <div className="left">
                        <img src="./images/.jpg" alt="" />
                    </div>
                    <div className="right">
                        <div className="rrow1">
                            <div>
                                <>님, 혜택 다운받고 쇼핑하세요!</>
                                <p>라인프렌즈 전 고객에게 드리는 혜택! 15,000원 장바구니 할인</p>
                                <button>쿠폰받기</button>
                            </div>
                        </div>
                    </div>
                    {/* slick-dot */}
                </div>
            </div>
            <div className="article6 row">
                <h2>생생한 리뷰</h2>
                <ul>
                    <li>
                        <img src="./images/라인프렌즈 레니니 그리니데이 코닥 펀세이버 플래쉬 일회용 필름카메라 미니니.jpg" alt="" />
                        <strong>라인프렌즈 레니니 그리니데이 코닥..</strong>
                        <p>귀엽고 만족합니다!! 배송도 빨라서 더 좋았어요 레니니관련 상품이 더 많이 출시됐으면 좋겠어요
                        </p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니 미니니 레니니의 방 인형&가구.jpg" alt="" />
                        <strong>라인프렌즈 미니 미니니 레니니의 방..</strong>
                        <p>최근 나온 레니니 굿즈 중에 디자인이 제일 잘 뽑힌 것 같아요!너무 귀엽네요..
                        </p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 스트로우 아이스 텀블러 (750ml).jpg" alt="" />
                        <strong>라인프렌즈 BT21 스트로우 아이스 텀..</strong>
                        <p>짱커요!ㅎ 한손에 다 안잡힐 정도네요. 약간 거대한 느낌.ㅋㅋ아이스아메리카노를 얼음 꽉 채워서 담아 마실 수 있을거 같아요.
                        </p>
                    </li>
                </ul>
                {/* slick-dot */}
            </div>
            <div className="article7">
                <h2>#특별함을 담아</h2>
                <div className="row">
                    <div className="left">
                        <img src="./images/연관상품 대표이미지.jpg" alt="" />
                    </div>
                    <div className="right">
                        <div className="rrow1">
                            <div>
                                <strong>BT21 미니니 포근해쿠션</strong>
                                <p>추운 겨울을 함께 할 따뜻한 꿀잠 친구가 찾아왔어요~이불 속에서 나가기 싫어~</p>
                                <img src="./images/라인프렌즈 BT21 KOYA 미니니 포근해 쿠션.jpg" alt="" />
                                <img src="./images/라인프렌즈 BT21 RJ 미니니 포근해 쿠션.jpg" alt="" />
                                <img src="./images/라인프렌즈 BT21 SHOOKY 미니니 포근해 쿠션.jpg" alt="" />
                                <img src="./images/라인프렌즈 BT21 CHIMMY 미니니 포근해 쿠션.jpg" alt="" />
                                <img src="./images/라인프렌즈 BT21 COOKY 미니니 포근해 쿠션.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    {/* slick-dot */}
                </div>
            </div>
            <div className="article8 row">
                <h2>카테고리 바로가기</h2>
                <ul>
                    <li>
                        <img src="./images/라인프렌즈.jpg" alt="라인프렌즈" />
                        <strong>라인프렌즈</strong>
                        <p></p>
                    </li>
                    <li>
                        <img src="./images/BT21.jpg" alt="BT21" />
                        <strong>BT21</strong>
                        <p></p>
                    </li>
                    <li>
                        <img src="./images/브롤스타즈.jpg" alt="브롤스타즈" />
                        <strong>브롤스타즈</strong>
                        <p></p>
                    </li>
                    <li>
                        <img src="./images/미니니.jpg" alt="미니니" />
                        <strong>미니니</strong>
                        <p></p>
                    </li>
                </ul>
            </div>
            <div className="article9 row">
                <h2>마음껏 둘러보세요</h2>
                <ul>
                    <li>
                        <img src="./images/라인프렌즈 레니니 어드벤처 연 날리기 키트 미니니.jpg" alt="라인프렌즈 레니니 어드벤처 연 날리기 키트 미니니" />
                        <strong>25,000원</strong>
                        <p>라인프렌즈 레니니 어드벤처 연 날리기 키트 미니니</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 레니니 어드벤처 5단 단우산 미니니.jpg" alt="라인프렌즈 레니니 어드벤처 5단 단우산 미니니" />
                        <strong>25,000원</strong>
                        <p>라인프렌즈 레니니 어드벤처 5단 단우산 미니니</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 브라운앤샐리 드로잉메리 스트로우 아이스 텀블러 (750ml).jpg" alt="라인프렌즈 브라운앤샐리 드로잉메리 스트로우 아이스 텀블러 (750ml)" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 브라운앤샐리 드로잉메리 스트로우 아이스 텀블러 (750ml)</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 브라운앤샐리 드로잉메리 아크릴 키링 (타입1).jpg" alt="라인프렌즈 브라운앤샐리 드로잉메리 아크릴 키링 (타입1)" />
                        <strong>10,000원</strong>
                        <p>라인프렌즈 브라운앤샐리 드로잉메리 아크릴 키링 (타임1)</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 브니니 코스튬 스탠딩 인형.jpg" alt="라인프렌즈 미니니 브니니 코스튬 스탠딩 인형" />
                        <strong>23,000원</strong>
                        <p>라인프렌즈 미니니 브니니 코스튬 스탠딩 인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 샐리니 코스튬 스탠딩 인형.jpg" alt="라인프렌즈 미니니 샐리니 코스튬 스탠딩 인형" />
                        <strong>23,000원</strong>
                        <p>라인프렌즈 미니니 샐리니 코스튬 스탠딩 인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 코스튬 클로젯 빨간 내복 세트.jpg" alt="라인프렌즈 미니니 코스튬 클로젯 빨간 내복 세트" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 미니니 코스튬 클로젯 빨간 내복 세트</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 코스튬 클로젯 수면 가운 세트.jpg" alt="라인프렌즈 미니니 코스튬 클로젯 수면 가운 세트" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 미니니 코스튬 클로젯 수면 가운 세트</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니 미니니 브니니의 방 인형&가구.jpg" alt="라인프렌즈 미니 미니니 브니니의 방 인형&가구" />
                        <strong>29,000원</strong>
                        <p>라인프렌즈 미니 미니니 브니니의 방 인형&가구</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니 미니니 레니니의 방 인형&가구.jpg" alt="라인프렌즈 미니 미니니 레니니의 방 인형&가구" />
                        <strong>29,000원</strong>
                        <p>라인프렌즈 미니 미니니 레니니의 방 인형&가구</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 클로젯 바시티자켓 03.jpg" alt="라인프렌즈 미니니 클로젯 바시티자켓 03" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 미니니 클로젯 바시티자켓 03</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 클로젯 졸업식 04.jpg" alt="라인프렌즈 미니니 클로젯 졸업식 04" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 미니니 클로젯 졸업식 04</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 스포츠클럽 테니스 볼캡.jpg" alt="라인프렌즈 BT21 스포츠클럽 테니스 볼캡" />
                        <strong>32,000원</strong>
                        <p>라인프렌즈 BT21 스포츠클럽 테니스 볼캡</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 스포츠클럽 러닝클럽 반팔 티셔츠 (S-L).jpg" alt="라인프렌즈 BT21 스포츠클럽 러닝클럽 반팔 티셔츠 (S-L)" />
                        <strong>32,000원</strong>
                        <p>라인프렌즈 BT21 스포츠클럽 러닝클럽 반팔 티셔츠 (S-L)</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 스포츠클럽 숄더백.jpg" alt="라인프렌즈 BT21 스포츠클럽 숄더백" />
                        <strong>42,000원</strong>
                        <p>라인프렌즈 BT21 스포츠클럽 숄더백</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 스트로우 아이스 텀블러 (750ml).jpg" alt="라인프렌즈 BT21 스트로우 아이스 텀블러 (750ml)" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 BT21 스트로우 아이스 텀블러 (750ml)</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 SHOOKY BABY 코스튬 스탠딩 인형.jpg" alt="라인프렌즈 BT21 SHOOKY BABY 코스튬 스탠딩 인형" />
                        <strong>23,000원</strong>
                        <p>라인프렌즈 BT21 SHOOKY BABY 코스튬 스탠딩 인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 CHIMMY BABY 코스튬 스탠딩 인형.jpg" alt="라인프렌즈 BT21 CHIMMY BABY 코스튬 스탠딩 인형" />
                        <strong>23,000원</strong>
                        <p>라인프렌즈 BT21 CHIMMY BABY 코스튬 스탠딩 인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 BABY 클로젯 골프 14.jpg" alt="라인프렌즈 BT21 BABY 클로젯 골프 14" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 BT21 BABY 클로젯 골프 14</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 BABY 클로젯 축구 15.jpg" alt="라인프렌즈 BT21 BABY 클로젯 축구 15" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 BT21 BABY 클로젯 축구 15</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 호랑이 스탠딩 인형.jpg" alt="라인프렌즈 BT21 호랑이 스탠딩 인형" />
                        <strong>30% 21,000원</strong>
                        <p>라인프렌즈 BT21 호랑이 스탠딩 인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 5주년 미니 하우스 피규어 세트.jpg" alt="라인프렌즈 BT21 5주년 미니 하우스 피규어 세트" />
                        <strong>10% 94,500원</strong>
                        <p>라인프렌즈 BT21 5주년 미니 하우스 피규어 세트</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 CHIMMY 미니니 사운드 피규어 키링.jpg" alt="라인프렌즈 BT21 CHIMMY 미니니 사운드 피규어 키링" />
                        <strong>20,000원</strong>
                        <p>라인프렌즈 BT21 CHIMMY 미니니 사운드 피규어 키링</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 RJ 미니니 사운드 피규어 키링.jpg" alt="라인프렌즈 BT21 RJ 미니니 사운드 피규어 키링" />
                        <strong>20,000원</strong>
                        <p>라인프렌즈 BT21 RJ 미니니 사운드 피규어 키링</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 TRUZ ROMY 미니니 미니인형.jpg" alt="라인프렌즈 TRUZ ROMY 미니니 미니인형" />
                        <strong>17,000원</strong>
                        <p>라인프렌즈 TRUZ ROMY 미니니 미니인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 TRUZ LAWOO 미니니 미니인형.jpg" alt="라인프렌즈 TRUZ LAWOO 미니니 미니인형" />
                        <strong>17,000원</strong>
                        <p>라인프렌즈 TRUZ LAWOO 미니니 미니인형</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 TRUZ ROMY 미니니 얼굴 인형 파우치.jpg" alt="라인프렌즈 TRUZ ROMY 미니니 얼굴 인형 파우치" />
                        <strong>16,000원</strong>
                        <p>라인프렌즈 TRUZ ROMY 미니니 얼굴 인형 파우치</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 TRUZ SOM 미니니 얼굴 인형 파우치.jpg" alt="라인프렌즈 TRUZ SOM 미니니 얼굴 인형 파우치" />
                        <strong>16,000원</strong>
                        <p>라인프렌즈 TRUZ SOM 미니니 얼굴 인형 파우치</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 카트라이더 드리프트 스피닝 메탈 키링.jpg" alt="라인프렌즈 카트라이더 드리프트 스피닝 메탈 키링" />
                        <strong>15,000원</strong>
                        <p>라인프렌즈 카트라이더 드리프트 스피닝 메탈 키링</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 카트라이더 드리프트 바나나 미니 미니니 키링.jpg" alt="라인프렌즈 카트라이더 드리프트 바나나 미니 미니니 키링" />
                        <strong>12,000원</strong>
                        <p>라인프렌즈 카트라이더 드리프트 바나나 미니 미니니 키링</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 카트라이더 드리프트 데스크 매트.jpg" alt="라인프렌즈 카트라이더 드리프트 데스크 매트" />
                        <strong>15,000원</strong>
                        <p>라인프렌즈 카트라이더 드리프트 데스크 매트</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 카트라이더 드리프트 핀뱃지 세트.jpg" alt="라인프렌즈 카트라이더 드리프트 핀뱃지 세트" />
                        <strong>25,000원</strong>
                        <p>라인프렌즈 카트라이더 드리프트 핀뱃지 세트</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 코롬방제과 통아몬드 크런치 쇼콜라.jpg" alt="라인프렌즈 코롬방제과 통아몬드 크런치 쇼콜라" />
                        <strong>27,000원</strong>
                        <p>라인프렌즈 코롬방제과 통아몬드 크런치 쇼콜라</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 미니니 코롬방제과 부드러운 밀크 쇼콜라.jpg" alt="라인프렌즈 미니니 코롬방제과 부드러운 밀크 쇼콜라" />
                        <strong>17,000원</strong>
                        <p>라인프렌즈 미니니 코롬방제과 부드러운 밀크 쇼콜라</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 미니니 퍼플 아이스 쿨넥밴드 (M).jpg" alt="라인프렌즈 BT21 미니니 퍼플 아이스 쿨넥밴드 (M)" />
                        <strong>21,900원</strong>
                        <p>라인프렌즈 BT21 미니니 퍼플 아이스 쿨넥밴드 (M)</p>
                    </li>
                    <li>
                        <img src="./images/라인프렌즈 BT21 미니니 블루 아이스 쿨넥밴드 (S).jpg" alt="라인프렌즈 BT21 미니니 블루 아이스 쿨넥밴드 (S)" />
                        <strong>21,900원</strong>
                        <p>라인프렌즈 BT21 미니니 블루 아이스 쿨넥밴드 (S)</p>
                    </li>
                </ul>
            </div>
            <div className="article10 row">
                <img src="./images/라인프렌즈 (1).png" alt="라인프렌즈 (1)" />
                <ul>
                    <li>
                        <p>끝없는 득템의 재미<br />
                            라인프렌즈 공식 브랜드스토어<br />
                            #라인프렌즈 #BT21 #브롤스타즈 #TRUZ #미니니
                        </p>
                    </li>
                    <p>관심고객수 282,932<img src="./images/icon_question_17x17_black.png" alt="" /></p>
                </ul>
                <button><img src="./images/icon_bell_plus_18x15_gray.png" alt="" />알림받기</button>
                <button><img src="./images/" alt="" /></button>
            </div>
        </HomeSectionBlock>
    );
};

export default Home;