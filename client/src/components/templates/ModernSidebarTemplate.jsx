import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernSidebarTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 shadow-lg rounded-lg overflow-hidden">
      <div className="flex">

        {/* Sidebar */}
        <aside className="w-1/3 bg-gray-100 p-8 flex flex-col gap-8">

          {/* Profile */}
          <div className="flex flex-col items-center text-center gap-3">
            {data.personal_info?.image && (
              <img
                src={
                  typeof data.personal_info.image === "string"
                    ? data.personal_info.image
                    : URL.createObjectURL(data.personal_info.image)
                }
                alt="Profile"
                className="w-28 h-28 object-cover rounded-full"
              />
            )}

            <h2 className="text-lg font-semibold">
              {data.personal_info?.full_name}
            </h2>

            {data.personal_info?.profession && (
              <p
                className="text-sm font-medium"
                style={{ color: accentColor }}
              >
                {data.personal_info.profession}
              </p>
            )}
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs font-semibold tracking-[0.25em] mb-4"
              style={{ color: accentColor }}
            >
              CONTACT
            </h3>

            <div className="space-y-3 text-sm text-zinc-700">

              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={14} color={accentColor} />
                  {data.personal_info.phone}
                </div>
              )}

              {data.personal_info?.email && (
  <div className="flex items-start gap-2">
    <Mail size={14} color={accentColor} className="shrink-0" />
    <span className="break-all">
      {data.personal_info.email}
    </span>
  </div>
)}

              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={14} color={accentColor} />
                  {data.personal_info.location}
                </div>
              )}

              {data.personal_info?.linkedin && (
                <div className="flex items-center gap-2 break-all">
                  <Linkedin size={14} color={accentColor} />
                  <a
                    href={data.personal_info.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {data.personal_info.linkedin}
                  </a>
                </div>
              )}

              {data.personal_info?.website && (
                <div className="flex items-center gap-2 break-all">
                  <Globe size={14} color={accentColor} />
                  <a
                    href={data.personal_info.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {data.personal_info.website}
                  </a>
                </div>
              )}

            </div>
          </div>

          {/* Skills */}
          {data.skills?.length > 0 && (
            <div>
              <h3
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                SKILLS
              </h3>

              <ul className="space-y-2 text-sm text-zinc-700">
                {data.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}

        </aside>

        {/* Main Content */}
        <main className="w-2/3 p-8 space-y-10">

          {/* Summary */}
          {data.professional_summary && (
            <section>
              <h3
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h3>

              <p className="text-sm text-zinc-700 leading-relaxed">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length > 0 && (
            <section>
              <h3
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                EXPERIENCE
              </h3>

              <div className="space-y-6">
                {data.experience.map((exp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-start">
                      <h4 className="font-semibold text-sm">
                        {exp.position}
                      </h4>

                      <span className="text-xs text-zinc-500">
                        {formatDate(exp.start_date)} -{" "}
                        {exp.is_current
                          ? "Present"
                          : formatDate(exp.end_date)}
                      </span>
                    </div>

                    <p className="text-sm text-zinc-600 mb-2">
                      {exp.company}
                    </p>

                    {exp.description && (
                      <p className="text-sm text-zinc-700 whitespace-pre-line">
                        {exp.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Projects */}
          {data.project?.length > 0 && (
            <section>
              <h3
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                PROJECTS
              </h3>

              <div className="space-y-6">
                {data.project.map((proj, index) => (
                  <div key={index}>
                    <h4 className="font-semibold text-sm">
                      {proj.name}
                    </h4>

                    {proj.type && (
                      <p
                        className="text-sm mt-1"
                        style={{ color: accentColor }}
                      >
                        {proj.type}
                      </p>
                    )}

                    {proj.description && (
                      <p className="text-sm text-zinc-700 mt-2">
                        {proj.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education?.length > 0 && (
            <section>
              <h3
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                EDUCATION
              </h3>

              <div className="space-y-5">
                {data.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-semibold text-sm">
                      {edu.degree}
                      {edu.field && ` in ${edu.field}`}
                    </p>

                    <p className="text-sm text-zinc-600">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-zinc-500">
                      {formatDate(edu.graduation_date)}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

        </main>
      </div>
    </div>
  );
};

export default ModernSidebarTemplate;
