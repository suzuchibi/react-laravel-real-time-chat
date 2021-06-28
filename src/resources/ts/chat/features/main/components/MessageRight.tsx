import React from 'react';
import styled from 'styled-components';
import { MessageRightProps as PropsTypes } from '../types';

interface MsgProps {
  marginBottom: number;
}

const Msg = styled.div.attrs((props: MsgProps) => ({
  style: {
    margin: `0 0 ${props.marginBottom}px 0`,
  },
}))<MsgProps>`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
`;

const MsgBoxComent = styled.div`
  max-width: 450px;
  color: #fff;
  margin: 0 0 0 8px;
  padding: 16px;
  border: none;
  border-radius: 16px;
  border-top-right-radius: 0;
  background: #46c8dc;
`;

const MsgTime = styled.div`
  align-self: flex-end;
`;

function MessageRight(props: PropsTypes) {
  const { uname, nextUser, coment, time } = props;
  const bottom =
    nextUser === null || (nextUser !== null && nextUser !== uname) ? 24 : 10;
  return (
    <Msg marginBottom={bottom}>
      <MsgBoxComent>{coment}</MsgBoxComent>
      <MsgTime>{time}</MsgTime>
    </Msg>
  );
}
export default MessageRight;
