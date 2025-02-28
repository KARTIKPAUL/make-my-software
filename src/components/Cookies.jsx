import { Link } from "react-router-dom";

const CookiesPolicy = () => {
  return (
    <div className="app">
      <div className="mx-auto w-5/6 pb-20">
        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
              Cookies Policy for MakeMySoftware
            </h1>
            <p className="text-gray-700">Effective Date: 25/02/2025</p>

            {/* Section 1: Introduction */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">1. Introduction</h2>
              <p className="text-gray-700">
                This Cookies Policy explains how MakeMySoftware uses cookies and 
                similar tracking technologies on our website. By continuing to 
                use our website, you agree to the use of cookies as described in 
                this policy.
              </p>
            </section>

            {/* Section 2: What Are Cookies? */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">2. What Are Cookies?</h2>
              <p className="text-gray-700">
                Cookies are small text files stored on your device when you visit a 
                website. They help us improve user experience, analyze site traffic, 
                and understand visitor behavior.
              </p>
            </section>

            {/* Section 3: How We Use Cookies */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">3. How We Use Cookies</h2>
              <p className="text-gray-700">
                We use cookies to:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li>Enhance website functionality</li>
                <li>Analyze traffic and usage patterns</li>
                <li>Remember user preferences and settings</li>
                <li>Provide personalized content and advertisements</li>
              </ul>
            </section>

            {/* Section 4: Types of Cookies We Use */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">4. Types of Cookies We Use</h2>
              <p className="text-gray-700">
                The cookies we use may include:
              </p>
              <ul className="list-disc list-inside text-gray-700">
                <li><strong>Essential Cookies:</strong> Required for website functionality.</li>
                <li><strong>Analytics Cookies:</strong> Help us analyze site traffic.</li>
                <li><strong>Advertising Cookies:</strong> Used to display relevant ads.</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences.</li>
              </ul>
            </section>

            {/* Section 5: Managing Cookies */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">5. Managing Cookies</h2>
              <p className="text-gray-700">
                You can manage your cookie preferences by adjusting your browser 
                settings. Most browsers allow you to block or delete cookies, but 
                this may affect your browsing experience.
              </p>
            </section>

            {/* Section 6: Third-Party Cookies */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">6. Third-Party Cookies</h2>
              <p className="text-gray-700">
                Some third-party services, such as analytics tools and advertisers, 
                may use cookies on our website. We do not control these cookies, 
                and we encourage you to review their respective policies.
              </p>
            </section>

            {/* Section 7: Updates to This Policy */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">7. Updates to This Policy</h2>
              <p className="text-gray-700">
                We may update this Cookies Policy from time to time. Changes will be 
                reflected on this page, and we encourage users to review it regularly.
              </p>
            </section>

            {/* Section 8: Contact Information */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">8. Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Cookies Policy, please reach out to us.
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

export default CookiesPolicy;
