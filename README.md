# Dave Works Services Ltd. (DWS)

A professional business website for Dave Works Services Ltd., a Rwanda-based company specializing in building completion, finishing works, and interior fit-outs.

## About

Dave Works Services Ltd. translates architectural intent into finished spaces that meet the highest standards of quality, safety, and value. This website showcases the company's services, projects, and expertise in the construction and finishing industry.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth animations and transitions
- Multiple page templates (Home, About, Services, Projects, Blog, Contact)
- Interactive carousels and galleries
- Contact forms and inquiry system
- SEO-friendly structure
- Fast loading times

## Technologies Used

- **Bootstrap 5** - Responsive CSS framework
- **jQuery** - JavaScript library
- **AOS (Animate On Scroll)** - Scroll animation library
- **Owl Carousel** - Touch-enabled carousel plugin
- **SCSS** - CSS preprocessor
- **HTML5** - Modern markup

## Project Structure

```
DaveWorksServices-1.0.0/
├── assets/
│   ├── css/          # Compiled CSS files
│   ├── scss/         # SCSS source files
│   ├── js/           # Custom JavaScript
│   ├── images/       # Images and media assets
│   └── libs/         # Third-party libraries
├── html/             # HTML page templates
│   ├── index.html
│   ├── about-us.html
│   ├── projects.html
│   ├── blog.html
│   ├── contact.html
│   └── ...
└── index.html        # Entry point (redirects to html/index.html)
```

## Getting Started

### Prerequisites

No build tools or package managers required. This is a static website that can be opened directly in a browser.

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Navigate to the project directory:
```bash
cd DaveWorksServices-1.0.0
```

3. Open `index.html` in your web browser or serve using a local web server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

4. Access the website at `http://localhost:8000`

### Development

To modify styles, edit the SCSS files in `assets/scss/` and compile them to CSS. The main stylesheet is located at `assets/scss/styles.scss`.

## Pages

- **Home** (`html/index.html`) - Landing page with services overview
- **About Us** (`html/about-us.html`) - Company information and team
- **Projects** (`html/projects.html`) - Portfolio and completed projects
- **Projects Detail** (`html/projects-detail.html`) - Individual project details
- **Blog** (`html/blog.html`) - News and articles
- **Blog Detail** (`html/blog-detail.html`) - Individual blog post
- **Contact** (`html/contact.html`) - Contact form and information
- **Privacy Policy** (`html/privacy-policy.html`) - Privacy policy page
- **Terms and Conditions** (`html/terms-and-conditions.html`) - Terms page
- **404** (`html/404.html`) - Error page

## Contact Information

- **Phone:** +250 796 518 171
- **Email:** davidk@daveworksservices.com

## Author

**Aime Igirimpuhwe**
- Email: igaimerca@gmail.com

## License
- Licensed under [MIT License](LICENSE)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
