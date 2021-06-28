import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import MessageLeft from './MessageLeft';
import MessageRight from './MessageRight';
import Sending from '../../status/components/Sending';
import { Message } from '../types';
import { RootState } from '../../../app/reducer';

const ChatMain = styled.main`
  padding: 16px 16px 0 16px;
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
  overflow-y: auto;
`;

const ChatCont = styled.div.attrs({
  id: 'cont',
})`
  width: 100%;
  height: auto;
  padding: 0 0 1px 0;
`;

function Messages() {
  const { datas, user } = useSelector((state: RootState) => state.main);
  const isSending = useSelector((state: RootState) => state.status.isSending);
  const count = Number(datas.length) - 1;

  useEffect(() => {
    if (isSending) {
      const cont = document.getElementById('cont') as HTMLElement;
      cont.scrollIntoView(false);
    }
  }, [isSending]);
  return (
    <ChatMain>
      <ChatCont>
        {datas.map((v: Message, i: number) => {
          const prevUser = i === 0 ? null : datas[i - 1].uname;
          const nextUser = i === count ? null : datas[i + 1].uname;
          return v.uname !== user ? (
            <MessageLeft
              uname={v.uname}
              prevUser={prevUser}
              nextUser={nextUser}
              coment={v.msg}
              time={v.time}
              key={i}
            />
          ) : (
            <MessageRight
              uname={v.uname}
              nextUser={nextUser}
              coment={v.msg}
              time={v.time}
              key={i}
            />
          );
        })}
        {isSending ? <Sending /> : ''}
      </ChatCont>
    </ChatMain>
  );
}

export default Messages;
