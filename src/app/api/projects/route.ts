import { NextRequest, NextResponse } from 'next/server';
import { writeFile, readFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';

const PROJECTS_FILE = path.join(process.cwd(), 'data', 'projects.json');

// Ensure data directory exists
async function ensureDataDir() {
  try {
    const dataDir = path.join(process.cwd(), 'data');
    if (!existsSync(dataDir)) {
      await mkdir(dataDir, { recursive: true });
    }
  } catch (error) {
    console.error('Error ensuring data directory:', error);
  }
}

// Get all projects
export async function GET() {
    try {
        await ensureDataDir();

        if (!existsSync(PROJECTS_FILE)) {
            return NextResponse.json({ projects: [] });
        }

        const data = await readFile(PROJECTS_FILE, 'utf-8');
        const projects = JSON.parse(data);
        return NextResponse.json({ projects });
    } catch (error) {
        console.error('Error reading projects:', error);
        return NextResponse.json({ projects: [] });
    }
}

// Add new project
export async function POST(request: NextRequest) {
    try {
        await ensureDataDir();

        const body = await request.json();
        const { title, description, imageUrl, link, tags } = body;

        // Validate required fields
        if (!title || !imageUrl) {
            return NextResponse.json(
                { error: 'Title and image URL are required' },
                { status: 400 }
            );
        }

        // Read existing projects
        let projects = [];
        if (existsSync(PROJECTS_FILE)) {
            const data = await readFile(PROJECTS_FILE, 'utf-8');
            projects = JSON.parse(data);
        }

        // Add new project
        const newProject = {
            id: Date.now().toString(),
            title,
            description: description || '',
            imageUrl,
            link: link || '',
            tags: tags || [],
            createdAt: new Date().toISOString(),
        };

        projects.unshift(newProject);

        // Save to file
        await writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));

        return NextResponse.json({ success: true, project: newProject });
    } catch (error) {
        console.error('Error adding project:', error);
        return NextResponse.json(
            { error: 'Failed to add project' },
            { status: 500 }
        );
    }
}

// Delete project
export async function DELETE(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const id = searchParams.get('id');

        if (!id) {
            return NextResponse.json(
                { error: 'Project ID is required' },
                { status: 400 }
            );
        }

        if (!existsSync(PROJECTS_FILE)) {
            return NextResponse.json(
                { error: 'No projects found' },
                { status: 404 }
            );
        }

        const data = await readFile(PROJECTS_FILE, 'utf-8');
        let projects = JSON.parse(data);

        projects = projects.filter((p: any) => p.id !== id);

        await writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2));

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error deleting project:', error);
        return NextResponse.json(
            { error: 'Failed to delete project' },
            { status: 500 }
        );
    }
}
