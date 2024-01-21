import { W3bNumber } from '../../types/web3';

const ChainListItem = ({
  title,
  icon,
  buttonCallback,
  buttonTitle,
  isDisabled,
  isLoading,
}: {
  title: string;
  icon: string;
  buttonCallback: () => void;
  buttonTitle: string;
  isDisabled: boolean;
  isLoading?: boolean;
}) => {
  return (
    <div className="flex justify-between items-center min-w-[350px]">
      <div className="flex items-center gap-3">
        <img src={icon} alt="" className="w-6 h-6" />
        <span className="text-white">{title}</span>
      </div>
      <button
        className={`btn btn--small btn--secondary ${
          isDisabled ? 'btn--disabled !from-green-600 !to-green-700' : ''
        } ${
          isLoading ? 'btn--disabled !from-gray-300 !to-gray-400' : ''
        } !min-w-24 text-white`}
        onClick={buttonCallback}
      >
        {isLoading ? 'Loading' : buttonTitle}
      </button>
    </div>
  );
};

export default ChainListItem;
