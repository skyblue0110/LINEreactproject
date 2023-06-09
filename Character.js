import React, { useContext } from 'react';
import styled from 'styled-components';
import products from '../components/doctors.json'
import { AirContext } from '../context/AirContext'

const CharacterSection = styled.div`
    border-top:87px solid green;
`

const ContentBlock = styled.div`
    display:flex; flex-wrap:wrap;
    justify-content:space-between;
    .character { width:45%; margin:20px 0; display:flex;     
              align-items:center;  
         img { width:100px; margin-right:20px; }
         .info { span { display:block } }
    }
 }
`

const tabTit = [
    {id:0, title:'라인프렌즈', category:products.part1 },
    {id:1, title:'BT21', category:products.part2 },
    {id:2, title:'브롤스타즈', category:products.part3 },
    {id:3, title:'TRUZ', category:products.part4 },
    {id:4, title:'minini', category:products.part5 }
]

const Character = () => {

    const {active } = useContext(AirContext)

    return (
        <CharacterSection>
            <div className="row">
                <ContentBlock>
                    {
                        tabTit[active].category.map((data, index)=>(
                            <div className="character" key={index}>
                                <img src={data.photo} alt={data.name} />
                                <div className="info">
                                    <strong>{data.name}</strong>
                                    <span>{data.depart}</span>
                                    <p>{data.about}</p>
                                </div>
                            </div>
                        ))
                    }
                </ContentBlock>
            </div>
        </CharacterSection>
    );
};

export default Character;