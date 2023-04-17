import React from "react";

const CheckOut = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="Kurale text-3xl font-semibold ml-6 md:ml-0">CheckOut</h1>
      <div className="my-14 flex-col-reverse lg:flex-row flex items-center justify-center lg:justify-evenly">
        <div className="mt-10 md:mt-0">
          <h1 className="Kurale text-3xl font-semibold tracking-wider ml-6 md:ml-0">
            Billing Details
          </h1>
          <form className="mt-5 px-5 md:px-0">
            <div className="my-2 md:space-x-2 space-y-2 md:space-y-0">
              <select className="p-2 border border-red-500 rounded-sm focus:outline-none md:w-56 w-full">
                <option value="Afghanistan +93">Afghanistan +93</option>
                <option value="Albania +355">Albania +355</option>
                <option value="Bangladesh +880">Bangladesh +880</option>
                <option value="Barbados +1">Barbados +1</option>
                <option value="Norway +47">Norway +47</option>
                <option value="Russia +7">Russia +7</option>
                <option value="United Kingdom +44">United Kingdom +44</option>
                <option value="United States of America +1">
                  United States of America +1
                </option>
              </select>
              <input
                type="number"
                placeholder="Phone Number"
                className="border border-red-500 rounded-sm p-2 focus:outline-none  md:w-56 w-full"
              />
            </div>
            <div className="my-2 md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="text"
                className="border border-red-500 rounded-sm py-2 px-1  md:w-56 w-full focus:outline-none"
                placeholder="First Name"
              />
              <input
                type="text"
                className="border border-red-500 rounded-sm py-2 px-1 md:w-56 w-full  focus:outline-none"
                placeholder="Last Name"
              />
            </div>
            <div className="my-2 md:space-x-2 space-y-2 md:space-y-0">
              <input
                type="text"
                className="border border-red-500 rounded-sm py-2 px-1 md:w-56 w-full focus:outline-none"
                placeholder="Address"
              />
              <input
                type="email"
                className="border border-red-500 rounded-sm py-2 px-1 md:w-56 w-full focus:outline-none"
                placeholder="Email for Update"
              />
            </div>
            <div className="my-2 md:space-x-2 space-y-2 md:space-y-0">
              <select className="p-2 border border-red-500 rounded-sm focus:outline-none md:w-56 w-full ">
                <option value="Austin">Austin</option>
                <option value="San Francisco">San Francisco</option>
                <option value="New York">New York</option>
                <option value="Seattle">Seattle</option>
                <option value="Chicago">Chicago</option>
                <option value="Denver">Denver</option>
                <option value="Boston">Boston</option>
                <option value="Los Angeles">Los Angeles</option>
              </select>
              <input
                type="number"
                className="border border-red-500 rounded-sm py-2 px-1 md:w-56 w-full focus:outline-none"
                placeholder="Postal Code"
              />
            </div>
            <div className="my-2 md:space-x-2 md:flex items-start  space-y-2 md:space-y-0">
              <div className="flex flex-col items-start">
                <select className="p-2 border border-red-500 rounded-sm focus:outline-none md:w-56 w-full ">
                  <option value="Afghanistan">Afghanistan</option>
                  <option value="Albania">Albania</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Barbados">Barbados</option>
                  <option value="Norway">Norway</option>
                  <option value="Russia">Russia</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="United States of America">
                    United States of America
                  </option>
                </select>
                <button className="mt-5 px-3 py-2 bg-red-500 rounded-md text-white text-lg font-semibold w-full hidden md:block">
                  Submit
                </button>
              </div>
              <textarea
                className="border border-red-500 md:w-56 w-full p-2 focus:outline-none"
                placeholder="Leave a note (Optional)"
                rows="5"
              ></textarea>
            </div>
            <button className="mt-5 px-3 py-2 bg-red-500 rounded-md text-white text-lg font-semibold w-full md:hidden">
              Submit
            </button>
          </form>
        </div>
        <div>
          <div>
            <h1 className="Kurale text-3xl font-semibold">Delivery Method</h1>
            <div className="mt-3">
              <input type="radio" name="payment" id="take" />
              <label htmlFor="take" className="ml-1">
                Take Away
              </label>
            </div>
            <div className="mt-1">
              <input type="radio" name="payment" id="online" />
              <label htmlFor="online" className="ml-1">
                Online Payment
              </label>
            </div>
          </div>
          <div className="mt-5">
            <h1 className="Kurale text-3xl font-semibold">Total Amount</h1>
            <p className="mt-3">SubTotal : $10.00 + 10%</p>
            <p className="mt-1">Total Amount: $10.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
