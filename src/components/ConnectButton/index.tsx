import { ConnectKitButton } from 'connectkit';
//
// import styled from "styled-components";
// const StyledButton = styled.button`
//   cursor: pointer;
//   position: relative;
//   display: inline-block;
//   padding: 14px 24px;
//   color: #ffffff;
//   background: #1a88f8;
//   font-size: 16px;
//   font-weight: 500;
//   border-radius: 10rem;
//   box-shadow: 0 4px 24px -6px #1a88f8;
//
//   transition: 200ms ease;
//   &:hover {
//     transform: translateY(-6px);
//     box-shadow: 0 6px 40px -6px #1a88f8;
//   }
//   &:active {
//     transform: translateY(-3px);
//     box-shadow: 0 6px 32px -6px #1a88f8;
//   }
// `;

export const ConnectButton = () => {
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, truncatedAddress, ensName }) => {
        return (
          <button
            onClick={show}
            className="cursor-pointer relative inline-block px-6 py-2.5 text-white bg-gradient-to-r from-primary-light-3 to-primary font-medium rounded-3xl drop-shadow-lg"
          >
            {isConnected ? ensName ?? truncatedAddress : 'Connect Wallet'}
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
};
