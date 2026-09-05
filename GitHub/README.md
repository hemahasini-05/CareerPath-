# CareerMatch.com

A responsive student career guidance website for exploring roles, skills, eligibility, profile match scores, missing skills, career roadmaps, and role comparisons.

## Publish on GitHub Pages

1. Create a new **Public** repository on GitHub, for example `careermatch`.
2. Open the repository and choose **Add file > Upload files**.
3. Upload these files from this folder:
   - `index.html`
   - `styles.css`
   - `script.js`
4. Commit the files to the `main` branch.
5. Open **Settings > Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Select branch `main`, folder `/ (root)`, and click **Save**.

Your public website address will be:

`https://YOUR-GITHUB-USERNAME.github.io/careermatch/`

Replace `YOUR-GITHUB-USERNAME` with your GitHub username.

## Files to leave out

Do not upload `sharedStorage/`, `app.py`, or the `templates/` and `static/` folders for GitHub Pages. Those belong to the separate Flask version and are not needed by the standalone page.

## Custom domain

GitHub Pages cannot create `careermatch.com` automatically. To use that exact address, register the domain first, then add it under **Settings > Pages > Custom domain** and configure the domain DNS records for GitHub Pages.
