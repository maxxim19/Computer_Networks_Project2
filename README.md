# Computer Networks Project 2

## Project Title
Secure, Optimize, and Monitor Your Website

## Team
- Maxim Moltmann
- Rami Bader

## Website Description
This website is an updated version of our Project 1 portfolio website. For Project 2, we added security, performance optimization, deployment support, and monitoring features.

## Features Implemented

### Security Enhancements
- HTTPS-ready deployment through GitHub Pages.
- Content Security Policy added to both HTML pages.
- XSS protection using DOMPurify.
- Secure guestbook demo that sanitizes user input.
- Brute-force login protection demo using local rate limiting.
- Safe user input rendering using textContent.

### Performance Optimization
- Lazy-loaded image.
- Deferred JavaScript loading.
- CSS preloading.
- Service worker caching.
- CDN usage for DOMPurify.

### Monitoring
- Local visit counter.
- Page load-time metric.
- Security event log.
- Google Analytics placeholder included.

### Deployment
The website can be hosted using GitHub Pages.

## How to Run Locally
Open `index.html` in your browser.

For better testing, run a local server:

```bash
python3 -m http.server 8000
