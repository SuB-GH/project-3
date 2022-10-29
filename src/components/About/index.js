import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
function About() {
  return (
    <section class="py-4 px-7">
      <div class="mt-7 rounded-[4px] bg-white max-w-[1124px] w-full mx-auto">
        <div class="flex flex-wrap justify-between pb-2 lg:flex-nowrap">
          <div class="flex flex-col w-full gap-4 lg:flex-row md:flex-col p-7">
            <div class="relative lg:max-w-[410px] w-full">
                <h1  class="text 2xl md:text-3xl lg:text-4xl font-bold tracking-wider text-amber-600" id="about">Inspired Travels</h1>
                <img src={coverImage} style={{ width: "100%" }} alt="cover" />
                <input placeholder="search" class="p-4 py-3 outline-none focus pr-10 bg-gray-100 border rounded border-gray-100 text-slate-600 lg:max-w-[410px] w-full leading-4">
                </input>
                <button class="bg-amber-600 text-white lg:max-w-[164px] font-medium px-6 py-4 w-full rounded-[4px] leading-[14px] hover:bg-amber-600">Search
                </button>
                <div className="cover-info">
                  <p>
                    This is all the info we want to add about the site!
                  </p>
                </div>
            </div>
          </div> 
        </div>
      </div>         
    </section>
  );
}

export default About;