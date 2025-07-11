# Vercel Deployment Checklist

## Environment Variables Setup
Before deploying to Vercel, ensure these environment variables are set in your Vercel dashboard:

### Required Environment Variables:
- `MONGODB_URI` - Your MongoDB Atlas connection string
- `NEXT_PUBLIC_SITE_URL` - Your production site URL (e.g., https://yoursite.vercel.app)
- `NEXT_PUBLIC_GA_ID` - Your Google Analytics tracking ID (optional)

### How to Set Environment Variables in Vercel:
1. Go to your Vercel dashboard
2. Select your project
3. Navigate to Settings → Environment Variables
4. Add each variable with the appropriate value
5. Make sure to select the correct environments (Development, Preview, Production)

## MongoDB Atlas Configuration
Ensure your MongoDB Atlas cluster is properly configured:

### Network Access:
- Add `0.0.0.0/0` to your IP whitelist to allow Vercel's dynamic IPs
- Or add specific Vercel IP ranges if you prefer more restrictive access

### Database User:
- Ensure your database user has read/write permissions
- Use a strong password
- The connection string should include the username and password

## Deployment Commands
Your project is configured with these commands:
- Build: `npm run build`
- Start: `npm start`
- Dev: `npm run dev`

## Security Considerations
✅ Hardcoded credentials removed from source code
✅ Environment variables used for sensitive data
✅ Proper error handling implemented
✅ Connection validation added

## Function Configuration
- API routes configured with 60-second timeout
- Other functions configured with 30-second timeout
- Security headers properly configured

## Testing Before Deployment
1. Run `npm run build` locally to ensure no build errors
2. Test MongoDB connection with environment variables
3. Verify all required environment variables are set

## Post-Deployment Testing
1. Test form submission functionality
2. Check MongoDB data insertion
3. Verify error handling works correctly
4. Test all pages load properly

## Troubleshooting Common Issues
1. **MongoDB Connection Timeout**: Ensure IP whitelist includes Vercel IPs
2. **Environment Variables Not Found**: Check they're set in Vercel dashboard
3. **Build Errors**: Run `npm run build` locally first
4. **API Route Timeouts**: Check function timeout configuration in vercel.json
