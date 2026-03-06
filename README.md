# Computer Networking Project 1 – DevPro Portfolio

Portfolio website demonstrating DNS resolution, IP addressing, HTTP/HTTPS protocols, and basic web security concepts.

**Course:** Computer Networking – Spring 2026  
**Instructor:** Roya Hosseini  

---

## Project Links

**Live Website:**  
https://gedatgit.github.io/CN_project1/

**GitHub Repository:**  
https://github.com/gedatgit/CN_project1

---

## Running the Project

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open in browser:

```
http://localhost:5173
```

---

## Deployment

Deploy the project to GitHub Pages:

```bash
npm run deploy
```

GitHub Pages should be configured to use the **gh-pages branch**.

---

## Networking Commands Used

DNS lookup:

```bash
nslookup gedatgit.github.io
```

IPv6 records:

```bash
nslookup -type=AAAA gedatgit.github.io
```

HTTP headers:

```bash
curl -I https://gedatgit.github.io/CN_project1/
```

HTTP → HTTPS redirect:

```bash
curl -I http://gedatgit.github.io/CN_project1/
```

TLS certificate information can be viewed by clicking the lock icon in the browser when visiting the website.

---

## Project Technologies

- React
- Vite
- Tailwind CSS
- GitHub Pages