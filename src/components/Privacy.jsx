import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="app">
      <div className="mx-auto w-5/6 pb-20">
        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
              Privacy Policy for MakeMySoftware
            </h1>
            <p className="text-gray-700">Effective Date: 25/02/2025</p>

            {/* Section 1: Introduction */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to MakeMySoftware. We value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy explains how we collect, use, and safeguard your data when
                you use our services. By accessing or using our website, products,
                or services, you agree to the practices described in this policy.
              </p>
            </section>

            {/* Section 2: Information Collection */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">2. Information Collection</h2>
              <p className="text-gray-700">
                We collect information from you when you use our website, register
                for an account, subscribe to newsletters, or interact with our
                services. The information may include personal details such as name,
                email address, phone number, and payment information.
              </p>
            </section>

            {/* Section 3: Use of Information */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">3. Use of Information</h2>
              <p className="text-gray-700">
                We use the information we collect to improve our services, process
                transactions, respond to inquiries, and communicate updates regarding
                our services. We may also use the information to personalize your
                experience with our website.
              </p>
            </section>

            {/* Section 4: Data Security */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">4. Data Security</h2>
              <p className="text-gray-700">
                We implement various security measures to protect your personal
                information from unauthorized access, alteration, or disclosure.
                However, no method of transmission over the internet is 100% secure,
                and we cannot guarantee the absolute security of your information.
              </p>
            </section>

            {/* Section 5: Sharing of Information */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">5. Sharing of Information</h2>
              <p className="text-gray-700">
                We do not sell, trade, or rent your personal information to third
                parties. We may share your information with trusted partners and
                service providers to assist in operating our website, conducting
                business, or providing services, but these parties are obligated to
                keep the information confidential.
              </p>
            </section>

            {/* Section 6: Cookies */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">6. Cookies</h2>
              <p className="text-gray-700">
                Our website uses cookies to enhance user experience, analyze site
                traffic, and improve our services. You can control the use of cookies
                through your browser settings.
              </p>
            </section>

            {/* Section 7: Your Rights */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">7. Your Rights</h2>
              <p className="text-gray-700">
                You have the right to access, update, or delete your personal
                information. If you wish to exercise any of these rights, please
                contact us at the details provided below.
              </p>
            </section>

            {/* Section 8: Third-Party Links */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">8. Third-Party Links</h2>
              <p className="text-gray-700">
                Our website may contain links to third-party websites. We are not
                responsible for the privacy practices or the content of these websites.
                Please review their privacy policies before providing any personal
                information.
              </p>
            </section>

            {/* Section 9: Contact Information */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">9. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions or concerns about this Privacy Policy,
                please feel free to contact us.
              </p>
              <p className="text-orange-700 font-semibold mt-1">MakeMySoftware</p>
              <p className="text-gray-700">
                Address: Rangamati, Ramthenga, Coochbehar, India - 735211
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

export default PrivacyPolicy;
