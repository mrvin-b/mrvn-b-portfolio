const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="min-h-screen flex flex-col lg:flex-row justify-around items-center gap-16 lg:gap-0 max-w-[1300px] m-auto px-10 py-20">
        <div className="flex-1 flex flex-col justify-center lg:basis-3/4">
          <h1 className="text-5xl sm:text-8xl lg:text-9xl font-bold gradient-text mb-16 text-nowrap">
            Hi, <br /> I'm Marvin!
          </h1>

          <h2 className="font-['Permanent_Marker'] text-xl sm:text-4xl lg:text-5xl text-dark-gray mb-5 text-center lg:text-left">
            🧑🏻‍💻 Full-stack Developer
          </h2>

          <h2 className="font-['Permanent_Marker'] text-xl sm:text-4xl lg:text-5xl text-dark-gray mb-5 text-center lg:text-left">
            🎨 Graphic Designer
          </h2>

          <h2 className="font-['Permanent_Marker'] text-xl sm:text-4xl lg:text-5xl text-dark-gray text-center lg:text-left">
            🖥️ UI/UX Designer
          </h2>
        </div>

        <div className="lg:basis-1/4 flex flex-row lg:flex-col gap-10 items-end">
          <a
            href="https://www.linkedin.com/in/mrvndb"
            target="_blank"
            className="flex items-center gap-2 group/links"
          >
            <span className="font-['Caveat'] transition-all ease-in-out text-lg lg:text-2xl font-medium overflow-hidden text-right text-dark-gray text-nowrap w-0 lg:group-hover/links:w-24">
              Linked in
            </span>

            {/* linked in */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="transition ease-in-out h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12 fill-dark-gray group-hover/links:fill-[#0077B5]"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </a>

          <a
            href="https://www.facebook.com/mrvn.bae"
            target="_blank"
            className="flex items-center gap-2 group/links"
          >
            <span className="font-['Caveat'] transition-all ease-in-out text-lg lg:text-2xl font-medium overflow-hidden text-right text-dark-gray text-nowrap w-0 lg:group-hover/links:w-28">
              Facebook
            </span>

            {/* facebook */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="transition ease-in-out h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12 fill-dark-gray group-hover/links:fill-[#1877F2]"
            >
              <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
            </svg>
          </a>

          <div className="flex items-center gap-2 group/links">
            <span className="font-['Caveat'] transition-all ease-in-out text-lg lg:text-2xl font-medium overflow-hidden text-right text-dark-gray text-nowrap w-0 lg:group-hover/links:w-24">
              Behance
            </span>

            {/* behance */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="transition ease-in-out h-8 w-8 md:h-10 md:w-10 lg:w-12 lg:h-12 fill-dark-gray group-hover/links:fill-[#053eff]"
            >
              <path d="M155.3 318.4c17.2 0 31.2-6.1 31.2-25.4c0-19.7-11.7-27.4-30.3-27.5h-46v52.9h45.1zm-5.4-129.6H110.3v44.8H153c15.1 0 25.8-6.6 25.8-22.9c0-17.7-13.7-21.9-28.9-21.9zm129.5 74.8h62.2c-1.7-18.5-11.3-29.7-30.5-29.7c-18.3 0-30.5 11.4-31.7 29.7zM384 32H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64zM349.5 185H271.7V166.1h77.8V185zM193.7 243.7c23.6 6.7 35 27.5 35 51.6c0 39-32.7 55.7-67.6 55.9H68v-192h90.5c32.9 0 61.4 9.3 61.4 47.5c0 19.3-9 28.8-26.2 37zm118.7-38.6c43.5 0 67.6 34.3 67.6 75.4c0 1.6-.1 3.3-.2 5c0 .8-.1 1.5-.1 2.2H279.5c0 22.2 11.7 35.3 34.1 35.3c11.6 0 26.5-6.2 30.2-18.1h33.7c-10.4 31.9-31.9 46.8-65.1 46.8c-43.8 0-71.1-29.7-71.1-73c0-41.8 28.7-73.6 71.1-73.6z" />
            </svg>
          </div>

          <a
            href="https://github.com/mrvin-b"
            target="_blank"
            className="flex items-center gap-2 group/links"
          >
            <span className="font-['Caveat']    transition-all ease-in-out text-lg lg:text-2xl font-medium overflow-hidden text-right text-dark-gray text-nowrap w-0 lg:group-hover/links:w-24">
              Github
            </span>

            {/* github */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 496 512"
              className="transition ease-in-out h-8 w-8 lg:w-12 lg:h-12 fill-dark-gray group-hover/links:fill-black"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
