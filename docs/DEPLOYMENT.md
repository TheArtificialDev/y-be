# Vercel Deployment Guide for Y-Be Homepage

## Prerequisites
- Node.js 18+ installed
- Vercel account
- Google Analytics 4 tracking ID (optional)

## Deployment Steps

### 1. Prepare Repository
```bash
# Clone/push your repository to GitHub, GitLab, or Bitbucket
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow the prompts:
# - Link to existing project? No
# - What's your project's name? y-be-homepage
# - In which directory is your code located? ./
# - Override settings? No
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Configure project settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

### 3. Configure Environment Variables
In your Vercel project dashboard, go to Settings → Environment Variables and add:

**Required Variables:**
- **Key**: `NEXT_PUBLIC_GA_ID`
  - **Value**: `G-XXXXXXXXXX` (your Google Analytics 4 tracking ID)
  - **Environment**: Production, Preview, Development

- **Key**: `NEXT_PUBLIC_SITE_URL`
  - **Value**: `https://your-domain.vercel.app` (or your custom domain)
  - **Environment**: Production, Preview, Development

**Note**: You can leave `NEXT_PUBLIC_GA_ID` empty initially and add it later when you have your Google Analytics setup ready.

### 4. Custom Domain (Optional)
1. Go to your Vercel project dashboard
2. Navigate to Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

### 5. SSL Certificate
Vercel automatically provides SSL certificates for all deployments. No additional configuration needed.

## Post-Deployment Checklist

### Performance Verification
```bash
# Test your deployed site
curl -I https://your-domain.vercel.app
```

### Google Analytics Setup
1. Create a Google Analytics 4 property
2. Get your tracking ID (starts with G-)
3. Add it to your Vercel environment variables
4. Redeploy to activate tracking

### SEO Verification
- Check sitemap: `https://your-domain.vercel.app/sitemap.xml`
- Check robots.txt: `https://your-domain.vercel.app/robots.txt`
- Submit sitemap to Google Search Console

### Performance Testing
Run Lighthouse audit:
```bash
npx lighthouse https://your-domain.vercel.app --output=html
```

## Monitoring and Maintenance

### Vercel Analytics
Enable Vercel Analytics in your project dashboard for:
- Real-time visitor data
- Performance metrics
- Core Web Vitals

### Automatic Deployments
- Every push to main branch triggers automatic deployment
- Preview deployments for pull requests
- Rollback capabilities in Vercel dashboard

### Performance Monitoring
The site includes built-in performance monitoring:
- Core Web Vitals tracking
- Google Analytics integration
- Error boundary reporting

## Troubleshooting

### Environment Variable Errors
**Error**: `Environment Variable "NEXT_PUBLIC_GA_ID" references Secret "next_public_ga_id", which does not exist.`

**Solution**: 
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add the variables directly (not as secrets):
   - `NEXT_PUBLIC_GA_ID` = your Google Analytics tracking ID
   - `NEXT_PUBLIC_SITE_URL` = your domain URL
4. Redeploy your project

### Build Errors
```bash
# Test build locally
npm run build

# Check build logs in Vercel dashboard
```

### Environment Variables
- Ensure all required environment variables are set
- Check variable names match exactly (case-sensitive)
- Redeploy after adding new variables

### Performance Issues
- Check bundle size with `npm run analyze`
- Optimize images using Next.js Image component
- Enable compression in next.config.js

## Support
For Vercel-specific issues:
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

For Next.js issues:
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub](https://github.com/vercel/next.js)

## Production URLs
- Primary: `https://your-domain.vercel.app`
- Custom domain: `https://your-custom-domain.com`

Your Y-Be homepage is now live and ready to generate leads! 🚀
