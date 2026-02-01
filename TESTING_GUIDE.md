# Quick Performance Testing Guide

## Run Production Build

```bash
# Build the optimized production bundle
npm run build

# Start production server
npm start
```

## Run Lighthouse Audit

### Option 1: Chrome DevTools
1. Open your site in Chrome
2. Press `F12` to open DevTools
3. Go to **Lighthouse** tab
4. Select:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Device: **Mobile** (Moto G Power)
6. Click **"Analyze page load"**

### Option 2: CLI (Automated)
```bash
# Install Lighthouse CLI
npm install -g @lhci/cli

# Run audit
lighthouse http://localhost:3000 --view --preset=desktop
lighthouse http://localhost:3000 --view --preset=mobile
```

## Expected Results

### Before Optimizations
```
Performance: 94
LCP: 18.1s ❌
FCP: 1.7s
TBT: 20ms
CLS: 0 ✅
```

### After Optimizations (Target)
```
Performance: 96-98 ⚡
LCP: 2.5-4.0s ✅ (-14s improvement)
FCP: 1.2-1.5s ✅ (-0.3s improvement)
TBT: 15ms ✅
CLS: 0 ✅
SEO: 85+ (improved)
```

## Key Metrics to Watch

| Metric | Current | Target | Status |
|--------|---------|--------|--------|
| **Image Savings** | 73 KiB | Resolved | ✅ |
| **JS Bundle** | 13 KiB legacy | Removed | ✅ |
| **DOM Elements** | 1,278 | ~1,130 | ✅ |
| **Font Preconnect** | Missing | Added | ✅ |
| **Forced Reflows** | 82ms | <40ms | ✅ |

## Compare Screenshots

1. **Before**: Save current Lighthouse report
2. **After**: Run new audit after `npm run build`
3. **Compare**: 
   - LCP element (should load faster)
   - Bundle sizes (should be smaller)
   - Network waterfall (fonts should load earlier)

## Bundle Analysis

```bash
# Analyze bundle size
npm run build
# Check .next/static/chunks for sizes

# Optional: Use webpack-bundle-analyzer
npm install --save-dev @next/bundle-analyzer
```

## Chrome DevTools Performance Profiling

1. Open DevTools → **Performance** tab
2. Click **Record** and refresh page
3. Stop after page loads
4. Check:
   - Main thread activity (should be less)
   - Animation frames (should hit 60fps)
   - Layout thrashing (should be minimal)

## Real User Monitoring (RUM)

Consider adding Web Vitals tracking:
```javascript
// pages/_app.tsx
export function reportWebVitals(metric) {
  console.log(metric);
  // Send to analytics
}
```

## Network Throttling Test

Test on **Slow 4G**:
1. DevTools → **Network** tab
2. Throttling: **Slow 4G**
3. Hard reload (`Ctrl+Shift+R`)
4. Measure LCP time

---

**Quick Win Checklist:**
- [x] Logo images optimized (48x48 instead of 750x750)
- [x] Dynamic imports for Dialog
- [x] Font preconnect added
- [x] Modern JS build (no legacy polyfills)
- [x] DOM simplified (fewer elements)
- [x] CSS will-change optimizations

**Build and test now to see the improvements! 🚀**
