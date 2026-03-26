import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react";

const SkillsFocusedTemplate = ({ data, accentColor }) => {
  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month] = dateStr.split("-");
    return new Date(year, month - 1).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden p-8 text-zinc-800 font-sans">
      {/* ===== HERO + CONTACT ===== */}
      <div className="flex flex-col md:flex-row md:justify-between items-center mb-8 gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-bold" style={{ color: accentColor }}>
            {data.personal_info?.full_name || "Your Name"}
          </h1>
          <p className="text-gray-600 uppercase tracking-wide">{data.personal_info?.profession || "Profession"}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-sm text-zinc-700">
          {data.personal_info?.email && (
            <div className="flex items-center gap-1"><Mail size={16} color={accentColor} /> {data.personal_info.email}</div>
          )}
          {data.personal_info?.phone && (
            <div className="flex items-center gap-1"><Phone size={16} color={accentColor} /> {data.personal_info.phone}</div>
          )}
          {data.personal_info?.location && (
            <div className="flex items-center gap-1"><MapPin size={16} color={accentColor} /> {data.personal_info.location}</div>
          )}
          {data.personal_info?.linkedin && (
            <div className="flex items-center gap-1"><Linkedin size={16} color={accentColor} /> {data.personal_info.linkedin}</div>
          )}
          {data.personal_info?.website && (
            <div className="flex items-center gap-1"><Globe size={16} color={accentColor} /> {data.personal_info.website}</div>
          )}
        </div>
      </div>

      {/* ===== SUMMARY ===== */}
      {data.professional_summary && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2" style={{ color: accentColor }}>PROFESSIONAL SUMMARY</h2>
          <p className="text-sm text-zinc-700 leading-relaxed">{data.professional_summary}</p>
        </section>
      )}

      {/* ===== SKILLS ===== */}
      {data.skills?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>SKILLS</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {data.skills.map((skill, i) => (
              <div
                key={i}
                className="text-center py-2 px-3 rounded-xl text-sm font-medium shadow-sm"
                style={{ backgroundColor: accentColor + "20", color: accentColor }}
              >
                {skill}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ===== EXPERIENCE ===== */}
      {data.experience?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>EXPERIENCE</h2>
          <div className="space-y-4">
            {data.experience.map((exp, i) => (
              <div key={i} className="border-l-4 border-gray-200 pl-4 relative">
                
                <p className="font-semibold">{exp.position} @ {exp.company}</p>
                <span className="text-xs text-gray-500">
                  {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </span>
                {exp.description && <p className="text-sm text-zinc-700 mt-1">{exp.description}</p>}
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
        <section>
          <h2 className="text-xl font-semibold mb-3" style={{ color: accentColor }}>EDUCATION</h2>
          <div className="space-y-4">
            {data.education.map((edu, i) => (
              <div key={i} className="border-l-4 border-gray-200 pl-4 relative">
                
                <p className="font-semibold">{edu.degree} {edu.field && `in ${edu.field}`}</p>
                <p className="text-sm text-zinc-700">{edu.institution}</p>
                <span className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</span>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default SkillsFocusedTemplate;
