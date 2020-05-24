import Head from 'next/head';
import Link from 'next/link';
// Assets
import Avatar from '../assets/avatar.jpg';
import Disc from '../assets/disc.png';
import Stairs from '../assets/stairs.png';
import Tube from '../assets/tube.png';
import Card from '../components/card';
import DropdownButton from '../components/dropdown-button';
import DropdownIcon from '../components/icons/dropdown';
import RemoveIcon from '../components/icons/remove';
// Icons
import SearchIcon from '../components/icons/search';
import FacebookIcon from '../components/logos/facebook';
import InstagramLogo from '../components/logos/instagram';
import KickstarterKLogo from '../components/logos/kickstarter-k-logo';
// Logos
import KickstarterLogo from '../components/logos/kickstarter-logo';
import TwitterLogo from '../components/logos/twitter';
import YoutubeLogo from '../components/logos/youtube';
import RemoveButton from '../components/remove-button';

export default function Home() {
  return (
    <div>
      <Head>
        <title>RECREATED // Discover » Recommended projects — Kickstarter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="intro-banner flex items-center justify-center bg-indigo-800 py-6 w-full text-center text-white font-medium text-base md:text-xl">
        <p className="w-10/12 md:w-7/12">
          <svg
            className="feather feather-cloud-lightning inline-block mr-2"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path>
            <polyline className="text-yellow-400" points="13 11 9 17 15 17 11 23"></polyline>
          </svg>
          This is a work-in-progress, no-frills, re-creation of&nbsp;
          <a
            href="https://www.kickstarter.com/recommendations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-all ease-in-out duration-150 hover:text-teal-400"
          >
            Kickstarter's Recommendations
          </a>
          &nbsp;page using TailwindCSS. The code is viewable on&nbsp;
          <a
            href="https://github.com/sheilaleon/recreate-kickstarter-recommendations"
            target="_blank"
            rel="noopener noreferrer"
            className="underline transition-all ease-in-out duration-150 hover:text-teal-400"
          >
            GitHub
          </a>
          .
        </p>
      </section>
      <section className="w-screen relative overflow-hidden bg-red-100 pt-24 md:pt-20 lg:pt-24 pb-12 lg:pb-24">
        <img
          className="absolute lg:inset-x-0 top-0 -mt-16 m-12 md:-mt-16 md:ml-20 lg:-ml-12 lg:-mt-24 transform rotate-45 w-32 lg:w-56 z-1"
          src={Tube}
          alt=""
        />
        <div className="container mx-auto max-w-screen-lg flex flex-col lg:flex-row flex-auto justify-between items-center px-6 lg:px-12">
          <div className="w-full lg:w-auto z-10">
            <h3 className="text-2xl lg:text-3xl text-center md:text-left leading-7 font-medium text-indigo-900">
              Which creative idea speaks to you?
            </h3>
            <p className="py-3 md:py-6 text-sm lg:text-lg text-indigo-900 text-center md:text-left">
              Take a minute to refine your own project recommendations.
            </p>
          </div>
          <button
            type="button"
            className="flex flex-row lg:flex-col justify-center items-center w-full lg:w-auto border border-solid border-gray-300 hover:border-indigo-900 hover:shadow-lg hover:text-indigo-900 bg-white py-2 lg:px-10 lg:py-6 my-2 text-black text-lg transition-all ease-in-out duration-150 outline-none z-10"
          >
            <div className="text-2xl pr-1">🐱</div>
            Music for cats
          </button>
          <button
            type="button"
            className="flex flex-row lg:flex-col justify-center items-center w-full lg:w-auto border border-solid border-gray-300 hover:border-indigo-900 hover:shadow-lg hover:text-indigo-900 bg-white py-2 lg:px-10 lg:py-6 my-2 text-black text-lg transition-all ease-in-out duration-150 outline-none z-10"
          >
            <div className="text-2xl pr-1">🐙</div>
            Aquatic drones
          </button>
        </div>
        <img
          className="absolute right-0 lg:inset-l-1/2 bottom-0 mb-32 -mr-10 lg:mr-auto lg:-ml-32 lg:-mb-16 w-24 lg:w-40 transform -rotate-15 md:-rotate-45 lg:-rotate-38 z-0"
          src={Disc}
          alt=""
        />
        <img
          className="absolute left-0 lg:left-auto lg:right-0 bottom-0 -mb-20 -ml-6 md:-mr-10 md:-mb-12 lg:-mb-20 w-40 md:w-32 lg:w-64 transform -rotate-15 md:-rotate-45 z-0"
          src={Stairs}
          alt=""
        />
      </section>
      <header className="flex flex-wrap items-start lg:items-center justify-between lg:px-2 lg:py-0 text-sm border-b border-gray-300">
        <div className="order-1 lg:order-2 w-full lg:w-auto border-b lg:border-0 border-gray-300 py-6 lg:py-3 text-center text-green-500">
          <KickstarterLogo />
        </div>
        <nav className="order-2 lg:order-1 flex justify-start items-center w-2/4 lg:w-auto pl-4 md:pl-6 py-3 leading-10">
          <Link href="#">
            <a className="pr-3">Explore</a>
          </Link>
          <Link href="#">
            <a className="hidden md:block">Start a project</a>
          </Link>
          <Link href="#">
            <a className="md:hidden">Start</a>
          </Link>
        </nav>
        <nav className="flex items-center justify-between order-last pr-4 md:pr-6 py-3">
          <button
            className="flex items-center border-0 px-4 hover:text-green-600 focus:outline-none active:outline-none"
            type="button"
          >
            <span className="hidden md:block">Search</span>
            <span className="inline-block pl-2">
              <SearchIcon />
            </span>
          </button>
          <button className="pl-2 focus:outline-none active:outline-none" type="button">
            <div className="rounded-full bg-green-700 absolute w-3 h-3"></div>
            <img src={Avatar} className="rounded-full border-2 border-green-700" width="40" height="40" alt="S. Leon" />
          </button>
        </nav>
      </header>
      <section className="border-b border-gray-300">
        <form
          action=""
          className="container flex flex-wrap items-center justify-start mx-auto px-3 md:px-6 lg:px-16 pt-12 py-6 text-2xl"
        >
          <span className="hidden md:inline-block">Show me</span>
          <div className="flex items-center justify-between m-2 lg:mx-4 lg:my-2 border border-gray-100 shadow-md bg-white pl-4 pr-3 py-3 text-lg tracking-wide text-gray-600">
            <select className="appearance-none font-light w-10">
              <option value="All">All</option>
              <option value="live" selected="selected">
                Live
              </option>
              <option value="successful">Successful</option>
              <option value="upcoming">Upcoming</option>
            </select>
            <div>
              <button onClick="" type="button">
                <RemoveIcon />
              </button>
            </div>
          </div>
          <span className="hidden md:inline-block">projects in</span>
          <DropdownButton label="All Categories" />
          <span className="hidden md:inline-block">on</span>
          <DropdownButton label="Earth" />
          <span className="hidden md:inline-block">that are</span>
          <RemoveButton label="recommended for me" />
          <div className="flex items-center justify-between m-2 lg:mx-4 lg:my-2 border border-gray-100 shadow-md bg-white pl-4 pr-3 py-3 text-lg tracking-wide text-gray-600">
            <select className="appearance-none font-light">
              <option value="backed">I've backed</option>
              <option value="no-backed" selected="selected">
                I've haven't backed
              </option>
            </select>
            <div>
              <button onClick="" type="button">
                <RemoveIcon />
              </button>
            </div>
          </div>
          <span className="hidden md:inline-block">sorted by</span>
          <DropdownButton label="Magic" />
        </form>
        <div className="container mx-auto my-0 px-6 lg:px-16 pt-0 pb-6 md:pb-4">
          <button className="text-sm underline outline-none" type="button">
            More filters
          </button>
        </div>
      </section>
      <div className="container mx-auto px-6 lg:px-16 pt-10 pb-4">
        <h2 className="text-2xl mb-2">Projects for you</h2>
        <Link href="#">
          <a className="text-sm font-medium text-green-600 hover:text-black transition-all ease-in-out duration-150">
            See all 340 live projects
          </a>
        </Link>
      </div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 lg:gap-6 px-6 lg:px-16">
        <Card
          promoted="hidden"
          title="Mumkair Store Your Earbuds on Your Wrist"
          description="TWS Earbuds &amp; Fitness Tracker; Long Battery Life: 7 DAYS; BL 5.0; 2-IN-1"
          creator="Philp Mumkair"
          status="20"
          pledged="HK$ 9,760"
          funded="20"
          time="35 days"
          category="Gadgets"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="Simplelink+: Two-way Magnetic 5k HDMI/Power/Data Cable"
          description="Two-way Magnetic Connection | 5K/Duo 4K HDMI Output | 40GB/s Data Transfer | 100W Quick-charging | Thunderbolt 3 Compatibility"
          creator="Simplelink"
          status="100"
          pledged="HK$ 530,332"
          funded="6,629"
          time="59 hours"
          category="Technology"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="offGrid — Make Music Your Way. Anytime, Anywhere, Hands-on."
          description="offGrid is a versatile palm-sized MIDI/OSC controller that lets you make music with motion, gesture, touch & velocity-sensitivity."
          creator="birdkids"
          status="100"
          pledged="€126,221"
          funded="1,682"
          time="6 days"
          category="Hardware"
          location="Vienna, Austria"
        />
        <Card
          promoted="hidden"
          title="Mumkair Store Your Earbuds on Your Wrist"
          description="TWS Earbuds &amp; Fitness Tracker; Long Battery Life: 7 DAYS; BL 5.0; 2-IN-1"
          creator="Philp Mumkair"
          status="20"
          pledged="HK$ 9,760"
          funded="20"
          time="35 days"
          category="Gadgets"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="Simplelink+: Two-way Magnetic 5k HDMI/Power/Data Cable"
          description="Two-way Magnetic Connection | 5K/Duo 4K HDMI Output | 40GB/s Data Transfer | 100W Quick-charging | Thunderbolt 3 Compatibility"
          creator="Simplelink"
          status="100"
          pledged="HK$ 530,332"
          funded="6,629"
          time="59 hours"
          category="Technology"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="offGrid — Make Music Your Way. Anytime, Anywhere, Hands-on."
          description="offGrid is a versatile palm-sized MIDI/OSC controller that lets you make music with motion, gesture, touch &amp; velocity-sensitivity."
          creator="birdkids"
          status="100"
          pledged="€126,221"
          funded="1,682"
          time="6 days"
          category="Hardware"
          location="Vienna, Austria"
        />
      </section>
      <div className="container mx-auto my-10 px-6 lg:px-16">
        <button
          type="button"
          className="w-full border border-gray-300 hover:border-black py-4 text-xs font-bold transition-all ease-in-out duration-150 outline-none"
        >
          More recommendations
        </button>
      </div>
      <div className="container mx-auto px-6 lg:px-16 md:pt-10 pb-4">
        <h2 className="text-2xl mb-2">New, noteworthy, and recommended</h2>
        <Link href="#">
          <a className="text-sm font-medium text-green-600 hover:text-black transition-all ease-in-out duration-150">
            See all 259 live projects
          </a>
        </Link>
      </div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10 lg:gap-6 px-6 lg:px-16">
        <Card
          promoted="hidden"
          title="Mumkair Store Your Earbuds on Your Wrist"
          description="TWS Earbuds &amp; Fitness Tracker; Long Battery Life: 7 DAYS; BL 5.0; 2-IN-1"
          creator="Philp Mumkair"
          status="20"
          pledged="HK$ 9,760"
          funded="20"
          time="35 days"
          category="Gadgets"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="Simplelink+: Two-way Magnetic 5k HDMI/Power/Data Cable"
          description="Two-way Magnetic Connection | 5K/Duo 4K HDMI Output | 40GB/s Data Transfer | 100W Quick-charging | Thunderbolt 3 Compatibility"
          creator="Simplelink"
          status="100"
          pledged="HK$ 530,332"
          funded="6,629"
          time="59 hours"
          category="Technology"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="offGrid — Make Music Your Way. Anytime, Anywhere, Hands-on."
          description="offGrid is a versatile palm-sized MIDI/OSC controller that lets you make music with motion, gesture, touch &amp; velocity-sensitivity."
          creator="birdkids"
          status="100"
          pledged="€126,221"
          funded="1,682"
          time="6 days"
          category="Hardware"
          location="Vienna, Austria"
        />
        <Card
          promoted="hidden"
          title="Mumkair Store Your Earbuds on Your Wrist"
          description="TWS Earbuds &amp; Fitness Tracker; Long Battery Life: 7 DAYS; BL 5.0; 2-IN-1"
          creator="Philp Mumkair"
          status="20"
          pledged="HK$ 9,760"
          funded="20"
          time="35 days"
          category="Gadgets"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="Simplelink+: Two-way Magnetic 5k HDMI/Power/Data Cable"
          description="Two-way Magnetic Connection | 5K/Duo 4K HDMI Output | 40GB/s Data Transfer | 100W Quick-charging | Thunderbolt 3 Compatibility"
          creator="Simplelink"
          status="100"
          pledged="HK$ 530,332"
          funded="6,629"
          time="59 hours"
          category="Technology"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="offGrid — Make Music Your Way. Anytime, Anywhere, Hands-on."
          description="offGrid is a versatile palm-sized MIDI/OSC controller that lets you make music with motion, gesture, touch &amp; velocity-sensitivity."
          creator="birdkids"
          status="100"
          pledged="€126,221"
          funded="1,682"
          time="6 days"
          category="Hardware"
          location="Vienna, Austria"
        />
      </section>
      <section className="container mx-auto my-10 px-6 lg:px-16">
        <button
          type="button"
          className="w-full border border-gray-300 hover:border-black py-4 text-xs font-bold transition-all ease-in-out duration-150 outline-none"
        >
          More new & noteworthy projects
        </button>
      </section>
      <div className="container mx-auto px-6 lg:px-16 md:pt-10 pb-4">
        <h2 className="text-2xl mb-2">
          Explore <span className="font-medium text-green-700">357 projects</span>
        </h2>
      </div>
      <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 md:gap-10 lg:gap-6 px-6 lg:px-16">
        <Card
          promoted="hidden"
          title="Mumkair Store Your Earbuds on Your Wrist"
          description="TWS Earbuds &amp; Fitness Tracker; Long Battery Life: 7 DAYS; BL 5.0; 2-IN-1"
          creator="Philp Mumkair"
          status="20"
          pledged="HK$ 9,760"
          funded="20"
          time="35 days"
          category="Gadgets"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="Simplelink+: Two-way Magnetic 5k HDMI/Power/Data Cable"
          description="Two-way Magnetic Connection | 5K/Duo 4K HDMI Output | 40GB/s Data Transfer | 100W Quick-charging | Thunderbolt 3 Compatibility"
          creator="Simplelink"
          status="100"
          pledged="HK$ 530,332"
          funded="6,629"
          time="59 hours"
          category="Technology"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="offGrid — Make Music Your Way. Anytime, Anywhere, Hands-on."
          description="offGrid is a versatile palm-sized MIDI/OSC controller that lets you make music with motion, gesture, touch &amp; velocity-sensitivity."
          creator="birdkids"
          status="100"
          pledged="€126,221"
          funded="1,682"
          time="6 days"
          category="Hardware"
          location="Vienna, Austria"
        />
        <Card
          promoted=""
          title="Mumkair Store Your Earbuds on Your Wrist"
          description="TWS Earbuds &amp; Fitness Tracker; Long Battery Life: 7 DAYS; BL 5.0; 2-IN-1"
          creator="Philp Mumkair"
          status="20"
          pledged="HK$ 9,760"
          funded="20"
          time="35 days"
          category="Gadgets"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted="hidden"
          title="Simplelink+: Two-way Magnetic 5k HDMI/Power/Data Cable"
          description="Two-way Magnetic Connection | 5K/Duo 4K HDMI Output | 40GB/s Data Transfer | 100W Quick-charging | Thunderbolt 3 Compatibility"
          creator="Simplelink"
          status="100"
          pledged="HK$ 530,332"
          funded="6,629"
          time="59 hours"
          category="Technology"
          location="Hong Kong, Hong Kong"
        />
        <Card
          promoted=""
          title="offGrid — Make Music Your Way. Anytime, Anywhere, Hands-on."
          description="offGrid is a versatile palm-sized MIDI/OSC controller that lets you make music with motion, gesture, touch &amp; velocity-sensitivity."
          creator="birdkids"
          status="100"
          pledged="€126,221"
          funded="1,682"
          time="6 days"
          category="Hardware"
          location="Vienna, Austria"
        />
      </section>
      <section className="center px-6 py-10 border-b-2 border-gray-500">
        <button
          type="button"
          className="block bg-green-700 hover:bg-green-800 mx-auto px-4 py-3 xl:px-6 xl:py-4 font-light text-sm xl:text-base text-white leading-4 transition-all ease-in-out duration-150 outline-none"
        >
          Load more
        </button>
      </section>
      <footer>
        <section className="border-b-2 border-gray-300 px-6 lg:px-12 py-6">
          <h4 className="lg:hidden font-medium text-sm uppercase tracking-tighter leading-4 pb-2">Explore</h4>
          <ul className="flex flex-col lg:flex-row lg:items-center justify-start container mx-auto text-sm">
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Arts</a>
              </Link>
            </li>
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Comics &amp; Illustration</a>
              </Link>
            </li>
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Design &amp; Tech</a>
              </Link>
            </li>
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Film</a>
              </Link>
            </li>
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Food &amp; Craft</a>
              </Link>
            </li>
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Games</a>
              </Link>
            </li>
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Music</a>
              </Link>
            </li>
            <li className="inline-block lg:pr-6">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Publishing</a>
              </Link>
            </li>
          </ul>
        </section>
        <section className="container mx-auto max-w-screen-lg md:w-4/5 lg:w-2/3 flex flex-1 justify-between py-12 px-3">
          <div className="p-3">
            <h4 className="font-medium text-sm uppercase tracking-tighter leading-4 pb-2">About</h4>
            <ul className="text-sm">
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">About us</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Our charter</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Stats</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Press</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Jobs</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-3">
            <h4 className="font-medium text-sm uppercase tracking-tighter leading-4 pb-2">Support</h4>
            <ul className="text-sm">
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Help Center</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Our Rules</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Creator Handbook</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Patrons</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Brand Assets</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="p-3">
            <h4 className="font-medium text-sm uppercase tracking-tighter leading-4 pb-2">More from Kickstarter</h4>
            <ul className="text-sm">
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Newsletters</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Kickstarter Magazine</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">The Creative Independent</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Mobile Apps</a>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <a className="hover:text-green-700 hover:underline">Research</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        <section className="px-6 lg:px-12 pb-16 md:pb-12 border-b-2 border-gray-300">
          <div className="container mx-auto flex flex-col lg:flex-row flex-wrap lg:flex-no-wrap lg:items-center lg:justify-between">
            <div className="flex items-center py-2">
              <KickstarterKLogo /> <span className="text-sm pl-2">Kickstarter, PBC © 2020</span>
            </div>
            <div className="flex flex-col flex-wrap lg:flex-no-wrap lg:flex-grow lg:max-w-3xl md:flex-row justify-between md:justify-start lg:justify-between">
              <div className="flex items-center lg:flex-none justify-start lg:justify-center md:w-full lg:w-auto px-1 py-4">
                <FacebookIcon />
                <InstagramLogo />
                <TwitterLogo />
                <YoutubeLogo />
              </div>
              <form
                action=""
                className="flex items-center justify-between m-2 lg:mx-4 lg:my-2 border border-gray-100 shadow-md bg-white pl-4 pr-3 text-sm tracking-wide text-gray-600"
              >
                <input type="hidden" name="lang" value="" />

                <select className="appearance-none font-light w-full py-3 outline-none">
                  <option value="en" selected>
                    English
                  </option>
                  <option value="es">Español</option>
                  <option value="de">Deutsch</option>
                  <option value="fr">Français</option>
                  <option value="it">Italiano</option>
                  <option value="ja">日本語</option>
                  <option value="zh">繁體中文</option>
                  <option value="emoji">😃 ❤️ 🔥</option>
                </select>
                <span>
                  <DropdownIcon />
                </span>
              </form>
              <form
                action=""
                className="flex items-center lg:flex-grow justify-between m-2 lg:mx-4 lg:my-2 border border-gray-100 shadow-md bg-white pl-4 pr-3 text-sm tracking-wide text-gray-600"
              >
                <input type="hidden" name="lang" value="" />

                <select className="appearance-none font-light w-full py-3 outline-none">
                  <option value="EUR">€ Euro (EUR)</option>
                  <option value="AUD" selected>
                    $ Australian Dollar (AUD)
                  </option>
                  <option value="CAD">$ Canadian Dollar (CAD)</option>
                  <option value="CHF">Fr Swiss Franc (CHF)</option>
                  <option value="DKK">kr Danish Krone (DKK)</option>
                  <option value="GBP">£ Pound Sterling (GBP)</option>
                  <option value="HKD">$ Hong Kong Dollar (HKD)</option>
                  <option value="JPY">¥ Japanese Yen (JPY)</option>
                  <option value="MXN">$ Mexican Peso (MXN)</option>
                  <option value="NOK">kr Norwegian Krone (NOK)</option>
                  <option value="NZD">$ New Zealand Dollar (NZD)</option>
                  <option value="SEK">kr Swedish Krona (SEK)</option>
                  <option value="SGD">$ Singapore Dollar (SGD)</option>
                  <option value="USD">$ US Dollar (USD)</option>
                </select>
                <span>
                  <DropdownIcon />
                </span>
              </form>
              {/* <button
                className="flex justify-between items-center lg:flex-grow md:w-1/2 m-1 border border-gray-100 shadow-md bg-white pl-4 pr-3 py-2 md:py-3 text-sm font-light tracking-wide text-gray-600"
                type="button"
              >
                <span>$ Australian Dollar (AUD)</span>
                <DropdownIcon />
              </button> */}
            </div>
          </div>
        </section>
        <div className="p-6 lg:px-12">
          <ul className="flex flex-wrap items-center justify-start container mx-auto text-xs">
            <li className="inline-block pr-6 py-2">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Trust and Safety</a>
              </Link>
            </li>
            <li className="inline-block pr-6 py-2">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Terms of Use</a>
              </Link>
            </li>
            <li className="inline-block pr-6 py-2">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Privacy Policy</a>
              </Link>
            </li>
            <li className="inline-block pr-6 py-2">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Cookie Policy</a>
              </Link>
            </li>
            <li className="inline-block pr-6 py-2">
              <Link href="#">
                <a className="hover:text-green-700 hover:underline">Accessibility Statement</a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
