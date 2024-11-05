import React from "react";

const Features = () => {
  return (
    <div className="">
      <h2 className="w-mobile  mx-auto py-3 text-xl">
        KEY FEATURES AND FUNCTIONALITIES
      </h2>
      <div className="grid md:grid-cols-2 text-white ">
        <div className="bg-secondaryRed  py-5 md:pl-6 ">
          <div className="w-mobile md:w-containerWidth mx-auto space-y-5">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-bold ">
                <ion-icon size="large" name="checkmark-circle"></ion-icon>
                <span>Branded & Customised Learning Environment</span>
              </div>
              <div className="text-gray-200">
                <p>
                  <span className="text-primaryBlue font-bold">
                    Institutional Branding:
                  </span>{" "}
                  Each institution’s Mobile Darasa instance is tailored to
                  reflect its unique branding elements logo, color scheme, and
                  visual identity—creating a cohesive and familiar experience
                  for students.
                </p>
              </div>
              <div className="text-gray-200">
                <p>
                  <span className="text-primaryBlue font-bold">
                    White-Label Solution:
                  </span>{" "}
                  Mobile Darasa’s brand is completely invisible to the public,
                  allowing institutions to present the platform as their own.
                  students and faculty interact solely with the institution’s
                  branded environment, reinforcing institutional credibility and
                  ownership.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-bold ">
                <ion-icon size="large" name="checkmark-circle"></ion-icon>
                <span>Seamless Course Management and Content Delivery.</span>
              </div>
              <div className="text-gray-200">
                <p>
                  <span className="text-primaryBlue font-bold">
                    Flexible Content Uploads:
                  </span>{" "}
                  Institutions can easily upload diverse educational content,
                  including videos, documents, quizzes, and assignments, through
                  an intuitive course builder. This flexibility allows them to
                  create customized programs that meet their curriculum and
                  student needs.
                </p>
              </div>
              <div className="text-gray-200">
                <p>
                  <span className="text-primaryBlue font-bold">
                    Scalable Course Management:
                  </span>{" "}
                  The platform can manage multiple programs, classes, and
                  content types, catering to various departments and educational
                  requirements without compromising on speed or accessibility.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-bold ">
                <ion-icon size="large" name="checkmark-circle"></ion-icon>
                <span>Secure, Role-Based Access.</span>
              </div>
              <div className="text-gray-200">
                <p>
                  <span className="text-primaryBlue font-bold">
                    Student and Staff Portals:
                  </span>{" "}
                  Mobile Darasa offers separate access points for students and
                  instructors, each with tailored features. Instructors can
                  manage courses, view student progress, and grade assignments,
                  while students can access course materials, participate in
                  discussions, and submit assignments.
                </p>
              </div>
              <div className="text-gray-200">
                <p>
                  <span className="text-primaryBlue font-bold">
                    Data Privacy and Security:
                  </span>{" "}
                  The platform includes built-in data protection measures,
                  ensuring compliance with industry standards and safeguarding
                  sensitive student information.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primaryBlue  py-5 ">
          <div className="w-mobile mx-auto space-y-5">
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-bold ">
                <ion-icon size="large" name="checkmark-circle"></ion-icon>
                <span>Engagement and Communication Tools</span>
              </div>
              <div className="text-[#D3D3D3]">
                <p>
                  <span className="text-secondaryRed font-bold ">
                    Interactive Features:
                  </span>{" "}
                  Mobile Darasa supports discussion forums, live chat, and video
                  conferencing, enabling real-time interaction and engagement
                  between students and faculty.
                </p>
              </div>
              <div className="text-[#D3D3D3]">
                <p>
                  <span className="text-secondaryRed font-bold">
                    Automated Notifications:
                  </span>{" "}
                  To streamline communication, the platform sends reminders and
                  notifications for upcoming assignments, quizzes, or live
                  sessions, keeping students engaged and on track.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-bold ">
                <ion-icon size="large" name="checkmark-circle"></ion-icon>
                <span>Analytics and Reporting.</span>
              </div>
              <div className="text-[#D3D3D3]">
                <p>
                  <span className="text-secondaryRed font-bold">
                    Student Progress Tracking:
                  </span>{" "}
                  Institutions can monitor individual and collective student
                  progress, providing insights into performance and identifying
                  areas where additional support may be needed.
                </p>
              </div>
              <div className="text-[#D3D3D3]">
                <p>
                  <span className="text-secondaryRed font-bold">
                    Customizable Reports:
                  </span>{" "}
                  Mobile Darasa generates customizable reports on various
                  metrics, from course completion rates to student engagement
                  levels, helping institutions make data-driven decisions.
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 font-bold ">
                <ion-icon size="large" name="checkmark-circle"></ion-icon>
                <span>Ongoing Support and Maintenance.</span>
              </div>
              <div className="text-[#D3D3D3]">
                <p>
                  <span className="text-secondaryRed font-bold">
                    Dedicated Support:
                  </span>{" "}
                  Mobile Darasa provides continuous support, including
                  onboarding training, troubleshooting, and system updates.
                  Institutions can reach out to support teams anytime for
                  assistance with technical or administrative issues.
                </p>
              </div>
              <div className="text-[#D3D3D3]">
                <p>
                  <span className="text-secondaryRed font-bold">
                    Platform Updates:
                  </span>{" "}
                  To ensure optimal performance, Mobile Darasa regularly
                  implements updates to improve security, functionality, and
                  user experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
