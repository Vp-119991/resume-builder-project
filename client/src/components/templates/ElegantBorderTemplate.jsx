import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const ElegantBorderTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  // ✅ Same heading style everywhere
  const sectionHeading =
    "text-xl font-semibold mb-6 border-l-4 pl-3";

  return (
    <div className="max-w-5xl mx-auto bg-white shadow-lg border rounded-lg overflow-hidden">

      {/* Top Accent Border */}
      <div
        className="h-3 w-full"
        style={{ backgroundColor: accentColor }}
      ></div>

      <div className="p-10 text-gray-800">

        {/* HEADER */}
        <header className="mb-10 border-b pb-6 text-center">
          <h1 className="text-4xl font-bold tracking-wide">
            {data.personal_info?.full_name || "Your Name"}
          </h1>

          {data.personal_info?.profession && (
            <p
              className="text-lg mt-2 font-medium"
              style={{ color: accentColor }}
            >
              {data.personal_info.profession}
            </p>
          )}

          <div className="flex justify-center gap-6 flex-wrap text-sm text-zinc-700 mt-4">
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
              <div className="flex items-center gap-1 break-all">
                <Linkedin size={16} color={accentColor} />
                {data.personal_info.linkedin}
              </div>
            )}
            {data.personal_info?.website && (
              <div className="flex items-center gap-1 break-all">
                <Globe size={16} color={accentColor} />
                {data.personal_info.website}
              </div>
            )}
          </div>
        </header>

        {/* PROFESSIONAL SUMMARY */}
        {data.professional_summary && (
          <section className="mb-10">
            <h2
              className={sectionHeading}
              style={{ borderColor: accentColor }}
            >
              Professional Summary
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {data.professional_summary}
            </p>
          </section>
        )}

        {/* EXPERIENCE */}
        {data.experience?.length > 0 && (
          <section className="mb-10">
            <h2
              className={sectionHeading}
              style={{ borderColor: accentColor }}
            >
              Experience
            </h2>

            <div className="space-y-6">
              {data.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border rounded-md p-4 hover:shadow-md transition"
                >
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-lg">
                      {exp.position}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {formatDate(exp.start_date)} -{" "}
                      {exp.is_current
                        ? "Present"
                        : formatDate(exp.end_date)}
                    </span>
                  </div>

                  <p className="text-gray-600 mb-2">{exp.company}</p>

                  {exp.description && (
                    <div className="text-gray-700 whitespace-pre-line">
                      {exp.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* PROJECTS */}
        {data.project && data.project.length > 0 && (
          <section className="mb-10">
            <h2
              className={sectionHeading}
              style={{ borderColor: accentColor }}
            >
              Projects
            </h2>

            <div className="space-y-4">
              {data.project.map((proj, index) => (
                <div key={index} className="border rounded-md p-4">
                  <h3 className="font-semibold text-gray-800">
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

        {/* EDUCATION */}
        {data.education?.length > 0 && (
          <section className="mb-10">
            <h2
              className={sectionHeading}
              style={{ borderColor: accentColor }}
            >
              Education
            </h2>

            <div className="space-y-4">
              {data.education.map((edu, index) => (
                <div
                  key={index}
                  className="border rounded-md p-4"
                >
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-semibold">
                        {edu.degree}{" "}
                        {edu.field && `in ${edu.field}`}
                      </h3>
                      <p className="text-gray-600">
                        {edu.institution}
                      </p>
                      {edu.gpa && (
                        <p className="text-sm text-gray-500">
                          GPA: {edu.gpa}
                        </p>
                      )}
                    </div>

                    <span className="text-sm text-gray-500">
                      {formatDate(edu.graduation_date)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* SKILLS */}
        {data.skills?.length > 0 && (
          <section>
            <h2
              className={sectionHeading}
              style={{ borderColor: accentColor }}
            >
              Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {data.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-1 border rounded-full text-sm"
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
  );
};

export default ElegantBorderTemplate;
