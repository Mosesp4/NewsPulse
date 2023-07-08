import React from 'react';

const Body = () => {
  return (
    <div className="min-h-screen flex flex-col py-2 sm:py-2 relative sm:px-10 px-4 
	text-white overflow-hidden justify-between align-middle">
      
      <main className="container mx-auto px-4 sm:px-4 pt-6 sm:pt-16 flex-1 text-center">
        <h2 className="text-xl sm:text-4xl md:text-4xl lg:text-4xl ">Welcome to Mac Chris Services</h2>
        <h1 className="text-2xl sm:text-5xl md:text-5xl lg:text-8xl uppercase 
		font-black mb-4">
          Top-Notch Services tailored to meet your unique needs.
        </h1>

        <p className="text-base sm:text-lg md:text-lg lg:text-2xl mb-6">
          Join our community of satisfied clients and experience the difference with Mac Chris Services.
          Let's unlock success together!
        </p>

        <div className="text-lg sm:text-2xl md:text-2xl lg:text-3xl py-2 px-4 sm:py-4 sm:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-6 rounded-full">
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
          <div className="flex flex-col sm:flex-row justify-center mb-4">
            <input
              placeholder="Your email address..."
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              className="text-xl placeholder-gray-400 placeholder-italic py-3 px-4 sm:px-6 lg:py-4 lg:px-6 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 sm:rounded-tr-none sm:rounded-br-none rounded-full outline-none mb-4 sm:mb-0"
              required
            />
            <input
              type="submit"
              value="Join Today"
              name="member[subscribe]"
              id="member_submit"
              className="bg-orange-500 sm:rounded-tl-none sm:rounded-bl-none rounded-full text-xl py-3 px-4 sm:px-6 lg:py-4 lg:px-6 font-bold uppercase cursor-pointer hover:opacity-75 duration-150"
            />
          </div>

          <div className="opacity-75 italic">
            By subscribing, you agree with Revue's{' '}
            <a target="_blank" href="https://www.getrevue.co/terms" className="hover:opacity-80 duration-150">
              Terms of Service
            </a>{' '}
            and{' '}
            <a target="_blank" href="https://www.getrevue.co/privacy" className="hover:opacity-80 duration-150">
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </main>

      <footer className="container mx-auto p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <p className="mb-4 sm:mb-0 sm:text-xl">Built with 💖 by Moses Echela</p>

          <div className="flex -mx-2">
            <a href="#" className="mx-2 hover:opacity-80 duration-150">
              About us
            </a>{' '}
            |
            <a href="#" className="mx-2 hover:opacity-80 duration-150">
              Privacy
            </a>{' '}
            |
            <a href="#" className="mx-2 hover:opacity-80 duration-150">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Body;
