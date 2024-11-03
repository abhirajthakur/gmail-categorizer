import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="mx-auto max-w-4xl px-4">
        <Card className="bg-white text-justify shadow-sm">
          <CardContent className="prose max-w-none p-8">
            <h1 className="mb-8 text-3xl font-bold text-gray-900">
              Terms of Service
            </h1>

            <div className="mb-8 text-sm text-gray-600">
              Last Updated: November 3, 2024
            </div>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                1. Agreement to Terms
              </h2>
              <p className="text-gray-700">
                By accessing or using Gmail Categorizer at
                https://gmail-categorizer.vercel.app (the &quot;Service&quot;),
                you agree to be bound by these Terms of Service
                (&quot;Terms&quot;). If you disagree with any part of these
                terms, you do not have permission to access the Service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                2. Description of Service
              </h2>
              <p className="mb-4 text-gray-700">
                Gmail Categorizer is a web application that helps users organize
                and categorize their Gmail messages using automated
                classification algorithms. The Service requires access to
                users&apos; Gmail accounts through Google OAuth authentication.
              </p>
              <p className="text-gray-700">
                While we strive to provide accurate categorization, the Service
                is provided &quot;as is,&quot; and we make no warranties about
                the accuracy or reliability of the categorization results.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                3. User Accounts and Authorization
              </h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">
                  You must have a valid Gmail account to use the Service
                </li>
                <li className="mb-2">
                  You must authorize the Service to access your Gmail account
                  through Google OAuth
                </li>
                <li className="mb-2">
                  You are responsible for maintaining the security of your
                  account credentials
                </li>
                <li className="mb-2">
                  You must notify us immediately of any unauthorized access or
                  security breaches
                </li>
                <li>
                  You may revoke the Service&apos;s access to your Gmail account
                  at any time through your Google Account settings
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                4. Acceptable Use
              </h2>
              <p className="mb-4 text-gray-700">You agree not to:</p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">
                  Use the Service for any illegal purposes
                </li>
                <li className="mb-2">
                  Attempt to interfere with or disrupt the Service
                </li>
                <li className="mb-2">
                  Attempt to access other users&apos; accounts or data
                </li>
                <li className="mb-2">
                  Reverse engineer or attempt to extract the source code of the
                  Service
                </li>
                <li>
                  Use the Service in any way that could damage or overburden our
                  systems
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                5. Data Usage and Privacy
              </h2>
              <p className="mb-4 text-gray-700">
                Your use of the Service is also governed by our Privacy Policy,
                which can be found at
                https://gmail-categorizer.vercel.app/privacy-policy. By using
                the Service, you agree to the terms of our Privacy Policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                6. Intellectual Property
              </h2>
              <p className="mb-4 text-gray-700">
                The Service, including its original content, features, and
                functionality, is owned by Gmail Categorizer and is protected by
                international copyright, trademark, patent, trade secret, and
                other intellectual property laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                7. Limitation of Liability
              </h2>
              <p className="mb-4 text-gray-700">
                To the maximum extent permitted by law, Gmail Categorizer shall
                not be liable for any indirect, incidental, special,
                consequential, or punitive damages, or any loss of profits or
                revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses resulting
                from:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li className="mb-2">
                  Your use or inability to use the Service
                </li>
                <li className="mb-2">
                  Any unauthorized access to or use of our servers and/or any
                  personal information stored therein
                </li>
                <li className="mb-2">
                  Any interruption or cessation of transmission to or from the
                  Service
                </li>
                <li>
                  Any bugs, viruses, or other harmful code that may be
                  transmitted through the Service
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                8. Modifications to Terms
              </h2>
              <p className="text-gray-700">
                We reserve the right to modify or replace these Terms at any
                time. If a revision is material, we will provide at least 30
                days&apos; notice prior to any new terms taking effect. What
                constitutes a material change will be determined at our sole
                discretion.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                9. Termination
              </h2>
              <p className="mb-4 text-gray-700">
                We may terminate or suspend your access to the Service
                immediately, without prior notice or liability, for any reason
                whatsoever, including without limitation if you breach the
                Terms.
              </p>
              <p className="text-gray-700">
                Upon termination, your right to use the Service will immediately
                cease. All provisions of the Terms which by their nature should
                survive termination shall survive termination.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="mb-4 text-2xl font-semibold text-gray-800">
                10. Contact Information
              </h2>
              <p className="text-gray-700">
                If you have any questions about these Terms, please contact us
                at:
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
