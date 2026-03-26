import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const TwoColumnTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-5xl mx-auto bg-white text-zinc-800 shadow-lg rounded-lg p-8">
      <div className="grid grid-cols-12 gap-8">

        {/* ===== LEFT COLUMN ===== */}
        <div className="col-span-4 space-y-6 border-r pr-6">

          {/* Name & Profession */}
          <div>
            <h1
              className="text-3xl font-bold leading-tight"
              style={{ color: accentColor }}
            >
              {data.personal_info?.full_name || "Your Name"}
            </h1>

            <p className="text-sm tracking-wide uppercase text-gray-600">
              {data.personal_info?.profession || "Profession"}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2
              className="text-xl font-semibold mb-4"
                style={{ color: accentColor }}
            >
              CONTACT
            </h2>

            <ul className="space-y-2 text-sm">

              {data.personal_info?.phone && (
                <li className="flex items-center gap-2">
                  <Phone size={14} color={accentColor} />
                  <span>{data.personal_info.phone}</span>
                </li>
              )}

              {data.personal_info?.email && (
                <li className="flex items-center gap-2">
                  <Mail size={14} color={accentColor} />
                  <span>{data.personal_info.email}</span>
                </li>
              )}

              {data.personal_info?.location && (
                <li className="flex items-center gap-2">
                  <MapPin size={14} color={accentColor} />
                  <span>{data.personal_info.location}</span>
                </li>
              )}

              {data.personal_info?.linkedin && (
                <li className="flex items-center gap-2 break-all">
                  <Linkedin size={14} color={accentColor} />
                  <a
                    href={data.personal_info.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {data.personal_info.linkedin}
                  </a>
                </li>
              )}

              {data.personal_info?.website && (
                <li className="flex items-center gap-2 break-all">
                  <Globe size={14} color={accentColor} />
                  <a
                    href={data.personal_info.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {data.personal_info.website}
                  </a>
                </li>
              )}

            </ul>
          </div>

          {/* Skills */}
          {data.skills?.length > 0 && (
            <div>
              <h2
               className="text-xl font-semibold mb-4"
                style={{ color: accentColor }} >
                SKILLS
              </h2>

              <div className="flex flex-wrap gap-2">
                {data.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium rounded-full border"
                    style={{
                      borderColor: accentColor,
                      backgroundColor: `${accentColor}20`,
                      color: accentColor,
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ===== RIGHT COLUMN ===== */}
        <div className="col-span-8 space-y-6">

          {/* Summary */}
          {data.professional_summary && (
            <section>
              <h2
                className="text-xl font-semibold mb-4"
                style={{ color: accentColor }}
              >
                SUMMARY
              </h2>

              <p className="text-sm leading-relaxed text-zinc-700">
                {data.professional_summary}
              </p>
            </section>
          )}

          {/* Experience */}
          {data.experience?.length > 0 && (
            <section>
             <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                      EXPERIENCE
                    </h2>

              <div className="space-y-5">
                {data.experience.map((exp, i) => (
                  <div key={i} className="space-y-1">
                    <h3 className="font-semibold text-zinc-900">
                      {exp.position}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {formatDate(exp.start_date)} –{" "}
                      {exp.is_current
                        ? "Present"
                        : formatDate(exp.end_date)}
                    </p>

                    <p className="text-sm text-zinc-700 mb-1">
                      {exp.company}
                    </p>

                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700 space-y-1">
                        {exp.description
                          .split("\n")
                          .map((line, j) => (
                            <li key={j}>{line}</li>
                          ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {data.education?.length > 0 && (
            <section>
              <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                        EDUCATION
                    </h2>

              <div className="space-y-4 text-sm">
                {data.education.map((edu, i) => (
                  <div key={i}>
                    <p className="font-medium">
                      {edu.degree}
                    </p>

                    <p className="text-zinc-500">
                      {edu.institution}
                    </p>

                    <p className="text-xs text-zinc-400">
                      {formatDate(edu.graduation_date)}
                      {edu.gpa && ` • GPA: ${edu.gpa}`}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}


           {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                        PROJECTS
                    </h2>

                    <ul className="space-y-3 ">
                        {data.project.map((proj, index) => (
                            <div key={index} className="flex justify-between ">
                                <div>
                                    <li className="font-semibold text-gray-800">
                                        {proj.name}
                                    </li>

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
                            </div>
                        ))}
                    </ul>
                </section>
            )}

        </div>
      </div>
    </div>
  );
};

export default TwoColumnTemplate;
