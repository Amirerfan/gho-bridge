import { FadeIn } from '../../animations';
import { w3bNumberFromBigint } from '../../utils/web3';
import ChainListItem from './ChainListItem';

const Dropdown = () => {
  return (
    <FadeIn
      duration={0.1}
      delay={0.1}
      className="chains-dropdown absolute top-[120%] left-0 px-4 py-3 bg-gradient-to-r from-primary-light-2 to-primary rounded-2xl drop-shadow-lg flex flex-col gap-3"
    >
      <ChainListItem
        icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/70fb0697-72bf-4232-ed91-1c088911c800/public"
        title="Ethereum Sepolia"
        delegateAmount={w3bNumberFromBigint(BigInt(0))}
      />
      <ChainListItem
        icon="https://imagedelivery.net/XQ6LDks1pWNDtTDAw7o9nA/1f9a04e7-bf43-476d-4705-506297e2de00/public"
        title="Polygon Mumbai"
        delegateAmount={w3bNumberFromBigint(BigInt(10 ** 40))}
      />
    </FadeIn>
  );
};

export default Dropdown;
