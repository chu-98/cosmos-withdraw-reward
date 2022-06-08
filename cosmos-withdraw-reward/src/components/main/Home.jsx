// // import { SigningCosmosClient } from "@cosmjs/launchpad";
// import { SigningStargateClient } from "@cosmjs/stargate";

// import React, { useState } from "react";
// import styled from "styled-components";
// import Claim from "./Claim";

// const Header = styled.div`
//   display: flex;
//   justify-content: flex-end;
//   margin: 25px 20px;
// `;
// const Container = styled.div``;
// const Name = styled.div`
//   font-size: 30px;
//   padding: 10px;
//   border: 2px solid #fff;
//   margin-right: 12px;
// `;
// const Paragraph = styled.p`
//   font-size: 20px;
//   margin: 0;
// `;
// const Connect = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 10px;
//   border: 2px solid #fff;
// `;
// const Btn = styled.button`
//   background: inherit;
//   border: none;
//   box-shadow: none;
//   border-radius: 0;
//   overflow: visible;
//   cursor: pointer;
//   font-size: 20px;
//   color: #fff;
// `;

// function Home() {
//   // const [alias, setAlias] = useState(null);
//   // const [address, setAddress] = useState(null);

//   const connectWallet = async () => {
//     if (!window.keplr) {
//       alert("Please install keplr extension");
//     } else {
//       const chainId = "osmosis-1";
//       await window.keplr.enable(chainId);

//       // const offlineSigner = window.keplr.getOfflineSigner(chainId);
//       // const rpcUrl = "";
//       // const cosmJSClient = await SigningStargateClient.connectWithSigner(
//       //   rpcUrl,
//       //   offlineSigner
//       // );
//       // console.log(cosmJSClient);

//       // async function get() {
//       //   return new Promise(function (resolve, reject) {
//       //     const getkey = window.keplr.getKey(chainId);
//       //     resolve(getkey);
//       //     reject();
//       //   });
//       // }
//       // get().then(function (resolveData) {
//       //   console.log(resolveData);
//       //   setAlias(resolveData.name);
//       //   setAddress(resolveData.bech32Address);
//       // });
//       // console.log(alias);
//     }
//   };

//   return (
//     <div>
//       <Header>
//         <Name>
//           Wallet Address : <Paragraph></Paragraph>
//         </Name>
//         <Name>
//           Address : <Paragraph></Paragraph>
//         </Name>
//         <Connect>
//           <Btn onClick={connectWallet}>Keplr Connect</Btn>
//         </Connect>
//       </Header>

//       <Container>
//         <Claim />
//       </Container>
//     </div>
//   );
// }

// export default Home;
