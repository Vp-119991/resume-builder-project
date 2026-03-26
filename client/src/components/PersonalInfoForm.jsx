import {
  BriefcaseBusiness,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import React, { useState } from "react";

const PersonalInfoForm = ({ data, onChange, removeBackground, setRemoveBackground }) => {
  
  // ✅ Validation state (1st code se)
  const [errors, setErrors] = useState({});

  const [showProfessionSuggestions, setShowProfessionSuggestions] = useState(false);
  const [showEmailSuggestions, setShowEmailSuggestions] = useState(false);

  const professionSuggestions = [
    "Frontend Developer","Backend Developer","Full Stack Developer",
    "Software Engineer","Web Developer","UI/UX Designer",
    "Data Analyst","Machine Learning Engineer","AI Engineer",
    "DevOps Engineer","Database Administrator","Project Manager",
    "Student","Fresher","Intern"
  ];

  const emailDomains = ["gmail.com","outlook.com","yahoo.com","icloud.com","mbit.edu.in"];

  // ✅ Validation function (1st code)
  const validateField = (field, value) => {
    let error = "";

    if (field === "full_name" && !value.trim()) {
      error = "Full Name is required";
    }

    if (field === "email") {
      if (!value.trim()) error = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Enter a valid email";
      }
    }

    if (field === "phone") {
      if (!value.trim()) error = "Phone is required";
      else if (!/^[0-9]{10}$/.test(value)) {
        error = "Enter valid 10 digit number";
      }
    }

    setErrors(prev => ({ ...prev, [field]: error }));
  };

  // ✅ handleChange (2nd code + validation)
  const handleChange = (field, value) => {
    if (field === "location") {
      value = value
        .replace(/\s+/g, " ")
        .replace(/\s*,\s*/g, ", ")
        .trim()
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
    }

    onChange({ ...data, [field]: value });
    validateField(field, value); // 🔥 added
  };

  const fields = [
    { key: "full_name", label: "Full Name", icon: User, type: "text", required: true },
    { key: "email", label: "Email Address", icon: Mail, type: "text", required: true },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel", required: true },
    { key: "location", label: "Location (City, Country)", icon: MapPin, type: "text" },
    { key: "profession", label: "Profession", icon: BriefcaseBusiness, type: "text" },
    { key: "linkedin", label: "LinkedIn Profile", icon: Linkedin, type: "url" },
    { key: "website", label: "Personal Website", icon: Globe, type: "url" },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
      <p className="text-sm text-gray-600">Get started with personal information</p>

      {/* IMAGE UPLOAD */}
      <div className='flex items-center gap-2'>
        <label>
          {data.image ? (
            <img
              src={typeof data.image === 'string' ? data.image : URL.createObjectURL(data.image)}
              alt="User Image"
              className='w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80'
            />
          ) : (
            <div className='inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer'>
              <User className='size-10 p-2.5 border rounded-full' />
              Upload user image
            </div>
          )}
          <input type="file" accept='image/png, image/jpeg' className='hidden' onChange={(e) => handleChange("image", e.target.files[0])} />
        </label>

      {data.image && (
  <div className='flex flex-col gap-1 text-sm mt-2'>
    <p>Remove Background</p>
    <label className='relative inline-flex items-center cursor-pointer'>
      <input 
        type="checkbox" 
        className="sr-only" 
        checked={removeBackground} 
        onChange={() => setRemoveBackground(prev => !prev)} 
      />
      {/* Slider background */}
      <div className={`w-12 h-6 rounded-full transition-colors duration-200 ${removeBackground ? "bg-blue-600" : "bg-gray-300"}`}></div>
      {/* Circle */}
      <span className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ease-in-out ${removeBackground ? "translate-x-6" : ""}`}></span>
    </label>
  </div>
)}
          
      </div>

      {/*  FORM FIELDS */}
      {fields.map((field) => {
        const Icon = field.icon;

        return (
          <div key={field.key} className="space-y-1 mt-5 relative">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <Icon className="size-4" />
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            <input
              type={field.type}
              value={data[field.key] || ""}
              onChange={(e) => {
                handleChange(field.key, e.target.value);

                if (field.key === "profession") setShowProfessionSuggestions(true);
                if (field.key === "email") setShowEmailSuggestions(e.target.value.includes("@"));
              }}
              onBlur={(e) => validateField(field.key, e.target.value)}
              className={`w-full px-3 py-2 border rounded-lg text-sm
                ${errors[field.key] ? "border-red-500" : "border-gray-300"}`}
            />

            {/*  ERROR MESSAGE */}
            {errors[field.key] && (
              <p className="text-xs text-red-500">{errors[field.key]}</p>
            )}

            {/* PROFESSION DROPDOWN */}
            {field.key === "profession" && showProfessionSuggestions && (
              <div className="absolute w-full bg-white border mt-1">
                {professionSuggestions
                  .filter(p => p.toLowerCase().includes((data.profession || "").toLowerCase()))
                  .map(p => (
                    <div
                      key={p}
                      onMouseDown={() => {
                        handleChange("profession", p);
                        setShowProfessionSuggestions(false);
                      }}
                    >
                      {p}
                    </div>
                  ))}
              </div>
            )}

            {/* EMAIL DROPDOWN */}
            {field.key === "email" && showEmailSuggestions && (
              <div className="absolute w-full bg-white border mt-1">
                {emailDomains.map(domain => (
                  <div
                    key={domain}
                    onMouseDown={() => {
                      const name = (data.email || "").split("@")[0];
                      handleChange("email", `${name}@${domain}`);
                      setShowEmailSuggestions(false);
                    }}
                  >
                    {(data.email || "").split("@")[0]}@{domain}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PersonalInfoForm;