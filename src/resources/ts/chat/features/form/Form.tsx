import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/reducer';
import { handleIsSending } from '../status/statusAction';

const ChatForm = styled.form`
  width: 100%;
  border-top: solid 1px #cbd1db;
  padding: 16px 16px 20px 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  box-sizing: border-box;
`;

const ChatText = styled.textarea`
  width: calc(100% - 80px - 10px);
  height: 45px;
  color: #394251;
  border: solid 1px #cbd1db;
  border-radius: 4px;
  padding: 8px;
  box-sizing: inherit;
  :focus-visible {
    border: solid 3px #77cbd6;
    outline: none;
  }
`;

const ChatButton = styled.button`
  width: 80px;
  height: 45px;
  color: #fff;
  border: none;
  border-radius: 25px;
  background: #28bf8f;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2px 2px 0;
`;

const ChatButtonImg = styled.img.attrs({
  alt: 'Send',
  src: '/svg/send.svg',
})`
  width: 30px;
  height: 30px;
`;

function Form() {
  // State
  const user = useSelector((state: RootState) => state.main.user);
  const [msg, setMsg] = useState('');

  // Actions
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMsg(event.target.value);
  const send = () => {
    if (msg !== '') {
      const post = { msg, user };
      dispatch(handleIsSending(true));
      axios.post(`/api/chat`, { ...post }).then(() => {
        setMsg('');
      });
    }
  };
  return (
    <ChatForm>
      <ChatText value={msg} onChange={handleChange} />
      <ChatButton type="button" onClick={send}>
        <ChatButtonImg />
      </ChatButton>
    </ChatForm>
  );
}

export default Form;
