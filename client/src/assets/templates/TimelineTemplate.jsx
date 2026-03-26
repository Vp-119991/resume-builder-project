import { Mail, Phone, MapPin } from "lucide-react";

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
    <div className="max-w-4xl mx-auto bg-white p-8 text-zinc-800">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold" style={{ color: accentColor }}>
          {data.personal_info?.full_name}
        </h1>
        <p className="text-gray-600">{data.personal_info?.profession}</p>
      </header>

      {/* Contact */}
      <div className="flex justify-center gap-6 mb-8 text-sm">
        {data.personal_info?.phone && (
          <div className="flex items-center gap-1">
            <Phone size={14} color={accentColor} />
            {data.personal_info.phone}
          </div>
        )}
        {data.personal_info?.email && (
          <div className="flex items-center gap-1">
            <Mail size={14} color={accentColor} />
            {data.personal_info.email}
          </div>
        )}
        {data.personal_info?.location && (
          <div className="flex items-center gap-1">
            <MapPin size={14} color={accentColor} />
            {data.personal_info.location}
          </div>
        )}
      </div>

      {/* Experience Timeline */}
      {data.experience && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4" style={{ color: accentColor }}>
            EXPERIENCE
          </h2>
          <div className="relative border-l-2 border-gray-200 ml-4">
            {data.experience.map((exp, i) => (
              <div key={i} className="mb-6 ml-6 relative">
                <span className="absolute -left-5 top-0 w-3 h-3 rounded-full bg-blue-500"></span>
                <h3 className="font-semibold">{exp.position}</h3>
                <p className="text-sm text-gray-500">
                  {formatDate(exp.start_date)} - {exp.is_current ? "Present" : formatDate(exp.end_date)}
                </p>
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

      {/* Projects, Education, Skills can be added similarly below */}
    </div>
  );
};

export default TimelineTemplate;
