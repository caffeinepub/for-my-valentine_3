# Specification

## Summary
**Goal:** Remove any stock/placeholder imagery from the Memories (Step 3) experience by replacing the current static memory images with new non-stock bundled assets.

**Planned changes:**
- Replace the three current Memories (Step 3) static image assets with three newly generated non-stock 300x200 JPGs and update the Memories step to reference the new asset paths, keeping layout, captions, and behavior unchanged.
- Audit the frontend for any remaining placeholder/stock image references (including `https://via.placeholder.com/300x200`) and remove/replace them so all UI-visible images in the Valentine flow come from bundled static assets.
- Update `frontend/DEPLOYMENT_CHECKLIST.md` post-deployment verification section to reference the new Memories image asset paths.

**User-visible outcome:** The Memories step looks and behaves the same (same 3 cards, captions, and layout), but uses new non-stock images that load from bundled assets and remain consistent across refreshes, with no placeholder/stock images visible anywhere in the Valentine flow.
