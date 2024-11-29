import React from "react";
import team_img from "../assets/images/team.jpg";
import team_img2 from "../assets/images/profile2.jpg";

const Team = () => {
  return (
    <div className="py-10">
      <div className="w-mobile md:w-containerWidth mx-auto ">
        {" "}
        <h2 className="md:text-xl text-lg"> OUR TEAM</h2>
        <p className="text-primaryRed pb-5">
          Meet our creative team members behind our success.
        </p>
        <div className="grid md:grid-cols-4  gap-5">
          {team.map(() => {
            return (
              <div className="relative">
                <div className="h-[400px] ">
                  <img
                    className="h-full w-full rounded-md "
                    src={team_img2}
                    alt=""
                  />
                </div>
                {/* <div className="absolute bg-secondaryBlue bottom-0 w-3/4 mx-auto"> */}
                <div
                  className="absolute  text-white w-3/4 left-1/2 bottom-8 transform -translate-x-1/2  p-2 rounded-xl"
                  style={{ backgroundColor: "rgba(29, 78, 216, 0.6)" }}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">John Doe</p>
                      <p className="text-sm">Sales officer</p>
                    </div>
                    <div className="space-x-2">
                      <ion-icon name="logo-facebook"></ion-icon>
                      <ion-icon name="logo-linkedin"></ion-icon>
                      <ion-icon name="logo-instagram"></ion-icon>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
const team = [1, 2, 3, 4];
