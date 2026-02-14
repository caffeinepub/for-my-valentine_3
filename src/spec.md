# Specification

## Summary
**Goal:** Roll back the entire application to the previously working Version 15 state and redeploy so the Preview reflects Version 15 behavior.

**Planned changes:**
- Revert the full repository (frontend, backend, and bundled static assets) to exactly match the Version 15 snapshot, removing all changes introduced after Version 15.
- Ensure the Version 15 state builds successfully and the Preview loads without runtime errors.
- Redeploy the rolled-back Version 15 application so the live Preview runs end-to-end, including the Valentine flow.

**User-visible outcome:** The live Preview runs the Version 15 version of the app, loads without errors, and users can click through the Valentine flow successfully.
