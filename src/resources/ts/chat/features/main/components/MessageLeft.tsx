import React from 'react';
import styled from 'styled-components';
import { MessageLeftProps as PropsTypes } from '../types';

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
`;

const MsgIcon = styled.div`
  width: 24px;
  height: 24px;
  display: block;
`;

const MsgIconImg = styled.img.attrs({
  alt: 'user',
  src: '/svg/user.svg',
})`
  width: 24px;
  height: 24px;
  display: block;
`;

const MsgBox = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;

const MsgBoxProfile = styled.div`
  width: 100%;
  font-size: 13px;
`;

const MsgBoxComent = styled.div`
  width: 100%;
  padding: 16px;
  border: solid 1px #cbd1db;
  border-radius: 16px;
  border-top-left-radius: 0;
  background: #fff;
`;

const MsgTime = styled.div`
  align-self: flex-end;
`;

function MessageLeft(props: PropsTypes) {
  const { uname, prevUser, nextUser, coment, time } = props;
  const flag =
    prevUser === null || (prevUser !== null && prevUser !== uname)
      ? true
      : false;
  const bottom =
    nextUser === null || (nextUser !== null && nextUser !== uname) ? 40 : 10;
  return (
    <Msg marginBottom={bottom}>
      {flag ? (
        <MsgIcon>
          <MsgIconImg />
        </MsgIcon>
      ) : (
        <MsgIcon />
      )}
      <MsgBox>
        {flag ? <MsgBoxProfile>{uname} さん</MsgBoxProfile> : ''}
        <MsgBoxComent>{coment}</MsgBoxComent>
      </MsgBox>
      <MsgTime>{time}</MsgTime>
    </Msg>
  );
}
export default MessageLeft;
