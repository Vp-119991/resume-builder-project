import { Loader2, Sparkles } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
  const { token } = useSelector((state) => state.auth);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateSummary = async () => {
    // ✅ Proper empty check
    if (!data || (typeof data === "string" && data.trim() === "")) {
      toast.error("Please write something first");
      return;
    }

    const prompt = `Enhance this professional summary for a resume:\n\n${data}`;
    const url = `https://chat.openai.com/?q=${encodeURIComponent(prompt)}`;

    try {
      setIsGenerating(true);

      // Copy prompt to clipboard for fallback
      await navigator.clipboard.writeText(prompt);

      // Open ChatGPT in new tab
      window.open(url, "_blank");

      toast.success("Opened ChatGPT! Prompt copied to clipboard ✅");
    } catch (err) {
      window.open("https://chat.openai.com/", "_blank");
      toast.error("Copy failed. Paste manually.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-500">
            Add summary for your resume here
          </p>
        </div>

        <button
          title="Opens ChatGPT to improve your summary. Copy the result and paste it back here."
          onClick={generateSummary}
          disabled={isGenerating}
          className="flex items-center gap-2 px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded hover:bg-purple-200 transition-colors disabled:opacity-50"
        >
          {isGenerating ? (
            <>
              <Loader2 className="size-4 animate-spin" />
              Opening...
            </>
          ) : (
            <>
              <Sparkles className="size-4" />
              Enhance in ChatGPT
            </>
          )}
        </button>
      </div>

      {/* Textarea */}
      <div className="mt-6">
        <textarea
          value={data || ""}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full p-3 border text-sm border-gray-300 rounded-lg focus:ring focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
          placeholder={`Write a compelling professional summary that highlights your key strengths and career objectives...
✔ Add achievements
✔ Add years of experience
✔ Add career goal`}
        />
        <p className="text-xs text-gray-500 max-w-4/5 mx-auto text-center mt-1">
          Tip: Keep it concise (3-4 sentences) and focus on your most relevant achievements and skills.
        </p>
      </div>
    </div>
  );
};

export default ProfessionalSummaryForm;