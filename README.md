# High Noon Pool Care Website

A clean, professional, mobile-friendly single-page website for High Noon Pool Care, built with plain HTML, CSS, and vanilla JavaScript. Designed to be hosted on GitHub Pages for free with no build step required.

## 📋 Overview

This website is a static site with:

- **No backend, database, or paid services required**
- **Easy editing by non-developers** (all editable content is clearly marked)
- **SEO-optimized** with schema markup and meta tags
- **Fast and lightweight** (pure HTML/CSS/JS)
- **Mobile-friendly and responsive**
- **Accessibility-compliant** with proper focus states and semantic HTML

## 📁 File Structure

```
hnpc/
├── index.html          # Main website file (all content and structure)
├── styles.css          # All styling and responsive design
├── script.js           # Minimal JavaScript for mobile menu and interactions
├── assets/
│   └── high-noon-pool-care-logo.jpeg  # Logo image (reference only)
├── README.md           # This file
└── .gitignore          # (Optional) Ignore files when pushing to GitHub
```

## 🚀 Setup Instructions

### Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in to your account
2. Click the **+** icon in the top right and select **New repository**
3. Name it: `highnoonpoolcare.github.io`
   - This special naming makes GitHub Pages work automatically
4. Set it to **Public**
5. Click **Create repository**

### Step 2: Upload Files to GitHub

You can upload files in two ways:

#### Option A: Upload via GitHub Web Interface (Easiest)

1. In your new repository, click **Add file** → **Upload files**
2. Drag and drop all files EXCEPT the `assets` folder
3. Click **Commit changes**
4. Then create an `assets` folder:
   - Click **Add file** → **Create new file**
   - Type: `assets/high-noon-pool-care-logo.jpeg`
   - Click **Upload files** and add your logo image
   - Click **Commit changes**

#### Option B: Use Git Command Line

```bash
# Navigate to your project folder
cd hnpc

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: High Noon Pool Care website"

# Add remote origin
git remote add origin https://github.com/YOUR_USERNAME/highnoonpoolcare.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top navigation)
3. Scroll to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - Source: Select **Deploy from a branch**
   - Branch: Select **main** (or **master**) and **/root**
5. Click **Save**
6. Wait 1-2 minutes
7. You'll see a message: "Your site is published at: `https://highnoonpoolcare.github.io/`"

Your site is now live! 🎉

## ✏️ Editing Your Website

All editable business content is clearly marked with **HTML comments** in `index.html`. Look for sections like:

```html
<!-- TO EDIT: Business phone number -->
<!-- TO EDIT: Service area list -->
```

### Business Information to Update

#### 1. **Phone Number**

- **File:** `index.html`
- **Search for:** `940-222-2308`
- **Replace with:** Your phone number (appears in multiple places throughout the file)
- **Total occurrences:** About 6-8 places

**Quick Find:**

- Header CTA button
- Hero section
- Contact section phone link
- Contact form
- Footer

#### 2. **Email Address**

- **File:** `index.html`
- **Search for:** `Drew@highnoonpoolcare.com`
- **Replace with:** Your email address (appears in multiple places)

**Quick Find:**

- Contact section
- Footer
- Schema markup

#### 3. **Facebook URL**

- **File:** `index.html`
- **Search for:** `https://www.facebook.com/highnoonpoolcare`
- **Replace with:** Your Facebook page URL (appears in multiple places)

**Quick Find:**

- Footer social link
- Contact section social link
- Schema markup

#### 4. **Service Areas** (Cities)

- **File:** `index.html`
- **Section:** "Service Areas" (around line 250-270)
- **Edit the city names:** Simply replace the text in each `<div class="city-item">` tag

```html
<div class="city-item">Corinth</div>
<!-- Change "Corinth" to your city -->
```

- **Don't delete:** The `<div>` tags and `class="city-item"` attribute
- **Update elsewhere:** Service areas are also used in the JSON-LD schema (around line 70)

#### 5. **Business Address (For Schema)**

- **File:** `index.html`
- **Search for:** `[Your Business Street Address]` and `[Your ZIP Code]`
- **Location:** Inside the `<script>` tag near the top (JSON-LD structured data)
- **Why:** Used for Google Business Profile and local search results

Example:

```json
"streetAddress": "123 Main Street",
"addressLocality": "Corinth",
"postalCode": "76210"
```

#### 6. **Business Hours** (For Schema)

