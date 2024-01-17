export const Home = () => {
	return (
		<div className='flex-1 flex items-center justify-center flex-col gap-3'>
			<h1 className='text-4xl font-bold text-white'>GHO Bridge</h1>
			<p className='text-secondary text-xl font-semibold mb-5'>Bridge your GHO tokens from Ethereum to polygon network.</p>
			<section className="p-2 flex flex-col gap-1 rounded-xl w-[460px] max-w-[90vw] bg-black border border-secondary border-opacity-25">

				<div className='section-header flex items-center justify-start gap-3 px-1 mb-2'>
					<p className='text-white cursor-pointer font-semibold'>Bridge</p>
					<p className='text-gray-400 cursor-pointer font-semibold'>Delegate</p>
				</div>

				<div className='relative rounded-xl bg-black-500 p-5 flex items-center'>
					<div className='input-left flex-1 flex flex-col gap-1'>
						<label htmlFor="amount" className='text-white text-sm font-medium'>From Etheruem</label>
						<input type="number" id='amount' className='text-3xl bg-transparent text-white pl-0' placeholder='0.0'/>
						<p className='text-secondary text-sm font-medium mt-1'>$3.80</p>
					</div>
					<div className='flex flex-col gap-2 rounded-xl flex-1 py-2 items-center'>
						<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png" alt="GHO" className='w-10 h-10 rounded-full'/>
						<p className='text-white text-lg font-medium'>GHO</p>
					</div>
					<span className='absolute rounded-xl bg-black-600 border-2 border-secondary border-opacity-10 p-2 top-full left-1/2 -translate-x-1/2 -translate-y-[40%]'>
						<img src='/assets/images/arrow-down.svg' alt=''/>
					</span>
				</div>

				<div className='rounded-xl bg-black-500 p-5 flex items-center'>
					<div className='input-left flex-1 flex flex-col gap-1'>
						<label htmlFor="amount" className='text-white text-sm font-medium'>To Polygon</label>
						<input type="number" id='amount' className='text-3xl bg-transparent text-white pl-0' placeholder='0.0'/>
						<p className='text-secondary text-sm font-medium mt-1'>$3.80</p>
					</div>
					<div className='flex flex-col gap-2 rounded-xl flex-1 py-2 items-center'>
						<img src="https://s2.coinmarketcap.com/static/img/coins/64x64/23508.png" alt="GHO" className='w-10 h-10 rounded-full'/>
						<p className='text-white text-lg font-medium'>GHO</p>
					</div>
				</div>

				<button>
					<p className='text-gray-300 text-xl font-medium bg-primary w-full py-3 rounded-xl'>Approve</p>
				</button>
			</section>
		</div>
	)
}