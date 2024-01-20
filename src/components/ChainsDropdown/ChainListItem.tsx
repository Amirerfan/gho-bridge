import { W3bNumber } from '../../types/web3';

const ChainListItem = ({
  title,
  icon,
  buttonCallback,
  buttonTitle,
  isDisabled,
}: {
  title: string;
  icon: string;
  buttonCallback: () => void;
  buttonTitle: string;
  isDisabled: boolean;
}) => {
  return (
    <div className="flex justify-between items-center min-w-[350px]">
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className="w-6 h-6" />
        <span className="text-white">{title}</span>
      </div>
      <button
        className={`btn btn--small btn--secondary ${
          isDisabled ? 'btn--disabled' : ''
        } !min-w-24 text-white`}
        onClick={buttonCallback}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default ChainListItem;
