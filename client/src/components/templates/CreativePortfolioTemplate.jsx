import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const CreativePortfolioTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // ✅ Common Heading Style
  const sectionHeading =
    "text-xl font-semibold mb-4 uppercase tracking-wide";

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-8 text-zinc-800">

      {/* ===== HERO ===== */}
      <div className="text-center mb-10">
        {data.personal_info?.image && (
          <div
            className="mx-auto w-36 h-36 rounded-full overflow-hidden border-4"
            style={{ borderColor: accentColor }}
          >
            <img
              src={
                typeof data.personal_info.image === "string"
                  ? data.personal_info.image
                  : URL.createObjectURL(data.personal_info.image)
              }
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold mt-4" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>

        <p className="text-gray-600 uppercase mb-4">
          {data.personal_info?.profession || "Profession"}
        </p>

        <div className="flex justify-center gap-6 flex-wrap text-sm text-zinc-700 mt-2">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1">
              <Mail size={16} color={accentColor} />
              {data.personal_info.email}
            </div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1">
              <Phone size={16} color={accentColor} />
              {data.personal_info.phone}
            </div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1">
              <MapPin size={16} color={accentColor} />
              {data.personal_info.location}
            </div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1">
              <Linkedin size={16} color={accentColor} />
              {data.personal_info.linkedin}
            </div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1">
              <Globe size={16} color={accentColor} />
              {data.personal_info.website}
            </div>
          )}
        </div>
      </div>

      {/* ===== SUMMARY ===== */}
      {data.professional_summary && (
        <section className="mb-8">
          <h2 className={sectionHeading} style={{ color: accentColor }}>
            SUMMARY
          </h2>
          <p className="text-sm text-zinc-700 leading-relaxed">
            {data.professional_summary}
          </p>
        </section>
      )}

      {/* ===== SKILLS ===== */}
      {data.skills?.length > 0 && (
        <section className="mb-8">
          <h2 className={sectionHeading} style={{ color: accentColor }}>
            SKILLS
          </h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((skill, i) => (
              <span
                key={i}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: accentColor + "33",
                  color: accentColor,
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* ===== EXPERIENCE ===== */}
      {data.experience?.length > 0 && (
        <section className="mb-8">
          <h2 className={sectionHeading} style={{ color: accentColor }}>
            EXPERIENCE
          </h2>

          <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-0.5 before:bg-gray-200">
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-6 relative pl-6">
                <span
                  className="absolute -left-4 top-1 w-3 h-3 rounded-full"
                  style={{ backgroundColor: accentColor }}
                ></span>

                <h3 className="font-semibold">
                  {exp.position} @ {exp.company}
                </h3>

                <span className="text-xs text-gray-500">
                  {formatDate(exp.start_date)} -{" "}
                  {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </span>

                {exp.description && (
                  <p className="text-sm text-zinc-700 mt-2">
                    {exp.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== PROJECTS ===== */}
      {data.project?.length > 0 && (
        <section className="mb-8">
          <h2 className={sectionHeading} style={{ color: accentColor }}>
            PROJECTS
          </h2>

          <div className="space-y-5">
            {data.project.map((proj, index) => (
              <div key={index}>
                <h3 className="font-semibold text-gray-900">
                  {proj.name}
                </h3>

                {proj.type && (
                  <p
                    className="text-sm font-medium mt-1"
                    style={{ color: accentColor }}
                  >
                    {proj.type}
                  </p>
                )}

                {proj.description && (
                  <p className="text-gray-600 mt-2">
                    {proj.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== EDUCATION ===== */}
      {data.education?.length > 0 && (
        <section className="mb-8">
          <h2 className={sectionHeading} style={{ color: accentColor }}>
            EDUCATION
          </h2>

          <div className="space-y-4 text-sm">
            {data.education.map((edu, i) => (
              <div key={i}>
                <p className="font-medium">{edu.degree}</p>
                <p className="text-zinc-500">{edu.institution}</p>
                <p className="text-xs text-zinc-400">
                  {formatDate(edu.graduation_date)}
                  {edu.gpa && ` • GPA: ${edu.gpa}`}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default CreativePortfolioTemplate;
