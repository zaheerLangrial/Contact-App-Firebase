import React from "react";
import addButtonPic from "../assets/AddButtonIcon.svg";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { db } from "../Config/Firebase";

function Navbar(props) {
  const { setMudal , setContacts } = props;
  const filterContacts = (e) => {
    const inputValue  = e.target.value;
    const contactRef = collection(db , 'contacts');
    onSnapshot(contactRef , (snapShot) => {
      const contactList = snapShot.docs.map((doc) => {
        return {
          id : doc.id,
          ...doc.data(),
        }
      })
      const filterContact = contactList.filter((contact) => contact.name.toLowerCase().includes(inputValue.toLowerCase()))
      setContacts(filterContact)
    })
  }
  return (
    <div className=" w-full px-3">
      <div className=" px-5 py-3 rounded-xl mt-2 text-xl space-x-2 bg-white text-black flex justify-center items-center">
        <span>
          <svg
            width="23"
            height="30"
            viewBox="0 0 23 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_873_5330)">
              <path
                d="M0.5 24.1878L0.681453 23.9338L9.26299 7.65059L9.28111 7.47819L5.49829 0.372466C5.1812 -0.222748 4.28889 -0.0722348 4.18496 0.59409L0.5 24.1878Z"
                fill="#FFC24A"
              />
              <path
                d="M0.606934 23.9942L0.744113 23.7266L9.23582 7.6139L5.46232 0.479286C5.14873 -0.109688 4.35232 0.0404826 4.24941 0.699799L0.606934 23.9942Z"
                fill="#FFA712"
              />
              <g filter="url(#filter0_i_873_5330)">
                <path
                  d="M0.606934 23.9942L0.744113 23.7266L9.23582 7.6139L5.46232 0.479286C5.14873 -0.109688 4.35232 0.0404826 4.24941 0.699799L0.606934 23.9942Z"
                  fill="black"
                />
              </g>
              <path
                d="M12.0389 12.853L14.8556 9.96834L12.0381 4.58971C11.7707 4.08057 11.0239 4.07903 10.7593 4.58971L9.25391 7.4604V7.70484L12.0389 12.853H12.0389Z"
                fill="#F4BD62"
              />
              <path
                d="M11.9888 12.7328L14.7271 9.9284L11.9888 4.71413C11.7288 4.21917 11.0971 4.16729 10.8398 4.6637L9.32655 7.579L9.28125 7.72806L11.9888 12.7328Z"
                fill="#FFA50E"
              />
              <g filter="url(#filter1_i_873_5330)">
                <path
                  d="M11.9888 12.7328L14.7271 9.9284L11.9888 4.71413C11.7288 4.21917 11.0971 4.16729 10.8398 4.6637L9.32655 7.579L9.28125 7.72806L11.9888 12.7328Z"
                  fill="black"
                />
              </g>
              <path
                d="M0.5 24.1879L0.582222 24.1051L0.881026 23.9838L11.862 13.0436L12.0011 12.6649L9.2618 7.44489L0.5 24.1879Z"
                fill="#F6820C"
              />
              <path
                d="M12.3907 29.7052L22.3287 24.1627L19.4908 6.6845C19.402 6.13767 18.7311 5.92151 18.3397 6.31356L0.5 24.1878L10.381 29.7048C10.6882 29.8762 11.034 29.9663 11.3858 29.9664C11.7376 29.9664 12.0835 29.8765 12.3907 29.7052Z"
                fill="#FDE068"
              />
              <path
                d="M22.2398 24.1162L19.4233 6.77073C19.3353 6.22799 18.7774 6.00346 18.3889 6.39261L0.610352 24.1538L10.3829 29.616C10.6877 29.7862 11.031 29.8756 11.38 29.8757C11.7291 29.8758 12.0724 29.7866 12.3773 29.6165L22.2398 24.1161L22.2398 24.1162Z"
                fill="#FCCA3F"
              />
              <path
                d="M12.3908 29.5419C12.0836 29.7132 11.7377 29.8031 11.3859 29.803C11.0342 29.803 10.6883 29.7129 10.3812 29.5415L0.579731 24.1039L0.500244 24.1879L10.3812 29.7048C10.6883 29.8763 11.0342 29.9663 11.386 29.9664C11.7377 29.9665 12.0836 29.8766 12.3908 29.7052L22.3289 24.1627L22.3045 24.013L12.3908 29.542L12.3908 29.5419Z"
                fill="#EEAB37"
              />
            </g>
            <defs>
              <filter
                id="filter0_i_873_5330"
                x="0.606934"
                y="0.111206"
                width="8.62891"
                height="23.8829"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset />
                <feGaussianBlur stdDeviation="1.49573" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_873_5330"
                />
              </filter>
              <filter
                id="filter1_i_873_5330"
                x="9.28125"
                y="3.71787"
                width="5.53127"
                height="9.01498"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.0854701" dy="-0.769231" />
                <feGaussianBlur stdDeviation="0.299145" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_873_5330"
                />
              </filter>
              <clipPath id="clip0_873_5330">
                <rect
                  width="21.8803"
                  height="30"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </span>
        <h1>Firebase Contact App</h1>
      </div>
      <div className="flex justify-between items-center space-x-3 py-3">
        <div className="flex items-center space-x-1 border-white border w-full rounded-lg px-1">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C3 7.68333 3.62933 6.146 4.888 4.888C6.14667 3.63 7.684 3.00067 9.5 3C11.3167 3 12.854 3.62933 14.112 4.888C15.37 6.14667 15.9993 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5623 12.688 12.687C13.5633 11.8117 14.0007 10.7493 14 9.5C14 8.25 13.5623 7.18733 12.687 6.312C11.8117 5.43667 10.7493 4.99933 9.5 5C8.25 5 7.18733 5.43767 6.312 6.313C5.43667 7.18833 4.99933 8.25067 5 9.5C5 10.75 5.43767 11.8127 6.313 12.688C7.18833 13.5633 8.25067 14.0007 9.5 14Z"
              fill="white"
            />
          </svg>

          <input
          onChange={filterContacts}
            placeholder="Search Contact"
            type="text"
            className=" bg-transparent text-white outline-none py-1 w-full"
          />
        </div>
        <button
          className="rounded-full overflow-hidden bg-white"
          onClick={() => setMudal(true)}
        >
          <img src={addButtonPic} width={50} />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
