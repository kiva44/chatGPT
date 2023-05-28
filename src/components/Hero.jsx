import { logo } from '../assets';


const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-between items-center w-full mb-10 pt-3'>
				<img src={logo} alt='sumz_logo' className='w-28 object-contain' />

				<button
					type='button'
					onClick={() =>
						window.open("https://44video.ru", "_blank")
					}
					className='black_btn font-semibold'
				>
					44labs.ru
				</button>
			</nav>

			<h1 className='head_text'>
				Текстовые запросы из любого браузера в <br className='max-md:hidden' />
				<span className='blue_gradient '>OpenAI GPT-4</span>
			</h1>
			<h2 className='desc drop-shadow-xl'>
				Наш сервис поможет вам понять сжатую суть и получить структурированный текст из самого длинного и запутанного текста
			</h2>
		</header>
	);
};
export default Hero