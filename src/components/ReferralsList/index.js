import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import iconPerson from '../../assets/images/icon-person.svg';
import iconCheckboxChecked from '../../assets/images/icon-checkmark-checked.svg';
import iconChevronRightGray from '../../assets/images/icon-chevron-right-gray.svg';
import iconCheckboxGray from '../../assets/images/icon-checkmark-checked-gray.svg';

const ReferralsList = () => (
<div className="referral-tracking clearfix mb-12">
  <h3 className="mb-4 ml-6 text-2xl">
    Referrals
  </h3>
  <div className="border border-grey-light p-8 rounded-lg">
    <div className="clearfix">
      <p className="text-gray-dark float-left text-base mb-6">
        Please review by Wed, Sept 19
      </p>
    </div>

    {/* REFERRAL TRACKING LIST */}
    <div>
      <Link to="/clients/client-1" className="py-4 border-b border-grey-light flex referral-list_needs-review">
        <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
          <div className="avatar-initials">GC</div>
        </div>
        <div className="flex-initial ml-4">
          <span className="text-lg block mb-1">
            Gunny Celis
          </span>
          <div>
            <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
            <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
            <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <span className="ml-1 inline text-gray-dark text-xs">Met</span>
          </div>
        </div>
        <div className="flex-1 text-right">
          <div>
            <span className="text-red text-base mr-1">Review</span>
          </div>
        </div>
      </Link>

      <Link to="/clients/client-2" className="py-4 border-b border-grey-light flex referral-list_needs-review">
        <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-red-light text-white">
          <img src={iconPerson} className="avatar-image" alt="avatar" />
          <div className="avatar-initials"></div>
        </div>
        <div className="flex-initial ml-4">
          <span className="text-lg block mb-1">
            17153233415
          </span>
          <div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <span className="ml-1 inline text-gray-dark text-xs"></span>
          </div>
        </div>
        <div className="flex-1 text-right">
          <div>
            <span className="text-red text-base mr-1">Review</span>
          </div>
        </div>
      </Link>

      <Link to="/clients/client-2" className="py-4 border-b border-grey-light flex">
        <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-green-light text-white">
          <div className="avatar-initials">JB</div>
        </div>
        <div className="flex-initial ml-4">
          <span className="text-lg block mb-1">
            Javier Benitez
          </span>
          <div>
            <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
            <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <span className="ml-1 inline text-gray-dark text-xs">Set</span>
          </div>
        </div>
        <div className="flex-1 text-right">
          <div>
            <span className="text-red text-sm mr-1"></span>
            <img src={iconChevronRightGray} className="svg-gray" alt="" />
          </div>
        </div>
      </Link>

      <Link to="/clients/client-4" className="py-4 border-b border-grey-light flex referral-list_reviewed">
        <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-green-light text-white">
          <img src={iconPerson} className="avatar-image" alt="avatar" />
          <div className="avatar-initials"></div>
        </div>
        <div className="flex-initial ml-4">
          <span className="text-lg block mb-1">
            15125551234
          </span>
          <div>
            <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
            <img src={iconCheckboxChecked} className="h-3 w-3 mr-px" alt="" />
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <span className="ml-1 inline text-gray-dark text-xs">Set</span>
          </div>
        </div>
        <div className="flex-1 text-right">
          <div>
            <span className="text-red text-sm mr-1"></span>
            <img src={iconChevronRightGray} className="svg-gray" alt="" />
          </div>
        </div>
      </Link>

      <Link to="/clients/client-5" className="py-4 border-b border-grey-light flex referral-list_dead">
        <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-gray-light text-white">
          <div className="avatar-initials">DJ</div>
        </div>
        <div className="flex-initial ml-4">
          <span className="text-lg block mb-1">
            Deadicous Jones
          </span>
          <div>
            <img src={iconCheckboxGray} className="h-3 w-3 mr-px" alt="" />
            <img src={iconCheckboxGray} className="h-3 w-3 mr-px" alt="" />
            <img src={iconCheckboxGray} className="h-3 w-3 mr-px" alt="" />
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <span className="ml-1 inline text-gray-dark text-xs">Met</span>
          </div>
        </div>
        <div className="flex-1 text-right">
          <div>
            <span className="text-red text-sm mr-1"></span>
            <img src={iconChevronRightGray} className="svg-gray" alt="" />
          </div>
        </div>
      </Link>

      <Link to="/clients/client-5" className="pt-4 flex referral-list_dead">
        <div className="avatar avatar-m rounded-full flex items-center justify-center h-10 w-10 bg-gray-light text-white">
          <img src={iconPerson} className="avatar-image" alt="avatar" />
          <div className="avatar-initials"></div>
        </div>
        <div className="flex-initial ml-4">
          <span className="text-lg block mb-1">
            15128971234
          </span>
          <div>
            <img src={iconCheckboxGray} className="h-3 w-3 mr-px" alt="" />
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <div className="inline-block h-3 w-3 border border-grey-light rounded-full bg-white mr-px"></div>
            <span className="ml-1 inline text-gray-dark text-xs">Talk</span>
          </div>
        </div>
        <div className="flex-1 text-right">
          <div>
            <span className="text-red text-sm mr-1"></span>
            <img src={iconChevronRightGray} className="svg-gray" alt="" />
          </div>
        </div>
      </Link>
    </div>
  </div>
</div>
);

export default ReferralsList;
