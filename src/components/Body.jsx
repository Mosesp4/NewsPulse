import React from 'react'

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0912]  py-6 
    relative sm:px-10 px-12 text-white overflow-hidden  justify-between align-middle">
		 {/* gradients */}
		 <div className="gradient-01 z-0 absolute"></div>
		 <div className="gradient-02 z-0 absolute"></div>
		 
			<main className="container mx-auto px-6 pt-16 flex-1 text-center">

				<h2 className="text-2xl md:text-4xl lg:text-4xl uppercase">Welcome to Mac Chris Services</h2>
				<h1 className="text-3xl md:text-5xl lg:text-8xl uppercase font-black mb-8"> 
				Top-Notch Services tailored to meet your 
				unique needs. 
				</h1>

				<p className="text-base md:text-lg lg:text-2xl mb-8">
				 Join our community of satisfied clients 
				and experience the difference with Mac Chris Services. 
				Let's unlock success together!
				</p>

				<div className="text-lg md:text-2xl lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full">
					10,534 members
				</div>

				<form 
					action="https://gmail.us21.list-manage.com/subscribe/post?u=1e58c363559d7dcbaa012706e&amp;id=afd1390c5c&amp;f_id=00075ce1f0"
					method="post"
					id="mc-embedded-subscribe-form"
					name="mc-embedded-subscribe-form"
					className="validate"
					target="_blank"
					>

					<div className="flex flex-col md:flex-row justify-center mb-4">
						<input
							placeholder="Your email address..."
							type="email"
							name="EMAIL"
							id="mce-EMAIL"
							className="text-2xl placeholder:text-gray-400 placeholder:italic py-4 px-6 
							md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 
							duration-150 md:rounded-tr-none md:rounded-br-none rounded-full outline-none 
							mb-4 md:mb-0"
							required
						/>
						<input
							type="submit"
							value="Join Today"
							name="member[subscribe]"
							id="member_submit"
							className="bg-orange-500 md:rounded-tl-none md:rounded-bl-none rounded-full 
							text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 font-bold uppercase cursor-pointer 
							hover:opacity-75 duration-150"
						/>
					</div>

					<div className="opacity-75 italic">
						By subscribing, you agree with Revue's <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">Terms of Service</a> and <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">Privacy Policy</a>.
					</div>

				</form>
			</main>

			<footer className="container mx-auto p-6">
				<div className="flex flex-col md:flex-row items-center justify-between">
					<p className="mb-4 md:mb-0 md:text-xl">Built with 💖 by Moses Echela</p>

					<div className="flex -mx-6">
						<a href="#" className="mx-3 hover:opacity-80 duration-150">About us</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Privacy</a> | 
						<a href="#" className="mx-3 hover:opacity-80 duration-150">Contact</a>
					</div>
				</div>
			</footer>
		</div>
  )
}

export default Body
