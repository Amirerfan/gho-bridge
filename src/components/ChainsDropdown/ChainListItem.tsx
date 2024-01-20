import { W3bNumber } from '../../types/web3';

const ChainListItem = ({
  title,
  delegateAmount,
  icon,
}: {
  title: string;
  delegateAmount: W3bNumber | null;
  icon: string;
}) => {
  return (
    <div className="flex justify-between items-center min-w-[350px]">
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className="w-6 h-6" />
        <span className="text-white">{title}</span>
      </div>
      {delegateAmount !== null &&
        (delegateAmount.dsp > 10 ** 10 ? (
          <button className="btn btn--small btn--secondary btn--disabled !min-w-24 text-white">
            Delegated
          </button>
        ) : (
          <button className="btn btn--small btn--secondary !min-w-24 text-white">
            Delegate
          </button>
        ))}
    </div>
  );
};

export default ChainListItem;