- **File:** `index.html`
- **Search for:** Line with `"opens": "07:00"` and `"closes": "18:00"`
- **Update if needed:** Change based on your actual hours
- **Also update:** Contact section with your hours (visual display)

#### 7. **Testimonials**

- **File:** `index.html`
- **Section:** "Testimonials" section (around line 270-300)
- **Edit:** Replace the placeholder customer names and testimonial text
- **Format:** Keep the 5-star rating and customer location

```html
<p class="testimonial-text">"Your testimonial text here..."</p>
<p class="testimonial-author">— Customer Name, City</p>
```

#### 8. **Service Descriptions**

- **File:** `index.html`
- **Section:** "Services" section (starting around line 145)
- **Edit:** The title and description inside each `<div class="service-card">`
- **Keep:** The emoji icons and card structure

#### 9. **About Section Text**

- **File:** `index.html`
- **Section:** "About" section (around line 115)
- **Edit:** The paragraph text about your company
- **Tips:** Keep it friendly, trustworthy, and focused on what you offer

#### 10. **SEO Metadata** (Important for Google!)

- **File:** `index.html`
- **At the top (Head section):**
  - `<title>...</title>` — Update with your business name and location
  - `<meta name="description" content="...">` — Update with a 160-character description
  - `<meta property="og:title" content="...">` — Social sharing title
  - `<meta property="og:description" content="...">` — Social sharing description

Example:

```html
<title>High Noon Pool Care | Professional Pool Service in North Texas</title>
<meta
  name="description"
  content="High Noon Pool Care provides professional weekly pool service, cleaning, and maintenance in Corinth, Denton, Lewisville, and surrounding areas. Get a free quote today."
/>
```

### File Editing Tips

- **Use a text editor:** Notepad, VS Code, Sublime Text, or even GitHub's built-in editor
- **Don't edit:** HTML structure, CSS class names, or JavaScript code (unless you know what you're doing)
- **Test before publishing:** After making changes, commit and wait ~1 minute for GitHub Pages to rebuild
- **Preview changes:** Click the link in GitHub Pages settings to view your live site

### Adding the Logo Image

1. **Before uploading to GitHub:**
   - Save your logo as JPEG format: `high-noon-pool-care-logo.jpeg`
   - Recommended size: 200x100px (or similar aspect ratio)
   - Keep file size under 200KB for fast loading

2. **Upload to GitHub:**
   - Create an `assets` folder in your repository
   - Upload the logo image as `high-noon-pool-care-logo.jpeg` inside the `assets` folder
   - The HTML already references the correct path: `assets/high-noon-pool-care-logo.jpeg`

3. **If you don't have a logo yet:**
   - Create a placeholder image (500x250px) with your company name
   - Update the alt text in the HTML: `<img src="assets/high-noon-pool-care-logo.jpeg" alt="High Noon Pool Care Logo">`

## 📋 Contact Form Setup (Optional)

The contact form is included but needs setup to actually submit emails. Here's how:

### Option 1: Formspree (Recommended - Free)

