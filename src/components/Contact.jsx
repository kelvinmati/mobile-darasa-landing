import React from "react";
import contact from "../assets/images/contact.jpg";
const Contact = () => {
  return (
    <div id="contact" className="md:pt-16 pb-28">
      <div className=" w-mobile md:w-containerWidth mx-auto grid md:grid-cols-3 md:rounded-3xl bg-white items-center">
        <div className="p-7 space-y-8 md:col-span-2">
          <p className="md:text-4xl text-xl">
            Let’s discuss how Mobile Darasa is a valuable asset in running your
            institution.
          </p>
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
            className=" px-6 py-2 bg-primaryRed text-white rounded-full hover:bg-secondaryRed "
          >
            <span>Contact us</span>{" "}
          </button>
        </div>
        <div>
          <img className="md:rounded-e-3xl" src={contact} alt="" />
        </div>
      </div>
      {/* Contact   form modal */}
      <dialog id="my_modal_3" className="modal  modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className=" text-xl capitalize">Kindly enter your details.</h3>
          <div className="space-y-5">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Fullname</span>
              </div>
              <input
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full "
              />
            </label>
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text font-bold">Email</span>
              </div>
              <input
                type="text"
                placeholder="johndoe@gmail.com"
                className="input input-bordered w-full "
              />
            </label>

            <label className="form-control">
              <div className="label">
                <span className="label-text font-bold">Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Type message here.."
              ></textarea>
            </label>
            <button className=" px-6 py-2 bg-primaryRed text-white rounded-full w-full hover:bg-secondaryRed ">
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Contact;
