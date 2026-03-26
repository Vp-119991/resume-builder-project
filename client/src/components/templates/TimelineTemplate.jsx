import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const TimelineTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-8 text-zinc-800 font-sans">

      {/* ===== HEADER ===== */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name || "Your Name"}
        </h1>
        <p className="text-gray-600">
          {data.personal_info?.profession || "Profession"}
        </p>
      </header>

      {/* ===== CONTACT ===== */}
      <div className="flex justify-center gap-6 mb-10 text-sm flex-wrap text-zinc-600">

        {data.personal_info?.phone && (
          <div className="flex items-center gap-2">
            <Phone size={14} color={accentColor} />
            <span>{data.personal_info.phone}</span>
          </div>
        )}

        {data.personal_info?.email && (
          <div className="flex items-center gap-2">
            <Mail size={14} color={accentColor} />
            <span>{data.personal_info.email}</span>
          </div>
        )}

        {data.personal_info?.location && (
          <div className="flex items-center gap-2">
            <MapPin size={14} color={accentColor} />
            <span>{data.personal_info.location}</span>
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

      {/* ===== SUMMARY ===== */}
      {data.professional_summary && (
        <TimelineSection title="SUMMARY" accentColor={accentColor}>
          <TimelineItem accentColor={accentColor}>
            <p className="text-sm leading-relaxed text-zinc-700">
              {data.professional_summary}
            </p>
          </TimelineItem>
        </TimelineSection>
      )}

      {/* ===== EXPERIENCE ===== */}
      {data.experience?.length > 0 && (
        <TimelineSection title="EXPERIENCE" accentColor={accentColor}>
          {data.experience.map((exp, i) => (
            <TimelineItem key={i} accentColor={accentColor}>
              <div className="flex justify-between items-start">
                <h3 className="font-semibold">{exp.position}</h3>
                <span className="text-xs text-zinc-500">
                  {formatDate(exp.start_date)} –{" "}
                  {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </span>
              </div>

              <p className="text-sm" style={{ color: accentColor }}>
                {exp.company}
              </p>

              {exp.description && (
                <ul className="list-disc list-inside text-sm text-zinc-700 mt-2 space-y-1">
                  {exp.description.split("\n").map((line, j) => (
                    <li key={j}>{line}</li>
                  ))}
                </ul>
              )}
            </TimelineItem>
          ))}
        </TimelineSection>
      )}

       {/* Projects */}
            {data.project && data.project.length > 0 && (
                <section className="mb-6">
                    <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
                        PROJECTS
                    </h2>

                    <ul className="space-y-3 ">
                        {data.project.map((proj, index) => (
                            <div key={index} className="flex justify-between items-start border-l-3 border-gray-300 pl-6">
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
      {/* ===== EDUCATION ===== */}
      {data.education?.length > 0 && (
        <TimelineSection title="EDUCATION" accentColor={accentColor}>
          {data.education.map((edu, i) => (
            <TimelineItem key={i} accentColor={accentColor}>

              <h3 className="font-semibold">
                {edu.degree} {edu.field && `in ${edu.field}`}
              </h3>

              <p className="text-sm text-zinc-700">
                {edu.institution}
              </p>
              <p className="text-xs text-zinc-500 flex items-center gap-2">
                {formatDate(edu.graduation_date)}

                {edu.gpa && (
                  <span
                    className="px-2 py-0.5 rounded text-[10px] font-medium"
                    style={{ backgroundColor: accentColor + "20", color: accentColor }}
                  >
                    GPA {edu.gpa}
                  </span>
                )}
              </p>

            </TimelineItem>
          ))}
        </TimelineSection>
      )}


      {/* ===== SKILLS ===== */}
      {data.skills?.length > 0 && (
        <TimelineSection title="SKILLS" accentColor={accentColor}>
          <TimelineItem accentColor={accentColor}>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-6 gap-y-2">
              {data.skills.map((skill, i) => (
                <div key={i} className="text-sm text-zinc-800">
                  • {skill}
                </div>
              ))}
            </div>
          </TimelineItem>
        </TimelineSection>
      )}

    </div>
  );
};

/* ===== REUSABLE COMPONENTS ===== */

const TimelineSection = ({ title, accentColor, children }) => (
  <section className="mb-10">
    <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
      {title}
    </h2>
    <div
      className="relative border-l-2 ml-4"
      style={{ borderColor: accentColor + "55" }}
    >
      {children}
    </div>
  </section>
);

const TimelineItem = ({ accentColor, children }) => (
  <div className="relative ml-6 mb-8">
    <span
      className="absolute -left-5 top-1 w-3 h-3 rounded-full"
      style={{ backgroundColor: accentColor }}
    />
    {children}
  </div>
);

export default TimelineTemplate;
