import React from 'react';
import styled from 'styled-components';

const SendingBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  margin: 0 0 60px 0;
`;

const SendingColorSVG = styled.img.attrs({
  alt: 'Sending',
  src: '/svg/send-color.svg',
})``;

const SendingDotSVG = styled.img.attrs({
  alt: 'Sending',
  src: '/svg/three-dots.svg',
})``;

function Sending() {
  return (
    <SendingBox>
      <SendingColorSVG />
      <SendingDotSVG />
    </SendingBox>
  );
}

export default Sending;
