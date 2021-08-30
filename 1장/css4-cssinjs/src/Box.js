import React from 'react';
import styled from 'styled-components';

const BoxCommon = styled.div`
    height: 50px;
    background-color: #aaaaaa;
`;

const Boxbig = styled(BoxCommon)`
    width: 200px;
`;

const BoxSmall = styled(BoxCommon)`
    width: 100px;
`;

export default function Box({ size }) {
    if (size === 'big') {
        return <Boxbig>큰 박스</Boxbig>;
    } else {
        return <BoxSmall>작은 박스</BoxSmall>
    }
}