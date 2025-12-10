import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

/**
 * Registration API Route
 * Handles form submissions and saves to JSON file
 * Can be extended to send emails or save to Google Sheets
 */

// Define the registration data type
interface RegistrationData {
    firstName: string;
    lastName: string;
    jobTitle: string;
    company: string;
    email: string;
    phone: string;
    attendanceType: string;
    message: string;
    submittedAt: string;
    id: string;
}

// Path to the JSON data file
const DATA_FILE = path.join(process.cwd(), "data", "registrations.json");

// Ensure data directory exists
function ensureDataDirectory() {
    const dataDir = path.join(process.cwd(), "data");
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
    }
}

// Generate a unique ID for the registration
function generateId(): string {
    return `REG-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;
}

export async function POST(request: NextRequest) {
    try {
        // Parse the request body
        const body = await request.json();

        // Validate required fields
        const requiredFields = [
            "firstName",
            "lastName",
            "jobTitle",
            "company",
            "email",
            "phone",
            "attendanceType",
        ];

        for (const field of requiredFields) {
            if (!body[field] || body[field].trim() === "") {
                return NextResponse.json(
                    { error: `Missing required field: ${field}` },
                    { status: 400 }
                );
            }
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: "Invalid email format" },
                { status: 400 }
            );
        }

        // Ensure data directory and file exist
        ensureDataDirectory();

        // Read existing registrations
        const existingData = fs.readFileSync(DATA_FILE, "utf-8");
        const registrations: RegistrationData[] = JSON.parse(existingData);

        // Check for duplicate email
        const existingEmail = registrations.find(
            (reg) => reg.email.toLowerCase() === body.email.toLowerCase()
        );
        if (existingEmail) {
            return NextResponse.json(
                { error: "This email is already registered" },
                { status: 409 }
            );
        }

        // Create new registration entry
        const newRegistration: RegistrationData = {
            id: generateId(),
            firstName: body.firstName.trim(),
            lastName: body.lastName.trim(),
            jobTitle: body.jobTitle.trim(),
            company: body.company.trim(),
            email: body.email.trim().toLowerCase(),
            phone: body.phone.trim(),
            attendanceType: body.attendanceType,
            message: body.message?.trim() || "",
            submittedAt: new Date().toISOString(),
        };

        // Add to registrations array
        registrations.push(newRegistration);

        // Save updated registrations
        fs.writeFileSync(DATA_FILE, JSON.stringify(registrations, null, 2));

        // Log registration (in production, this could send an email notification)
        console.log("New registration:", {
            id: newRegistration.id,
            name: `${newRegistration.firstName} ${newRegistration.lastName}`,
            email: newRegistration.email,
            type: newRegistration.attendanceType,
        });

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: "Registration successful",
                registrationId: newRegistration.id,
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        return NextResponse.json(
            { error: "Failed to process registration" },
            { status: 500 }
        );
    }
}

// GET endpoint to retrieve registrations (for admin purposes)
export async function GET() {
    try {
        ensureDataDirectory();
        const data = fs.readFileSync(DATA_FILE, "utf-8");
        const registrations = JSON.parse(data);

        return NextResponse.json({
            success: true,
            count: registrations.length,
            registrations,
        });
    } catch (error) {
        console.error("Error fetching registrations:", error);
        return NextResponse.json(
            { error: "Failed to fetch registrations" },
            { status: 500 }
        );
    }
}
