# Aragaw Bayuh Asmamaw — Personal Portfolio

A responsive, dark professional portfolio built with HTML5, CSS3, JavaScript and Bootstrap 5. It is designed to work as a static website and can be hosted free with GitHub Pages.

## Project structure

```text
aragaw-personal-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   └── profile.jpg  <-- add your own photograph here
└── README.md
```

## 1. Add your profile photograph

1. Choose a professional photo.
2. Rename it exactly `profile.jpg`.
3. Copy it into the `images` folder.
4. Keep the file path as `images/profile.jpg`.

A portrait-oriented image works best. The website will show a placeholder until you add the photo.

## 2. Preview locally in VS Code

1. Extract this ZIP file.
2. Open the `aragaw-personal-portfolio` folder in Visual Studio Code.
3. Install the **Live Server** extension if it is not already installed.
4. Right-click `index.html` and select **Open with Live Server**.

You can also open `index.html` directly in a browser.

## 3. Personalize before publishing

- Replace the generic GitHub links (`https://github.com/`) with your actual GitHub profile URL.
- Your LinkedIn profile is already connected: https://www.linkedin.com/in/aragaw-b-7235b6327/
- Check that the email and phone number displayed in the contact section are the details you want public.
- Review every section for accuracy.
- Add screenshots, source-code links and demonstrations when your projects are ready to share.

The portfolio intentionally does not publish passport information, date of birth, home address or referee contact details from the CV.

## 4. Publish free with GitHub Pages

1. Create or sign in to an account at https://github.com/.
2. Create a **public** repository. For a personal site, name it `YOUR-GITHUB-USERNAME.github.io`.
3. Upload the contents of this folder to the repository root. Make sure `index.html` is at the root, not inside another nested folder.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Select branch `main` and folder `/ (root)`, then save.
7. Wait for deployment. Your site will be available at `https://YOUR-GITHUB-USERNAME.github.io/`.

GitHub Pages serves static files. This project uses no PHP or MySQL, so it can be hosted there. The contact form opens the visitor's email application using a `mailto:` link; it does not send or store form submissions on a server.

## Notes

- Bootstrap CSS/JS, Bootstrap Icons and Google Fonts are loaded from external CDNs, so an internet connection is needed for those assets.
- Do not upload confidential information or private documents to a public repository.
- Check the live website on both mobile and desktop after publishing.
