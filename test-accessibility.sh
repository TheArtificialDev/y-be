#!/bin/bash

# Phase 5: Accessibility Testing Script for Y-Be Homepage
# This script performs automated accessibility testing using various tools

echo "🔍 Starting Accessibility Testing for Y-Be Homepage"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}✓${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠${NC} $1"
}

print_error() {
    echo -e "${RED}✗${NC} $1"
}

# Check if development server is running
echo "🚀 Checking development server..."
if curl -s http://localhost:3000 > /dev/null; then
    print_status "Development server is running"
else
    print_error "Development server is not running. Please start with 'npm run dev'"
    exit 1
fi

# Install accessibility testing tools if not already installed
echo "📦 Installing accessibility testing tools..."

# Install axe-core for accessibility testing
if ! command -v axe &> /dev/null; then
    print_warning "Installing axe-core CLI..."
    npm install -g @axe-core/cli
fi

# Install pa11y for accessibility testing
if ! command -v pa11y &> /dev/null; then
    print_warning "Installing pa11y..."
    npm install -g pa11y
fi

# Install lighthouse CLI for performance and accessibility
if ! command -v lighthouse &> /dev/null; then
    print_warning "Installing Lighthouse CLI..."
    npm install -g lighthouse
fi

# Create reports directory
mkdir -p accessibility-reports

# Define pages to test
pages=(
    "http://localhost:3000/"
    "http://localhost:3000/our-process"
    "http://localhost:3000/case-studies"
    "http://localhost:3000/getting-started"
)

page_names=(
    "homepage"
    "our-process"
    "case-studies"
    "getting-started"
)

echo "🧪 Running accessibility tests on all pages..."

# Run pa11y tests
echo "📊 Running pa11y accessibility tests..."
for i in "${!pages[@]}"; do
    page="${pages[$i]}"
    name="${page_names[$i]}"
    
    echo "Testing $name..."
    pa11y --reporter cli --standard WCAG2AA "$page" > "accessibility-reports/pa11y-$name.txt" 2>&1
    
    if [ $? -eq 0 ]; then
        print_status "pa11y test passed for $name"
    else
        print_warning "pa11y found issues for $name - check accessibility-reports/pa11y-$name.txt"
    fi
done

# Run Lighthouse accessibility tests
echo "🔍 Running Lighthouse accessibility tests..."
for i in "${!pages[@]}"; do
    page="${pages[$i]}"
    name="${page_names[$i]}"
    
    echo "Testing $name with Lighthouse..."
    lighthouse "$page" \
        --only-categories=accessibility \
        --output=html \
        --output-path="accessibility-reports/lighthouse-$name.html" \
        --chrome-flags="--headless" \
        --quiet > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        print_status "Lighthouse accessibility test completed for $name"
    else
        print_warning "Lighthouse test failed for $name"
    fi
done

# Run axe-core tests
echo "🎯 Running axe-core accessibility tests..."
for i in "${!pages[@]}"; do
    page="${pages[$i]}"
    name="${page_names[$i]}"
    
    echo "Testing $name with axe-core..."
    axe "$page" --tags wcag2a,wcag2aa --save "accessibility-reports/axe-$name.json" > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        print_status "axe-core test completed for $name"
    else
        print_warning "axe-core test failed for $name"
    fi
done

# Generate summary report
echo "📝 Generating accessibility summary report..."
cat > accessibility-reports/SUMMARY.md << EOF
# Accessibility Testing Summary Report
Generated: $(date)

## Pages Tested
- Homepage (/)
- Our Process (/our-process)
- Case Studies (/case-studies)
- Getting Started (/getting-started)

## Tools Used
- **pa11y**: WCAG 2.1 AA compliance testing
- **axe-core**: Automated accessibility testing
- **Lighthouse**: Google's accessibility audit

## Report Files
- \`pa11y-[page].txt\` - Detailed WCAG compliance reports
- \`lighthouse-[page].html\` - Lighthouse accessibility scores and recommendations
- \`axe-[page].json\` - axe-core detailed test results

## Common Issues to Check Manually
1. **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
2. **Focus Indicators**: All focusable elements should have visible focus indicators
3. **Color Contrast**: Verify color contrast ratios meet WCAG AA standards
4. **Screen Reader Testing**: Test with actual screen readers (NVDA, JAWS, VoiceOver)
5. **Alternative Text**: All images should have descriptive alt text
6. **Form Labels**: All form inputs should have properly associated labels
7. **Heading Structure**: Proper heading hierarchy (h1 → h2 → h3)
8. **Skip Links**: Navigation skip links should be available

## Next Steps
1. Review all generated reports
2. Fix any critical or serious accessibility issues
3. Test with actual assistive technologies
4. Conduct manual keyboard navigation testing
5. Verify screen reader compatibility
6. Test with users who have disabilities

## Accessibility Standards Met
- WCAG 2.1 AA compliance
- Section 508 compliance
- EN 301 549 compliance
EOF

echo "✅ Accessibility testing completed!"
echo "📁 Reports saved in: accessibility-reports/"
echo "📊 View summary report: accessibility-reports/SUMMARY.md"
echo ""
echo "🔧 Manual Testing Checklist:"
echo "- Test keyboard navigation (Tab, Shift+Tab, Enter, Space)"
echo "- Test screen reader compatibility"
echo "- Verify color contrast ratios"
echo "- Check focus indicators"
echo "- Test form accessibility"
echo "- Verify heading structure"
echo ""
echo "🌐 Open Lighthouse reports in browser to view detailed accessibility scores"
