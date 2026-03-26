import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import ModernSidebarTemplate from './templates/ModernSidebarTemplate'
import ProfileCardTemplate from './templates/ProfileCardTemplate'
import TimelineTemplate from './templates/TimelineTemplate'
import TwoColumnTemplate from './templates/TwoColumnTemplate'
import CreativePortfolioTemplate from './templates/CreativePortfolioTemplate'
import SkillsFocusedTemplate from './templates/SkillsFocusedTemplate'
import ModernGridTemplate from './templates/ModernGridTemplate'
import ElegantBorderTemplate from './templates/ElegantBorderTemplate'

const ResumePreview = ({data, template, accentColor, classes = ""}) => {

  const renderTemplate = ()=>{
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor}/>
      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor}/>
      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor}/>
      case "modern-sidebar":
        return <ModernSidebarTemplate data={data} accentColor={accentColor}/>
      case "profile":
        return <ProfileCardTemplate data={data} accentColor={accentColor}/>
      case "timeline":
        return <TimelineTemplate data={data} accentColor={accentColor}/>
      case "two-column":
        return <TwoColumnTemplate data={data} accentColor={accentColor}/>
      case "creative-portfolio":
        return <CreativePortfolioTemplate data={data} accentColor={accentColor}/>
      case "skill-focused":
        return <SkillsFocusedTemplate data={data} accentColor={accentColor}/>
      case "elegent-border":
        return <ElegantBorderTemplate data={data} accentColor={accentColor}/>
      case "modern-grid":
        return <ModernGridTemplate data={data} accentColor={accentColor}/>
    
      default:
        return <ClassicTemplate data={data} accentColor={accentColor}/>
    }
  }
  return ( 
    <div className='w-full bg-gray-100'>
        <div id='resume-preview' className={"border border-gray-200 print:shadow-none print:border-none" + classes}>
         {renderTemplate()}   
        </div>
      <style jsx>
        {`
        @page { 
        size: letter;
        margin: 0;
        }
        @media print{
        html, body {
              width: 8.Sin;
              height: 11in;
              overflow: hidden;
              }
        body *{
              visibility: hidden;
              }
        #resume-preview, #resume-preview * {
              visibility: visible;
              }
        #resume-preview {
              position: absolute;
              left:0,;
              top:0;
              width:100%;
              height:auto;
              margin: 0;
              padding: 0;
              box-shadow: none !important;
              border: none !important;
           }
        }
        `}
      </style>
    </div>
  );
};

export default ResumePreview;