import React, { useState } from "react";
import styled from "styled-components";

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 25px 40px;
`;
const Alias = styled.div`
  display: flex;
  align-items: center;
  font-size: 30px;
  padding: 10px;
  border: 3px solid #fff;
  margin-right: 12px;
  :hover {
    color: #212121;
    background-color: #fff;
  }
`;
const Pg = styled.p`
  margin-left: 10px;
  font-size: 20px;
`;
const Btn = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  overflow: visible;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
  :hover {
    color: #212121;
    background-color: #fff;
  }
`;
const Container = styled.div``;

function Test() {
  const [alias, setAlias] = useState(null);

  const connectWallet = async () => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "osmosis-1";
      await window.keplr.enable(chainId);

      async function get() {
        return new Promise(function (resolve, reject) {
          const getkey = window.keplr.getKey(chainId);
          resolve(getkey);
          reject();
        });
      }
      get().then(function (resolveData) {
        console.log(resolveData);
        setAlias(resolveData.name);
      });
    }
    console.log(alias);
  };
  return (
    <div>
      <Header>
        <Alias>
          Alias: <Pg>{alias}</Pg>
        </Alias>
        <Btn onClick={connectWallet}>Keplr Connect</Btn>

        <Container></Container>
      </Header>
    </div>
  );
}

export default Test;
