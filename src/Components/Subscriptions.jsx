import React from "react";
import { TiTick } from "react-icons/ti";

const Subscriptions = () => {
  return (
    <div className="mt-20 shadow-xl mx-auto pb-10">
      <p className="text-center text-gray-600 text-2xl">
        Start Secure Browsing
      </p>
      <h1 className="text-center text-red-600 mb-5 font-bold py-3 text-2xl md:text-4xl">
        Ready To Grab The Deal ?
      </h1>
      <div className="lg:w-3/4 mx-auto">
        <div className="grid grid-cols-1 px-2 gap-5 md:gap-5 md:grid-cols-3">
          <div className="card w-88 md:w-60 h-88 bg-base-100 mx-auto shadow-sm">
            <div className="card-body p-4">
              <span className="badge badge-xs text-center mx-auto badge-warning">
                Weekly
              </span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Regular</h2>
                <span className="text-xl">$13/week</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>High-resolution image generation</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Customizable style templates</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Batch processing capabilities</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="" />
                  <span className="line-through">
                    Seamless cloud integration
                  </span>
                </li>
                <li className="flex opacity-50 items-center">
                  <TiTick className="" />
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-[#ec5990] hover:bg-[#bf1650] btn-block font-bold text-white">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="card w-88 md:w-60 bg-base-100 mx-auto shadow-sm">
            <div className="card-body p-4">
              <span className="badge badge-xs text-center mx-auto badge-warning">
                Monthly
              </span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Premium</h2>
                <span className="text-xl">$29/mo</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Ultra-Fast Streaming</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span> Dolby Atmos & Surround Sound </span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Ultra-Fast Streaming</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span> Dolby Atmos & Surround Sound </span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Live TV & Events</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>VR & 360° Movies</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span> Parental Controls</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Auto-Adjust Streaming Quality</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="" />
                  <span className="line-through">Gift Subscriptions</span>
                </li>
                <li className="flex opacity-50 items-center">
                  <TiTick className="" />
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-[#ec5990] hover:bg-[#bf1650] text-white font-bold btn-block">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="card w-88 md:w-60 h-88 bg-base-100 mx-auto shadow-sm">
            <div className="card-body p-4">
              <span className="badge badge-xs text-center mx-auto badge-warning">
                Yearly
              </span>
              <div className="flex justify-between">
                <h2 className="text-3xl font-bold">Sale</h2>
                <span className="text-xl">$113/Year</span>
              </div>
              <ul className="mt-6 flex flex-col gap-2 text-xs">
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>High-resolution image generation</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Customizable style templates</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>Batch processing capabilities</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="text-green-500" />
                  <span>AI-driven image enhancements</span>
                </li>
                <li className="flex items-center">
                  <TiTick className="" />
                  <span className="line-through">
                    Seamless cloud integration
                  </span>
                </li>
                <li className="flex opacity-50 items-center">
                  <TiTick className="" />
                  <span className="line-through">
                    Real-time collaboration tools
                  </span>
                </li>
              </ul>
              <div className="mt-6">
                <button className="btn bg-[#ec5990] hover:bg-[#bf1650] font-bold text-white btn-block">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
