import Link from 'next/link'
import Container from './Container'

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Our Process', href: '/our-process' },
  { name: 'Case Studies', href: '/case-studies' },
  { name: 'Products', href: '/products' },
  { name: 'Get Started', href: '/getting-started' },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy-policy' },
  { name: 'Terms of Service', href: '/terms' },
]

export default function Footer() {
  return (
    <footer className="bg-yb-navy-dark text-yb-beige py-16 border-t border-yb-beige/20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-4">
              <span className="font-heading text-2xl font-bold text-yb-beige">
                Y-Be
              </span>
            </Link>
            <p className="text-yb-beige/80 text-base mb-4">
              Engineering Competitive Advantages
            </p>
            <p className="text-yb-beige/80 text-base mb-6 max-w-md">
              We don&apos;t just build websites, we engineer competitive advantages through data-driven web solutions.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-base">
              <p className="text-yb-beige/80">
                <span className="font-medium">Email:</span> contact@ybe.studio
              </p>
              <p className="text-yb-beige/80">
                <span className="font-medium">Phone:</span> +1 (555) 123-4567
              </p>
              <p className="text-yb-beige/80">
                <span className="font-medium">Hours:</span> Mon-Fri: 9AM-6PM EST
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-yb-beige">Quick Links</h3>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-yb-beige/80 hover:text-yb-beige transition-colors text-base"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Trust & Newsletter */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-yb-beige">Stay Connected</h3>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-yb-beige/80 text-base mb-3">
                Get strategic insights monthly
              </p>
              <form className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 py-2 rounded-md text-yb-navy text-base focus:outline-none focus:ring-2 focus:ring-yb-beige bg-yb-beige placeholder-yb-navy/60"
                />
                <button
                  type="submit"
                  className="bg-yb-beige text-yb-navy px-4 py-2 rounded-md text-base font-medium hover:bg-yb-beige-dark transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Trust Badges */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yb-beige rounded-full"></div>
                <span className="text-yb-beige/80 text-sm">SSL Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yb-beige rounded-full"></div>
                <span className="text-yb-beige/80 text-sm">Privacy Protected</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-yb-beige/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap items-center space-x-6 mb-4 md:mb-0">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-yb-beige/80 hover:text-yb-beige text-sm transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-yb-beige/80 text-sm">
            © {new Date().getFullYear()} Y-Be. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
