import { Link } from "react-router-dom";

const TermsConditions = () => {
  return (
    <div className="app">
      <div className="mx-auto w-5/6 pb-20">
        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
              Terms and Conditions for MakeMySoftware
            </h1>
            <p className="text-gray-700">Effective Date: 25/02/2025</p>

            {/* Section 1: Introduction */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to MakeMySoftware. By accessing or using our website,
                products, or services, you agree to comply with and be bound by
                these Terms and Conditions. If you do not agree, please do not
                use our services.
              </p>
            </section>

            {/* Section 2: Services */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">2. Services</h2>
              <p className="text-gray-700">
                MakeMySoftware provides custom software development, web and
                mobile applications, IT consulting, and other technology
                solutions. Our services are subject to the specific terms
                outlined in the service agreements.
              </p>
            </section>

            {/* Section 3: User Responsibilities */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">3. User Responsibilities</h2>
              <p className="text-gray-700">
                Users agree to provide accurate information, comply with legal
                regulations, and not misuse our software or services in any
                unlawful or harmful manner.
              </p>
            </section>

            {/* Section 4: Intellectual Property */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">
                4. Intellectual Property Rights
              </h2>
              <p className="text-gray-700">
                All software, content, and intellectual property developed by
                MakeMySoftware remain the exclusive property of the company,
                unless otherwise stated in a contract.
              </p>
            </section>

            {/* Section 5: Payment & Refunds */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">5. Payment & Refund Policy</h2>
              <p className="text-gray-700">
                Payments for our services must be made as per the agreed terms.
                Refunds, if applicable, are subject to the conditions outlined
                in our refund policy.
              </p>
            </section>

            {/* Section 6: Limitation of Liability */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">
                6. Limitation of Liability
              </h2>
              <p className="text-gray-700">
                MakeMySoftware is not liable for any direct, indirect,
                incidental, or consequential damages resulting from the use of
                our software, services, or website.
              </p>
            </section>

            {/* Section 7: Termination of Services */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">
                7. Termination of Services
              </h2>
              <p className="text-gray-700">
                We reserve the right to terminate access to our services for
                violations of these Terms or any other reason at our discretion.
              </p>
            </section>

            {/* Section 8: Privacy & Data Protection */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">
                8. Privacy & Data Protection
              </h2>
              <p className="text-gray-700">
                We collect and handle user data as outlined in our Privacy
                Policy. By using our services, you consent to our data
                collection and usage practices.
              </p>
            </section>

            {/* Section 9: Contact Information */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or concerns about these Terms &
                Conditions, feel free to reach out to us.
              </p>
              <p className="text-orange-700 font-semibold mt-1">MakeMySoftware</p>
              <p className="text-gray-700">
                Address: Rangamati,Ramthenga,Coochnehar,India-735211
              </p>
              <p className="text-gray-700">
                Email: <strong>kartikpaul330@gmail.com</strong>
              </p>
              <p className="text-gray-700">
                Phone: <strong>+91 7363928225</strong>
              </p>
            </section>

            {/* Back to Home Link */}
            <Link to="/" className="text-orange-500 underline mt-4 inline-block">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
