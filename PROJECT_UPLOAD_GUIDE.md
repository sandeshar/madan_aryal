# Project Upload System

## Overview
This portfolio includes a complete project management system that allows you to upload and manage your projects dynamically.

## Features
✅ Upload project images locally
✅ Add project details (title, description, link, tags)
✅ View all projects in admin panel
✅ Delete projects
✅ Projects persist across server restarts
✅ Responsive design with dark mode

## Usage

### 1. Start Development Server
```bash
npm run dev
```

### 2. Access Admin Panel
Navigate to: `http://localhost:3000/admin`

### 3. Add a Project
1. Click "Add Project" button
2. Fill in the form:
   - **Title** (required): Your project name
   - **Description** (optional): Brief description
   - **Upload Image**: Click to upload image from your computer (max 5MB)
   - **Image URL** (required): Auto-filled after upload, or paste external URL
   - **Project Link** (optional): GitHub repo or live site URL
   - **Tags** (optional): Comma-separated tags (e.g., "React, Next.js, TypeScript")
3. Click "Add Project"

### 4. View Projects
Visit: `http://localhost:3000` and scroll to the Projects section

### 5. Delete Projects
Go to `/admin` and click the "Delete" button on any project card

## File Structure
```
src/
  app/
    api/
      projects/route.ts    # CRUD API for projects
      upload/route.ts      # Image upload handler
    admin/page.tsx         # Admin interface
  components/
    projects.tsx           # Projects display component

data/
  projects.json            # Project data storage

public/
  uploads/                 # Uploaded images
```

## API Endpoints

### GET /api/projects
Returns all projects

### POST /api/projects
Add a new project
```json
{
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "link": "string",
  "tags": ["string"]
}
```

### DELETE /api/projects?id={projectId}
Delete a project by ID

### POST /api/upload
Upload an image file (multipart/form-data)
Returns: `{ "success": true, "url": "/uploads/filename.jpg" }`

## Troubleshooting

### Images not uploading?
- Check file size (max 5MB)
- Ensure file is an image type (jpg, png, gif, etc.)
- Check console for error messages

### Projects not saving?
- Ensure `/data` directory exists
- Check server console for errors
- Verify `projects.json` file is writable

### Can't access /admin?
- Ensure dev server is running
- Clear browser cache
- Check for console errors

## Production Deployment

When deploying to production, consider:
1. Using a cloud storage service (AWS S3, Cloudinary) for images
2. Using a database (MongoDB, PostgreSQL) instead of JSON files
3. Adding authentication to protect the admin panel
4. Implementing image optimization and compression
