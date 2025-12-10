"use client";

import { useState } from "react";

/**
 * Registration Form Section
 * Fully functional form with client-side validation
 * Floating card design over gradient background
 */
export default function RegistrationForm() {
    // Form state
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        jobTitle: "",
        company: "",
        email: "",
        phone: "",
        attendanceType: "",
        message: "",
    });

    // Form errors state
    const [errors, setErrors] = useState<Record<string, string>>({});

    // Submission state
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

    // Handle input changes
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Validate form
    const validateForm = () => {
        const newErrors: Record<string, string> = {};

        if (!formData.firstName.trim()) {
            newErrors.firstName = "First name is required";
        }

        if (!formData.lastName.trim()) {
            newErrors.lastName = "Last name is required";
        }

        if (!formData.jobTitle.trim()) {
            newErrors.jobTitle = "Job title is required";
        }

        if (!formData.company.trim()) {
            newErrors.company = "Company name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }

        if (!formData.attendanceType) {
            newErrors.attendanceType = "Please select attendance type";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setIsSubmitting(true);

        try {
            // Send to API route
            const response = await fetch("/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus("success");
                setFormData({
                    firstName: "",
                    lastName: "",
                    jobTitle: "",
                    company: "",
                    email: "",
                    phone: "",
                    attendanceType: "",
                    message: "",
                });
            } else {
                setSubmitStatus("error");
            }
        } catch {
            setSubmitStatus("error");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="register" className="relative py-20 overflow-hidden">
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[var(--primary-gold)]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[var(--primary-gold)]/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

            <div className="container-custom relative z-10">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[var(--primary-gold)]/20 border border-[var(--primary-gold)]/30 rounded-full mb-6">
                            <span className="text-sm font-medium text-[var(--primary-gold)]">
                                Secure Your Spot
                            </span>
                        </div>
                        <h2 className="heading-section text-white mb-4">
                            Register <span className="text-gradient">Now</span>
                        </h2>
                        <p className="text-slate-400 max-w-2xl mx-auto">
                            Join us at the 4th Annual Future Banks Summit & Awards. Fill out the
                            form below to register as a delegate, sponsor, or partner.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
                        {submitStatus === "success" ? (
                            // Success Message
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg
                                        className="w-10 h-10 text-green-500"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M5 13l4 4L19 7"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    Registration Successful!
                                </h3>
                                <p className="text-slate-600 mb-6">
                                    Thank you for registering. We&apos;ll be in touch shortly with more
                                    details about the summit.
                                </p>
                                <button
                                    onClick={() => setSubmitStatus("idle")}
                                    className="btn-primary"
                                >
                                    Register Another Person
                                </button>
                            </div>
                        ) : (
                            // Registration Form
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="firstName" className="form-label">
                                            First Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className={`form-input ${errors.firstName ? "border-red-500" : ""
                                                }`}
                                            placeholder="Enter your first name"
                                        />
                                        {errors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.firstName}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="lastName" className="form-label">
                                            Last Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className={`form-input ${errors.lastName ? "border-red-500" : ""
                                                }`}
                                            placeholder="Enter your last name"
                                        />
                                        {errors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.lastName}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Job Title & Company */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="jobTitle" className="form-label">
                                            Job Title *
                                        </label>
                                        <input
                                            type="text"
                                            id="jobTitle"
                                            name="jobTitle"
                                            value={formData.jobTitle}
                                            onChange={handleChange}
                                            className={`form-input ${errors.jobTitle ? "border-red-500" : ""
                                                }`}
                                            placeholder="e.g. Chief Digital Officer"
                                        />
                                        {errors.jobTitle && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.jobTitle}
                                            </p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="form-label">
                                            Company *
                                        </label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            value={formData.company}
                                            onChange={handleChange}
                                            className={`form-input ${errors.company ? "border-red-500" : ""
                                                }`}
                                            placeholder="Enter your company name"
                                        />
                                        {errors.company && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.company}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Email & Phone */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="email" className="form-label">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`form-input ${errors.email ? "border-red-500" : ""
                                                }`}
                                            placeholder="your@email.com"
                                        />
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="form-label">
                                            Phone Number *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className={`form-input ${errors.phone ? "border-red-500" : ""
                                                }`}
                                            placeholder="+966 XX XXX XXXX"
                                        />
                                        {errors.phone && (
                                            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                                        )}
                                    </div>
                                </div>

                                {/* Attendance Type */}
                                <div>
                                    <label htmlFor="attendanceType" className="form-label">
                                        Attendance Type *
                                    </label>
                                    <select
                                        id="attendanceType"
                                        name="attendanceType"
                                        value={formData.attendanceType}
                                        onChange={handleChange}
                                        className={`form-select ${errors.attendanceType ? "border-red-500" : ""
                                            }`}
                                    >
                                        <option value="">Select your attendance type</option>
                                        <option value="delegate">Delegate</option>
                                        <option value="sponsor">Sponsor</option>
                                        <option value="partner">Partner</option>
                                    </select>
                                    {errors.attendanceType && (
                                        <p className="text-red-500 text-sm mt-1">
                                            {errors.attendanceType}
                                        </p>
                                    )}
                                </div>

                                {/* Message */}
                                <div>
                                    <label htmlFor="message" className="form-label">
                                        Message (Optional)
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="form-textarea"
                                        placeholder="Any additional information or questions..."
                                        rows={4}
                                    />
                                </div>

                                {/* Error Message */}
                                {submitStatus === "error" && (
                                    <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                                        <p className="text-red-600 text-sm">
                                            There was an error submitting your registration. Please try
                                            again.
                                        </p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full py-4 text-lg disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg
                                                className="w-5 h-5 animate-spin"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                />
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                />
                                            </svg>
                                            Processing...
                                        </>
                                    ) : (
                                        <>
                                            Complete Registration
                                            <svg
                                                className="w-5 h-5"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                                />
                                            </svg>
                                        </>
                                    )}
                                </button>

                                {/* Privacy Note */}
                                <p className="text-center text-sm text-slate-500">
                                    By registering, you agree to our privacy policy and terms of
                                    service.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
