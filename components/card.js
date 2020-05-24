import React from 'react';
import Link from 'next/link';

import LocationIcon from './icons/location';
import BookmarkIcon from './icons/bookmark';
import ThumbsUpIcon from './icons/thumbs-up';
import ThumbsDownIcon from './icons/thumbs-down';

function Card(props) {
  return (
    <div className="border border-gray-300">
      <div className="relative">
        <button
          type="button"
          className={`${props.promoted} absolute bottom-0 left-0 -mb-3 ml-5 bg-white border border-gray-400 hover:shadow-md hover:border-black px-2 py-1 text-xs transition-all ease-in-out duration-150`}
        >
          Project We Love
        </button>
        <Link href="#">
          <a>
            <img
              className="w-full"
              src="https://via.placeholder.com/500x300.png?text=Project+Thumbnail"
              alt="Project"
            />
          </a>
        </Link>
      </div>
      <div className="flex items-center justify-between px-5 pt-6">
        <button
          className="xl:hidden flex items-center justify-between border border-gray-400 rounded px-3 py-2 text-xs"
          type="button"
        >
          <BookmarkIcon /> Remind Me
        </button>
        <div>
          <button
            className="xl:hidden border border-gray-400 rounded-full p-3 leading-3 mr-3 outline-none"
            type="button"
          >
            <ThumbsUpIcon />
          </button>
          <button className="xl:hidden border border-gray-400 rounded-full p-3 leading-3 outline-none" type="button">
            <ThumbsDownIcon />
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-between m-6">
        <div className="min-h-40 w-full">
          <Link href="#">
            <a>
              <h3 className="text-lg hover:underline">{props.title}</h3>
              <p className="text-sm text-gray-500 overflow-hidden h-12 my-2">{props.description}</p>
            </a>
          </Link>
          <p className="text-xs pt-1">
            By{' '}
            <Link href="#">
              <a className="hover:underline">{props.creator}</a>
            </Link>
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden flex bg-gray-300 w-full h-1 my-6 text-xs">
            <div
              className="flex flex-col whitespace-no-wrap justify-center bg-green-700"
              style={{ width: `${props.status}%` }}
            ></div>
          </div>
          <p className="text-xs text-green-700">{props.pledged} pledged</p>
          <p className="text-xs text-gray-700">{props.funded}% funded</p>
          <p className="text-xs text-gray-700">{props.time} to go</p>
          <div className="flex items-center justify-start pt-4">
            <Link href="#">
              <a className="text-xs text-gray-700 hover:text-black underline pr-6">
                <span>{props.category}</span>
              </a>
            </Link>
            <Link href="#">
              <a className="text-xs text-gray-700 hover:text-black underline">
                <LocationIcon />
                {props.location}
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Card.defaultProps = {
  promoted: '',
  title: '',
  description: '',
  creator: '',
  status: '0',
  pledged: 'Unknown',
  funded: '',
  time: '',
  category: '',
  location: '',
};

export default Card;
