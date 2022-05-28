import { SigningCosmosClient } from "@cosmjs/launchpad";
import React from "react";
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
// const chainId = "osmosis";
// console.log(window.keplr.enable(chainId));

function Home() {
  const connectWallet = async () => {
    if (!window.keplr) {
      alert("Please install keplr extension");
    } else {
      const chainId = "cosmoshub-4";
      await window.keplr.enable(chainId);

      const offlineSigner = window.keplr.getOfflineSigner(chainId);
      const accounts = await offlineSigner.getAccounts();
      const cosmJS = new SigningCosmosClient(
        "https://lcd-cosmoshub.keplr.app",
        accounts[0].address,
        offlineSigner
      );
      console.log(cosmJS);
    }
  };

  return (
    <div>
      <Header>
        <Name>Wallet Name</Name>
        <Name></Name>
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
