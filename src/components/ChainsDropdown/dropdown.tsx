import { FadeIn } from '../../animations';
import { w3bNumberFromBigint } from '../../utils/web3';
import ChainListItem from './ChainListItem';
import { useAaveVariableDebtContext } from '../../contexts/AaveVariableDebtContext';
import { SupportedChainId } from '../../constants/chains';
import { useNetwork, useSwitchNetwork } from 'wagmi';

const Dropdown = () => {
  const { delegateSepolia, delegateMumbai, approveDelegation } =
    useAaveVariableDebtContext();

  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  return (
    <FadeIn
      duration={0.1}
      delay={0.1}
      className="chains-dropdown absolute top-[120%] left-0 px-4 py-3 bg-gradient-to-r from-primary-light-2 to-primary rounded-2xl drop-shadow-lg flex flex-col gap-3"
    >
      <ChainListItem
        icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
        title="Ethereum Sepolia"
        buttonCallback={() =>
          delegateSepolia && delegateSepolia?.big > BigInt(10 ** 30)
            ? () => {}
            : chain?.id === SupportedChainId.SEPOLIA
            ? approveDelegation({ chainID: SupportedChainId.SEPOLIA })
            : switchNetwork?.(SupportedChainId.SEPOLIA)
        }
        buttonTitle={
          delegateSepolia && delegateSepolia?.big > BigInt(10 ** 30)
            ? 'Delegated'
            : chain?.id === SupportedChainId.SEPOLIA
            ? 'Delegate'
            : 'Switch Network'
        }
        isDisabled={
          !!(delegateSepolia && delegateSepolia?.big > BigInt(10 ** 30))
        }
      />
      <ChainListItem
        icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
        title="Polygon Mumbai"
        buttonCallback={() =>
          delegateMumbai && delegateMumbai?.big > BigInt(10 ** 30)
            ? () => {}
            : chain?.id === SupportedChainId.MUMBAI
            ? approveDelegation({ chainID: SupportedChainId.MUMBAI })
            : switchNetwork?.(SupportedChainId.MUMBAI)
        }
        buttonTitle={
          delegateMumbai && delegateMumbai?.big > BigInt(10 ** 30)
            ? 'Delegated'
            : chain?.id === SupportedChainId.MUMBAI
            ? 'Delegate'
            : 'Switch Network'
        }
        isDisabled={
          !!(delegateMumbai && delegateMumbai?.big > BigInt(10 ** 30))
        }
      />
    </FadeIn>
  );
};

export default Dropdown;
