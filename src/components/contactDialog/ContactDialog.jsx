"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";

export function ContactDialog() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    // For phone number, ensure it only accepts digits
    if (id === "phone" && value && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [id]: value,
    });

    // Clear error message for the current field
    setErrors({
      ...errors,
      [id]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last name is required.";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be between 10 and 15 digits.";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
      // Reset the form after submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="py-3 px-5 bg-white">
          <Send className="text-blue-600 text-4xl" />
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px]">
        <DialogHeader>
          <DialogTitle>Contact With Us</DialogTitle>
          <DialogDescription>
            Enter your details to contact us.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid grid-cols-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`col-span-3 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                placeholder="Enter your first name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="grid grid-cols-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={`col-span-3 ${
                  errors.lastName ? "border-red-500" : ""
                }`}
                placeholder="Enter your last name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid grid-cols-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`col-span-3 ${errors.email ? "border-red-500" : ""}`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="grid grid-cols-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`col-span-3 ${errors.phone ? "border-red-500" : ""}`}
                placeholder="Enter your phone number"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="message">Message</Label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder="Write your message here"
              rows="5"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message}</p>
            )}
          </div>
          <DialogFooter>
            <button
              type="submit"
              className="px-10 py-3 bg-blue-700 text-white rounded-md hover:bg-white hover:text-blue-700 shadow-md border"
            >
              Send
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