1. Go to [formspree.io](https://formspree.io/)
2. Click **New Project**
3. Fill in your email address
4. Copy the **form ID** (looks like `xvqkzpqw`)
5. In `index.html`, find the line: `action="https://formspree.io/f/YOUR_FORM_ID"`
6. Replace `YOUR_FORM_ID` with your actual form ID
7. Save and commit

Example:

```html
<!-- Before -->
<form
  class="contact-form"
  action="https://formspree.io/f/YOUR_FORM_ID"
  method="POST"
>
  <!-- After -->
  <form
    class="contact-form"
    action="https://formspree.io/f/xvqkzpqw"
    method="POST"
  ></form>
</form>
```

### Option 2: Alternative Services

- **Netlify Forms** (if you move to Netlify)
- **Basin** (basinapp.com)
- **SimpleForm** (simpleform.com)

**If you don't want a working form:**

- Leave it as-is with the note about Formspree
- Visitors can still see the form and contact you via phone/email

## 🔍 SEO Checklist

✅ **Already included:**

- Title tag
- Meta description
- JSON-LD structured data (LocalBusiness schema)
- Open Graph tags for social sharing
- Twitter Card tags
- Semantic HTML5 elements
- Alt text for images
- Responsive design (mobile-friendly)
- Service areas listed
- Phone number and email in structured data
- Facebook link

⚠️ **To optimize further (optional):**

1. Submit sitemap to Google: Go to Google Search Console, add your domain, and request indexing
2. Write detailed service pages (if you want to expand)
3. Add a blog with regular pool care tips (increases SEO)
4. Get listed on Google Business Profile
5. Encourage customer reviews on Google

## 🎨 Customizing the Design

The website uses a navy + gold + white color scheme. If you want to change it:

- **File:** `styles.css`
- **Look for:** The `:root` section at the top with color definitions

```css
:root {
  --navy: #1a3a52; /* Main navy color */
  --gold: #d4af37; /* Accent gold color */
  --light-bg: #f8f9fa; /* Light background */
  --white: #ffffff; /* White */
  --text: #333333; /* Text color */
}
```

Change these hex color codes to your preferred colors, and the entire site will update automatically.

## 📱 Mobile Testing

- **Test on your phone:** Visit `https://highnoonpoolcare.github.io/` on your phone while at home
- **Use Chrome DevTools:** Press `F12` or `Cmd+Option+I` on desktop and click the mobile icon
- **Check:** Buttons are clickable, text is readable, forms are usable

## 🚨 Troubleshooting

### Site Not Showing Up After Upload

**Problem:** GitHub Pages settings show "Your site is ready" but the site isn't loading

**Solution:**

1. Wait 2-5 minutes (GitHub takes time to build)
2. Clear your browser cache: `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
3. Try in an incognito/private window
4. Check GitHub Pages settings: Settings → Pages → Make sure "Deploy from a branch" is selected

### Images Not Loading

**Problem:** Logo or other images show broken image icons

**Solution:**

1. Make sure the image is in the `assets` folder
2. Check the file path in HTML: `assets/high-noon-pool-care-logo.jpeg`
3. Make sure the filename exactly matches (case-sensitive on GitHub)
4. Try re-uploading the image

### Changes Not Appearing

**Problem:** You made edits but the live site doesn't show them

**Solution:**

1. Make sure you committed and pushed the changes to GitHub
2. Wait 1-2 minutes for GitHub Pages to rebuild
3. Clear your browser cache
4. Check that you edited the `main` branch (not a different branch)

### Form Not Submitting

**Problem:** Contact form doesn't send emails

**Solution:**

1. Did you set up Formspree or another form handler?
2. Check that the form `action` URL is correct
3. Try submitting a test message from the Formspree dashboard
4. Check your spam/junk folder for the email

## 💡 Pro Tips

1. **Update regularly:** Add a blog post every month with pool care tips to improve SEO
2. **Get reviews:** Ask happy customers for Google reviews
3. **Share on Facebook:** Post updates and share the site link
4. **Monitor analytics:** Add Google Analytics to track visitor behavior (optional but helpful)
5. **Mobile first:** Always test on mobile before publishing changes

## 📞 Quick Reference: What to Edit

| Item             | Location                 | Search For                                  |
| ---------------- | ------------------------ | ------------------------------------------- |
| Phone            | Multiple places          | `940-222-2308`                              |
| Email            | Multiple places          | `Drew@highnoonpoolcare.com`                 |
| Facebook         | Multiple places          | `https://www.facebook.com/highnoonpoolcare` |
| Cities           | Service Area section     | `<div class="city-item">`                   |
| About text       | About section            | Replace paragraph                           |
| Services         | Services section         | Service card descriptions                   |
| Testimonials     | Testimonials section     | Replace quotes and names                    |
| Title tag        | Head section             | `<title>...</title>`                        |
| Meta description | Head section             | `<meta name="description"...>`              |
| Address          | JSON-LD schema           | `[Your Business Street Address]`            |
| Hours            | JSON-LD schema & Contact | `"opens": "07:00"`                          |

## 🛠️ Technical Details

- **No build step required:** Just upload and go
- **GitHub Pages compatible:** Works out of the box
- **Fully static:** No backend needed
- **Performance:** Lightweight and fast-loading
- **Browser support:** Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- **HTTPS:** Automatic SSL certificate from GitHub Pages
- **Custom domain:** Optional (can add your own domain in Settings → Pages)

## 📄 License

This website is provided as-is for High Noon Pool Care. Feel free to modify and use as needed.

---

**Questions or stuck?** Contact your web designer or refer to [GitHub Pages documentation](https://docs.github.com/en/pages).

**Last updated:** March 2026
