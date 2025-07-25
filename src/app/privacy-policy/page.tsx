import type { Metadata } from "next";
import { generateSEOMetadata } from '@/lib/seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'

export const metadata: Metadata = generateSEOMetadata({
  title: 'Privacy Policy - Y-Be Agency',
  description: 'Learn how Y-Be Agency collects, uses, and protects your personal information. Our commitment to your privacy and data security.',
  keywords: [
    'privacy policy',
    'data protection',
    'personal information',
    'GDPR compliance',
    'data security',
    'privacy rights'
  ],
  ogType: 'website',
  noindex: false
})

export default function PrivacyPolicy() {
  return (
    <div>
      {/* Privacy Policy Header */}
      <Section background="navy" padding="lg">
        <Container>
          <div className="text-center py-16">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-yb-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-yb-beige-light max-w-3xl mx-auto leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="mt-8 text-sm text-yb-beige-light">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
        </Container>
      </Section>

      {/* Privacy Policy Content */}
      <Section background="white" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto space-y-8">
            
            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Information We Collect
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Contact us through our website forms</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Request a consultation or quote</li>
                  <li>Communicate with us via email or phone</li>
                </ul>
                <p>
                  This may include your name, email address, phone number, company name, and any other information you choose to provide.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Comply with legal obligations</li>
                  <li>Protect our rights and prevent fraud</li>
                </ul>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Information Sharing
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  We do not sell, trade, or otherwise transfer your personal information to third parties except:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>With your explicit consent</li>
                  <li>To trusted service providers who assist us in operating our website</li>
                  <li>When required by law or to protect our legal rights</li>
                  <li>In connection with a business transfer or merger</li>
                </ul>
                <p>
                  Any third-party service providers are bound by confidentiality agreements and are prohibited from using your information for any other purpose.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Cookies and Tracking
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  Our website may use cookies and similar tracking technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Provide personalized content and advertisements</li>
                  <li>Improve our website functionality</li>
                </ul>
                <p>
                  You can control cookies through your browser settings, though some features of our website may not function properly if cookies are disabled.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Data Security
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Secure servers and encrypted data transmission</li>
                  <li>Access controls and authentication procedures</li>
                  <li>Regular security assessments and updates</li>
                  <li>Employee training on data protection practices</li>
                </ul>
                <p>
                  However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Your Rights
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The right to access and receive a copy of your personal information</li>
                  <li>The right to correct inaccurate or incomplete information</li>
                  <li>The right to delete your personal information</li>
                  <li>The right to restrict or object to certain processing</li>
                  <li>The right to data portability</li>
                  <li>The right to withdraw consent at any time</li>
                </ul>
                <p>
                  To exercise these rights, please contact us using the information provided below.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Third-Party Links
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party websites you visit.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Children&apos;s Privacy
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
                </p>
              </div>
            </Card>

            <Card className="p-8">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Changes to This Policy
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  We may update this privacy policy from time to time to reflect changes in our practices or applicable laws. We will notify you of any material changes by posting the updated policy on our website and updating the &ldquo;Last updated&rdquo; date at the top of this page.
                </p>
              </div>
            </Card>

            <Card className="p-8 bg-yb-beige bg-opacity-10">
              <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
                Contact Us
              </h2>
              <div className="space-y-4 text-yb-navy-light">
                <p>
                  If you have any questions about this privacy policy or our data practices, please contact us:
                </p>
                <div className="space-y-2">
                  <p><strong>Email:</strong> privacy@y-be.tech</p>
                  <p><strong>Address:</strong> [Your Business Address]</p>
                  <p><strong>Phone:</strong> [Your Phone Number]</p>
                </div>
                <p className="text-sm mt-4">
                  We will respond to your inquiry within a reasonable timeframe, typically within 30 days.
                </p>
              </div>
            </Card>

          </div>
        </Container>
      </Section>
    </div>
  )
}
