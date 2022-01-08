import Layout from "../components/Layout";
import Head from "next/head";
import { fadeAnimation, triggerYSlide } from "../styles/animations";
import { useLayoutEffect } from "react";

function privacyPolicy() {
  useLayoutEffect(() => {
    fadeAnimation(".fade-privacy");
    // fadeAnimation(".fade-consent");
    // triggerXSlide(".left");
    // triggerXSlide(".right");

    // information we collect section
    triggerYSlide(".slide-top-collect");
    triggerYSlide(".slide-top-infowcp1");
    triggerYSlide(".slide-top-infowcp2");
    // log files slide
    triggerYSlide(".slide-top-log");
    // cookies and web beacons section
    triggerYSlide(".slide-top-cookies");
    // advertising partners and privacy policy section
    triggerYSlide(".slide-top-advertising");
    // advertising partners and privacy policy section
    triggerYSlide(".slide-top-third-party");
    // ccpa section
    triggerYSlide(".slide-top-ccpa");
    // gdpr section
    triggerYSlide(".slide-top-gdpr");
    // childrens information section
    triggerYSlide(".slide-top-childrens-info");
  }, []);
  return (
    <>
      <Head>
        <title>Privacy-policy - Subash</title>
      </Head>
      <Layout>
        {/* <div className="h-screen bg-red-200">
         
        </div> */}
        <div className="mt-12 mx-5 md:mx-auto  px-5 max-w-[70ch]">
          <div className="fade-privacy">
            <h1 className=" text-3xl  font-semibold mb-12">
              Privacy Policy for using this site
            </h1>

            <p className=" mb-5 ">
              At ChaudharySubash, accessible from chaudharysubash.com.np, one of
              our main priorities is the privacy of our visitors. This Privacy
              Policy document contains types of information that is collected
              and recorded by ChaudharySubash and how we use it.
            </p>

            <p className=" mb-5 ">
              If you have additional questions or require more information about
              our Privacy Policy, do not hesitate to contact us.
            </p>

            <p className=" mb-5 ">
              This Privacy Policy applies only to our online activities and is
              valid for visitors to our website with regards to the information
              that they shared and/or collect in ChaudharySubash. This policy is
              not applicable to any information collected offline or via
              channels other than this website.
            </p>
          </div>

          <div className="fade-privacy mt-12">
            <h2 className=" text-xl font-semibold mb-4  ">Consent</h2>

            <p className=" mb-5 ">
              By using our website, you hereby consent to our Privacy Policy and
              agree to its terms.
            </p>
          </div>

          <div className="fade-privacy mt-12">
            <h2 className=" text-xl font-semibold mb-4  ">
              Information we collect
            </h2>

            <p className=" mb-5 ">
              The personal information that you are asked to provide, and the
              reasons why you are asked to provide it, will be made clear to you
              at the point we ask you to provide your personal information.
            </p>
            <p className="mb-5 slide-top-infowcp1 ">
              If you contact us directly, we may receive additional information
              about you such as your name, email address, phone number, the
              contents of the message and/or attachments you may send us, and
              any other information you may choose to provide.
            </p>
            <p className="mb-5 slide-top-infowcp2">
              When you register for an Account, we may ask for your contact
              information, including items such as name, company name, address,
              email address, and telephone number.
            </p>
          </div>

          <div className="slide-top-collect mt-12">
            <h2 className="text-xl font-semibold mb-4  ">
              How we use your information
            </h2>

            <p className="mb-5 ">
              We use the information we collect in various ways, including to:
            </p>

            <ul className="mb-5 text-gray-400 ">
              <li>Provide, operate, and maintain our website.</li>
              <li>Improve, personalize, and expand our website.</li>
              <li>Understand and analyze how you use our website.</li>
              <li>
                Develop new products, services, features, and functionality.
              </li>
              <li>
                Communicate with you, either directly or through one of our
                partners, including for customer service, to provide you with
                updates and other information relating to the website, and for
                marketing and promotional purposes.
              </li>
              <li>Send you emails.</li>
              <li>Find and prevent fraud.</li>
            </ul>
          </div>

          <div className="slide-top-log mt-12">
            <h2 className="text-xl font-semibold mb-4  ">Log Files</h2>

            <p className="mb-5 ">
              ChaudharySubash follows a standard procedure of using log files.
              These files log visitors when they visit websites. All hosting
              companies do this and a part of hosting services' analytics. The
              information collected by log files include internet protocol (IP)
              addresses, browser type, Internet Service Provider (ISP), date and
              time stamp, referring/exit pages, and possibly the number of
              clicks. These are not linked to any information that is personally
              identifiable. The purpose of the information is for analyzing
              trends, administering the site, tracking users' movement on the
              website, and gathering demographic information.
            </p>
          </div>

          <div className="slide-top-cookies mt-12">
            <h2 className="text-xl font-semibold mb-4  ">
              Cookies and Web Beacons
            </h2>

            <p className="mb-5 ">
              Like any other website, ChaudharySubash uses 'cookies'. These
              cookies are used to store information including visitors'
              preferences, and the pages on the website that the visitor
              accessed or visited. The information is used to optimize the
              users' experience by customizing our web page content based on
              visitors' browser type and/or other information.
            </p>
          </div>

          <div className="slide-top-advertising mt-12">
            <h2 className="text-xl font-semibold mb-4  ">
              Advertising Partners Privacy Policies
            </h2>

            <p className="mb-5 ">
              You may consult this list to find the Privacy Policy for each of
              the advertising partners of ChaudharySubash.
            </p>

            <p className="mb-5 ">
              Third-party ad servers or ad networks uses technologies like
              cookies, JavaScript, or Web Beacons that are used in their
              respective advertisements and links that appear on
              ChaudharySubash, which are sent directly to users' browser. They
              automatically receive your IP address when this occurs. These
              technologies are used to measure the effectiveness of their
              advertising campaigns and/or to personalize the advertising
              content that you see on websites that you visit.
            </p>

            <p className="mb-5 ">
              Note that ChaudharySubash has no access to or control over these
              cookies that are used by third-party advertisers.
            </p>
          </div>

          <div className="slide-top-third-party mt-12">
            <h2 className="text-xl font-semibold mb-4  ">
              Third Party Privacy Policies
            </h2>

            <p className="mb-5 ">
              ChaudharySubash's Privacy Policy does not apply to other
              advertisers or websites. Thus, we are advising you to consult the
              respective Privacy Policies of these third-party ad servers for
              more detailed information. It may include their practices and
              instructions about how to opt-out of certain options.
            </p>

            <p className="mb-5 ">
              You can choose to disable cookies through your individual browser
              options. To know more detailed information about cookie management
              with specific web browsers, it can be found at the browsers'
              respective websites.
            </p>
          </div>

          <div className="slide-top-ccpa mt-12">
            <h2 className="text-xl font-semibold mb-4  ">
              CCPA Privacy Rights (Do Not Sell My Personal Information)
            </h2>

            <p className="mb-5 ">
              Under the CCPA, among other rights, California consumers have the
              right to:
            </p>
            <p className="mb-5 ">
              Request that a business that collects a consumer's personal data
              disclose the categories and specific pieces of personal data that
              a business has collected about consumers.
            </p>
            <p className="mb-5 ">
              Request that a business delete any personal data about the
              consumer that a business has collected.
            </p>
            <p className="mb-5 ">
              Request that a business that sells a consumer's personal data, not
              sell the consumer's personal data.
            </p>
            <p className="mb-5 ">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>

          <div className="slide-top-gdpr mt-12">
            <h2 className="text-xl font-semibold mb-4  ">
              GDPR Data Protection Rights
            </h2>

            <p className="mb-5 ">
              We would like to make sure you are fully aware of all of your data
              protection rights. Every user is entitled to the following:
            </p>
            <p className="mb-5 ">
              The right to access - You have the right to request copies of your
              personal data. We may charge you a small fee for this service.
            </p>
            <p className="mb-5 ">
              The right to rectification - You have the right to request that we
              correct any information you believe is inaccurate. You also have
              the right to request that we complete the information you believe
              is incomplete.
            </p>
            <p className="mb-5 ">
              The right to erasure - You have the right to request that we erase
              your personal data, under certain conditions.
            </p>
            <p className="mb-5 ">
              The right to restrict processing - You have the right to request
              that we restrict the processing of your personal data, under
              certain conditions.
            </p>
            <p className="mb-5 ">
              The right to object to processing - You have the right to object
              to our processing of your personal data, under certain conditions.
            </p>
            <p className="mb-5 ">
              The right to data portability - You have the right to request that
              we transfer the data that we have collected to another
              organization, or directly to you, under certain conditions.
            </p>
            <p className="mb-5 ">
              If you make a request, we have one month to respond to you. If you
              would like to exercise any of these rights, please contact us.
            </p>
          </div>

          <div className="slide-top-childrens-info mt-12">
            <h2 className="text-xl font-semibold mb-4  ">
              Children's Information
            </h2>

            <p className="mb-5 ">
              Another part of our priority is adding protection for children
              while using the internet. We encourage parents and guardians to
              observe, participate in, and/or monitor and guide their online
              activity.
            </p>

            <p className="mb-5 ">
              ChaudharySubash does not knowingly collect any Personal
              Identifiable Information from children under the age of 13. If you
              think that your child provided this kind of information on our
              website, we strongly encourage you to contact us immediately and
              we will do our best efforts to promptly remove such information
              from our records.
            </p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default privacyPolicy;
