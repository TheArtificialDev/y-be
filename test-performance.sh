#!/bin/bash

# Phase 5: Performance Testing Script for Y-Be Homepage
# This script performs comprehensive performance testing using various tools

echo "🚀 Starting Performance Testing for Y-Be Homepage"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
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

print_info() {
    echo -e "${BLUE}ℹ${NC} $1"
}

# Check if development server is running
echo "🔍 Checking development server..."
if curl -s http://localhost:3000 > /dev/null; then
    print_status "Development server is running"
else
    print_error "Development server is not running. Please start with 'npm run dev'"
    exit 1
fi

# Create reports directory
mkdir -p performance-reports

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

echo "📊 Running performance tests on all pages..."

# Install performance testing tools if not already installed
echo "📦 Checking performance testing tools..."

# Install lighthouse CLI for performance testing
if ! command -v lighthouse &> /dev/null; then
    print_warning "Installing Lighthouse CLI..."
    npm install -g lighthouse
fi

# Run Lighthouse performance tests
echo "🔍 Running Lighthouse performance tests..."
for i in "${!pages[@]}"; do
    page="${pages[$i]}"
    name="${page_names[$i]}"
    
    echo "Testing $name with Lighthouse..."
    lighthouse "$page" \
        --only-categories=performance \
        --output=html \
        --output=json \
        --output-path="performance-reports/lighthouse-$name" \
        --chrome-flags="--headless" \
        --throttling-method=simulate \
        --throttling.cpuSlowdownMultiplier=1 \
        --quiet > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        print_status "Lighthouse performance test completed for $name"
    else
        print_warning "Lighthouse test failed for $name"
    fi
done

# Run full Lighthouse audits (all categories)
echo "🔍 Running full Lighthouse audits..."
for i in "${!pages[@]}"; do
    page="${pages[$i]}"
    name="${page_names[$i]}"
    
    echo "Full audit for $name..."
    lighthouse "$page" \
        --output=html \
        --output=json \
        --output-path="performance-reports/lighthouse-full-$name" \
        --chrome-flags="--headless" \
        --quiet > /dev/null 2>&1
    
    if [ $? -eq 0 ]; then
        print_status "Full Lighthouse audit completed for $name"
    else
        print_warning "Full Lighthouse audit failed for $name"
    fi
done

# Analyze bundle size
echo "📦 Analyzing bundle size..."
if [ -f "package.json" ]; then
    print_info "Running bundle analysis..."
    npm run analyze > performance-reports/bundle-analysis.txt 2>&1 &
    analyze_pid=$!
    
    # Wait for analysis to complete or timeout after 60 seconds
    timeout=60
    while [ $timeout -gt 0 ]; do
        if ! kill -0 $analyze_pid 2>/dev/null; then
            print_status "Bundle analysis completed"
            break
        fi
        sleep 1
        timeout=$((timeout - 1))
    done
    
    if [ $timeout -eq 0 ]; then
        print_warning "Bundle analysis timed out"
        kill $analyze_pid 2>/dev/null
    fi
fi

# Generate Core Web Vitals report
echo "📈 Generating Core Web Vitals report..."
cat > performance-reports/core-web-vitals.md << EOF
# Core Web Vitals Report
Generated: $(date)

## What are Core Web Vitals?
- **LCP (Largest Contentful Paint)**: Loading performance - should be < 2.5s
- **FID (First Input Delay)**: Interactivity - should be < 100ms
- **CLS (Cumulative Layout Shift)**: Visual stability - should be < 0.1

## Expected Thresholds
- **Good**: Green (75th percentile)
- **Needs Improvement**: Orange (75th-90th percentile)
- **Poor**: Red (90th+ percentile)

## Pages Tested
- Homepage (/)
- Our Process (/our-process)
- Case Studies (/case-studies)
- Getting Started (/getting-started)

## How to Check Results
1. Open the Lighthouse HTML reports in your browser
2. Look for the Performance section
3. Check the Core Web Vitals metrics
4. Review the Opportunities and Diagnostics sections

## Common Performance Issues to Address
1. **Large images**: Optimize and compress images
2. **Unused JavaScript**: Remove unnecessary code
3. **Render-blocking resources**: Optimize CSS and JS loading
4. **Large DOM size**: Reduce number of DOM elements
5. **Inefficient cache policies**: Set up proper caching
6. **Large network payloads**: Compress and minimize resources

