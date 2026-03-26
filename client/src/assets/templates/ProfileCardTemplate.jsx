import { Mail, Phone, MapPin } from "lucide-react";

const ProfileCardTemplate = ({ data, accentColor }) => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-xl overflow-hidden">
      {/* Header Card */}
      <div className="bg-linear-to-r from-blue-100 to-white p-6 flex flex-col items-center">
        {data.personal_info?.image && (
          <img
            src={typeof data.personal_info.image === "string" ? data.personal_info.image : URL.createObjectURL(data.personal_info.image)}
            alt="Profile"
            className="w-32 h-32 object-cover rounded-full border-4 border-white"
          />
        )}
        <h1 className="text-2xl font-bold mt-4" style={{ color: accentColor }}>{data.personal_info?.full_name}</h1>
        <p className="text-gray-600 uppercase">{data.personal_info?.profession}</p>
      </div>

      {/* Contact */}
      <div className="flex justify-center gap-6 mt-4 mb-6 text-sm">
        {data.personal_info?.phone && <div className="flex items-center gap-1"><Phone size={14} /> {data.personal_info.phone}</div>}
        {data.personal_info?.email && <div className="flex items-center gap-1"><Mail size={14} /> {data.personal_info.email}</div>}
        {data.personal_info?.location && <div className="flex items-center gap-1"><MapPin size={14} /> {data.personal_info.location}</div>}
      </div>

      {/* Main Sections */}
      <div className="p-6 space-y-6">
        {/* Summary */}
        {data.professional_summary && <p className="text-zinc-700">{data.professional_summary}</p>}

        {/* Experience */}
        {data.experience && (
          <div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: accentColor }}>Experience</h3>
            <ul className="space-y-3">
              {data.experience.map((exp, i) => (
                <li key={i}>
                  <p className="font-semibold">{exp.position} @ {exp.company}</p>
                  <p className="text-xs text-gray-500">{exp.start_date} - {exp.is_current ? "Present" : exp.end_date}</p>
                  {exp.description && <p className="text-sm text-zinc-700">{exp.description}</p>}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Skills */}
        {data.skills && (
          <div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: accentColor }}>Skills</h3>
            <div className="flex flex-wrap gap-2">
              {data.skills.map((skill, i) => (
                <span key={i} className="bg-gray-200 text-gray-700 px-2 py-1 rounded">{skill}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileCardTemplate;
