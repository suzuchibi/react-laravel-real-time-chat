import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './features/header/Header';
import Main from './features/main/components/Messages';
import Form from './features/form/Form';
import Loading from './features/status/components/Loading';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import { MessageItems as Items } from './features/main/types';
import { fetchDatas, fetchUser } from './features/main/actions/mainAction';
import { handleIsLoading } from './features/status/statusAction';
import { handleIsSending } from './features/status/statusAction';

const ChatSection = styled.section`
  width: 100%;
  height: 100vh;
  background: #f9fafc;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

declare global {
  interface Window {
    Echo: any;
  }
}

class App extends React.Component<cProps> {
  componentDidMount() {
    const { fetchDatas, fetchUser } = this.props;
    const { handleLoading, handleSending } = this.props;
    const element = document.getElementById('user') as HTMLInputElement;
    const cont = document.getElementById('cont') as HTMLElement;
    const user = element!.value;
    fetchUser(user);
    axios.get(`/api/chat`).then((res) => {
      fetchDatas(res.data);
      handleLoading(false);
      cont.scrollIntoView(false);
    });

    window.Echo.channel('react-laravel-chat').listen('ChatMessage', () => {
      axios.get(`/api/chat`).then((res) => {
        fetchDatas(res.data);
        handleSending(false);
        cont.scrollIntoView(false);
      });
    });
  }

  render() {
    return (
      <ChatSection>
        <Header />
        <Main />
        <Form />
        <Loading />
      </ChatSection>
    );
  }
}

// ConnectContainer
const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    fetchDatas(datas: Items) {
      dispatch(fetchDatas(datas));
    },
    fetchUser(user: string) {
      dispatch(fetchUser(user));
    },
    handleLoading(event: boolean) {
      dispatch(handleIsLoading(event));
    },
    handleSending(event: boolean) {
      dispatch(handleIsSending(event));
    },
  };
};

const connecter = connect(mapStateToProps, mapDispatchToProps);
type cProps = ConnectedProps<typeof connecter>;
export default connect(mapStateToProps, mapDispatchToProps)(App);
