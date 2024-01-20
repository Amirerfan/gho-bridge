import InputAmount from '../components/InputAmount';
import OutputAmount from '../components/OutputAmount';
import { usePoolContext } from '../contexts/PoolContext';
import { w3bNumberFromBigint, w3bNumberFromString } from '../utils/web3';
import { useCallback, useState } from 'react';
import { SupportedChainId } from '../constants/chains';
import { useAaveVariableDebtContext } from '../contexts/AaveVariableDebtContext';
import { useNetwork, useSwitchNetwork } from 'wagmi';
import useGHOBoxContract from '../hooks/useGHOBoxContract';

const Borrow = () => {
  const { poolDataSepolia, poolDataMumbai } = usePoolContext();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();

  const { delegateSepolia, delegateMumbai, approveDelegation } =
    useAaveVariableDebtContext();

  const [sepoliaAmount, setSepoliaAmount] = useState<string>('');
  const [mumbaiAmount, setMumbaiAmount] = useState<string>('');
  const [selectedChain, setSelectedChain] = useState<SupportedChainId>(
    SupportedChainId.SEPOLIA,
  );

  const { requestBorrow } = useGHOBoxContract({
    mumbaiAmount: w3bNumberFromString(mumbaiAmount),
    sepoliaAmount: w3bNumberFromString(sepoliaAmount),
  });

  return (
    <div className="borrow-page gap-1 flex flex-col">
      <div className="borrow-header mb-12">
        <p className="text-white text-2xl font-bold flex gap-1 items-center">
          Borrow
          <img
            className="w-7 ml-2 mt-0.5"
            src="https://app.aave.com/icons/tokens/gho.svg"
            alt=""
          />
          GHO
        </p>
      </div>

      <section className="card">
        <div className="flex justify-between w-full mb-7 gap-5">
          {poolDataSepolia && poolDataMumbai && (
            <>
              <InputAmount
                max={w3bNumberFromBigint(poolDataSepolia[2], 8)}
                title="Sepolia"
                icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
                value={sepoliaAmount}
                setValue={setSepoliaAmount}
              />
              <InputAmount
                max={w3bNumberFromBigint(poolDataMumbai[2], 8)}
                title="Mumbai"
                icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
                value={mumbaiAmount}
                setValue={setMumbaiAmount}
              />
            </>
          )}
        </div>
        <img
          className="mx-auto mb-7"
          src="/assets/images/merge-icon.svg"
          alt=""
        />
        <div className="flex items-center justify-center mb-8">
          <OutputAmount
            selectedChain={selectedChain}
            setSelectedChain={setSelectedChain}
            value={
              Number(sepoliaAmount) + Number(mumbaiAmount) > 0
                ? '$' +
                  (Number(sepoliaAmount) + Number(mumbaiAmount)).toString()
                : ''
            }
          />
        </div>
        {selectedChain === SupportedChainId.MUMBAI &&
          (sepoliaAmount !== '' &&
          delegateSepolia &&
          delegateSepolia?.big < BigInt(10 ** 10) ? (
            chain?.id !== SupportedChainId.SEPOLIA ? (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() => {
                    switchNetwork?.(SupportedChainId.SEPOLIA);
                  }}
                >
                  Switch Network & Delegate
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() =>
                    approveDelegation({ chainID: SupportedChainId.SEPOLIA })
                  }
                >
                  Delegate
                </button>
              </div>
            )
          ) : mumbaiAmount != '' &&
            delegateMumbai &&
            delegateMumbai?.big < BigInt(10 ** 10) ? (
            chain?.id !== SupportedChainId.MUMBAI ? (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() => {
                    switchNetwork?.(SupportedChainId.MUMBAI);
                  }}
                >
                  Switch Network & Delegate
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() =>
                    approveDelegation({ chainID: SupportedChainId.MUMBAI })
                  }
                >
                  Delegate
                </button>
              </div>
            )
          ) : chain?.id === selectedChain ? (
            <div className="w-full flex justify-end">
              <button
                className="btn btn--large flex gap-1"
                onClick={() => requestBorrow(selectedChain)}
              >
                Borrow
                <img
                  className="w-6 ml-2 mt-0.5"
                  src="https://app.aave.com/icons/tokens/gho.svg"
                  alt=""
                />
                GHO
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-end">
              <button
                className="btn btn--large flex gap-1"
                onClick={() => {
                  switchNetwork?.(selectedChain);
                }}
              >
                Switch Network
              </button>
            </div>
          ))}

        {selectedChain === SupportedChainId.SEPOLIA &&
          (mumbaiAmount !== '' &&
          delegateMumbai &&
          delegateMumbai?.big < BigInt(10 ** 10) ? (
            chain?.id !== SupportedChainId.MUMBAI ? (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() => {
                    switchNetwork?.(SupportedChainId.MUMBAI);
                  }}
                >
                  Switch Network & Delegate
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() =>
                    approveDelegation({ chainID: SupportedChainId.MUMBAI })
                  }
                >
                  Delegate
                </button>
              </div>
            )
          ) : sepoliaAmount != '' &&
            delegateSepolia &&
            delegateSepolia?.big < BigInt(10 ** 10) ? (
            chain?.id !== SupportedChainId.SEPOLIA ? (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() => {
                    switchNetwork?.(SupportedChainId.SEPOLIA);
                  }}
                >
                  Switch Network & Delegate
                </button>
              </div>
            ) : (
              <div className="w-full flex justify-end">
                <button
                  className="btn btn--large flex gap-1"
                  onClick={() =>
                    approveDelegation({ chainID: SupportedChainId.SEPOLIA })
                  }
                >
                  Delegate
                </button>
              </div>
            )
          ) : chain?.id === selectedChain ? (
            <div className="w-full flex justify-end">
              <button
                className="btn btn--large flex gap-1"
                onClick={() => requestBorrow(selectedChain)}
              >
                Borrow
                <img
                  className="w-6 ml-2 mt-0.5"
                  src="https://app.aave.com/icons/tokens/gho.svg"
                  alt=""
                />
                GHO
              </button>
            </div>
          ) : (
            <div className="w-full flex justify-end">
              <button
                className="btn btn--large flex gap-1"
                onClick={() => {
                  switchNetwork?.(selectedChain);
                }}
              >
                Switch Network
              </button>
            </div>
          ))}
      </section>
    </div>
  );
};

export default Borrow;
