import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Service | FAZENA",
    description: "Terms of Service for FAZENA - Silicon-to-cell integration for drug discovery.",
    // other metadata
};

const TermsOfServicePage = () => {
    return (
        <>
            <Breadcrumb
                pageName="Terms of Service"
                description="Last updated: February 2026"
            />

            <section className="pb-[120px] pt-[120px]">
                <div className="container">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4 lg:w-8/12">
                            <div>
                                <h2 className="mb-8 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl font-audiowide">
                                    Terms of Service
                                </h2>
                                <div className="mb-10 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        1. Terms
                                    </h3>
                                    <p className="mb-6">
                                        By accessing this Website, accessible from https://fazena.com, you are agreeing to be bound by these Website Terms and Conditions of Use and agree that you are responsible for the agreement with any applicable local laws. If you disagree with any of these terms, you are prohibited from accessing this site. The materials contained in this Website are protected by copyright and trade mark law.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        2. Use License
                                    </h3>
                                    <p className="mb-6">
                                        Permission is granted to temporarily download one copy of the materials on FAZENA's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                                    </p>
                                    <ul className="mb-6 list-disc pl-5">
                                        <li>modify or copy the materials;</li>
                                        <li>use the materials for any commercial purpose or for any public display;</li>
                                        <li>attempt to reverse engineer any software contained on FAZENA's Website;</li>
                                        <li>remove any copyright or other proprietary notations from the materials; or</li>
                                        <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
                                    </ul>
                                    <p className="mb-6">
                                        This will let FAZENA to terminate upon violations of any of these restrictions. Upon termination, your viewing right will also be terminated and you should destroy any downloaded materials in your possession whether it is printed or electronic format.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        3. Disclaimer
                                    </h3>
                                    <p className="mb-6">
                                        All the materials on FAZENA's Website are provided "as is". FAZENA makes no warranties, may it be expressed or implied, therefore negates all other warranties. Furthermore, FAZENA does not make any representations concerning the accuracy or reliability of the use of the materials on its Website or otherwise relating to such materials or any sites linked to this Website.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        4. Limitations
                                    </h3>
                                    <p className="mb-6">
                                        FAZENA or its suppliers will not be hold accountable for any damages that will arise with the use or inability to use the materials on FAZENA's Website, even if FAZENA or an authorize representative of this Website has been notified, orally or written, of the possibility of such damage. Some jurisdiction does not allow limitations on implied warranties or limitations of liability for incidental damages, these limitations may not apply to you.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        5. Revisions and Errata
                                    </h3>
                                    <p className="mb-6">
                                        The materials appearing on FAZENA's Website may include technical, typographical, or photographic errors. FAZENA will not promise that any of the materials in this Website are accurate, complete, or current. FAZENA may change the materials contained on its Website at any time without notice. FAZENA does not make any commitment to update the materials.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        6. Links
                                    </h3>
                                    <p className="mb-6">
                                        FAZENA has not reviewed all of the sites linked to its Website and is not responsible for the contents of any such linked site. The presence of any link does not imply endorsement by FAZENA of the site. The use of any linked website is at the user's own risk.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        7. Site Terms of Use Modifications
                                    </h3>
                                    <p className="mb-6">
                                        FAZENA may revise these Terms of Use for its Website at any time without prior notice. By using this Website, you are agreeing to be bound by the current version of these Terms and Conditions of Use.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        8. Your Privacy
                                    </h3>
                                    <p className="mb-6">
                                        Please read our Privacy Policy.
                                    </p>

                                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white font-audiowide">
                                        9. Governing Law
                                    </h3>
                                    <p className="mb-6">
                                        Any claim related to FAZENA's Website shall be governed by the laws of UA without regards to its conflict of law provisions.
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

export default TermsOfServicePage;
