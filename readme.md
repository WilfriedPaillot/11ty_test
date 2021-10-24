# Firsts steps with Eleventy 

## Process

```bash
npm init
npm i @11ty/eleventy
```

Add .gitgnore with node_modules exclusion
Add .eleventyignore for readme.md exclusion during eleventy build

Create .eleventy.js specific config file of 11ty
    
- Define input folder

Add _includes folder for templates
- first template base.njk  

Add an another standard folder _data in src
- Create site.json with title and descrition data

Modifying base.njk to add conditionnals features for title and meta description

---

Install navigation plugin
```bash
npm install @11ty/eleventy-navigation --save-dev
```
Add variable and declaration in .eleventy.js