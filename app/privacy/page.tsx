import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <Card className="bg-white text-justify shadow-sm">
          <CardContent className="prose max-w-none p-8">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">
              Privacy Policy
            </h1>

            <div className="mb-8 text-sm text-gray-600">
              Last Updated: November 3, 2024
            </div>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Introduction
              </h2>
              <p className="text-gray-700">
                Welcome to Gmail Categorizer (&quot;we,&quot; &quot;our,&quot;
                or &quot;us&quot;). This Privacy Policy explains how we collect,
                use, disclose, and safeguard your information when you use our
                service at https://gmail-categorizer.vercel.app (the
                &quot;Service&quot;). Please read this privacy policy carefully.
                If you do not agree with the terms of this privacy policy,
                please do not access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Information We Collect
              </h2>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Email Data
              </h3>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  We access your Gmail messages only after you explicitly grant
                  permission through Google OAuth
                </li>
                <li>
                  We process email subject lines and content for categorization
                  purposes
                </li>
                <li>
                  We do not store the content of your emails on our servers
                </li>
                <li>
                  All email processing is done in real-time and temporarily in
                  memory
                </li>
              </ul>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Account Information
              </h3>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>
                  Basic Google account information (email address and name) when
                  you authorize the application
                </li>
                <li>User preferences and categorization settings</li>
                <li>Authentication tokens provided by Google OAuth</li>
              </ul>

              <h3 className="mb-3 text-xl font-medium text-gray-800">
                Usage Data
              </h3>
              <p className="mb-2 text-gray-700">
                We automatically collect certain information about how you
                interact with our Service:
              </p>
              <ul className="mb-4 list-disc pl-6 text-gray-700">
                <li>Browser type and version</li>
                <li>Time and date of access</li>
                <li>Pages viewed</li>
                <li>Time spent on pages</li>
                <li>Basic device information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                How We Use Your Information
              </h2>
              <p className="mb-2 text-gray-700">
                We use the collected information for the following purposes:
              </p>
              <ol className="list-decimal pl-6 text-gray-700">
                <li>To provide and maintain our Service</li>
                <li>To categorize your emails according to your preferences</li>
                <li>To improve our categorization algorithms</li>
                <li>To respond to your requests or inquiries</li>
                <li>To detect and prevent technical issues</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Data Security
              </h2>
              <p className="mb-2 text-gray-700">
                We implement appropriate technical and organizational security
                measures to protect your personal information, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Encryption of data in transit using SSL/TLS</li>
                <li>Secure OAuth 2.0 implementation for Gmail access</li>
                <li>Regular security assessments</li>
                <li>Limited data retention periods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                Contact Us
              </h2>
              <p className="text-gray-700">
                If you have questions about this Privacy Policy, please contact
                us at:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>
                  Email:{" "}
                  <Link href="mailto:abhirajthakur124@gmail.com">
                    abhirajthakur124@gmail.com
                  </Link>
                </li>
                <li>
                  Website:{" "}
                  <Link href="https://gmail-categorizer.vercel.app">
                    https://gmail-categorizer.vercel.app
                  </Link>
                </li>
              </ul>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
