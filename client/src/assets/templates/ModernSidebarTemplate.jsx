import { Mail, Phone, MapPin } from "lucide-react";

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
        <aside className="w-1/3 bg-gray-100 p-6 flex flex-col items-center gap-6">
          {data.personal_info?.image && (
            <img
              src={
                typeof data.personal_info.image === "string"
                  ? data.personal_info.image
                  : URL.createObjectURL(data.personal_info.image)
              }
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full"
            />
          )}
          <h2 className="text-xl font-bold">{data.personal_info?.full_name}</h2>
          <p className="text-sm text-gray-600 uppercase">{data.personal_info?.profession}</p>

          {/* Contact */}
          <div className="space-y-2 w-full">
            {data.personal_info?.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone size={14} color={accentColor} />
                {data.personal_info.phone}
              </div>
            )}
            {data.personal_info?.email && (
              <div className="flex items-center gap-2 text-sm">
                <Mail size={14} color={accentColor} />
                {data.personal_info.email}
              </div>
            )}
            {data.personal_info?.location && (
              <div className="flex items-center gap-2 text-sm">
                <MapPin size={14} color={accentColor} />
                {data.personal_info.location}
              </div>
            )}
          </div>

          {/* Skills */}
          {data.skills && (
            <div className="w-full">
              <h3 className="text-sm font-semibold mb-2" style={{ color: accentColor }}>
                SKILLS
              </h3>
              <ul className="space-y-1 text-sm">
                {data.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          )}
        </aside>

        {/* Main Content */}
        <main className="w-2/3 p-6">
          {/* Summary */}
          {data.professional_summary && (
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                SUMMARY
              </h3>
              <p className="text-zinc-700">{data.professional_summary}</p>
            </section>
          )}

          {/* Experience */}
          {data.experience && (
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                EXPERIENCE
              </h3>
              <div className="space-y-4">
                {data.experience.map((exp, i) => (
                  <div key={i} className="border-l-4 pl-4 border-zinc-300">
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{exp.position}</h4>
                      <span className="text-xs text-gray-500">
                        {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                      </span>
                    </div>
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

          {/* Projects */}
          {data.project && (
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                PROJECTS
              </h3>
              <ul className="space-y-3">
                {data.project.map((proj, i) => (
                  <li key={i} className="bg-gray-50 p-3 rounded">
                    <p className="font-semibold">{proj.name}</p>
                    <p className="text-sm text-zinc-700">{proj.description}</p>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Education */}
          {data.education && (
            <section className="mb-6">
              <h3 className="text-lg font-semibold mb-2" style={{ color: accentColor }}>
                EDUCATION
              </h3>
              <ul className="space-y-3">
                {data.education.map((edu, i) => (
                  <li key={i}>
                    <p className="font-semibold">{edu.degree}</p>
                    <p className="text-sm text-zinc-700">{edu.institution}</p>
                    <span className="text-xs text-gray-500">{formatDate(edu.graduation_date)}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </main>
      </div>
    </div>
  );
};

export default ModernSidebarTemplate;
