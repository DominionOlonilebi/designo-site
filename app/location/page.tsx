import React from 'react';

const Page = () => {
  return (
    <div className="flex flex-row w-[87%] mx-auto">
      <div className="basis-1/4 bg-black text-white flex items-center justify-center h-32 rounded-xl">
        02
      </div>
      <div className="basis-3/4  mx-7">
        <iframe
          className="lg:w-[90%] h-full border-0 rounded-xl"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          title="Google Maps Embed"
        ></iframe>
      </div>
    </div>
  );
}

export default Page;
