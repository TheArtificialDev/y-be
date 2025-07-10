'use client'

import { useState } from 'react'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Card from '@/components/Card'
import Button from '@/components/Button'

export default function GettingStarted() {
  const [formData, setFormData] = useState({
    businessName: '',
    website: '',
    competitor1: '',
    competitor2: '',
    competitor3: '',
    challenges: [] as string[],
    goals: [] as string[],
    budget: '',
    contactMethod: 'email',
    timeline: 'asap'
  })

  const challenges = [
    'Low website traffic',
    'Poor conversion rates',
    'Invisible online presence',
    'Generic/outdated design',
    'Losing to competitors',
    'Unclear value proposition'
  ]

  const goals = [
    'Increase organic traffic',
    'Improve conversion rates',
    'Build brand authority',
    'Outrank competitors',
    'Generate more leads',
    'Establish market leadership'
  ]

  const handleChallengeChange = (challenge: string) => {
    setFormData(prev => ({
      ...prev,
      challenges: prev.challenges.includes(challenge)
        ? prev.challenges.filter(c => c !== challenge)
        : [...prev.challenges, challenge]
    }))
  }

  const handleGoalChange = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal]
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div>
      {/* Get Started Hero Section */}
      <Section background="navy" padding="xl">
        <Container>
          <div className="text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-yb-white mb-6">
              Claim Your{' '}
              <span className="text-yb-beige">Competitive Edge</span>{' '}
              Today
            </h1>
            <p className="text-xl text-yb-beige-light max-w-3xl mx-auto mb-8 leading-relaxed">
              Get your free competitive analysis and strategic roadmap. 
              See exactly where you stand against your competition and how to dominate your market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm text-yb-beige-light">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                No commitment required
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Results in 48 hours
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                Actionable insights included
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Strategic Intake Form */}
      <Section background="white" padding="xl">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 square-box-beige p-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
                Strategic Intake Form
              </h2>
              <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
                Tell us about your business and we&apos;ll create a customized competitive analysis that shows you exactly how to gain the advantage.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Business Information */}
              <Card className="p-8 square-box">
                <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                  Business Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Business Name *
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData(prev => ({ ...prev, businessName: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                      placeholder="Your business name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Current Website (if any)
                    </label>
                    <input
                      type="url"
                      value={formData.website}
                      onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                </div>
              </Card>

              {/* Competitor Analysis */}
              <Card className="p-8 square-box">
                <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                  Competitor Intelligence
                </h3>
                <p className="text-yb-navy-light mb-6">
                  Who are your main competitors? (This helps us understand your competitive landscape)
                </p>
                <div className="space-y-4">
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Top Competitor #1 *
                    </label>
                    <input
                      type="text"
                      value={formData.competitor1}
                      onChange={(e) => setFormData(prev => ({ ...prev, competitor1: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                      placeholder="Competitor business name or website"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Top Competitor #2
                    </label>
                    <input
                      type="text"
                      value={formData.competitor2}
                      onChange={(e) => setFormData(prev => ({ ...prev, competitor2: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                      placeholder="Competitor business name or website"
                    />
                  </div>
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Top Competitor #3
                    </label>
                    <input
                      type="text"
                      value={formData.competitor3}
                      onChange={(e) => setFormData(prev => ({ ...prev, competitor3: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                      placeholder="Competitor business name or website"
                    />
                  </div>
                </div>
              </Card>

              {/* Challenges & Goals */}
              <Card className="p-8 square-box">
                <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                  Current Challenges
                </h3>
                <p className="text-yb-navy-light mb-6">
                  What challenges are you facing? (Select all that apply)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {challenges.map((challenge) => (
                    <label key={challenge} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.challenges.includes(challenge)}
                        onChange={() => handleChallengeChange(challenge)}
                        className="w-4 h-4 text-yb-beige border-gray-300 rounded focus:ring-yb-beige"
                      />
                      <span className="text-yb-navy">{challenge}</span>
                    </label>
                  ))}
                </div>

                <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                  Your Goals
                </h3>
                <p className="text-yb-navy-light mb-6">
                  What do you want to achieve? (Select all that apply)
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <label key={goal} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.goals.includes(goal)}
                        onChange={() => handleGoalChange(goal)}
                        className="w-4 h-4 text-yb-beige border-gray-300 rounded focus:ring-yb-beige"
                      />
                      <span className="text-yb-navy">{goal}</span>
                    </label>
                  ))}
                </div>
              </Card>

              {/* Budget & Contact */}
              <Card className="p-8 square-box">
                <h3 className="font-heading text-xl font-semibold text-yb-navy mb-6">
                  Project Details
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                    >
                      <option value="">Select your budget range</option>
                      <option value="startup">Startup: $5,000 - $15,000</option>
                      <option value="growth">Growth: $15,000 - $35,000</option>
                      <option value="enterprise">Enterprise: $35,000+</option>
                      <option value="custom">Custom/Discuss</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Preferred Contact Method
                    </label>
                    <select
                      value={formData.contactMethod}
                      onChange={(e) => setFormData(prev => ({ ...prev, contactMethod: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                    >
                      <option value="email">Email</option>
                      <option value="phone">Phone Call</option>
                      <option value="video">Video Call</option>
                    </select>
                  </div>
                </div>
              </Card>

              {/* Submit Button */}
              <div className="text-center">
                <Button type="submit" variant="primary" size="lg" className="px-12">
                  Request My Competitive Analysis
                </Button>
                <p className="text-yb-navy-light text-sm mt-4">
                  We&apos;ll deliver your personalized competitive analysis within 48 hours
                </p>
              </div>
            </form>
          </div>
        </Container>
      </Section>

      {/* Investment Framework */}
      <Section background="beige" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
              Investment Framework
            </h2>
            <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
              Transparent pricing designed to deliver measurable ROI and sustainable competitive advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white relative square-box-beige">
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-2">Starter</h3>
                <div className="text-3xl font-bold text-yb-navy mb-4">$5,000 - $15,000</div>
                <div className="text-yb-navy-light mb-6">Perfect for small businesses ready to compete</div>
                <ul className="text-left space-y-3 text-sm text-yb-navy-light mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Competitive analysis (5 competitors)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Strategic brand positioning
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Professional website design
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Basic SEO optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    3 months support
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white relative border-2 border-yb-beige square-box-beige">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yb-beige text-yb-navy px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-2">Growth</h3>
                <div className="text-3xl font-bold text-yb-navy mb-4">$15,000 - $35,000</div>
                <div className="text-yb-navy-light mb-6">For businesses ready to dominate their market</div>
                <ul className="text-left space-y-3 text-sm text-yb-navy-light mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Deep competitive analysis (10 competitors)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete brand strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced website & UX design
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Comprehensive SEO strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    6 months optimization
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 bg-white relative square-box-beige">
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-yb-navy mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-yb-navy mb-4">$35,000+</div>
                <div className="text-yb-navy-light mb-6">For market leaders and rapid scaling</div>
                <ul className="text-left space-y-3 text-sm text-yb-navy-light mb-8">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Full market intelligence
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Complete brand ecosystem
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom platform development
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Advanced analytics & automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    12 months strategic partnership
                  </li>
                </ul>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Timeline Expectations */}
      <Section background="white" padding="xl">
        <Container>
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-yb-navy mb-4">
              Timeline Expectations
            </h2>
            <p className="text-lg text-yb-navy-light max-w-2xl mx-auto">
              Our proven process delivers results systematically and efficiently.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="p-6 text-center square-box-beige">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-navy font-bold">1</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-yb-navy mb-2">
                  Discovery
                </h3>
                <p className="text-yb-navy-light text-sm mb-2">1 Week</p>
                <p className="text-yb-navy-light text-xs">
                  Deep competitive analysis and strategic planning
                </p>
              </Card>

              <Card className="p-6 text-center square-box-beige">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-navy font-bold">2</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-yb-navy mb-2">
                  Strategy & Design
                </h3>
                <p className="text-yb-navy-light text-sm mb-2">2-3 Weeks</p>
                <p className="text-yb-navy-light text-xs">
                  Brand positioning and creative development
                </p>
              </Card>

              <Card className="p-6 text-center square-box-beige">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-navy font-bold">3</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-yb-navy mb-2">
                  Development
                </h3>
                <p className="text-yb-navy-light text-sm mb-2">2-4 Weeks</p>
                <p className="text-yb-navy-light text-xs">
                  Technical implementation and optimization
                </p>
              </Card>

              <Card className="p-6 text-center square-box-beige">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-navy font-bold">4</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-yb-navy mb-2">
                  Launch & Optimize
                </h3>
                <p className="text-yb-navy-light text-sm mb-2">Ongoing</p>
                <p className="text-yb-navy-light text-xs">
                  Continuous monitoring and improvement
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Urgency & Availability */}
      <Section background="beige" padding="lg">
        <Container>
          <div className="text-center">
            <div className="bg-yb-navy text-yb-beige px-6 py-3 rounded-full inline-block mb-4">
              <span className="font-semibold">🔥 Limited Availability</span>
            </div>
            <h2 className="font-heading text-2xl font-bold text-yb-navy mb-4">
              Only 4 Strategy Slots Remaining This Month
            </h2>
            <p className="text-yb-navy-light max-w-2xl mx-auto">
              We limit our client intake to ensure each business receives the strategic attention they deserve. 
              Don&apos;t let your competitors claim the remaining slots.
            </p>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section background="navy" padding="xl">
        <Container>
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-yb-white mb-6">
              Ready to Claim Your Competitive Analysis?
            </h2>
            <p className="text-xl text-yb-beige-light mb-8 max-w-3xl mx-auto leading-relaxed">
              Join the businesses that chose strategic advantage over generic solutions. 
              Your transformation starts with understanding exactly where you stand.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button href="#form" variant="primary" size="lg">
                Get Your Free Analysis Now
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-yb-beige text-yb-beige hover:bg-yb-beige hover:text-yb-navy">
                See Success Stories →
              </Button>
            </div>
            <div className="text-sm text-yb-beige-light">
              <p>✓ No spam, ever  ✓ Unsubscribe anytime  ✓ Your data is secure</p>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
