import React from "react";

const privacyPolicy = () => {
  return (
    <div className="bg-slate-300 h-[100vh]">
      <div className="px-24 py-10">
        <div className="text-3xl text-black">Privacy Policy</div>
        <div className="bg-white text-md mt-6">
          <div className="py-4 px-5">
            <div className="font-bold ">Privacy Notice</div>
            <div className="font-thin font-sans">
              Updated and Effective as of January 5, 2023
            </div>
            <div className="mt-1">
              We have prepared this privacy notice (“Privacy Notice,” “Notice,”
              “Privacy Policy,” or “Policy”) to explain to you how we collect,
              use, and share information and Personal Data (as defined under
              applicable law) we obtain through your use of the Internet sites,
              applications and online services (“Services”) that are operated
              by, controlled by or affiliated with Rougee.io, This Privacy
              Notice only covers information collected through the Services and
              via direct communications between you and Rougee.io and does not
              cover any information collected at any other website, application
              or otherwise by us (unless specifically stated), including when
              you call us, write to us, or communicate with us in any manner
              other than through the Services. By using the Services, you
              consent to such collection, use and sharing of your information
              and Personal Data and agree to the terms of this Privacy Notice.
            </div>
            <div className="mt-1">
              We will only process your Personal Data in accordance with
              applicable data protection and privacy laws. For the purposes of
              UK and EU data protection legislation, the data controller is
              Rougee.io of Sarasota, FL.
            </div>
            <ul className="list-disc ml-16 mt-1">
              <li>Information We Automatically Collect </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default privacyPolicy;
