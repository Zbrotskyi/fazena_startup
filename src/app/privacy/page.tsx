import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | FAZENA",
    description: "Privacy Policy for FAZENA - Silicon-to-cell integration for drug discovery.",
    // other metadata
};

const PrivacyPolicyPage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Privacy Policy"
                description="Last updated: February 2026"
            />

            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl font-audiowide">
                                    Privacy Policy
                                </h2>
                                <div className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                                    <p className="mb-6">
                                        At FAZENA, accessible from https://fazena.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by FAZENA and how we use it.
                                    </p>
                                    <p className="mb-6">
                                        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        Log Files
                                    </h3>
                                    <p className="mb-6">
                                        FAZENA follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        Cookies and Web Beacons
                                    </h3>
                                    <p className="mb-6">
                                        Like any other website, FAZENA uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        Privacy Policies
                                    </h3>
                                    <p className="mb-6">
                                        You may consult this list to find the Privacy Policy for each of the advertising partners of FAZENA.
                                    </p>
                                    <p className="mb-6">
                                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on FAZENA, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
                                    </p>
                                    <p className="mb-6">
                                        Note that FAZENA has no access to or control over these cookies that are used by third-party advertisers.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        Third Party Privacy Policies
                                    </h3>
                                    <p className="mb-6">
                                        FAZENA's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                                    </p>
                                    <p className="mb-6">
                                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        Children's Information
                                    </h3>
                                    <p className="mb-6">
                                        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                                    </p>
                                    <p className="mb-6">
                                        FAZENA does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        Online Privacy Policy Only
                                    </h3>
                                    <p className="mb-6">
                                        This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in FAZENA. This policy is not applicable to any information collected offline or via channels other than this website.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        Consent
                                    </h3>
                                    <p className="mb-6">
                                        By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default PrivacyPolicyPage;
