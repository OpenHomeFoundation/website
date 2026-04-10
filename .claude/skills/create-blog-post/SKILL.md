---
name: create-blog-post
description: Use this if the user wants to convert a blog post from Google Docs markdown to the format used in the Open Home Foundation website.
---

# Create Blog Post

Convert a draft markdown file into a properly formatted Open Home Foundation blog post.

## Usage

Place your draft blog post markdown file in the project root `create-blog-post/` directory (e.g., `/workspaces/ohf-website/create-blog-post/`), then run:

```shell
/create-blog-post
```

## What This Skill Does

Automates conversion of a draft markdown file with metadata into a production-ready Open Home Foundation blog post:

- Extracts metadata (blog title, subtitle, author, author role, publish date, Social/OpenGraph fields)
- Removes "# Blog notes/preparations" section and lines with ☝️ emoji
- Converts `### **– Summary break / Read more –**` to `<!--more-->`
- Processes hero image and any additional images
- Converts external links to HTML `<a>` tags with `target="_blank"`
- Formats content (removes bold from headings, fixes link references)
- Creates properly formatted blog post in `src/blog/` with Eleventy front matter

## Required Files in `create-blog-post/` Directory

1. **Draft markdown file** (any .md filename)
2. **`art.webp`** - Hero/OG image (required)
3. **`image2.png`, `image3.png`, etc.** - Additional images (optional, will be converted to WebP)

## Draft File Format

```markdown
# Metadata

**Blog title:** Your Blog Title

**Subtitle:** A short subtitle or tagline for the post

**Author:** Author Name

**Author role:** Role or Title

**Publish date:** DD-MM-YYYY

**Social/OpenGraph title** (Usually same as the blog title, visibility mostly limited to 50-60 characters)**:**
A short title.

**Social/OpenGraph description** (120-158 characters):
Influences SEO ranking. Include the main keyword, describe what readers will find, and give them a clear reason to click.

# Blog notes/preparations

☝️ Any lines with the pointer emoji can be removed during processing

# Blog content

![][image1]

Your intro paragraph here...

### **– Summary break / Read more –**

Rest of content...
```

**Notes:**

- The `![][image1]` reference should appear at the start of the "# Blog content" section. This will be replaced with the `art.webp` hero image.
- URL slug is optional and will be auto-generated from the blog title if not provided in metadata
- Lines beginning with ☝️ emoji are instructions and will be removed during processing
- The `### **– Summary break / Read more –**` marker will be converted to `<!--more-->`

## Output

Creates a production-ready blog post at:

- `src/blog/slug.md` - The formatted blog post
- `src/assets/images/blog/slug/art.webp` - OG/hero image (moved from `create-blog-post/`)
- `src/assets/images/blog/slug/image2.webp`, `image3.webp`, etc. - Additional images (converted from PNGs)

## Conversion Process

### 1. Parse Metadata

- Extract blog title, subtitle, author, author role, publish date, Social/OpenGraph title and description
- Auto-generate URL slug from blog title (lowercase, hyphens for spaces, remove special characters)
- Remove "# Blog notes/preparations" section and all content under it (up to "# Blog content")
- Remove all lines that start with ☝️ emoji (instruction lines)
- Convert `### **– Summary break / Read more –**` marker to `<!--more-->`

### 2. Process Images

**Hero image (`art.webp`):**

- Move to `src/assets/images/blog/slug/art.webp`
- Replace `![][image1]` reference in "# Blog content" section with: `<img src="/assets/images/blog/slug/art.webp" alt="Blog Title" style="border: 0;box-shadow: none;">`
- CRITICAL: Use double quotes for all HTML attributes (prevents breaking on apostrophes in alt text)
- Alt text uses the Social/OpenGraph title or blog title
- No wrapper tags (no `<p>` tag)
- Set `og_image` front matter to `/assets/images/blog/slug/art.webp`

**Additional images (if any):**

- Find `image2.png`, `image3.png`, etc. in `create-blog-post/` directory
- Convert to WebP: `cwebp -resize 900 0 -q 85 input.png -o output.webp`
- Move to `src/assets/images/blog/slug/`
- Update references in content

### 3. Transform Links

**External links** (different domains/subdomains):

- Convert to: `<a href="URL" target="_blank" rel="noopener">text</a>`

**Internal links** (`www.openhomefoundation.org` and `openhomefoundation.org` only):

- Keep as Markdown links: `[text](/path)`

### 4. Clean Content

- **Headings**: Remove bold formatting (`## **Title**` → `## Title`)
- **Heading levels**: If content starts with H1 (`#`), demote all headings one level (content should start at H2)
- **Backticks**: Strip erroneous `\`` characters (preserve code blocks/inline code)

### 5. Build Blog Post

- Create `src/blog/slug.md`
- Eleventy front matter with these fields:
  - `layout: post`
  - `title` (quoted string)
  - `subtitle` (quoted string, if provided)
  - `description` (from Social/OpenGraph description)
  - `og_image` (path to hero image)
  - `date` (YYYY-MM-DD format)
  - `author` (quoted string)
  - `author_role` (quoted string, if provided)
- Hero image (no wrapper)
- Intro paragraph
- `<!--more-->` tag after first paragraph
- Remaining content

## Example

1. Place in project root `create-blog-post/`:
   - `draft-partner-update.md` - Your draft file
   - `art.webp` - OG/hero image
   - `image2.png`, `image3.png` - Additional images (if any)
2. Run `/create-blog-post`

This would create:

- `src/blog/partner-update.md`
- `src/assets/images/blog/partner-update/art.webp`
- `src/assets/images/blog/partner-update/image2.webp`, `image3.webp` (if additional images exist)

## Important Notes

**Image references:**

- Draft: `![][image1]` (at start of "# Blog content" section) → Output: `art.webp` hero image
- Draft: `![][image2]` → Look for `image2.png`, convert to `image2.webp`
- Draft: `![][image3]` → Look for `image3.png`, convert to `image3.webp`

**Requirements:**

- Hero image reference should appear at the start of the "# Blog content" section
- `cwebp` tool required for PNG→WebP conversion (install: `sudo apt-get install -y webp`)

**Content processing:**

- Remove "# Blog notes/preparations" section entirely
- Remove all lines starting with ☝️ emoji (instruction lines)
- Convert `### **– Summary break / Read more –**` to `<!--more-->`

**Output format:**

- Filename: `slug.md` (no date prefix — Eleventy uses the `date` front matter field)
- Image directory: `src/assets/images/blog/slug/`

**Link handling:**

- Only `www.openhomefoundation.org` and `openhomefoundation.org` stay as Markdown links
- All other domains/subdomains → HTML `<a>` tags with `target="_blank" rel="noopener"`
