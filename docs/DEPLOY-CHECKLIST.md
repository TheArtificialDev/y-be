# Vercel Deployment Checklist

## Quick Deployment Steps

### 1. ✅ Push Code to Git
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. 🚀 Deploy to Vercel

#### Option A: Vercel CLI (Recommended)
```bash
npm i -g vercel
vercel
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com) 
2. Click "New Project"
3. Import your repository
4. Deploy with default settings

### 3. 🔧 Configure Environment Variables
In Vercel Dashboard → Settings → Environment Variables:

**Add these variables:**
- `NEXT_PUBLIC_GA_ID` = `G-XXXXXXXXXX` (your Google Analytics ID)
- `NEXT_PUBLIC_SITE_URL` = `https://your-domain.vercel.app`

**Important:** Add to all environments (Production, Preview, Development)

### 4. 🎯 Custom Domain (Optional)
1. Vercel Dashboard → Settings → Domains
2. Add your custom domain
3. Update DNS as instructed
4. Update `NEXT_PUBLIC_SITE_URL` to match your domain

### 5. ✅ Verify Deployment
- Check homepage loads correctly
- Verify sitemap: `/sitemap.xml`
- Check robots.txt: `/robots.txt`
- Test navigation between pages
- Verify mobile responsiveness

### 6. 📊 Setup Google Analytics (Optional)
1. Create Google Analytics 4 property
2. Get tracking ID (starts with G-)
3. Add to Vercel environment variables
4. Redeploy to activate

## Common Issues & Solutions

### "Environment Variable references Secret" Error
**Fix:** Don't use secrets, use regular environment variables in Vercel dashboard

### Build Fails
**Fix:** Test locally first with `npm run build`

### Analytics Not Working
**Fix:** Ensure `NEXT_PUBLIC_GA_ID` is set correctly and redeploy

## Your Site Will Be Live At:
- **Vercel URL**: https://your-project-name.vercel.app
- **Custom Domain**: https://your-domain.com (if configured)

## Performance Verification
Your site should achieve:
- ⚡ Lighthouse Score: 90+
- 📱 Mobile Responsive: 100%
- 🔍 SEO Optimized: 100%
- ♿ Accessibility: WCAG AA

**🎉 Congratulations! Your Y-Be homepage is now live and generating leads!**
