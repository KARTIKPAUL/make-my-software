import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const faqs = [
  {
    question: "How do I create an account?",
    answer:
      "You can register on our website by clicking on the 'Sign Up' button and following the instructions.",
  },
  {
    question: "What services do you offer?",
    answer:
      "We provide software development, web & mobile applications, and IT consulting services.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click on 'Forgot Password' on the login page and follow the instructions to reset your password.",
  },
  {
    question: "Can I request a refund?",
    answer:
      "Refunds are processed as per our Refund Policy. Please check the terms or contact support for further assistance.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our support team via email at support@makemysoftware.com or call us at +91 7363928225.",
  },
  {
    question: "Is my personal data safe with you?",
    answer:
      "Yes, we implement strict security measures to protect your personal information. Please refer to our Privacy Policy for more details.",
  },
  {
    question: "Do you offer custom software development?",
    answer:
      "Yes, we provide custom software development services based on your specific business needs. Contact us for a consultation.",
  },
  {
    question: "How long does it take to develop a custom application?",
    answer:
      "The timeline depends on the complexity and features required. On average, it takes 4-12 weeks for a fully functional application.",
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer:
      "Yes, we offer ongoing support and maintenance services to ensure your software runs smoothly after deployment.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards, net banking, UPI, and PayPal for international clients.",
  },
  {
    question: "Can I upgrade or downgrade my subscription plan?",
    answer:
      "Yes, you can upgrade or downgrade your subscription plan at any time through your account settings.",
  },
  {
    question: "Do you provide free trials for your services?",
    answer:
      "Yes, we offer a free trial for selected services. Check our pricing page for more details.",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="app">
      <div className="mx-auto w-5/6 pb-20">
        <div className="min-h-screen p-6">
          <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold mb-4 text-orange-500">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-700 mb-4">
              Here are some common questions and answers to help you.
            </p>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b pb-2">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full text-left text-lg font-semibold text-gray-800 p-2"
                  >
                    {faq.question}
                    <span className="text-orange-500">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-gray-700 p-2"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </div>
              ))}
            </div>

            {/* Back to Home Link */}
            <Link
              to="/"
              className="text-orange-500 underline mt-6 inline-block"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
