import { Link } from "react-router-dom";

const HelpPage = () => {
  return (
    <div className="app">
      <div className="mx-auto w-5/6 pb-20">
        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
              Help & Support - MakeMySoftware
            </h1>
            <p className="text-gray-700">Effective Date: 25/02/2025</p>

            {/* Section 1: Introduction */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">1. Introduction</h2>
              <p className="text-gray-700">
                Welcome to the Help & Support page for MakeMySoftware. We are here 
                to assist you with any issues, questions, or concerns regarding our 
                products and services. Below, you will find answers to common queries 
                and ways to reach our support team.
              </p>
            </section>

            {/* Section 2: Frequently Asked Questions (FAQs) */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">2. Frequently Asked Questions (FAQs)</h2>
              <p className="text-gray-700">
                Here are some common questions we receive from our users:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>How do I create an account?</strong> – You can register on our website by clicking on the "Sign Up" button and following the instructions.</li>
                <li><strong>What services do you offer?</strong> – We provide software development, web & mobile applications, and IT consulting.</li>
                <li><strong>How do I reset my password?</strong> – Click on "Forgot Password" on the login page and follow the instructions.</li>
                <li><strong>Can I request a refund?</strong> – Refunds are processed as per our Refund Policy. Please check the terms or contact support.</li>
              </ul>
            </section>

            {/* Section 3: Technical Support */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">3. Technical Support</h2>
              <p className="text-gray-700">
                If you are experiencing technical difficulties with our software or 
                services, please follow these steps before reaching out:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>Check our <Link to="/faqs" className="text-orange-500 underline">FAQs</Link> for a solution.</li>
                <li>Ensure you have the latest version of our software installed.</li>
                <li>Restart your device and try again.</li>
                <li>Contact our support team if the issue persists.</li>
              </ul>
            </section>

            {/* Section 4: Billing & Payments */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">4. Billing & Payments</h2>
              <p className="text-gray-700">
                For questions related to payments, invoices, and refunds, please visit 
                our <Link to="/billing" className="text-orange-500 underline">Billing</Link> page or contact our finance team.
              </p>
            </section>

            {/* Section 5: Contact Support */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">5. Contact Support</h2>
              <p className="text-gray-700">
                If you need further assistance, our support team is here to help.
                You can reach us through the following methods:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Email:</strong> kartikpaul330@gmail.com</li>
                <li><strong>Phone:</strong> +91 7363928225</li>
                <li><strong>Live Chat:</strong> Available on our website during business hours.</li>
                <li><strong>Support Ticket:</strong> Submit a request through our <Link to="/support" className="text-orange-500 underline">Support Portal</Link>.</li>
              </ul>
            </section>

            {/* Section 6: Business Hours */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">6. Business Hours</h2>
              <p className="text-gray-700">
                Our customer support team is available during the following hours:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2">
                <li><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM (IST)</li>
                <li><strong>Saturday:</strong> 10:00 AM - 4:00 PM (IST)</li>
                <li><strong>Sunday & Public Holidays:</strong> Closed</li>
              </ul>
            </section>

            {/* Section 7: Feedback & Suggestions */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">7. Feedback & Suggestions</h2>
              <p className="text-gray-700">
                We value your feedback! If you have suggestions for improving our 
                services, please email us at <strong>kartikpaul330@gmail.com</strong>.
              </p>
            </section>

            {/* Section 8: Visit Our Office */}
            <section className="mt-4">
              <h2 className="text-xl font-semibold">8. Visit Our Office</h2>
              <p className="text-gray-700">
                If you prefer face-to-face support, you can visit our office at:
              </p>
              <p className="text-orange-700 font-semibold mt-1">MakeMySoftware</p>
              <p className="text-gray-700">
                Address: Rangamati, Ramthenga, Coochbehar, India - 735211
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

export default HelpPage;
