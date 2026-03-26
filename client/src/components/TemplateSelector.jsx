import { Check, Layout } from 'lucide-react'
import React, { useState } from 'react'

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)

    const templates = [
        {
            id: "classic",
            name: "Classic",
            preview: "A clean, traditional resume format with clear sections and professional typography."
        },
        {
            id: "modern",
            name: "Modern",
            preview: "A contemporary layout with bold headings and a visually appealing design."
        },
        {
            id: "minimal",
            name: "Minimal",
            preview: "A simple, distraction-free layout focusing on content clarity."
        },
        {
            id: "minimal-image",
            name: "Minimal Image",
            preview: "Minimalistic layout with space for a profile image."
        },
        {
            id: "modern-sidebar",
            name: "Modern Sidebar",
            preview: "A modern resume with a sidebar for skills and contact details."
        },
        {
            id: "profile",
            name: "Profile Card",
            preview: "A card-style resume highlighting your profile at a glance."
        },
        {
            id: "timeline",
            name: "Timeline",
            preview: "A resume that presents your experience in a chronological timeline."
        },
        {
            id: "two-column",
            name: "Two Column",
            preview: "A two-column layout separating skills and experience for better readability."
        },
        {
            id: "creative-portfolio",
            name: "Creative Portfolio",
            preview: "A visually striking template ideal for creative professionals and designers."
        },
        {
            id: "skill-focused",
            name: "Skills Focused",
            preview: "Highlights your skills prominently, suitable for technical roles."
        },
        {
            id: "elegent-border",
            name: "Elegent Border",
            preview: "A layout for a balanced and elegant appearance."
        },
        {
            id: "modern-grid",
            name: "Modern-Grid",
            preview: "Modern dashboard-style resume with clean grid layout and structured sections."
        },
    ]

    return (
        <div className='relative'>
            <button onClick={()=> setIsOpen(!isOpen)} className='flex items-center gap-1 text-sm text-blue-600 bg-linear-to-br from-blue-50 to to-blue-100 ring-blue-300 hover:ring transition-all px-3 py-2 rounded-lg'>
                <Layout size={14} /><span className='max-sm:hidden'>Template</span>
            </button>
            {isOpen && (
                 <div className='absolute top-full w-64 p-3 mt-2 space-y-3 z-10 bg-white rounded-md border border-gray-200 shadow-sm max-h-80 overflow-y-auto'>
                    {templates.map((template)=>(
                        <div key={template.id} onClick={()=> {onChange(template.id); setIsOpen(false)}} className={`relative p-3 border rounded-md cursor-pointer transition-all ${selectedTemplate === template.id ? 
                            "border-blue-400 bg-blue-100"
                            : "border-gray-300 gover:border-gray-400 hover:bg-gray-100"
                        }`}>
                            {selectedTemplate === template.id && (
                                <div className='absolute top-2 right-2'>
                                    <div className='size-5 bg-blue-400 rounded-full flex-items-center justify-center'>
                                        <Check className='w-3 h-3 text-white'/>
                                    </div>
                                </div>
                            )}
                            <div className='space-y-1'>
                                <h4 className='font-medium text-gray-800'>{template.name}</h4>
                                <div className='mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic'>
                                    {template.preview}
                                </div>
                            </div>
                        </div>
                    ) )}

                </div>
            )}
        </div>
    );
};

export default TemplateSelector;
