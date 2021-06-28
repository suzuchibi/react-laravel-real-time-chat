import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../app/reducer';

const ChatHeader = styled.header`
  color: #fff;
  background: #46c8dc;
  padding: 8px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 0px 10px #22a3b5;
`;

const ChatHeaderTitle = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

const ChatHeaderTitleIcon = styled.img.attrs({
  alt: 'chat',
  src: '/svg/chat.svg',
})`
  width: 25px;
  height: 25px;
  margin: 0 4px 0 0;
`;

const ChatHeaderTitleText = styled.span`
  letter-spacing: 0.6px;
`;

const ChatHeaderOption = styled.span`
  display: flex;
  align-items: center;
`;

const ChatHeaderOptionUser = styled.span`
  margin: 0 4px 0 0;
`;

const ChatHeaderOptionUserTitle = styled.span`
  font-size: 12px;
  margin: 0 0 0 4px;
`;

const ChatHeaderOptionLogout = styled.button`
  border: none;
  border-radius: 20px;
  background: #299baa;
  padding: 5px;
`;

const ChatHeaderOptionLogoutImg = styled.img.attrs({
  alt: 'LogOut',
  src: '/svg/logout.svg',
})`
  width: 16px;
  height: 16px;
  display: block;
`;

function Header() {
  const user = useSelector((state: RootState) => state.main.user);
  const logout = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const form = document.getElementById('logout-form') as HTMLFormElement;
    form!.submit();
  };
  return (
    <ChatHeader>
      <ChatHeaderTitle>
        <ChatHeaderTitleIcon />
        <ChatHeaderTitleText>React Laravel Chat Sample</ChatHeaderTitleText>
      </ChatHeaderTitle>
      <ChatHeaderOption>
        <ChatHeaderOptionUser>
          {user}
          <ChatHeaderOptionUserTitle>さん</ChatHeaderOptionUserTitle>
        </ChatHeaderOptionUser>
        <ChatHeaderOptionLogout type="button" onClick={logout}>
          <ChatHeaderOptionLogoutImg />
        </ChatHeaderOptionLogout>
      </ChatHeaderOption>
    </ChatHeader>
  );
}

export default Header;