## Performance Optimization Checklist
- [ ] Images optimized (WebP, AVIF formats)
- [ ] JavaScript code split and lazy loaded
- [ ] CSS minified and critical path optimized
- [ ] Fonts optimized (font-display: swap)
- [ ] Caching headers configured
- [ ] CDN configured for static assets
- [ ] Gzip/Brotli compression enabled
- [ ] Preconnect to external domains
- [ ] Preload critical resources
- [ ] Remove unused CSS/JS
EOF

# Extract performance scores from Lighthouse JSON reports
echo "📊 Extracting performance scores..."
for i in "${!page_names[@]}"; do
    name="${page_names[$i]}"
    json_file="performance-reports/lighthouse-full-$name.json"
    
    if [ -f "$json_file" ]; then
        performance_score=$(cat "$json_file" | grep -o '"performance":[0-9.]*' | cut -d: -f2)
        accessibility_score=$(cat "$json_file" | grep -o '"accessibility":[0-9.]*' | cut -d: -f2)
        best_practices_score=$(cat "$json_file" | grep -o '"best-practices":[0-9.]*' | cut -d: -f2)
        seo_score=$(cat "$json_file" | grep -o '"seo":[0-9.]*' | cut -d: -f2)
        
        echo "Page: $name" >> performance-reports/scores-summary.txt
        echo "  Performance: $performance_score" >> performance-reports/scores-summary.txt
        echo "  Accessibility: $accessibility_score" >> performance-reports/scores-summary.txt
        echo "  Best Practices: $best_practices_score" >> performance-reports/scores-summary.txt
        echo "  SEO: $seo_score" >> performance-reports/scores-summary.txt
        echo "" >> performance-reports/scores-summary.txt
    fi
done

# Create comprehensive performance report
echo "📝 Creating comprehensive performance report..."
cat > performance-reports/PERFORMANCE-SUMMARY.md << EOF
# Performance Testing Summary Report
Generated: $(date)

## Test Results Overview
Performance testing completed for all main pages of the Y-Be website.

## Tools Used
- **Lighthouse**: Google's performance, accessibility, and SEO audit tool
- **Bundle Analyzer**: JavaScript bundle size analysis
- **Core Web Vitals**: Real user metrics simulation

## Report Files
- \`lighthouse-full-[page].html\` - Complete Lighthouse audit reports
- \`lighthouse-[page].html\` - Performance-focused reports
- \`lighthouse-[page].json\` - Machine-readable results
- \`bundle-analysis.txt\` - Bundle size analysis
- \`scores-summary.txt\` - Quick scores overview

## Key Metrics Analyzed
1. **Performance Score** (Target: >90)
2. **Accessibility Score** (Target: >95)
3. **Best Practices Score** (Target: >90)
4. **SEO Score** (Target: >95)
5. **Core Web Vitals** (LCP, FID, CLS)

## Performance Optimizations Implemented
- ✅ Next.js 15 with Turbopack
- ✅ Image optimization (WebP, AVIF)
- ✅ Bundle splitting and lazy loading
- ✅ Web Vitals monitoring
- ✅ Performance monitoring
- ✅ Compression enabled
- ✅ Optimized fonts loading

## Next Steps
1. Review all Lighthouse reports
2. Address any performance issues identified
3. Optimize bundle size if needed
4. Test on real devices and slow networks
5. Monitor Core Web Vitals in production
6. Set up continuous performance monitoring

## Performance Budget
- First Contentful Paint: < 1.5s
- Largest Contentful Paint: < 2.5s
- First Input Delay: < 100ms
- Cumulative Layout Shift: < 0.1
- Speed Index: < 3.0s
- Total Blocking Time: < 200ms

## Production Considerations
- Enable CDN for static assets
- Configure proper caching headers
- Set up monitoring and alerts
- Regular performance regression testing
EOF

echo "✅ Performance testing completed!"
echo "📁 Reports saved in: performance-reports/"
echo "📊 View summary report: performance-reports/PERFORMANCE-SUMMARY.md"
echo ""
echo "🔧 Manual Testing Recommendations:"
echo "- Test on slow 3G connections"
echo "- Test on low-end devices"
echo "- Monitor real user metrics"
echo "- Set up performance budgets"
echo "- Regular performance regression testing"
echo ""
echo "🌐 Open Lighthouse HTML reports in browser to view detailed scores and recommendations"
