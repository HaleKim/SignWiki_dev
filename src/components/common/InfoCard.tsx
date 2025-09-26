import React from 'react';
import BaseCard from '@/components/base/BaseCard';
import BaseButton from '@/components/base/BaseButton';
import VideoPlaceholder from '@/components/common/VideoPlaceholder';

interface InfoCardProps {
  category: string;
  title: string;
  summary: string;
}

const InfoCard: React.FC<InfoCardProps> = ({ category, title, summary }) => {
  return (
    <BaseCard className="flex flex-col md:flex-row gap-6 items-start">
      <div className="w-full md:w-1/3">
        <VideoPlaceholder />
      </div>
      <div className="w-full md:w-2/3">
        <span className="text-sm font-semibold text-primary">{category}</span>
        <h3 className="text-xl font-bold text-text-primary mt-1 mb-2">{title}</h3>
        <p className="text-text-secondary">{summary}</p>
        <div className="mt-4">
          <BaseButton>자세히 보기</BaseButton>
        </div>
      </div>
    </BaseCard>
  );
};

export default InfoCard;
