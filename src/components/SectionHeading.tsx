import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  centered = false,
  light = false,
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className={`heading-lg ${light ? 'text-white' : ''}`}>
        {title.split(' ').map((word, index) => (
          <React.Fragment key={index}>
            {index > 0 && ' '}
            {index === title.split(' ').length - 1 ? (
              <span className="text-neon-green">{word}</span>
            ) : (
              word
            )}
          </React.Fragment>
        ))}
      </h2>
      {subtitle && <p className={`subheading mt-4${centered ? ' mx-auto' : ''}`}>{subtitle}</p>}
      <div className={`h-1 w-24 bg-neon-green mt-6 rounded-full${centered ? ' mx-auto' : ''}`}></div>
    </div>
  );
};

export default SectionHeading;