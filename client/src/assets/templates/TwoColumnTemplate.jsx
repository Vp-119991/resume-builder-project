import { Mail, Phone, MapPin } from "lucide-react";

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
      <div className="grid grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Name & Profession */}
          <div>
            <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
              {data.personal_info?.full_name}
            </h1>
            <p className="text-gray-600 uppercase">{data.personal_info?.profession}</p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>CONTACT</h2>
            <ul className="space-y-1 text-sm">
              {data.personal_info?.phone && <li><Phone size={14} /> {data.personal_info.phone}</li>}
              {data.personal_info?.email && <li><Mail size={14} /> {data.personal_info.email}</li>}
              {data.personal_info?.location && <li><MapPin size={14} /> {data.personal_info.location}</li>}
            </ul>
          </div>

          {/* Skills */}
          {data.skills && (
            <div>
              <h2 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>SKILLS</h2>
              <ul className="space-y-1 text-sm">
                {data.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Summary */}
          {data.professional_summary && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>SUMMARY</h2>
              <p className="text-zinc-700">{data.professional_summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>EXPERIENCE</h2>
              <div className="space-y-4">
                {data.experience.map((exp, i) => (
                  <div key={i} className="border-l-4 pl-4 border-gray-300">
                    <h3 className="font-semibold">{exp.position}</h3>
                    <p className="text-xs text-gray-500">{formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}</p>
                    <p className="text-sm text-zinc-700">{exp.company}</p>
                    {exp.description && (
                      <ul className="list-disc list-inside text-sm text-zinc-700">
                        {exp.description.split("\n").map((line, j) => (
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
          {data.education && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>EDUCATION</h2>
              <ul className="space-y-2 text-sm">
                {data.education.map((edu, i) => (
                  <li key={i}>
                    <p className="font-semibold">{edu.degree}</p>
                    <p className="text-gray-700">{edu.institution}</p>
                    <span className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Projects */}
          {data.project && (
            <section>
              <h2 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>PROJECTS</h2>
              <ul className="space-y-2 text-sm">
                {data.project.map((proj, i) => (
                  <li key={i}>
                    <p className="font-semibold">{proj.name}</p>
                    <p className="text-zinc-700">{proj.description}</p>
                  </li>
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
