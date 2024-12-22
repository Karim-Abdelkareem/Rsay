"use client";
import { useRef, useState } from "react";
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
import { useTranslations } from "next-intl";
import emailjs from "@emailjs/browser";

export function ContactDialog() {
  const t = useTranslations("ContactDialog");
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    role: "",
    site: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "phone" && value && !/^\d*$/.test(value)) {
      return;
    }

    setFormData({
      ...formData,
      [id]: value,
    });

    setErrors({
      ...errors,
      [id]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = t("name-required");
    if (!formData.site.trim()) newErrors.site = t("site-required");
    if (!formData.role.trim()) newErrors.role = t("position-required");
    if (!formData.email.trim()) {
      newErrors.email = t("email-required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t("phone-required");
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number must be between 10 and 15 digits.";
    }
    if (!formData.message.trim()) newErrors.message = t("message-required");

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form Submitted:", formData);
      emailjs
        .sendForm("service_bkoi6bt", "template_i6qv5d3", form.current, {
          publicKey: "sWk2snuALe_DfFFLw",
        })
        .then(
          () => {
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      // Reset the form after submission
      setFormData({
        firstName: "",
        email: "",
        phone: "",
        role: "",
        site: "",
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
      <DialogContent className="sm:max-w-[800px] ">
        <DialogHeader>
          <DialogTitle>{t("contact")}</DialogTitle>
          <DialogDescription>{t("enter-details")}</DialogDescription>
        </DialogHeader>
        <form ref={form} onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid grid-cols-2">
              <Label htmlFor="firstName">{t("name")}</Label>
              <Input
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={`col-span-3 ${
                  errors.firstName ? "border-red-500" : ""
                }`}
                placeholder={t("name-placeholder")}
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="grid grid-cols-2">
              <Label htmlFor="phone">{t("phone")}</Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`col-span-3 ${errors.phone ? "border-red-500" : ""}`}
                placeholder={t("phone-placeholder")}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <div>
              <Label htmlFor="email">{t("email")}</Label>
              <Input
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`col-span-3 ${errors.email ? "border-red-500" : ""}`}
                placeholder={t("email-placeholder")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <div className="grid grid-cols-2">
              <Label htmlFor="site">{t("site")}</Label>
              <Input
                id="site"
                value={formData.site}
                onChange={handleChange}
                className={`col-span-3 ${errors.site ? "border-red-500" : ""}`}
                placeholder={t("site-placeholder")}
              />
              {errors.site && (
                <p className="text-red-500 text-sm">{errors.site}</p>
              )}
            </div>
            <div className="grid grid-cols-2">
              <Label htmlFor="role">{t("position")}</Label>
              <Input
                id="role"
                value={formData.role}
                onChange={handleChange}
                className={`col-span-3 ${errors.role ? "border-red-500" : ""}`}
                placeholder={t("position-placeholder")}
              />
              {errors.role && (
                <p className="text-red-500 text-sm">{errors.role}</p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 items-center gap-4">
            <Label htmlFor="message">{t("message")}</Label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              className={`w-full border rounded-md p-2 ${
                errors.message ? "border-red-500" : ""
              }`}
              placeholder={t("message-placeholder")}
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
              {t("send")}
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
