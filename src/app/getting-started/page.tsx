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
    industry: '',
    businessDescription: '',
    challenges: [] as string[],
    goals: [] as string[],
    budget: '',
    contactMethod: 'email',
    timeline: 'asap'
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        // Reset form after successful submission
        setFormData({
          businessName: '',
          website: '',
          industry: '',
          businessDescription: '',
          challenges: [],
          goals: [],
          budget: '',
          contactMethod: 'email',
          timeline: 'asap'
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
      console.error('Form submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
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
                  Help us understand your business and industry to create a targeted competitive analysis
                </p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      Industry You Are In *
                    </label>
                    <input
                      type="text"
                      value={formData.industry}
                      onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige"
                      placeholder="e.g., Technology, Healthcare, E-commerce, Professional Services"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-yb-navy font-medium mb-2">
                      About Your Business *
                    </label>
                    <textarea
                      value={formData.businessDescription}
                      onChange={(e) => setFormData(prev => ({ ...prev, businessDescription: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yb-beige focus:border-yb-beige h-32 resize-vertical"
                      placeholder="Tell us about your business. Consider answering:
• What products or services do you offer?
• Who is your target audience?
• What makes you unique in your market?
• What are your main business goals?
• What challenges are you currently facing?
• How long have you been in business?"
                      required
                    />
                    <p className="text-sm text-yb-navy-light mt-2">
                      The more detail you provide, the better we can tailor our competitive analysis to your specific situation.
                    </p>
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
              <div className="text-center bg-gradient-to-r from-yb-navy to-yb-navy-light p-8 rounded-xl">
                <div className="bg-yb-beige text-yb-navy px-4 py-2 rounded-full inline-block mb-4">
                  <span className="font-bold text-sm">🎯 CLAIM YOUR ADVANTAGE</span>
                </div>
                
                {submitStatus === 'success' ? (
                  <div className="text-center">
                    <div className="text-green-400 text-6xl mb-4">✓</div>
                    <h3 className="text-2xl font-bold text-yb-beige mb-4">Success! Your Analysis is On the Way</h3>
                    <p className="text-yb-beige-light mb-4">
                      We&apos;ve received your information and will send your competitive analysis within 48 hours.
                    </p>
                  </div>
                ) : (
                  <>
                    <Button 
                      type="submit" 
                      variant="primary" 
                      size="lg" 
                      disabled={isSubmitting}
                      className={`px-16 py-4 text-xl font-bold bg-yb-beige hover:bg-yb-beige-light text-yb-navy shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                        isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          PROCESSING YOUR REQUEST...
                        </>
                      ) : (
                        '🚀 REQUEST MY COMPETITIVE ADVANTAGE'
                      )}
                    </Button>
                    
                    {submitStatus === 'error' && (
                      <div className="mt-4 p-3 bg-red-100 border border-red-300 rounded-lg">
                        <p className="text-red-700 font-medium">{errorMessage}</p>
                      </div>
                    )}
                  </>
                )}
                
                <p className="text-yb-beige-light text-sm mt-4 font-medium">
                  ⚡ We&apos;ll deliver your personalized competitive analysis within 48 hours
                </p>
                <div className="flex justify-center items-center gap-6 mt-4 text-xs text-yb-beige-light">
                  <span>✓ 100% Free Analysis</span>
                  <span>✓ No Commitment Required</span>
                  <span>✓ Actionable Insights</span>
                </div>
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
            <Card className="p-8 relative square-box-beige">
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-yb-beige mb-2">Starter</h3>
                <div className="text-3xl font-bold text-yb-beige mb-4">$5,000 - $15,000</div>
                <div className="text-yb-beige-light mb-6">Perfect for small businesses ready to compete</div>
                <ul className="text-left space-y-3 text-sm text-yb-beige-light mb-8">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Competitive analysis (5 competitors)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Strategic brand positioning
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Professional website design
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Basic SEO optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    3 months support
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 relative border-2 border-yb-beige square-box-beige">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-yb-beige text-yb-navy px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-yb-beige mb-2">Growth</h3>
                <div className="text-3xl font-bold text-yb-beige mb-4">$15,000 - $35,000</div>
                <div className="text-yb-beige-light mb-6">For businesses ready to dominate their market</div>
                <ul className="text-left space-y-3 text-sm text-yb-beige-light mb-8">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Deep competitive analysis (10 competitors)
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Complete brand strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Advanced website & UX design
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Comprehensive SEO strategy
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    6 months optimization
                  </li>
                </ul>
              </div>
            </Card>

            <Card className="p-8 relative square-box-beige">
              <div className="text-center">
                <h3 className="font-heading text-xl font-bold text-yb-beige mb-2">Enterprise</h3>
                <div className="text-3xl font-bold text-yb-beige mb-4">$35,000+</div>
                <div className="text-yb-beige-light mb-6">For market leaders and rapid scaling</div>
                <ul className="text-left space-y-3 text-sm text-yb-beige-light mb-8">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Full market intelligence
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Complete brand ecosystem
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Custom platform development
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    Advanced analytics & automation
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
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
                <h3 className="font-heading text-lg font-semibold text-yb-beige mb-2">
                  Discovery
                </h3>
                <p className="text-yb-beige-light text-sm mb-2">1 Week</p>
                <p className="text-yb-beige-light text-xs">
                  Deep competitive analysis and strategic planning
                </p>
              </Card>

              <Card className="p-6 text-center square-box-beige">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-navy font-bold">2</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-yb-beige mb-2">
                  Strategy & Design
                </h3>
                <p className="text-yb-beige-light text-sm mb-2">2-3 Weeks</p>
                <p className="text-yb-beige-light text-xs">
                  Brand positioning and creative development
                </p>
              </Card>

              <Card className="p-6 text-center square-box-beige">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-navy font-bold">3</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-yb-beige mb-2">
                  Development
                </h3>
                <p className="text-yb-beige-light text-sm mb-2">2-4 Weeks</p>
                <p className="text-yb-beige-light text-xs">
                  Technical implementation and optimization
                </p>
              </Card>

              <Card className="p-6 text-center square-box-beige">
                <div className="w-16 h-16 bg-yb-beige rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yb-navy font-bold">4</span>
                </div>
                <h3 className="font-heading text-lg font-semibold text-yb-beige mb-2">
                  Launch & Optimize
                </h3>
                <p className="text-yb-beige-light text-sm mb-2">Ongoing</p>
                <p className="text-yb-beige-light text-xs">
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
