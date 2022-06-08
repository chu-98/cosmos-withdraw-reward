import { SigningCosmosClient } from "@cosmjs/launchpad";
// import { SigningStargateClient } from "@cosmjs/stargate";

import React, { useState } from "react";
import styled from "styled-components";
import Claim from "./Claim";

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 25px 20px;
  font-size: 30px;
`;
const Container = styled.div``;
const Name = styled.div`
  padding: 10px;
  border: 2px solid #fff;
  margin-right: 12px;
`;
const Connect = styled.div`
  padding: 10px;
  border: 2px solid #fff;
`;
const Btn = styled.button`
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: visible;
  cursor: pointer;
  font-size: 30px;
  color: #fff;
`;

function Home() {
  const [alias, setAlias] = useState(null);
  const connectWallet = async () => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "cosmoshub-4";
      await window.keplr.enable(chainId);

      const offlineSigner = window.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const cosmJS = new SigningCosmosClient(
        "https://lcd-cosmoshub.keplr.app",
        accounts[0].address,
        offlineSigner
      );
      console.log(cosmJS);
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
  };
  console.log(alias);

  return (
    <div>
      <Header>
        <Name>Wallet Name</Name>
        <Name>Address : {alias}</Name>
        <Connect>
          <Btn onClick={connectWallet}>Keplr Connect</Btn>
        </Connect>
      </Header>

      <Container>
        <Claim />
        <Claim />
        <Claim />
        <Claim />
      </Container>
    </div>
  );
}

export default Home;
