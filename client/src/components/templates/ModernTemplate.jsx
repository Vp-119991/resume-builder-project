import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ModernTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  const profileImage =
    data.personal_info?.image &&
    (typeof data.personal_info.image === "string"
      ? data.personal_info.image
      : URL.createObjectURL(data.personal_info.image));

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden font-sans text-gray-800">
      
      {/* Accent strip */}
      <div
        className="h-2"
        style={{
          background: `linear-gradient(90deg, ${accentColor}, #00000020)`,
        }}
      />

      {/* Header */}
      <header className="px-10 pt-8 pb-6 flex flex-col gap-4">
        <div className="flex items-center gap-6">
          {profileImage && (
            <img
              src={profileImage}
              alt="Profile"
              className="w-28 h-28 rounded-2xl object-cover shadow-lg"
            />
          )}

          <div className="flex-1">
            <h1
              className="text-3xl font-bold tracking-tight"
              style={{ color: accentColor }}
            >
              {data.personal_info?.full_name || "Your Name"}
            </h1>

            {data.personal_info?.profession && (
              <p className="text-lg text-gray-600 mt-1">
                {data.personal_info.profession}
              </p>
            )}

            {/* Contact */}
            <div className="flex flex-wrap gap-5 mt-3 text-sm text-gray-600">
              {data.personal_info?.email && (
                <div className="flex items-center gap-2">
                  <Mail size={16} /> {data.personal_info.email}
                </div>
              )}
              {data.personal_info?.phone && (
                <div className="flex items-center gap-2">
                  <Phone size={16} /> {data.personal_info.phone}
                </div>
              )}
              {data.personal_info?.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={16} /> {data.personal_info.location}
                </div>
              )}
              {data.personal_info?.linkedin && (
                <div className="flex items-center gap-2 break-all">
                  <Linkedin size={16} /> {data.personal_info.linkedin}
                </div>
              )}
              {data.personal_info?.website && (
                <div className="flex items-center gap-2 break-all">
                  <Globe size={16} /> {data.personal_info.website}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="px-10 pb-10 space-y-10">

        {/* Summary */}
        {data.professional_summary && (
          <section>
            <h2
              className="text-xs font-semibold tracking-[0.25em] mb-4"
              style={{ color: accentColor }}
            >
              SUMMARY
            </h2>

            <p className="text-sm text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* Experience */}
        {data.experience?.length > 0 && (
          <section>
            <h2
              className="text-xs font-semibold tracking-[0.25em] mb-4"
              style={{ color: accentColor }}
            >
              EXPERIENCE
            </h2>

            <div className="space-y-6">
              {data.experience.map((exp, i) => (
                <div
                  key={i}
                  className="bg-gray-50 rounded-xl p-6 border-l-4 shadow-sm"
                  style={{ borderColor: accentColor }}
                >
                  <div className="flex justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-semibold text-sm">
                        {exp.position}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-xs text-gray-500">
                      {formatDate(exp.start_date)} –{" "}
                      {exp.is_current
                        ? "Present"
                        : formatDate(exp.end_date)}
                    </span>
                  </div>

                  {exp.description && (
                    <p className="mt-3 text-sm text-gray-700 whitespace-pre-line">
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
            <h2
              className="text-xs font-semibold tracking-[0.25em] mb-4"
              style={{ color: accentColor }}
            >
              PROJECTS
            </h2>

            <div className="space-y-6">
              {data.project.map((proj, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-sm">
                    {proj.name}
                  </h3>

                  {proj.type && (
                    <p
                      className="text-sm mt-1"
                      style={{ color: accentColor }}
                    >
                      {proj.type}
                    </p>
                  )}

                  {proj.description && (
                    <p className="text-sm text-gray-700 mt-2">
                      {proj.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Education & Skills */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* Education */}
          {data.education?.length > 0 && (
            <section>
              <h2
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                EDUCATION
              </h2>

              <div className="space-y-5">
                {data.education.map((edu, i) => (
                  <div key={i} className="flex justify-between gap-4">
                    <div>
                      <p className="font-semibold text-sm">
                        {edu.degree}
                        {edu.field && ` in ${edu.field}`}
                      </p>

                      <p className="text-sm text-gray-600">
                        {edu.institution}
                      </p>

                      {edu.gpa && (
                        <p className="text-xs text-gray-500">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>

                    <span className="text-xs text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Skills */}
          {data.skills?.length > 0 && (
            <section>
              <h2
                className="text-xs font-semibold tracking-[0.25em] mb-4"
                style={{ color: accentColor }}
              >
                SKILLS
              </h2>

              <div className="flex flex-wrap gap-3">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-4 py-1.5 text-sm rounded-full border bg-white"
                    style={{ borderColor: accentColor }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default ModernTemplate;
